import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  const targetEmail = process.env.NOTIFICATION_EMAIL || 'shohanitpoint@gmail.com';

  try {
    const body = await request.json();
    const { name, email, service, details, company, website, budget, timeline } = body;

    const message = details || body.message || '';

    // Validation
    if (!name || !email || (!message && !service)) {
      return NextResponse.json(
        { error: 'Name, email, and project details are required.' },
        { status: 400 }
      );
    }

    console.log(`--- NEW INQUIRY RECEIVED FOR ${targetEmail} ---`);
    console.log({
      name,
      email,
      company: company || 'N/A',
      website: website || 'N/A',
      service: service || 'N/A',
      budget: budget || 'N/A',
      timeline: timeline || 'N/A',
      message,
      timestamp: new Date().toISOString(),
    });
    console.log('-------------------------------------------');

    let emailSent = false;
    let emailErrorMsg = '';

    // 1. Try sending via Resend if RESEND_API_KEY exists
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const { data, error } = await resend.emails.send({
          from: 'Squarespace Portfolio <onboarding@resend.dev>',
          to: [targetEmail],
          replyTo: email,
          subject: `⚡ New Project Inquiry from ${name} (${service || 'Squarespace Design'})`,
          html: `
            <div style="font-family: Arial, sans-serif; padding: 24px; color: #111827; max-width: 600px; border: 1px solid #E5E7EB; border-radius: 12px; background-color: #ffffff;">
              <h2 style="color: #0F766E; margin-top: 0;">New Squarespace Project Inquiry</h2>
              <p style="font-size: 14px; color: #4B5563;">You received a new lead from your website portfolio contact form.</p>
              
              <hr style="border: 0; border-top: 1px solid #E5E7EB; margin: 20px 0;" />
              
              <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                <tr><td style="padding: 8px 0; font-weight: bold; width: 140px; color: #374151;">Client Name:</td><td style="color: #111827;">${name}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td><td><a href="mailto:${email}" style="color: #0F766E;">${email}</a></td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Company:</td><td style="color: #111827;">${company || 'N/A'}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Current Website:</td><td>${website ? `<a href="${website}" target="_blank" style="color: #0F766E;">${website}</a>` : 'N/A'}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Service Needed:</td><td style="color: #111827;">${service || 'N/A'}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Budget Range:</td><td style="color: #111827;">${budget || 'N/A'}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Timeline:</td><td style="color: #111827;">${timeline || 'N/A'}</td></tr>
              </table>

              <hr style="border: 0; border-top: 1px solid #E5E7EB; margin: 20px 0;" />

              <h4 style="margin: 0 0 8px 0; color: #111827;">Project Brief / Message:</h4>
              <div style="background-color: #F9FAFB; padding: 16px; border-radius: 8px; border-left: 4px solid #0F766E; font-size: 14px; color: #374151; white-space: pre-wrap;">${message || 'No additional details provided.'}</div>

              <hr style="border: 0; border-top: 1px solid #E5E7EB; margin: 24px 0 12px 0;" />
              <p style="font-size: 12px; color: #9CA3AF; margin: 0;">Sent automatically from your Squarespace Design Portfolio Website.</p>
            </div>
          `,
        });

        if (error) {
          console.error('Resend returned an error:', error);
          emailErrorMsg = error.message;
        } else {
          emailSent = true;
          console.log('Resend email dispatched successfully:', data);
        }
      } catch (err: any) {
        console.error('Resend Exception:', err);
        emailErrorMsg = err?.message || 'Failed to dispatch via Resend';
      }
    }

    // 2. Try Web3Forms if WEB3FORMS_ACCESS_KEY exists and Resend hasn't sent
    if (!emailSent && process.env.WEB3FORMS_ACCESS_KEY) {
      try {
        const formResponse = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            access_key: process.env.WEB3FORMS_ACCESS_KEY,
            subject: `⚡ New Project Inquiry from ${name}`,
            from_name: 'Portfolio Contact Form',
            to_email: targetEmail,
            name,
            email,
            company: company || 'N/A',
            website: website || 'N/A',
            service: service || 'N/A',
            budget: budget || 'N/A',
            timeline: timeline || 'N/A',
            message,
          }),
        });

        const web3Data = await formResponse.json();
        if (formResponse.ok && web3Data.success) {
          emailSent = true;
          console.log('Web3Forms email dispatched successfully!');
        } else {
          console.error('Web3Forms returned error:', web3Data);
          if (!emailErrorMsg) emailErrorMsg = web3Data.message || 'Web3Forms submission failed';
        }
      } catch (err: any) {
        console.error('Web3Forms Exception:', err);
      }
    }

    if (emailSent) {
      return NextResponse.json({
        success: true,
        message: 'Your inquiry has been sent to shohanitpoint@gmail.com! I will review your requirements and follow up within 24 hours.',
      });
    }

    // If no API key was configured or both email providers failed, return clear guidance
    if (!process.env.RESEND_API_KEY && !process.env.WEB3FORMS_ACCESS_KEY) {
      return NextResponse.json({
        success: true,
        message: 'Inquiry received and logged! Note: Please set RESEND_API_KEY in Environment Variables to receive email alerts at shohanitpoint@gmail.com.',
        warning: 'RESEND_API_KEY missing in environment variables.',
      });
    }

    return NextResponse.json(
      {
        error: `Could not deliver email to ${targetEmail}. ${emailErrorMsg || 'Please verify your RESEND_API_KEY in Settings.'}`,
      },
      { status: 500 }
    );
  } catch (error: any) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: error?.message || 'An unexpected error occurred.' },
      { status: 500 }
    );
  }
}
