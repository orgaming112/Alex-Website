# Deployment Instructions

## Firebase Hosting Deployment Guide

### Prerequisites
- Node.js and npm installed
- Firebase account (free)
- Firebase CLI installed globally

### Step-by-Step Instructions

#### 1. Install Firebase CLI

If you haven't already, install Firebase CLI globally:

```bash
npm install -g firebase-tools
```

Verify installation:
```bash
firebase --version
```

#### 2. Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **"Create a project"**
3. Enter your project name (e.g., "pro-plumber-website")
4. Choose region (recommended: closest to you)
5. Click **"Create project"**

#### 3. Enable Hosting

1. In Firebase Console, go to **Hosting** (left sidebar)
2. Click **"Get Started"**
3. Firebase CLI instructions will appear
4. The `firebase.json` is already configured in this project

#### 4. Configure Project ID

1. In Firebase Console, go to **Settings → General**
2. Copy your **Project ID**
3. Copy `.firebaserc.example` to `.firebaserc`:

```bash
cp .firebaserc.example .firebaserc
```

4. Edit `.firebaserc` and replace `your-project-id-here` with your actual Project ID:

```json
{
  "projects": {
    "default": "your-actual-project-id"
  }
}
```

#### 5. Login to Firebase

```bash
firebase login
```

This opens your browser to authenticate. Click **"Allow"** to grant permissions.

#### 6. Build the React App

```bash
npm install
npm run build
```

This creates a `build/` folder with production-ready code.

#### 7. Deploy to Firebase

```bash
firebase deploy
```

You'll see output like:
```
Hosting URL: https://your-project-id.web.app
✓ Deploy complete!
```

### Your site is now live! 🎉

Visit your Hosting URL to see your website.

---

## Subsequent Deployments

After the first deployment, to update your site:

1. Make changes to your code
2. Test locally: `npm start`
3. Build: `npm run build`
4. Deploy: `firebase deploy`

---

## Configuration Details

### firebase.json
- **public**: `build` folder (React build output)
- **rewrites**: All routes redirect to `/index.html` (for React Router)
- **headers**: Cache rules for optimize performance

### .firebaserc
- **project mapping**: Links workspace to Firebase project

---

## Alternative: Deploy with GitHub Integration

1. Push code to GitHub
2. In Firebase Console → Hosting → Connect repository
3. Select GitHub repository
4. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `build`
5. Automatic deployments on each push to main branch

---

## Troubleshooting

### Issue: "Could not find project"
**Solution**: Make sure `.firebaserc` has correct Project ID

### Issue: "Permission denied"
**Solution**: 
```bash
firebase logout
firebase login
firebase deploy
```

### Issue: "Build directory does not exist"
**Solution**: Create build first with `npm run build`

### Issue: Domain already taken
**Solution**: Firebase domains are unique per project. Use different project ID.

### Issue: Slow page load times
**Solution**: 
- Optimize images (use WebP format)
- Minimize CSS/JS (npm run build does this)
- Consider Firebase Functions for backend logic

---

## Monitoring

After deployment, monitor your site:

1. **Firebase Console**: Hosting tab shows:
   - Traffic analytics
   - Performance metrics
   - Error logs

2. **Browser Console**: Press F12 to check for JavaScript errors

3. **Lighthouse**: Test performance
   ```bash
   npm install -g lighthouse
   lighthouse https://your-project-id.web.app
   ```

---

## Custom Domain (Optional)

1. In Firebase Console → Hosting
2. Click "Connect domain"
3. Enter your domain (e.g., myplumber.com)
4. Follow DNS verification steps

---

For questions, contact Firebase support or check [Firebase docs](https://firebase.google.com/docs/hosting)
