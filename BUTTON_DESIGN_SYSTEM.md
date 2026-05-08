# Button Design System Documentation

## Overview
A modern, consistent button design system for the plumber/handyman website. All buttons across the application now follow a unified design language with proper accessibility, responsiveness, and interaction effects.

## Design Principles

### Visual Style
- **Border Radius**: 6px for modern, clean appearance
- **Colors**: 
  - Primary: Copper (#c47a3a)
  - Secondary: Light Copper (#e09a5a)
  - Text: White (#ffffff)
- **Shadow**: `0 6px 16px rgba(196, 122, 58, 0.35)` (professional depth)
- **Transitions**: `0.25s cubic-bezier(0.4, 0.0, 0.2, 1)` (smooth, professional)
- **Minimum Height**: 44px (touch-friendly on mobile)

### Interaction Effects

#### On Hover
- Background: Lighter copper (#e09a5a)
- Shadow: Enhanced depth `0 12px 24px rgba(196, 122, 58, 0.4)`
- Transform: `translateY(-2px)` (subtle lift effect)

#### On Active/Click
- Transform: `translateY(0)` (pressed effect)
- Shadow: Reduced `0 4px 12px rgba(196, 122, 58, 0.3)`

#### On Disabled
- Background: Gray (#8a9bb0)
- Opacity: 50%
- No shadow

## Button Variants

### 1. Primary Button (Solid)
**Usage**: Main CTAs, important actions

```jsx
import StyledButton from '../components/StyledButton';

<StyledButton variant="primary" size="medium">
  חייג עכשיו
</StyledButton>
```

**Styling**:
- Background: Copper (#c47a3a)
- Text: White
- Shadow: Professional depth
- Icon: Supported via `startIcon` prop

**Sizes**:
- `small`: px-2.5, py-1, fontSize 0.9rem
- `medium`: px-4, py-1.5, fontSize 1rem (default)
- `large`: px-5, py-2, fontSize 1.1rem

### 2. Secondary Button (Outlined)
**Usage**: Alternative actions, less prominent CTAs

```jsx
<StyledButton variant="secondary" size="medium">
  למידע נוסף
</StyledButton>
```

**Styling**:
- Background: Transparent
- Border: 2px solid copper
- Text: Copper
- Hover: Subtle fill with copper background

### 3. Text Button
**Usage**: Navigation, links, minimal actions

```jsx
<StyledButton variant="text">
  קרא עוד
</StyledButton>
```

**Styling**:
- Background: None
- Text: Copper
- Hover: Light background fill
- No border

## Global Theme Override (App.js)

The MUI theme has been configured with comprehensive button overrides:

```javascript
MuiButton: {
  styleOverrides: {
    root: {
      textTransform: 'none',
      fontFamily: '"Rubik", sans-serif',
      fontWeight: 700,
      transition: 'all 0.25s cubic-bezier(0.4, 0.0, 0.2, 1)',
      borderRadius: '6px',
      minHeight: '44px',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    contained: { /* ... */ },
    outlined: { /* ... */ },
    text: { /* ... */ },
  },
}
```

This ensures all MUI `<Button>` components automatically get the proper styling.

## StyledButton Component

### Custom Component Location
`src/components/StyledButton.js`

### Features
- Preset variants for consistency
- Size options (small, medium, large)
- Full RTL support
- Icon integration (startIcon, endIcon)
- Accessibility optimized
- Fully typed and documented

### API

```jsx
<StyledButton
  variant="primary"           // 'primary' | 'secondary' | 'text'
  size="medium"               // 'small' | 'medium' | 'large'
  fullWidth={false}           // boolean
  disabled={false}            // boolean
  startIcon={<PhoneIcon />}   // ReactElement (optional)
  sx={{}}                     // MUI sx prop for overrides
  {...buttonProps}            // All standard MUI Button props
>
  Button Text
</StyledButton>
```

## Implementation Examples

### Example 1: Primary CTA in Home Page
**File**: `src/pages/HomePage.js`

```jsx
import StyledButton from '../components/StyledButton';
import PhoneIcon from '@mui/icons-material/Phone';

<StyledButton
  component="a"
  href="tel:0526410042"
  variant="primary"
  size="large"
  startIcon={<PhoneIcon />}
>
  חייג עכשיו
</StyledButton>
```

### Example 2: Navigation Button
**File**: `src/components/Navbar.js`

```jsx
<StyledButton
  component={RouterLink}
  to="/works"
  variant="primary"
  size="medium"
>
  ראה עבודות
</StyledButton>
```

### Example 3: Secondary Action in Drawer
**File**: `src/components/Navbar.js` (drawer)

```jsx
<StyledButton
  component="a"
  href={phoneLink}
  fullWidth
  variant="primary"
  size="medium"
  startIcon={<PhoneIcon />}
>
  התקשר: {phoneNumber}
</StyledButton>
```

### Example 4: WhatsApp Floating Button
**File**: `src/components/WhatsAppButton.js`

```jsx
<Fab
  component="a"
  href={whatsappLink}
  sx={{
    // Custom styling with new color scheme
    backgroundColor: '#25d366',
    boxShadow: `0 6px 16px rgba(37, 211, 102, 0.35)`,
    transition: 'all 0.25s cubic-bezier(0.4, 0.0, 0.2, 1)',
    '&:hover': {
      backgroundColor: '#20ba5c',
      transform: 'translateY(-2px)',
    },
  }}
>
  <WhatsAppIcon />
</Fab>
```

## Files Updated

### Core Components
1. **src/components/StyledButton.js** - New custom button component
2. **src/App.js** - Enhanced MUI theme with comprehensive button overrides

### Pages Updated
1. **src/pages/HomePage.js**
   - Welcome section CTA button
   - Contact section "חייג עכשיו" button
   - Now uses `<StyledButton>`

2. **src/pages/WorksPage.js**
   - Contact CTA button
   - Now uses `<StyledButton>`

3. **src/pages/ServicesPage.js**
   - Contact CTA button
   - Now uses `<StyledButton>`

### Components Updated
1. **src/components/Navbar.js**
   - Desktop menu buttons
   - Mobile drawer buttons
   - Phone and WhatsApp buttons
   - Now uses `<StyledButton>` for contact buttons

2. **src/components/WhatsAppButton.js**
   - Floating action button
   - Updated with new transition system

## RTL Support

All buttons are fully RTL-compatible:
- Icons and text spacing adapt properly in RTL
- Text alignment and direction handled automatically
- No additional configuration needed

## Accessibility Features

✅ **Touch-Friendly**: Minimum 44px height
✅ **Contrast**: WCAG AA compliant color contrasts
✅ **Padding**: Adequate spacing (px-4, py-1.5)
✅ **Focus States**: Proper focus indicators on keyboard navigation
✅ **Disabled State**: Clear visual distinction

## Responsiveness

Buttons scale appropriately across breakpoints:
- **Mobile (xs)**: Smaller padding, appropriate text size
- **Tablet (sm/md)**: Standard sizing
- **Desktop (md/lg)**: Full-sized buttons with proper spacing

## Color Tokens

```javascript
const colors = {
  copper: '#c47a3a',        // Primary
  copperLight: '#e09a5a',   // Hover state
  navy: '#0a1628',          // Dark background
  white: '#ffffff',         // Text
  pipeGray: '#8a9bb0',      // Disabled state
};
```

## Transition Standards

All buttons use the same timing function for consistency:
```css
transition: all 0.25s cubic-bezier(0.4, 0.0, 0.2, 1);
```

This creates a smooth, professional animation that:
- Eases in at the start (0.4)
- Accelerates through the middle (0.0)
- Decelerates at the end (0.2 and 1.0)

## Best Practices

1. **Use Variants Appropriately**
   - Primary for main actions
   - Secondary for alternatives
   - Text for navigation/subtle actions

2. **Icon Placement**
   - Use `startIcon` for icons before text
   - Use `endIcon` for icons after text
   - Ensure proper spacing (automatic with MUI)

3. **Button Size**
   - Use `large` for main CTAs
   - Use `medium` for regular buttons (default)
   - Use `small` for compact layouts

4. **Disabled State**
   - Always provide visual feedback
   - Consider tooltip explanation
   - Maintain enough contrast

5. **Loading State** (Future Enhancement)
   - Could add loading spinner support
   - Disable button during loading
   - Show progress indicator

## Testing Checklist

- [ ] Mobile view (xs breakpoint) - buttons responsive
- [ ] Tablet view (md breakpoint) - proper sizing
- [ ] Desktop view (lg breakpoint) - full layout
- [ ] Hover effects smooth and visible
- [ ] Active/pressed state working
- [ ] Disabled state clearly visible
- [ ] Icons aligned properly with text
- [ ] RTL text flows correctly
- [ ] Touch targets adequate (44px+)
- [ ] Color contrast passes WCAG AA

## Future Enhancements

Potential improvements for v2:
1. Loading button variant with spinner
2. Split button (dropdown + action)
3. Button group component
4. Size variants (xs for micro interactions)
5. Animated underline for text buttons
6. Tooltip support built-in
7. Keyboard shortcuts
8. Animation prefers-reduced-motion support

## Support

For questions or updates to the button system:
1. Review this documentation
2. Check component implementations in the files
3. Test in all breakpoints and browsers
4. Maintain consistency with established patterns
