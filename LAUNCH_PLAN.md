# Launch Plan for Vercel Deployment

## 🎯 Overview
This document outlines everything that needs to be completed before launching the portfolio website on Vercel.

---

## 📸 **CRITICAL: Replace Project Screenshots**

### Current Status
- All 3 projects are using **Unsplash placeholder images** instead of actual screenshots
- Projects affected:
  1. **Infinity Pyramid** (`infinity-pyramid`)
  2. **Quiory** (`quiory`)
  3. **Auroras.me** (`auroras-me`)

### Action Required
1. **Take actual screenshots** of each live website:
   - Visit each live URL:
     - `https://www.infinitypyramid.com`
     - `https://www.quiory.com`
     - `https://auroras.me`
   - Take full-page screenshots (desktop view, 1920x1080 or similar)
   - Take 2-3 additional screenshots showing different sections/features
   - Save as high-quality PNGs (1200x800px recommended)

2. **Upload screenshots** to the project:
   - Option A: Add to `/public/images/projects/` folder (create if needed)
   - Option B: Use a CDN/image hosting service (Cloudinary, Imgur, etc.)
   - Option C: Use Vercel's built-in image optimization with Next.js Image component

3. **Update `data/projects.ts`**:
   - Replace all Unsplash URLs with actual screenshot paths
   - Update both `image` (main) and `images[]` (gallery) arrays

### Files to Update
- `data/projects.ts` - Lines 36-41, 72-77, 108-113

### Example Screenshot Structure
```
/public/images/projects/
  /infinity-pyramid/
    - hero.png (main image)
    - gallery-1.png
    - gallery-2.png
    - gallery-3.png
  /quiory/
    - hero.png
    - gallery-1.png
    - gallery-2.png
    - gallery-3.png
  /auroras-me/
    - hero.png
    - gallery-1.png
    - gallery-2.png
    - gallery-3.png
```

---

## 📧 **Contact Form Integration**

### Current Status
- Contact form (`components/ContactForm.tsx`) only **simulates** submission
- No actual backend integration
- Success message shows but no data is saved/sent

### Action Required
1. **Choose an email service**:
   - **Resend** (recommended, easy setup)
   - SendGrid
   - Nodemailer with SMTP
   - Formspree (third-party service)

2. **Create API route** (`app/api/contact/route.ts`):
   - Handle POST requests
   - Validate form data
   - Send email notification
   - Return success/error response

3. **Update ContactForm component**:
   - Replace simulated submission with actual API call
   - Add proper error handling

4. **Environment variables**:
   - Add email service API key to `.env.local`
   - Add recipient email address

### Files to Create/Update
- Create: `app/api/contact/route.ts`
- Update: `components/ContactForm.tsx` (line 28-48)
- Create: `.env.local` (add to `.gitignore`)

---

## 📋 **Client Questionnaire Integration**

### Current Status
- Questionnaire API route exists (`app/api/questionnaire/route.ts`)
- Email sending code is **commented out**
- Currently only logs to console

### Action Required
1. **Uncomment and configure email sending** in `app/api/questionnaire/route.ts`
2. **Set up email service** (same as Contact Form)
3. **Add environment variables** for email configuration
4. **Test questionnaire submission** end-to-end

### Files to Update
- `app/api/questionnaire/route.ts` (lines 34-49)

---

## ✉️ **Email Address Updates**

### Current Status
- Footer uses: `contact@perfectpixels.com` (placeholder)
- API route uses: `contact@perfectpixels.com` (placeholder)

### Action Required
1. **Replace with actual email address**:
   - Update `components/Footer.tsx` (line 39)
   - Update `app/api/questionnaire/route.ts` (line 44)
   - Update any other references

---

## 🔧 **Vercel Deployment Checklist**

### Pre-Deployment
- [ ] Replace all project screenshots with actual screenshots
- [ ] Set up email service (Resend/SendGrid/etc.)
- [ ] Create and configure API routes for forms
- [ ] Update all email addresses
- [ ] Test all forms locally
- [ ] Test all links (live URLs, GitHub URLs)
- [ ] Verify all images load correctly
- [ ] Check mobile responsiveness
- [ ] Review SEO metadata

### Environment Variables (Vercel Dashboard)
- [ ] `RESEND_API_KEY` (or equivalent)
- [ ] `CONTACT_EMAIL` (recipient email)
- [ ] Any other API keys needed

### Deployment Steps
1. **Push code to GitHub** (if not already)
2. **Import project to Vercel**:
   - Go to vercel.com
   - Click "Add New Project"
   - Import from GitHub
   - Select repository
3. **Configure build settings**:
   - Framework Preset: Next.js
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
4. **Add environment variables** in Vercel dashboard
5. **Deploy**

### Post-Deployment
- [ ] Test contact form submission
- [ ] Test questionnaire submission
- [ ] Verify all images load
- [ ] Test on mobile devices
- [ ] Check page load speeds
- [ ] Verify analytics (if added)
- [ ] Test all external links

---

## 🎨 **Optional Enhancements (Not Required for Launch)**

### Nice to Have
- [ ] Add Google Analytics or similar
- [ ] Add social media links (if applicable)
- [ ] Add favicon
- [ ] Add Open Graph images for social sharing
- [ ] Add sitemap.xml
- [ ] Add robots.txt
- [ ] Set up custom domain (if applicable)
- [ ] Add error tracking (Sentry, etc.)

---

## 📝 **Notes**

### Screenshot Tools
- **Browser extensions**: Full Page Screen Capture, GoFullPage
- **Online tools**: Screenshot.guru, Page2Images
- **Command line**: Puppeteer, Playwright (for automation)
- **Mac**: Cmd+Shift+4 (select area), Cmd+Shift+3 (full screen)

### Screenshot Best Practices
- Use consistent dimensions (1200x800px recommended)
- Capture above-the-fold content for hero images
- Show key features/functionality in gallery images
- Optimize file sizes (use tools like TinyPNG)
- Use PNG format for best quality

### Email Service Recommendations
- **Resend**: Modern, developer-friendly, free tier available
- **SendGrid**: Established, reliable, free tier available
- **Formspree**: No backend needed, but third-party dependency

---

## 🚀 **Quick Start Commands**

```bash
# Install dependencies (if needed)
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Test production build locally
npm start
```

---

## ✅ **Priority Order**

1. ✅ **COMPLETED**: Replace project screenshots (code updated, need to save actual image files)
2. ✅ **COMPLETED**: Set up contact form email integration (Resend configured)
3. ✅ **COMPLETED**: Set up questionnaire email integration (Resend configured)
4. **TODO**: Update email addresses (replace placeholder emails)
5. **LOW**: Optional enhancements

---

## 🎉 **What's Been Completed**

- ✅ Project image paths updated in `data/projects.ts`
- ✅ Resend package installed
- ✅ Contact form API route created (`app/api/contact/route.ts`)
- ✅ Questionnaire API route updated with Resend (`app/api/questionnaire/route.ts`)
- ✅ Contact form component updated to use API
- ✅ Environment variables template created (see `SETUP_GUIDE.md`)
- ✅ Setup guide created

## 📋 **What You Need to Do**

1. **Save screenshots** - See `SCREENSHOT_NAMES.md` for exact file names
2. **Set up Resend account** - Get API key from https://resend.com
3. **Create `.env.local`** - Copy template from `SETUP_GUIDE.md`
4. **Update email addresses** - Replace `contact@perfectpixels.com` with your real email
5. **Deploy to Vercel** - Follow steps in `SETUP_GUIDE.md`

---

**Last Updated**: 2025-01-27

