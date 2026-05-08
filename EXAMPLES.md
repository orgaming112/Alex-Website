# Examples & Customization Snippets

This file contains code examples for common customizations.

## Changing Phone Numbers

### Example 1: Change Main Phone to 040-1234567

**File**: `src/components/Navbar.js`

**Find** (around line 30):
```javascript
const phoneNumber = '052-641-0042';
const phoneLink = 'tel:+972526410042';
```

**Replace with**:
```javascript
const phoneNumber = '040-1234567';
const phoneLink = 'tel:+97240-1234567';
```

---

## Changing Business Information

### Example 2: Change Business Name

**File**: `src/components/Navbar.js`

**Find** (around line 61):
```jsx
<Typography
  variant="h6"
  component={RouterLink}
  to="/"
  sx={{...}}
>
  מומחה אינסטלציה ותיקון
</Typography>
```

**Replace text with your business name**:
```jsx
<Typography
  variant="h6"
  component={RouterLink}
  to="/"
  sx={{...}}
>
  שם העסק שלך
</Typography>
```

---

### Example 3: Change Primary Color

**File**: `src/App.js`

**Find** (around line 8-14):
```javascript
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',  // This is the main color
    },
```

**To change from blue to red**:
```javascript
const theme = createTheme({
  palette: {
    primary: {
      main: '#d32f2f',  // Red
    },
```

**Common colors**:
- Blue: `#1976d2`
- Red: `#d32f2f`
- Green: `#388e3c`
- Purple: `#7b1fa2`
- Orange: `#f57c00`

---

## Customizing Services

### Example 4: Add a New Service

**File**: `src/pages/ServicesPage.js`

**Find** the `services` array (around line 15):
```javascript
const services = [
  {
    id: 1,
    title: 'שירותי אינסטלציה',
    icon: PlumbingIcon,
    description: 'שירותים מלאים של אינסטלציה',
    details: [
      'התקנת ברזים ומקלחות',
      ...
    ],
  },
  // More services...
];
```

**Add a new service** at the end of the array:
```javascript
  {
    id: 5,
    title: 'תיקור דלתות וחלונות',
    icon: WindowIcon,
    description: 'תיקור וטיפול בדלתות וחלונות',
    details: [
      'תיקור דלתות שבורות',
      'החלפת חלונות',
      'סיזור תריסים',
      'טיפול בנעילות',
    ],
  },
```

---

## Customizing Reviews

### Example 5: Add a New Review

**File**: `src/pages/ReviewsPage.js`

**Find** the `reviews` array (around line 8):
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
  // More reviews...
];
```

**Add a new review** at the end:
```javascript
  {
    id: 7,
    name: 'אריה כוהן',
    rating: 5,
    date: '2026-03-25',
    text: 'עבודה מצוינת! הגבר הגיע בדיוק בזמן, עבד בדייקנות ובמקצועיות. ממליץ בחום!',
    service: 'התקנת מערכת ביוב',
  },
```

**Date format**: `YYYY-MM-DD` (e.g., `2026-03-25`)  
**Rating**: 1-5 stars

---

## Customizing Slider Images

### Example 6: Change Carousel Images

**File**: `src/components/ImageSlider.js`

**Find** the `sliderImages` array (around line 8):
```javascript
const sliderImages = [
  {
    id: 1,
    title: 'שירותי אינסטלציה',
    src: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1200&h=500&fit=crop',
  },
  // More images...
];
```

**Change an image URL**:
```javascript
  {
    id: 1,
    title: 'שירותי אינסטלציה',
    src: 'https://your-image-url.com/plumbing.jpg',  // New URL
  },
