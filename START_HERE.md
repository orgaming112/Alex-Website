## 🚀 START HERE - Getting Your Website Running in 5 Minutes!

Welcome! This is your professional plumber/handyman business website. Let's get it running!

### ✅ What You Get

- Professional, responsive website  ✓
- WhatsApp integration  ✓
- Image carousel  ✓
- Services listing & reviews  ✓
- Mobile-friendly  ✓
- Ready to deploy  ✓

---

## ⚡ Quick Start (5 Minutes)

### Step 1: Open Terminal

Right-click in the project folder → "Open in Terminal" (or use VS Code terminal)

### Step 2: Install & Start

```bash
npm install
npm start
```

**Wait 1-2 minutes...** Then your browser opens automatically.

### Step 3: View Your Site

Visit: `http://localhost:3000`

**You should see:**
- Navigation bar with phone number
- Beautiful image carousel
- Services listing
- "Why Choose Us" section

### Step 4: Stop When Done

Press `CTRL + C` in terminal

---

## 📝 First Customizations (10 Minutes)

### Change Your Phone Numbers

**Edit these 2 lines:**

1. **File**: `src/components/Navbar.js` (line 30-31)
   ```javascript
   const phoneNumber = 'YOUR-NUMBER-HERE';
   const phoneLink = 'tel:+972YOUR-NUMBER'; // With country code
   ```

2. **File**: `src/components/WhatsAppButton.js` (line 10)
   ```javascript
   const whatsappNumber = '972YOUR-NUMBER';
   ```

3. Save and the site auto-updates!

### Add Your Business Name

**File**: `src/components/Navbar.js` (line 66)
```jsx
שם העסק שלך  // Replace this
```

---

## 📁 Project Structure

```
📦 Alex web/
├── 📂 public/
│   └── index.html         ← Website title here
├── 📂 src/
│   ├── 📂 components/     ← Navbar, buttons, slider
│   ├── 📂 pages/          ← Home, Services, Reviews
│   ├── 📂 assets/         ← Images
│   ├── App.js             ← Theme & routes
│   └── index.js           ← Entry point
├── package.json           ← Dependencies
├── firebase.json          ← Deployment config
└── 📄 Various guides ↓
```

**Documentation Files:**
- `README.md` - Overview
- `SETUP.md` - Detailed setup guide
- `DEPLOYMENT.md` - Firebase deployment
- `QUICK_REFERENCE.md` - Commands & edits
- `FOLDER_STRUCTURE.md` - Explain each file
- `EXAMPLES.md` - Code examples

---

## 🎨 Customization Guide

### 📞 Phone Numbers

| Where | File | Line |
|-------|------|------|
| Top navbar | Navbar.js | 30-31 |
| WhatsApp button | WhatsAppButton.js | 10 |
| Homepage contact | HomePage.js | ~180 |

### 🏷️ Content

| What | File |
|------|------|
| Services | ServicesPage.js (line 8) |
| Reviews | ReviewsPage.js (line 8) |
| Slider images | ImageSlider.js (line 8) |

### 🎨 Colors

**File**: `App.js` (line 8-14)

```javascript
primary: { main: '#1976d2' },      // Blue - Change here
secondary: { main: '#ff9800' },    // Orange - Change here
```

---

## 🚀 Deploy to Web (15 Minutes)

### Prerequisites
- Firebase account (free) from [firebase.google.com](https://firebase.google.com)
- Firebase CLI: `npm install -g firebase-tools`

### Deploy Steps

1. **Create Firebase project**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Click "Create a project"

2. **Configure locally**
   ```bash
   cp .firebaserc.example .firebaserc
   ```
   - Edit `.firebaserc` with your Project ID (from Firebase Console)

3. **Login**
   ```bash
   firebase login
   ```

4. **Build & Deploy**
   ```bash
   npm run build
   firebase deploy
   ```

5. **Your site is live!** 🎉
   - URL: `https://your-project-id.web.app`

---

## 📚 Important Files & Quick Edits

### Phone Number (All Places)

**Navbar.js**:
```javascript
const phoneNumber = '052-641-0042';      // Line 30
const phoneLink = 'tel:+972526410042';   // Line 31
```

**WhatsAppButton.js**:
```javascript
const whatsappNumber = '972526410042';   // Line 10
```

### Business Name

**Navbar.js**:
```jsx
<Typography>
  מומחה אינסטלציה ותיקון  // Line 66 - Change this
</Typography>
```

### Theme Colors

**App.js**:
```javascript
palette: {
  primary: { main: '#1976d2' },        // Main color
  secondary: { main: '#ff9800' },      // Accent color
}
```

---

## 🔧 Development Commands

```bash
npm start          # Start development server
npm run build      # Build for production
npm install        # Install dependencies
firebase deploy    # Deploy to Firebase
firebase login     # Login to Firebase
```

---

## 📱 Mobile Testing

1. Press `F12` (DevTools)
2. Click phone icon (top-left)
3. Select device
4. Test all pages

---

## ❓ Common Questions

**Q: How do I add a new review?**  
A: Edit `src/pages/ReviewsPage.js`, find `reviews` array, add a new object.

**Q: How do I add a service?**  
A: Edit `src/pages/ServicesPage.js`, find `services` array, add a new object.

**Q: How do I change colors?**  
A: Edit `src/App.js`, modify color values in `palette` section.

**Q: My changes don't show?**  
A: Hard refresh browser: `CTRL + SHIFT + R` (or `CMD + SHIFT + R` on Mac)

**Q: How do I undo changes?**  
A: Use `CTRL + Z` or reinstall: `npm install`

---

## 🆘 Troubleshooting

| Problem | Solution |
|---------|----------|
| npm install fails | `npm cache clean --force` → `npm install` |
| Port 3000 in use | `npm start -- --port 3001` |
| Site won't load | Clear browser cache: `CTRL + SHIFT + DELETE` |
| Firebase won't deploy | `firebase logout` → `firebase login` → `firebase deploy` |

---

## 📖 Documentation

### Read These Guides:

1. **`SETUP.md`** - Detailed setup for developers
2. **`DEPLOYMENT.md`** - Firebase deployment guide
3. **`QUICK_REFERENCE.md`** - Commands & file edits
4. **`FOLDER_STRUCTURE.md`** - Understand each file
5. **`EXAMPLES.md`** - Code snippets & examples

---

## 🎯 Next Steps

1. ✅ Run `npm install` and `npm start`
2. ✅ Update phone numbers
3. ✅ Change business name
4. ✅ Update services/reviews
5. ✅ Test on your phone
6. ✅ Deploy to Firebase

---

## 📞 Need Help?

- **React docs**: [react.dev](https://react.dev)
- **Material-UI**: [mui.com](https://mui.com)
- **Firebase**: [firebase.google.com/docs](https://firebase.google.com/docs)

---

## 🎉 You're All Set!

Your professional business website is ready. Customize it, test it, and deploy it!

**Start with**: `npm install` then `npm start`

Good luck! 🔧

---

**Questions? Return to this file anytime!**
