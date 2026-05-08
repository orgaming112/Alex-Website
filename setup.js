#!/usr/bin/env node

/**
 * INSTALLATION & DEPLOYMENT HELPER SCRIPT
 * Run this file for prompts on what to do next
 * 
 * Usage: node setup-helper.js
 */

const fs = require('fs');
const path = require('path');

const RESET = '\x1b[0m';
const GREEN = '\x1b[32m';
const BLUE = '\x1b[34m';
const YELLOW = '\x1b[33m';
const RED = '\x1b[31m';

console.clear();

console.log(`
${BLUE}┌────────────────────────────────────────────────────────────┐
│                                                              │
│   ${GREEN}🔧 Pro Plumber Business Website - Setup Helper${BLUE}         │
│                                                              │
└────────────────────────────────────────────────────────────┘${RESET}
`);

console.log(`${GREEN}✓ Project Files Created Successfully!${RESET}\n`);

console.log(`${YELLOW}📋 What's Included:${RESET}`);
console.log(`
${GREEN}Core Application Files:${RESET}
  • src/App.js - Main application with routing
  • src/components/Navbar.js - Navigation bar with phone number
  • src/components/WhatsAppButton.js - Floating WhatsApp button
  • src/components/ImageSlider.js - Homepage carousel
  • src/pages/HomePage.js - Main landing page
  • src/pages/ServicesPage.js - Services listing
  • src/pages/ReviewsPage.js - Customer reviews
  • public/index.html - HTML template
  • package.json - Dependencies & scripts

${GREEN}Configuration Files:${RESET}
  • firebase.json - Firebase hosting setup
  • .firebaserc.example - Firebase config template
  • .gitignore - Git ignore rules

${GREEN}Documentation (Read in this order):${RESET}
  1. START_HERE.md - 👈 Begin here! (5 minutes)
  2. SETUP.md - Detailed guide (20 minutes)
  3. DEPLOYMENT.md - Deploy to web (15 minutes)
  4. QUICK_REFERENCE.md - Commands & edits
  5. EXAMPLES.md - Code samples
  6. FOLDER_STRUCTURE.md - Understand files
  7. PRE_DEPLOYMENT_CHECKLIST.md - Before going live
  8. DOCUMENTATION_INDEX.md - Full index
`);

console.log(`${YELLOW}🚀 Quick Start (5 Minutes):${RESET}
  ${BLUE}Step 1:${RESET} Open terminal in this folder
  ${BLUE}Step 2:${RESET} Run: ${GREEN}npm install${RESET}
  ${BLUE}Step 3:${RESET} Run: ${GREEN}npm start${RESET}
  ${BLUE}Step 4:${RESET} Browser opens automatically
  ${BLUE}Step 5:${RESET} Press CTRL+C to stop
`);

console.log(`${YELLOW}⚡ Common First Edits:${RESET}`);
console.log(`
  ${BLUE}1. Change phone number${RESET}
     Edit: src/components/Navbar.js (line 30-31)
     Edit: src/components/WhatsAppButton.js (line 10)
  
  ${BLUE}2. Change business name${RESET}
     Edit: src/components/Navbar.js (line 66)
  
  ${BLUE}3. Change theme colors${RESET}
     Edit: src/App.js (line 8-14)
  
  ${BLUE}4. Add services${RESET}
     Edit: src/pages/ServicesPage.js (services array)
  
  ${BLUE}5. Add reviews${RESET}
     Edit: src/pages/ReviewsPage.js (reviews array)
`);

console.log(`${YELLOW}📱 Test On Your Phone:${RESET}
  1. Run: ${GREEN}npm start${RESET}
  2. Open DevTools (F12)
  3. Click phone icon
  4. Select device
  5. Test all features
`);

console.log(`${YELLOW}🌐 Deploy to Web:${RESET}
  1. Read: DEPLOYMENT.md
  2. Create Firebase project
  3. Run: ${GREEN}npm run build${RESET}
  4. Run: ${GREEN}firebase login${RESET}
  5. Run: ${GREEN}firebase deploy${RESET}
  6. Your site goes live! 🎉
`);

console.log(`${YELLOW}📖 Documentation Quick Links:${RESET}
  ${GREEN}START_HERE.md${RESET}              - Begin here (5 min)
  ${GREEN}QUICK_REFERENCE.md${RESET}        - Commands & edits
  ${GREEN}SETUP.md${RESET}                   - Full setup guide
  ${GREEN}DEPLOYMENT.md${RESET}             - Firebase deployment
  ${GREEN}EXAMPLES.md${RESET}               - Code examples
  ${GREEN}FOLDER_STRUCTURE.md${RESET}      - File explanations
  ${GREEN}PRE_DEPLOYMENT_CHECKLIST.md${RESET} - Before going live
  ${GREEN}DOCUMENTATION_INDEX.md${RESET}    - Full index
`);

console.log(`${YELLOW}🔧 Essential Commands:${RESET}
  ${GREEN}npm install${RESET}       - Install dependencies
  ${GREEN}npm start${RESET}         - Start dev server
  ${GREEN}npm run build${RESET}     - Build for production
  ${GREEN}firebase login${RESET}    - Login to Firebase
  ${GREEN}firebase deploy${RESET}   - Deploy to Firebase
`);

console.log(`${YELLOW}✅ Before You Deploy:${RESET}
  1. Update phone numbers
  2. Update business name
  3. Add services & reviews
  4. Test on mobile
  5. Complete PRE_DEPLOYMENT_CHECKLIST.md
  6. Build: npm run build
  7. Deploy: firebase deploy
`);

console.log(`${YELLOW}❓ Questions?${RESET}
  • Check START_HERE.md (quick start)
  • Check SETUP.md (detailed guide)
  • Check QUICK_REFERENCE.md (quick lookup)
  • Check EXAMPLES.md (code samples)
`);

console.log(`${GREEN}
┌────────────────────────────────────────────────────────────┐
│                                                              │
│   ${BLUE}👉 Next Step: Open START_HERE.md and read first 5 min${GREEN}     │
│                                                              │
│   ${BLUE}Then run: npm install && npm start${GREEN}                     │
│                                                              │
│                   🚀 Let's build something awesome!${GREEN}        │
│                                                              │
└────────────────────────────────────────────────────────────┘
${RESET}
`);

// Check if Node modules exists
const nodeModulesPath = path.join(__dirname, 'node_modules');
if (!fs.existsSync(nodeModulesPath)) {
  console.log(`${YELLOW}⚠️  Note: Dependencies not installed yet.${RESET}`);
  console.log(`${YELLOW}   Run: npm install${RESET}\n`);
} else {
  console.log(`${GREEN}✓ Dependencies installed!${RESET}`);
  console.log(`${YELLOW}   Run: npm start${RESET}\n`);
}

console.log(`${BLUE}═══════════════════════════════════════════════════════════${RESET}\n`);
