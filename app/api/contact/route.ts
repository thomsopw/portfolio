import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and message are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Get recipient email from environment variable, fallback to default
    const recipientEmail = process.env.CONTACT_EMAIL || process.env.RESEND_FROM_EMAIL || 'contact@perfectpixels.com';

    // Initialize Resend (only when API is called, not at module load)
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send email using Resend
    const { data: emailData, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: recipientEmail,
      replyTo: data.email,
      subject: `New Contact Form Submission from ${data.name}`,
      html: generateContactEmailHTML(data),
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    console.log('Contact form submission sent:', emailData?.id);

    return NextResponse.json(
      { 
        success: true,
        message: 'Your message has been sent successfully!' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to process contact form submission' },
      { status: 500 }
    );
  }
}

function generateContactEmailHTML(data: any): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { 
            font-family: Arial, sans-serif; 
            line-height: 1.6; 
            color: #333; 
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header { 
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
            color: white; 
            padding: 20px; 
            border-radius: 8px 8px 0 0; 
          }
          .content { 
            background: #f9f9f9; 
            padding: 20px; 
            border-radius: 0 0 8px 8px; 
          }
          .field { 
            margin-bottom: 15px; 
          }
          .label { 
            font-weight: 600; 
            color: #667eea;
            display: block;
            margin-bottom: 5px;
          }
          .value {
            background: white;
            padding: 10px;
            border-radius: 4px;
            border-left: 3px solid #667eea;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>New Contact Form Submission</h1>
        </div>
        <div class="content">
          <div class="field">
            <span class="label">Name:</span>
            <div class="value">${escapeHtml(data.name)}</div>
          </div>
          <div class="field">
            <span class="label">Email:</span>
            <div class="value">${escapeHtml(data.email)}</div>
          </div>
          ${data.projectType ? `
          <div class="field">
            <span class="label">Project Type:</span>
            <div class="value">${escapeHtml(data.projectType)}</div>
          </div>
          ` : ''}
          ${data.budget ? `
          <div class="field">
            <span class="label">Budget Range:</span>
            <div class="value">${escapeHtml(data.budget)}</div>
          </div>
          ` : ''}
          <div class="field">
            <span class="label">Message:</span>
            <div class="value">${escapeHtml(data.message).replace(/\n/g, '<br>')}</div>
          </div>
        </div>
      </body>
    </html>
  `;
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

