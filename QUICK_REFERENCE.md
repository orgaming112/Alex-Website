# Quick Reference Guide

## Essential Commands

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Deploy to Firebase
firebase deploy

# Login to Firebase
firebase login

# Check Firebase status
firebase status
```

## File Locations & Edits

### Change Phone Numbers
- **File**: `src/components/Navbar.js`
  - Line 30-31: Main phone number
- **File**: `src/components/WhatsAppButton.js`
  - Line 10: WhatsApp number
- **File**: `src/pages/HomePage.js`
  - Contact section buttons
- **File**: `src/pages/ServicesPage.js`
  - Schedule section
- **File**: `src/pages/ReviewsPage.js`
  - Call-to-action buttons

### Customize Business Info
- **Logo/Title**: `src/components/Navbar.js` (line 61-66)
- **Website Title**: `public/index.html` (line 8)
- **Colors**: `src/App.js` (line 8-14)
- **Services**: `src/pages/ServicesPage.js` (services array)
- **Reviews**: `src/pages/ReviewsPage.js` (reviews array)
- **Slider Images**: `src/components/ImageSlider.js` (sliderImages array)

## Theme Colors

Primary (Blue): `#1976d2`  
Secondary (Orange): `#ff9800`  
Success (Green): `#25d366`

To change: Edit `src/App.js`, `palette` section

## Directory Structure

```
Alex web/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── WhatsAppButton.js
│   │   └── ImageSlider.js
│   ├── pages/
│   │   ├── HomePage.js
│   │   ├── ServicesPage.js
│   │   └── ReviewsPage.js
│   ├── assets/
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
├── firebase.json
├── .firebaserc
└── README.md
```

## Deployment Checklist

- [ ] All content updated (text, images, phone numbers)
- [ ] Tested locally with `npm start`
- [ ] All links working (internal and external)
- [ ] Mobile responsive (test on phone)
- [ ] Firebase project created
- [ ] `.firebaserc` configured with Project ID
- [ ] Built with `npm run build`
- [ ] Deployed with `firebase deploy`
- [ ] Verified on live URL

## Common Edits

### Update Main Phone
1. Open `src/components/Navbar.js`
2. Find line 30: `const phoneNumber = '052-641-0042';`
3. Change number
4. Find line 31: `const phoneLink = 'tel:+972526410042';`
5. Change with country code (972 for Israel)

### Update WhatsApp
1. Open `src/components/WhatsAppButton.js`
2. Find line 10: `const whatsappNumber = '972526410042';`
3. Change number (without +, with country code)

### Add Service
1. Open `src/pages/ServicesPage.js`
2. In `services` array, add:
```javascript
{
  id: 5,
  title: 'Your Service Name',
  icon: IconName,
  description: 'Short description',
  details: ['Detail 1', 'Detail 2', 'Detail 3'],
}
```

### Add Review
1. Open `src/pages/ReviewsPage.js`
2. In `reviews` array, add:
```javascript
{
  id: 7,
  name: 'Customer Name',
  rating: 5,
  date: '2026-03-25',
  text: 'Review text here...',
  service: 'Service name',
}
```

## Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Open DevTools | F12 |
| Hot Reload | Ctrl+S (auto) |
| Stop Server | Ctrl+C |
| Clear Console | Cmd+K (Mac) / Ctrl+L (Windows) |
| Search in Project | Ctrl+Shift+F |

## Ports & URLs

| Service | URL |
|---------|-----|
| Development | http://localhost:3000 |
| Build folder | `./build/` |
| Live site | https://your-project.web.app |

## Dependencies Used

- react@^18.2.0
- react-router-dom@^6.20.0
- @mui/material@^5.14.0
- @mui/icons-material@^5.14.0

## Performance Tips

- Images: Keep < 500KB, use WebP format
- Reviews: Max 10-15 on page for speed
- Services: 4-8 services recommended
- Build size: Aim for < 2MB total

## Mobile Testing

1. Run `npm start`
2. Open DevTools (F12)
3. Click mobile icon (top-left of DevTools)
4. Select device (iPhone, Android, etc.)
5. Test all pages and buttons

## Backup & Version Control

Basic Git workflow:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <repo-url>
git push -u origin main
```

## Emergency Troubleshooting

| Problem | Quick Fix |
|---------|-----------|
| Site won't load | Clear browser cache (Ctrl+Shift+Delete) |
| npm install fails | `npm cache clean --force` |
| Port in use | Use different port: `npm start -- --port 3001` |
| Firebase error | `firebase logout` then `firebase login` |
| Build is large | Check for large images, optimize |

## Useful Links

- [React Documentation](https://react.dev)
- [Material-UI Docs](https://mui.com)
- [Firebase Hosting Docs](https://firebase.google.com/docs/hosting)
- [React Router Guide](https://reactrouter.com)

---

**Keep this guide handy for quick reference!**