```

**How to find images**:
1. Go to [Unsplash.com](https://unsplash.com)
2. Search for "plumber" or "handyman"
3. Click on an image
4. Copy the full URL

**Image format**: 1200x500px recommended, but any aspect ratio works

---

## Changing Theme Colors

### Example 7: Complete Theme Customization

**File**: `src/App.js`

**Current theme**:
```javascript
const theme = createTheme({
  direction: 'rtl',
  palette: {
    primary: {
      main: '#1976d2',      // Main blue
    },
    secondary: {
      main: '#ff9800',      // Orange accent
    },
    success: {
      main: '#25d366',      // WhatsApp green
    },
  },
});
```

**Modern color schemes**:

**Professional Blue**:
```javascript
primary: { main: '#0066cc' },
secondary: { main: '#00ccff' },
```

**Bold Orange**:
```javascript
primary: { main: '#ff6b35' },
secondary: { main: '#004e89' },
```

**Modern Teal**:
```javascript
primary: { main: '#00897b' },
secondary: { main: '#0097a7' },
```

---

## Creating a New Page

### Example 8: Add a "Contact Us" Page

**Step 1**: Create file `src/pages/ContactPage.js`:

```javascript
import React from 'react';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  useTheme,
} from '@mui/material';

const ContactPage = () => {
  const theme = useTheme();
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you could send to email or database
    alert('תודה על הפנייה! נחזור אליך בקרוב.');
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Typography variant="h1" sx={{ mb: 3, textAlign: 'center' }}>
          צור קשר
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <TextField
            label="שם מלא"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="טלפון"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="הודעה"
            name="message"
            value={formData.message}
            onChange={handleChange}
            multiline
            rows={5}
            required
            fullWidth
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
          >
            שלח הודעה
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactPage;
```

**Step 2**: Add route in `src/App.js`:

**Find** (around line 45):
```javascript
<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/services" element={<ServicesPage />} />
  <Route path="/reviews" element={<ReviewsPage />} />
</Routes>
```

**Replace with**:
```javascript
<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/services" element={<ServicesPage />} />
  <Route path="/reviews" element={<ReviewsPage />} />
  <Route path="/contact" element={<ContactPage />} />
</Routes>
```

Also add import at top:
```javascript
import ContactPage from './pages/ContactPage';
```

**Step 3**: Add menu item in `src/components/Navbar.js`

**Find** (around line 30):
```javascript
const menuItems = [
  { label: 'בית', path: '/' },
  { label: 'עבודות', path: '/services' },
  { label: 'ביקורות', path: '/reviews' },
];
```

**Replace with**:
```javascript
const menuItems = [
  { label: 'בית', path: '/' },
  { label: 'עבודות', path: '/services' },
  { label: 'ביקורות', path: '/reviews' },
  { label: 'צור קשר', path: '/contact' },
];
```

---

## Common CSS Customizations

### Example 9: Customize Button Styling

**File**: Any page component where you want custom buttons

**Default button**:
```jsx
<Button variant="contained" color="primary">
  Click me
</Button>
```

**Large, rounded button**:
```jsx
<Button
  variant="contained"
  color="primary"
  size="large"
  sx={{
    borderRadius: 3,
    py: 2,
    px: 4,
    fontSize: '1.1rem',
  }}
>
  Click me
</Button>
```

---

## Responsive Design Example

### Example 10: Responsive Text Size

```jsx
<Typography
  variant="h1"
  sx={{
    fontSize: { xs: '1.5rem', sm: '2rem', md: '3rem', lg: '4rem' },
  }}
>
  This text gets bigger on larger screens
</Typography>
```

**Breakpoints**:
- `xs`: Mobile (< 600px)
- `sm`: Tablet landscape (600px - 900px)
- `md`: Tablet & small laptop (900px - 1200px)
- `lg`: Large laptop (1200px+)

---

## Testing Your Changes

After any edit:

1. **Save file** (Ctrl+S)
2. **Check browser** (auto-reloads)
3. **Check terminal** for errors
4. **Test on mobile** (DevTools, Ctrl+Shift+M)

---

## Undo Changes

If you make a mistake:

```bash
# Discard changes to a file
git checkout -- src/components/Navbar.js

# Or reinstall everything
npm install
```

---

These examples should cover 90% of customizations! For more complex changes, refer to the MUI and React documentation.
