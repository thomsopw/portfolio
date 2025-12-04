# Screenshot Upload Guide

## Status

✅ Screenshots captured:
- `infinity-pyramid-hero.png`
- `infinity-pyramid-gallery.png`
- `quiory-hero.png`
- `quiory-features.png`
- `auroras-me-hero.png`

✅ Code ready:
- Upload API route created
- Upload scripts created
- Blob storage configured

## Next Steps

### Option 1: Upload via Deployed API (After Deployment)

1. **Wait for Vercel deployment** to complete (after pushing code)

2. **Run the upload script:**
   ```bash
   API_URL=https://portfolio-tan-alpha-60.vercel.app/api/upload-screenshot npx tsx scripts/upload-via-api.ts
   ```

   The deployed API will have access to `BLOB_READ_WRITE_TOKEN` automatically.

### Option 2: Get Token and Upload Locally

1. **Get BLOB_READ_WRITE_TOKEN from Vercel:**
   - Go to: https://vercel.com/dashboard
   - Select your project
   - Go to Settings → Environment Variables
   - Find `BLOB_READ_WRITE_TOKEN` and copy it

2. **Create `.env.local` file:**
   ```env
   BLOB_READ_WRITE_TOKEN=your_token_here
   ```

3. **Start dev server:**
   ```bash
   npm run dev
   ```

4. **In another terminal, run upload:**
   ```bash
   npx tsx scripts/upload-via-api.ts
   ```

### Option 3: Direct Upload Script

1. **Get BLOB_READ_WRITE_TOKEN** (same as Option 2, step 1)

2. **Run with token:**
   ```bash
   BLOB_READ_WRITE_TOKEN=your_token_here npx tsx scripts/upload-screenshots.ts
   ```

## After Upload

The script will output blob URLs like:
```
{
  "infinity-pyramid": [
    "https://9o1m1qwswpzfcjmm.public.blob.vercel-storage.com/projects/infinity-pyramid/hero.png",
    ...
  ],
  ...
}
```

**Update `data/projects.ts`** with these URLs to replace the local image paths.

## Blob Storage Domain

Your blob store: `9o1m1qwswpzfcjmm.public.blob.vercel-storage.com`

