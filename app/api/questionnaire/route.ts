import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validate required fields
    if (!data.businessName || !data.contactName || !data.email) {
      return NextResponse.json(
        { error: 'Missing required fields: businessName, contactName, and email are required' },
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
      subject: `New Client Questionnaire: ${data.businessName}`,
      html: generateEmailHTML(data),
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    console.log('Questionnaire submission sent:', emailData?.id);

    return NextResponse.json(
      { 
        success: true,
        message: 'Questionnaire submitted successfully' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing questionnaire:', error);
    return NextResponse.json(
      { error: 'Failed to submit questionnaire' },
      { status: 500 }
    );
  }
}

// Helper function to generate email HTML
function generateEmailHTML(data: any): string {
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
          .section { 
            margin-bottom: 20px; 
            background: white;
            padding: 15px;
            border-radius: 4px;
            border-left: 3px solid #667eea;
          }
          .section-title { 
            font-weight: bold; 
            color: #667eea; 
            margin-bottom: 10px;
            font-size: 16px;
            text-transform: uppercase;
          }
          .field { 
            margin-bottom: 8px; 
          }
          .label { 
            font-weight: 600; 
            color: #555;
            display: inline-block;
            min-width: 150px;
          }
          .value {
            color: #333;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>New Client Questionnaire Submission</h1>
        </div>
        <div class="content">
          <div class="section">
            <div class="section-title">THE BASICS</div>
            <div class="field"><span class="label">Business Name:</span> <span class="value">${escapeHtml(data.businessName)}</span></div>
            <div class="field"><span class="label">Contact Name:</span> <span class="value">${escapeHtml(data.contactName)}</span></div>
            <div class="field"><span class="label">Email:</span> <span class="value">${escapeHtml(data.email)}</span></div>
            <div class="field"><span class="label">Phone:</span> <span class="value">${escapeHtml(data.phone || 'N/A')}</span></div>
            <div class="field"><span class="label">Current Website:</span> <span class="value">${escapeHtml(data.currentWebsite || 'N/A')}</span></div>
          </div>
          <div class="section">
            <div class="section-title">LOOK & FEEL</div>
            <div class="field"><span class="label">Brand Colors:</span> <span class="value">${escapeHtml(data.brandColors || 'N/A')}</span></div>
            <div class="field"><span class="label">Vibe/Adjectives:</span> <span class="value">${escapeHtml(data.adjectives || 'N/A')}</span></div>
          </div>
          <div class="section">
            <div class="section-title">COMPETITORS & INSPIRATION</div>
            <div class="field"><span class="label">Competitors:</span> <span class="value">${escapeHtml(data.competitors || 'N/A')}</span></div>
            <div class="field"><span class="label">Inspiration:</span> <span class="value">${escapeHtml(data.inspiration || 'N/A')}</span></div>
          </div>
          <div class="section">
            <div class="section-title">TARGET AUDIENCE & MESSAGE</div>
            <div class="field"><span class="label">Target Audience:</span> <span class="value">${escapeHtml(data.targetAudience || 'N/A')}</span></div>
            <div class="field"><span class="label">Key Message:</span> <span class="value">${escapeHtml(data.keyMessage || 'N/A')}</span></div>
          </div>
          <div class="section">
            <div class="section-title">FUNCTIONALITY</div>
            <div class="field"><span class="label">Features:</span> <span class="value">${data.features && data.features.length > 0 ? escapeHtml(data.features.join(', ')) : 'None'}</span></div>
            <div class="field"><span class="label">Other Features:</span> <span class="value">${escapeHtml(data.otherFeatures || 'N/A')}</span></div>
            <div class="field"><span class="label">Content Ready:</span> <span class="value">${escapeHtml(data.contentReady || 'N/A')}</span></div>
          </div>
          <div class="section">
            <div class="section-title">TIMELINE & BUDGET</div>
            <div class="field"><span class="label">Deadline:</span> <span class="value">${escapeHtml(data.deadline || 'Not specified')}</span></div>
            <div class="field"><span class="label">Budget:</span> <span class="value">${escapeHtml(data.budget || 'Not specified')}</span></div>
            <div class="field"><span class="label">Hosting Access:</span> <span class="value">${escapeHtml(data.hostingAccess || 'N/A')}</span></div>
          </div>
          ${data.submittedAt ? `
          <div class="section">
            <div class="field"><span class="label">Submitted At:</span> <span class="value">${new Date(data.submittedAt).toLocaleString()}</span></div>
          </div>
          ` : ''}
        </div>
      </body>
    </html>
  `;
}

function escapeHtml(text: string): string {
  if (!text) return '';
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return String(text).replace(/[&<>"']/g, (m) => map[m]);
}
