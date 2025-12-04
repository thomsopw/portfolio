# Setup Guide for Vercel Deployment

## 📸 Screenshot Setup

### Step 1: Save Your Screenshots

Based on the screenshots you provided, save them with these exact names in the following locations:

#### Infinity Pyramid Screenshots
Save to: `public/images/projects/infinity-pyramid/`
- `hero.png` - Main hero section screenshot
- `gallery-1.png` - Community showcase or features section
- `gallery-2.png` - Additional feature or gallery image

#### Quiory Screenshots
Save to: `public/images/projects/quiory/`
- `hero.png` - Main hero section with "Know exactly where every part lives"
- `gallery-1.png` - Dashboard view
- `gallery-2.png` - Hardware devices page

#### Auroras.me Screenshots
Save to: `public/images/projects/auroras-me/`
- `hero.png` - Main dashboard or aurora forecast view
- `gallery-1.png` - Aurora visibility dashboard
- `gallery-2.png` - Space weather alerts view

### Step 2: Image Optimization (Optional but Recommended)
- Recommended size: 1200x800px for hero images
- Format: PNG or WebP
- Optimize file sizes using tools like:
  - TinyPNG (https://tinypng.com)
  - Squoosh (https://squoosh.app)

---

## 🔧 Environment Variables Setup

### Step 1: Create `.env.local` file

Create a file named `.env.local` in the root directory with the following:

```env
# Resend API Configuration
# Get your API key from https://resend.com/api-keys
RESEND_API_KEY=re_your_api_key_here

# Email Configuration
# The email address that will receive form submissions
CONTACT_EMAIL=your-email@example.com

# Resend From Email
# This must be a verified domain in your Resend account
# For testing, you can use onboarding@resend.dev
# For production, use your own domain (e.g., contact@yourdomain.com)
RESEND_FROM_EMAIL=onboarding@resend.dev
```

### Step 2: Get Resend API Key

1. Go to https://resend.com
2. Sign up or log in
3. Navigate to **API Keys** in the dashboard
4. Create a new API key
5. Copy the key (starts with `re_`)
6. Paste it into your `.env.local` file

### Step 3: Verify Your Domain (For Production)

1. In Resend dashboard, go to **Domains**
2. Add your domain (e.g., `yourdomain.com`)
3. Add the DNS records provided by Resend
4. Wait for verification (usually takes a few minutes)
5. Once verified, update `RESEND_FROM_EMAIL` to use your domain

**For Testing:**
- You can use `onboarding@resend.dev` without domain verification
- This works for development and testing only

---

## 🚀 Vercel Deployment

### Step 1: Push to GitHub

```bash
git add .
git commit -m "Setup Resend integration and update project screenshots"
git push origin main
```

### Step 2: Deploy to Vercel

1. Go to https://vercel.com
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Vercel will auto-detect Next.js settings

### Step 3: Add Environment Variables in Vercel

1. In your Vercel project dashboard, go to **Settings** → **Environment Variables**
2. Add the following variables:
   - `RESEND_API_KEY` - Your Resend API key
   - `CONTACT_EMAIL` - Your email address
   - `RESEND_FROM_EMAIL` - Your verified email (or `onboarding@resend.dev` for testing)

3. **Important:** Make sure to add these for all environments:
   - Production
   - Preview
   - Development

### Step 4: Deploy

1. Click **"Deploy"** or push a new commit
2. Wait for deployment to complete
3. Test your forms!

---

## ✅ Testing Checklist

After deployment, test the following:

- [ ] Contact form submission works
- [ ] Questionnaire form submission works
- [ ] You receive emails for both forms
- [ ] All project screenshots display correctly
- [ ] All links work (live URLs, GitHub URLs)
- [ ] Mobile responsiveness looks good
- [ ] Page load times are acceptable

---

## 🐛 Troubleshooting

### Forms not sending emails?
- Check that `RESEND_API_KEY` is set correctly in Vercel
- Verify your domain in Resend (if using custom domain)
- Check Vercel function logs for errors
- Make sure `CONTACT_EMAIL` is set

### Screenshots not showing?
- Verify images are in `public/images/projects/` folder
- Check file names match exactly (case-sensitive)
- Ensure images are committed to git
- Check browser console for 404 errors

### Build errors?
- Run `npm run build` locally to catch errors
- Check that all dependencies are installed
- Verify TypeScript types are correct

---

## 📝 Notes

- The `.env.local` file is already in `.gitignore` - it won't be committed
- Always use environment variables in Vercel dashboard, never commit secrets
- For production, use a verified domain email address
- Resend free tier includes 3,000 emails/month

