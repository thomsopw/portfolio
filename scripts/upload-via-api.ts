import { readFile } from 'fs/promises';
import { join } from 'path';
import FormData from 'form-data';
import fetch from 'node-fetch';

const SCREENSHOTS_DIR = join(process.cwd(), 'temp-screenshots');
// Try deployed API first, fallback to local
const API_URL = process.env.API_URL || 'https://portfolio-tan-alpha-60.vercel.app/api/upload-screenshot';

interface ScreenshotUpload {
  fileName: string;
  projectId: string;
  screenshotType: string;
}

const screenshots: ScreenshotUpload[] = [
  {
    fileName: 'infinity-pyramid-hero.png',
    projectId: 'infinity-pyramid',
    screenshotType: 'hero',
  },
  {
    fileName: 'infinity-pyramid-gallery.png',
    projectId: 'infinity-pyramid',
    screenshotType: 'gallery-1',
  },
  {
    fileName: 'quiory-hero.png',
    projectId: 'quiory',
    screenshotType: 'hero',
  },
  {
    fileName: 'quiory-features.png',
    projectId: 'quiory',
    screenshotType: 'gallery-1',
  },
  {
    fileName: 'auroras-me-hero.png',
    projectId: 'auroras-me',
    screenshotType: 'hero',
  },
];

async function uploadScreenshot({ fileName, projectId, screenshotType }: ScreenshotUpload) {
  try {
    const filePath = join(SCREENSHOTS_DIR, fileName);
    const fileBuffer = await readFile(filePath);
    
    console.log(`Uploading ${fileName}...`);
    
    const formData = new FormData();
    formData.append('file', fileBuffer, {
      filename: fileName,
      contentType: 'image/png',
    });
    formData.append('projectId', projectId);
    formData.append('screenshotType', screenshotType);

    const response = await fetch(API_URL, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const errorText = await response.text();
      const errorJson = await response.json().catch(() => null);
      console.error(`Response status: ${response.status}`);
      console.error(`Response body: ${errorText}`);
      throw new Error(`Upload failed (${response.status}): ${errorJson?.error || errorText || 'Unknown error'}`);
    }

    const result = await response.json();
    console.log(`✅ Uploaded: ${result.url}`);
    return result.url;
  } catch (error) {
    console.error(`❌ Error uploading ${fileName}:`, error);
    throw error;
  }
}

async function main() {
  console.log('Starting screenshot uploads via API...\n');
  console.log(`API URL: ${API_URL}\n`);

  const uploadedUrls: Record<string, string[]> = {};

  for (const screenshot of screenshots) {
    try {
      const url = await uploadScreenshot(screenshot);
      
      if (!uploadedUrls[screenshot.projectId]) {
        uploadedUrls[screenshot.projectId] = [];
      }
      
      uploadedUrls[screenshot.projectId].push(url);
      
      // Small delay between uploads
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.error(`Failed to upload ${screenshot.fileName}`);
    }
  }

  console.log('\n✅ All uploads complete!');
  console.log('\nUploaded URLs:');
  console.log(JSON.stringify(uploadedUrls, null, 2));
  
  console.log('\n📝 Copy these URLs to update data/projects.ts');
}

main().catch(console.error);

