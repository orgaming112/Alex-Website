const fs = require('fs');
const path = require('path');

// Create directories if they don't exist
const photoDir = path.join(__dirname, 'public', 'photos', 'home');
if (!fs.existsSync(photoDir)) {
  fs.mkdirSync(photoDir, { recursive: true });
  console.log(`✓ Created directory: ${photoDir}`);
}

// Generate placeholder images using data URLs and HTML canvas
const canvas = require('canvas');
const { createCanvas } = canvas;

const images = [
  { name: 'image1.jpg', title: 'שירותי אינסטלציה', color: '#1a472a' },
  { name: 'image2.jpg', title: 'תיקון ברזים', color: '#254d5c' },
  { name: 'image3.jpg', title: 'שירותי תיקון כללי', color: '#4a3a2a' },
  { name: 'image4.jpg', title: 'התקנת מערכות מים', color: '#2a3a52' },
];

images.forEach((img) => {
  const canvasObj = createCanvas(1200, 500);
  const ctx = canvasObj.getContext('2d');

  // Background gradient
  const gradient = ctx.createLinearGradient(0, 0, 1200, 500);
  gradient.addColorStop(0, img.color);
  gradient.addColorStop(1, '#0a1628');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1200, 500);

  // Add copper accent
  ctx.fillStyle = '#c47a3a';
  ctx.fillRect(0, 0, 1200, 5);

  // Add text
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 48px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(img.title, 600, 200);

  // Add subtitle
  ctx.fillStyle = '#8a9bb0';
  ctx.font = '24px Arial';
  ctx.fillText('מומחה אינסטלציה ותיקון', 600, 280);

  // Save image
  const buffer = canvasObj.toBuffer('image/jpeg');
  fs.writeFileSync(path.join(photoDir, img.name), buffer);
  console.log(`✓ Generated: ${img.name}`);
});

console.log('\n✓ All placeholder images generated successfully!');
console.log(`Images saved to: ${photoDir}`);
