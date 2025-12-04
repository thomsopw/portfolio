# Screenshot Upload Instructions

## Option 1: Upload via API Route (Recommended)

1. **Start the dev server:**
   ```bash
   npm run dev
   ```

2. **In another terminal, run the upload script:**
   ```bash
   npx tsx scripts/upload-via-api.ts
   ```

   **Note:** The API route needs `BLOB_READ_WRITE_TOKEN` to be set. This should be automatically available when deployed to Vercel, but for local testing you may need to:
   - Get the token from Vercel dashboard → Your Project → Settings → Environment Variables
   - Create `.env.local` file with: `BLOB_READ_WRITE_TOKEN=your_token_here`

## Option 2: Direct Upload Script

1. **Get your BLOB_READ_WRITE_TOKEN from Vercel:**
   - Go to Vercel Dashboard → Your Project → Settings → Environment Variables
   - Copy the `BLOB_READ_WRITE_TOKEN` value

2. **Create `.env.local` file:**
   ```env
   BLOB_READ_WRITE_TOKEN=your_token_here
   ```

3. **Run the upload script:**
   ```bash
   BLOB_READ_WRITE_TOKEN=your_token_here npx tsx scripts/upload-screenshots.ts
   ```

## Screenshots Ready

Screenshots are in `temp-screenshots/`:
- `infinity-pyramid-hero.png`
- `infinity-pyramid-gallery.png`
- `quiory-hero.png`
- `quiory-features.png`
- `auroras-me-hero.png`

## After Upload

The script will output blob URLs. Update `data/projects.ts` with these URLs.

