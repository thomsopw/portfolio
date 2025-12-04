# Vercel Deployment Checklist

## ✅ Pre-Deployment (Already Done)
- ✅ Resend package installed
- ✅ API routes created and configured
- ✅ Forms updated to use API
- ✅ Build verified (works locally)

## 🚀 Deployment Steps

### 1. Push to GitHub
```bash
git add .
git commit -m "Setup Resend integration for forms"
git push origin main
```

### 2. Deploy to Vercel

#### Option A: Via Vercel Dashboard
1. Go to https://vercel.com
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Vercel will auto-detect Next.js

#### Option B: Via Vercel CLI
```bash
npm i -g vercel
vercel
```

### 3. Add Environment Variables in Vercel

**Required:**
- `RESEND_API_KEY` = `re_your_api_key_here` (you have this!)

**Optional but Recommended:**
- `CONTACT_EMAIL` = `your-email@example.com` (where you want to receive form submissions)
- `RESEND_FROM_EMAIL` = `onboarding@resend.dev` (or your verified domain email)

**How to add:**
1. In Vercel project dashboard → **Settings** → **Environment Variables**
2. Add each variable
3. **Important:** Select all environments:
   - ✅ Production
   - ✅ Preview  
   - ✅ Development
4. Click **Save**

### 4. Deploy

If using dashboard: Click **"Deploy"** or push a new commit
If using CLI: `vercel --prod`

---

## ✅ Post-Deployment Testing

After deployment, test:

1. **Contact Form** (`/pricing#contact` or wherever it appears)
   - Fill out and submit
   - Check that you receive email

2. **Questionnaire Form** (`/questionnaire`)
   - Fill out and submit
   - Check that you receive email

3. **Check Vercel Logs**
   - Go to **Deployments** → Click on deployment → **Functions** tab
   - Check for any errors in `/api/contact` or `/api/questionnaire`

---

## 🐛 Troubleshooting

### Forms not sending emails?
- ✅ Check `RESEND_API_KEY` is set in Vercel
- ✅ Check Vercel function logs for errors
- ✅ Verify API key is correct (starts with `re_`)
- ✅ Check Resend dashboard for email logs

### Build fails?
- Check Vercel build logs
- Make sure all dependencies are in `package.json` ✅ (they are)

### Emails going to spam?
- Use a verified domain email for `RESEND_FROM_EMAIL`
- Set up SPF/DKIM records in Resend dashboard

---

## 📝 That's It!

Once you add the `RESEND_API_KEY` environment variable in Vercel, your forms will work! 

The forms will:
- ✅ Send emails via Resend
- ✅ Show success/error messages to users
- ✅ Handle validation
- ✅ Work in production

**Minimum required:** Just `RESEND_API_KEY` - everything else has sensible defaults!

