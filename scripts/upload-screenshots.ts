import { put } from '@vercel/blob';
import { readFile } from 'fs/promises';
import { join } from 'path';

const SCREENSHOTS_DIR = join(process.cwd(), 'temp-screenshots');

interface ScreenshotUpload {
  filePath: string;
  projectId: string;
  screenshotType: string;
}

const screenshots: ScreenshotUpload[] = [
  {
    filePath: join(SCREENSHOTS_DIR, 'infinity-pyramid-hero.png'),
    projectId: 'infinity-pyramid',
    screenshotType: 'hero',
  },
  {
    filePath: join(SCREENSHOTS_DIR, 'infinity-pyramid-gallery.png'),
    projectId: 'infinity-pyramid',
    screenshotType: 'gallery-1',
  },
  {
    filePath: join(SCREENSHOTS_DIR, 'quiory-hero.png'),
    projectId: 'quiory',
    screenshotType: 'hero',
  },
  {
    filePath: join(SCREENSHOTS_DIR, 'quiory-features.png'),
    projectId: 'quiory',
    screenshotType: 'gallery-1',
  },
  {
    filePath: join(SCREENSHOTS_DIR, 'auroras-me-hero.png'),
    projectId: 'auroras-me',
    screenshotType: 'hero',
  },
];

async function uploadScreenshot({ filePath, projectId, screenshotType }: ScreenshotUpload) {
  try {
    const fileBuffer = await readFile(filePath);
    const filename = `projects/${projectId}/${screenshotType}.png`;
    
    console.log(`Uploading ${filename}...`);
    
    const blob = await put(filename, fileBuffer, {
      access: 'public',
      addRandomSuffix: false,
      contentType: 'image/png',
    });

    console.log(`✅ Uploaded: ${blob.url}`);
    return blob.url;
  } catch (error) {
    console.error(`❌ Error uploading ${filePath}:`, error);
    throw error;
  }
}

async function main() {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    console.error('❌ BLOB_READ_WRITE_TOKEN environment variable is not set');
    console.log('Run: vercel env pull to get the token locally');
    process.exit(1);
  }

  console.log('Starting screenshot uploads...\n');

  const uploadedUrls: Record<string, string[]> = {};

  for (const screenshot of screenshots) {
    try {
      const url = await uploadScreenshot(screenshot);
      
      if (!uploadedUrls[screenshot.projectId]) {
        uploadedUrls[screenshot.projectId] = [];
      }
      
      uploadedUrls[screenshot.projectId].push(url);
      
      // Small delay between uploads
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.error(`Failed to upload ${screenshot.filePath}`);
    }
  }

  console.log('\n✅ All uploads complete!');
  console.log('\nUploaded URLs:');
  console.log(JSON.stringify(uploadedUrls, null, 2));
}

main().catch(console.error);

