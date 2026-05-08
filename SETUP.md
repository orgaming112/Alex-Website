# Complete Setup & Development Guide

## Project Overview

This is a professional, responsive website for a plumber/handyman business built with:
- **React 18** - Modern UI library
- **Material-UI v5** - Professional UI components
- **React Router v6** - Navigation between pages
- **Firebase Hosting** - Cloud deployment

---

## Table of Contents

1. [Initial Setup](#initial-setup)
2. [Development](#development)
3. [Customization](#customization)
4. [Deployment](#deployment)
5. [Troubleshooting](#troubleshooting)

---

## Initial Setup

### Step 1: Prerequisites

You need to have installed:
1. **Node.js** (v14 or higher)
   - Download from [nodejs.org](https://nodejs.org/)
   - Verify: `node --version` and `npm --version`

2. **Git** (optional, for version control)
   - Download from [git-scm.com](https://git-scm.com/)

3. **Code Editor** (VS Code recommended)
   - Download from [code.visualstudio.com](https://code.visualstudio.com/)

### Step 2: Install Dependencies

Navigate to your project folder:

```bash
cd "Alex web"
```

Install all required packages:

```bash
npm install
```

This installs:
- React and React DOM
- React Router
- Material-UI (@mui/material)
- MUI Icons (@mui/icons-material)
- Emotion (MUI styling)
- Swiper (carousel - optional)

**Wait for installation to complete** - this may take 2-5 minutes.

Verify installation:
```bash
npm list
```

### Step 3: Verify Setup

Start the development server:

```bash
npm start
```

This should:
1. Compile the application
2. Open `http://localhost:3000` in your browser
3. Show the website with a slider on homepage

Press `CTRL+C` to stop the server.

---

## Development

### Running the Dev Server

```bash
npm start
```

**Features:**
- Hot reload - changes auto-update
- Error overlay - shows compilation errors
- Browser DevTools - debug with F12

### Project Structure

```
src/
├── components/
│   ├── Navbar.js           ← Top navigation bar
│   ├── WhatsAppButton.js    ← Floating WhatsApp button
│   └── ImageSlider.js       ← Carousel/slider component
├── pages/
│   ├── HomePage.js          ← Main page
│   ├── ServicesPage.js      ← Services listing
│   └── ReviewsPage.js       ← Customer reviews
├── assets/                  ← Images and icons
├── App.js                   ← Main application (routing)
├── index.js                 ← React entry point
└── index.css                ← Global styles
```

### Key Files Explained

**App.js** - Application setup
- Defines the theme (colors, fonts)
- Sets up React Router
- Includes Navbar, Pages, WhatsApp Button, and theme

**Navbar.js** - Top navigation
- Logo and menu items
- Phone number button (052-641-0042)
- Mobile hamburger menu

**WhatsAppButton.js** - Floating contact button
- Fixed position (bottom-left)
- Link to WhatsApp (972526410042)
- Green color (#25d366)

**ImageSlider.js** - Homepage carousel
- Auto-plays images every 5 seconds
- Navigation arrows
- Dot indicators

### Development Workflow

1. **Start server**: `npm start`
2. **Edit files** in `src/` folder
3. **Changes auto-update** in browser
4. **View errors** in terminal and browser
5. **Stop server**: Press CTRL+C

---

## Customization

### Changing Business Information

#### Phone Numbers

Find and change in these files:

**Navbar.js** (around line 30):
```javascript
const phoneNumber = '052-641-0042';
const phoneLink = 'tel:+972526410042';
```

**WhatsAppButton.js** (around line 10):
```javascript
const whatsappNumber = '972526410042';
const whatsappLink = `https://wa.me/${whatsappNumber}`;
```

**Also check**: HomePage.js, ServicesPage.js, ReviewsPage.js for contact sections.

#### Business Name

**App.js** (title):
```jsx
<title>מומחה אינסטלציה ותיקון</title>
```

**Navbar.js** (logo):
```jsx
<Typography variant="h6" ... >
  מומחה אינסטלציה ותיקון
</Typography>
```

#### Colors

**App.js** (theme section):
```javascript
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',      // Blue - Change this
    },
    secondary: {
      main: '#ff9800',      // Orange - Change this
    },
    success: {
      main: '#25d366',      // WhatsApp Green - Don't change
    },
  },
});
```

### Adding New Services

Edit **ServicesPage.js**, find the `services` array:

```javascript
const services = [
  {
    id: 1,
    title: 'שירותי אינסטלציה',
    icon: PlumbingIcon,
    description: 'שירותים מלאים של אינסטלציה',
    details: [
      'התקנת ברזים ומקלחות',
      'תיקור קו הביוב',
      // ... add more
    ],
  },
  // Add more services here
];
```

### Adding New Reviews

Edit **ReviewsPage.js**, find the `reviews` array:

```javascript
const reviews = [
  {
    id: 1,
    name: 'דוד לוי',
    rating: 5,
    date: '2026-03-20',
    text: 'שירות יוצא דופן! ...',
    service: 'תיקור ברז',
  },
  // Add more reviews here
];
```

### Changing Slider Images

Edit **ImageSlider.js**, find the `sliderImages` array:

```javascript
const sliderImages = [
  {
    id: 1,
    title: 'שירותי אינסטלציה',
    src: 'https://images.unsplash.com/...',  // Change URL
  },
  // Add more images
];
```

**Tips for images:**
- Use professional photos (size: 1200x500px or similar ratio)
- Keep file size small (< 500KB)
- Use from: Unsplash, Pexels, or Pixabay
- Or upload your own images to `src/assets/`

### Creating a New Page

1. **Create file**: `src/pages/NewPage.js`

```javascript
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const NewPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h1">
        My New Page
      </Typography>
      {/* Add content here */}
    </Container>
  );
};

export default NewPage;
```

2. **Add route** in `App.js`:

```javascript
import NewPage from './pages/NewPage';

// Inside <Routes>:
<Route path="/new-page" element={<NewPage />} />
```

3. **Add menu item** in `Navbar.js`, in `menuItems` array:

```javascript
const menuItems = [
  { label: 'בית', path: '/' },
  { label: 'עבודות', path: '/services' },
  { label: 'ביקורות', path: '/reviews' },
  { label: 'דף חדש', path: '/new-page' },  // Add this
];
```

### Translating to English (or other language)

Simply replace Hebrew text with English throughout the files. Key sections:
- Page titles and content
- Menu labels
- Service names and descriptions
- Reviews

---

## Deployment

### Option 1: Firebase Hosting (Recommended)

#### Prerequisites:
- Firebase account (create at [firebase.google.com](https://firebase.google.com))
- Firebase CLI: `npm install -g firebase-tools`

#### Steps:

1. **Create Firebase Project**
   - Go to Firebase Console
   - Click "Create a project"
   - Follow setup steps

2. **Login to Firebase**
   ```bash
   firebase login
   ```
   - Authenticate in the browser

3. **Configure project**
   - Copy `.firebaserc.example` to `.firebaserc`
   - Edit `.firebaserc` with your Project ID (from Firebase Console)

4. **Build** the application
   ```bash
   npm run build
   ```

5. **Deploy** to Firebase
   ```bash
   firebase deploy
   ```

   You'll get a URL like: `https://your-project.web.app`

6. **Access your site** at the provided URL

#### For updates:
```bash
npm run build
firebase deploy
```

### Option 2: Netlify

1. Push code to GitHub
2. Connect Netlify to GitHub repo
3. Build command: `npm run build`
4. Publish directory: `build`

### Option 3: Vercel

1. Push code to GitHub
2. Import project on Vercel.com
3. Auto-deploys on each push

---

## Troubleshooting

### "npm start" doesn't work

**Problem**: Command not found or dependencies missing

**Solutions**:
```bash
# Clear npm cache
npm cache clean --force

# Reinstall everything
rm -rf node_modules package-lock.json
npm install

# Try again
npm start
```

### Port 3000 is already in use

**Problem**: Another app is using port 3000

**Solution**:
```bash
npm start -- --port 3001
```

### "Cannot find module" error

**Problem**: Missing dependency

**Solution**:
```bash
npm install
```

### Build fails with errors

**Problem**: JavaScript syntax errors in your code

**Solution**:
1. Read the error message
2. Find the file and line
3. Check for typos or syntax errors
4. Fix and save

### Website looks broken after deploy

**Problem**: Build folder not updated

**Solution**:
```bash
npm run build
firebase deploy
```

### Firebase deploy fails

**Problem**: Authentication or configuration issue

**Solution**:
```bash
firebase logout
firebase login
firebase deploy
```

### Images not loading

**Problem**: Wrong image path

**Solution**:
- Check image is in `src/assets/`
- Verify import path is correct
- Use relative paths starting with `../assets/`

### Website is slow

**Problem**: Large images or unoptimized code

**Solutions**:
- Optimize images (reduce size)
- Remove unused dependencies
- Check Lighthouse report

---

## Best Practices

1. **Always commit code** (if using Git)
   ```bash
   git add .
   git commit -m "Description of changes"
   ```

2. **Test locally before deploying**
   ```bash
   npm start
   # Test all pages and features
   npm run build
   ```

3. **Keep sensitive data secure**
   - Don't commit phone numbers as hardcoded strings
   - Use environment variables for API keys (if added)

4. **Backup before major changes**
   ```bash
   git branch feature-name
   # Make changes on new branch
   ```

5. **Monitor your deployed site**
   - Check Firebase Console for errors
   - Ask customers for feedback
   - Monitor page load times

---

## Support Resources

- **React docs**: https://react.dev
- **Material-UI**: https://mui.com
- **React Router**: https://reactrouter.com
- **Firebase**: https://firebase.google.com/docs
- **Node.js**: https://nodejs.org/en/docs/

---

## Next Steps

1. ✅ Install dependencies (`npm install`)
2. ✅ Run development server (`npm start`)
3. ✅ Customize your content
4. ✅ Build and deploy (`npm run build` → `firebase deploy`)
5. ✅ Monitor and maintain

---

**Good luck with your plumber business website! 🔧**

For help: 052-641-0042 or 052-641-0042(WhatsApp)
