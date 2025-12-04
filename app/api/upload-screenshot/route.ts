import { NextRequest, NextResponse } from 'next/server';
import { put } from '@vercel/blob';

export async function POST(request: NextRequest) {
  try {
    // Check for blob token
    if (!process.env.BLOB_READ_WRITE_TOKEN) {
      return NextResponse.json(
        { error: 'BLOB_READ_WRITE_TOKEN not configured. Please set it in Vercel environment variables.' },
        { status: 500 }
      );
    }

    const formData = await request.formData();
    const file = formData.get('file') as File;
    const projectId = formData.get('projectId') as string;
    const screenshotType = formData.get('screenshotType') as string;

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    if (!projectId) {
      return NextResponse.json(
        { error: 'No projectId provided' },
        { status: 400 }
      );
    }

    // Validate file type
    const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: 'Invalid file type. Only PNG, JPEG, and WebP are allowed.' },
        { status: 400 }
      );
    }

    // Generate filename
    const filename = screenshotType 
      ? `projects/${projectId}/${screenshotType}.png`
      : `projects/${projectId}/${file.name}`;

    // Upload to Vercel Blob
    const blob = await put(filename, file, {
      access: 'public',
      addRandomSuffix: false,
    });

    return NextResponse.json(
      {
        success: true,
        url: blob.url,
        pathname: blob.pathname,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error uploading screenshot:', error);
    return NextResponse.json(
      { error: 'Failed to upload screenshot', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

