# Folder Structure Explanation

This document explains each folder and file in the project.

## Root Level Files

### `package.json`
- **Purpose**: Lists all project dependencies and scripts
- **Contains**: npm packages, version info, scripts (start, build, test)
- **Edit when**: Adding new dependencies or changing scripts

### `firebase.json`
- **Purpose**: Firebase hosting configuration
- **Already configured**: Redirects routes to index.html, sets up caching
- **Don't edit** unless you know what you're doing

### `.firebaserc.example`
- **Purpose**: Template for Firebase configuration
- **What to do**: Copy to `.firebaserc` and edit with your Project ID

### `.firebaserc` (after setup)
- **Purpose**: Your Firebase project configuration
- **Created by you**: Copy from `.firebaserc.example`
- **Contains**: Your Firebase Project ID
- **Important**: Add to `.gitignore` to keep private

### `.gitignore`
- **Purpose**: Tells Git which files NOT to commit
- **Contains**: node_modules, build, .firebaserc
- **DON'T modify** unless necessary

### `README.md`
- **Purpose**: Project overview and quick start
- **For**: Users learning about the project

### `SETUP.md`
- **Purpose**: Detailed setup and development guide
- **For**: New developers or when setting up on new machine

### `DEPLOYMENT.md`
- **Purpose**: Firebase deployment step-by-step guide
- **For**: Deploying to production

### `QUICK_REFERENCE.md`
- **Purpose**: Commands and edits at a glance
- **For**: Quick lookup while developing

---

## `public/` Folder

### `index.html`
- **Purpose**: Main HTML file that loads React
- **What it contains**:
  - Metadata (title, description, viewport)
  - Links to fonts (Google Fonts)
  - `<div id="root"></div>` where React mounts
- **Edit for**:
  - Changing page title
  - Adding meta tags
  - Adding global scripts (analytics, etc.)

---

## `src/` Folder (Source Code)

### `index.js`
- **Purpose**: Entry point for React application
- **What it does**: Mounts React to `<div id="root">`
- **Don't modify** unless you know React

### `index.css`
- **Purpose**: Global CSS styles
- **Contains**: Base styles for html, body, fonts
- **Edit for**: Global styling (fonts, spacing, colors)

### `App.js`
- **Purpose**: Main application component
- **Contains**:
  - Theme definition (colors, typography)
  - React Router setup
  - Page routes
  - Layout (Navbar, WhatsApp button)
- **Edit for**:
  - Changing theme colors
  - Adding new routes
  - Adding new pages

---

## `src/components/` Folder

### `Navbar.js`
- **Purpose**: Top navigation bar
- **Contains**:
  - Logo/title
  - Menu items
  - Phone number button
  - Mobile drawer menu
- **Edit for**:
  - Changing phone number
  - Adding menu items
  - Customizing colors/styling

### `WhatsAppButton.js`
- **Purpose**: Floating action button for WhatsApp
- **Contains**:
  - Green button (bottom-left)
  - Link to WhatsApp chat
- **Edit for**:
  - Changing WhatsApp number
  - Changing button position
  - Adjusting colors

### `ImageSlider.js`
- **Purpose**: Carousel for homepage images
- **Contains**:
  - Auto-playing image carousel
  - Navigation arrows
  - Dot indicators
  - Image list
- **Edit for**:
  - Adding/removing images
  - Changing carousel timing
  - Customizing styling

---

## `src/pages/` Folder

Each file is a complete page in the website.

### `HomePage.js`
- **Purpose**: Main landing page
- **Contains**:
  - Image slider (hero)
  - Welcome section
  - Services overview
  - "Why choose us" section
  - Contact CTA
- **Edit for**:
  - Adding/removing sections
  - Changing content
  - Customizing cards

### `ServicesPage.js`
- **Purpose**: Detailed services listing
- **Contains**:
  - Service cards
  - Expandable details
  - Pricing info
  - Schedule section
- **Edit for**:
  - Adding/removing services
  - Changing service descriptions
  - Updated pricing

### `ReviewsPage.js`
- **Purpose**: Customer testimonials
- **Contains**:
  - Review cards
  - Star ratings
  - Customer avatars
  - Overall rating summary
- **Edit for**:
  - Adding new reviews
  - Removing old reviews
  - Updating testimonials

---

## `src/assets/` Folder

- **Purpose**: Static files (images, icons, documents)
- **Currently contains**: `whatsapp-icon.svg`
- **Add for**: 
  - Custom business images
  - Logo files
  - Icons
  - PDFs, etc.

**Usage in code**:
```javascript
import image from '../assets/my-image.jpg';
// or
<img src={require('../assets/my-image.jpg')} />
```

---

## `node_modules/` Folder

- **Purpose**: All installed npm packages
- **Size**: Large (200MB+)
- **How to remove**: `rm -rf node_modules` (will reinstall from package.json)
- **Don't edit**: Never modify this folder
- **Don't push to Git**: Already in .gitignore

---

## `build/` Folder (After `npm run build`)

- **Purpose**: Production-ready optimized code
- **Created by**: `npm run build` command
- **What to do with it**: Upload to Firebase
- **Don't edit**: Automatically generated
- **Remove to save space**: `rm -rf build`

---

## File Edit Priority (Most Important First)

1. **Phone Numbers**: 
   - `Navbar.js`, `WhatsAppButton.js`, Pages

2. **Content**:
   - `HomePage.js`, `ServicesPage.js`, `ReviewsPage.js`

3. **Styling**:
   - `App.js` (theme), `index.css`

4. **Structure**:
   - `App.js` (routes), `Navbar.js` (menu)

5. **Advanced**:
   - Component logic, new components

---

## File Naming Conventions

- **Components**: PascalCase (e.g., `Navbar.js`, `HomePage.js`)
- **Hooks/utils**: camelCase (e.g., `useAuth.js`)
- **Assets**: lowercase with hyphens (e.g., `hero-image.jpg`)
- **Styles**: `.css` or in component (`.js`)

---

## Development Workflow

```
1. Edit files in src/
2. npm start watches and reloads
3. Test in browser
4. When ready: npm run build
5. Deploy: firebase deploy
```

---

## Typical First Edit Checklist

- [ ] Update phone numbers in all files
- [ ] Change business name
- [ ] Update services/reviews content
- [ ] Change colors in Navbar
- [ ] Test locally
- [ ] Deploy

---

That's it! Now you understand the entire project structure. Happy developing! 🎉
