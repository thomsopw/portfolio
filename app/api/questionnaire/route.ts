import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validate required fields
    if (!data.businessName || !data.contactName || !data.email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Here you can:
    // 1. Save to a database
    // 2. Send an email notification
    // 3. Send to a CRM/webhook
    // 4. Store in a file
    
    // For now, we'll just log it and return success
    // In production, you'd want to:
    // - Save to database (e.g., MongoDB, PostgreSQL)
    // - Send email notification (e.g., using Resend, SendGrid)
    // - Or integrate with a service like Zapier/Make.com
    
    console.log('Questionnaire Submission:', {
      businessName: data.businessName,
      contactName: data.contactName,
      email: data.email,
      submittedAt: data.submittedAt,
    });

    // Example: Send email notification (uncomment and configure)
    /*
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'onboarding@perfectpixels.com',
        to: 'contact@perfectpixels.com',
        subject: `New Client Questionnaire: ${data.businessName}`,
        html: generateEmailHTML(data),
      }),
    });
    */

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

// Helper function to generate email HTML (optional)
function generateEmailHTML(data: any): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
          .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
          .section { margin-bottom: 20px; }
          .section-title { font-weight: bold; color: #667eea; margin-bottom: 10px; }
          .field { margin-bottom: 8px; }
          .label { font-weight: 600; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Client Questionnaire Submission</h1>
          </div>
          <div class="content">
            <div class="section">
              <div class="section-title">THE BASICS</div>
              <div class="field"><span class="label">Business Name:</span> ${data.businessName}</div>
              <div class="field"><span class="label">Contact Name:</span> ${data.contactName}</div>
              <div class="field"><span class="label">Email:</span> ${data.email}</div>
              <div class="field"><span class="label">Phone:</span> ${data.phone || 'N/A'}</div>
              <div class="field"><span class="label">Current Website:</span> ${data.currentWebsite || 'N/A'}</div>
            </div>
            <div class="section">
              <div class="section-title">LOOK & FEEL</div>
              <div class="field"><span class="label">Brand Colors:</span> ${data.brandColors || 'N/A'}</div>
              <div class="field"><span class="label">Vibe:</span> ${data.adjectives || 'N/A'}</div>
            </div>
            <div class="section">
              <div class="section-title">FUNCTIONALITY</div>
              <div class="field"><span class="label">Features:</span> ${data.features.join(', ') || 'None'}</div>
            </div>
            <div class="section">
              <div class="section-title">TIMELINE & BUDGET</div>
              <div class="field"><span class="label">Deadline:</span> ${data.deadline || 'Not specified'}</div>
              <div class="field"><span class="label">Budget:</span> ${data.budget || 'Not specified'}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}
