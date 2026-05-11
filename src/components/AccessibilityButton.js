import React, { useState, createContext, useContext, useRef, useEffect } from 'react';
import { Box, Typography, Tooltip } from '@mui/material';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import TextIncreaseIcon from '@mui/icons-material/TextIncrease';
import TextDecreaseIcon from '@mui/icons-material/TextDecrease';
import GradientIcon from '@mui/icons-material/Gradient';
import ContrastIcon from '@mui/icons-material/Contrast';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import LinkIcon from '@mui/icons-material/Link';
import FontDownloadIcon from '@mui/icons-material/FontDownload';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import CloseIcon from '@mui/icons-material/Close';
import { colors } from '../App';

const AccessibilityContext = createContext();

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) throw new Error('useAccessibility must be used within AccessibilityProvider');
  return context;
};

const applyFilter = (filter) => {
  const wrapper = document.getElementById('content-wrapper');
  if (!wrapper) return;
  if (filter) {
    wrapper.style.setProperty('filter', filter, 'important');
  } else {
    wrapper.style.removeProperty('filter');
  }
};

export const AccessibilityProvider = ({ children }) => {
  const fontSizeRef = useRef(1);
  const [grayscale, setGrayscale] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [invertColors, setInvertColors] = useState(false);
  const [lightBg, setLightBg] = useState(false);
  const [highlightLinks, setHighlightLinks] = useState(false);
  const [readableFont, setReadableFont] = useState(false);
  const [fontSize, setFontSize] = useState(1);

  const buildFilter = (gs, hc, inv) => {
    const parts = [];
    if (gs)  parts.push('grayscale(100%)');
    if (hc)  parts.push('contrast(180%)');
    if (inv) parts.push('invert(100%)');
    return parts.join(' ');
  };

  const toggleGrayscale = () => {
    const next = !grayscale;
    setGrayscale(next);
    applyFilter(buildFilter(next, highContrast, invertColors));
  };

  const toggleHighContrast = () => {
    const next = !highContrast;
    setHighContrast(next);
    applyFilter(buildFilter(grayscale, next, invertColors));
  };

  const toggleInvert = () => {
    const next = !invertColors;
    setInvertColors(next);
    applyFilter(buildFilter(grayscale, highContrast, next));
  };

  const toggleLightBg = () => {
    const next = !lightBg;
    setLightBg(next);
    const root = document.getElementById('root');
    if (root) {
      if (next) root.style.setProperty('background', '#ffffff', 'important');
      else root.style.removeProperty('background');
    }
    const allEls = document.querySelectorAll('#root *');
    allEls.forEach(el => {
      if (getComputedStyle(el).position === 'fixed') return;
      if (next) el.style.setProperty('background-color', 'transparent', 'important');
      else el.style.removeProperty('background-color');
    });
  };

  const toggleHighlightLinks = () => {
    const next = !highlightLinks;
    setHighlightLinks(next);
    const links = document.querySelectorAll('#root a');
    links.forEach(link => {
      if (next) {
        link.style.setProperty('text-decoration', 'underline', 'important');
        link.style.setProperty('outline', '2px solid #c47a3a', 'important');
      } else {
        link.style.removeProperty('text-decoration');
        link.style.removeProperty('outline');
      }
    });
  };

  const toggleReadableFont = () => {
    const next = !readableFont;
    setReadableFont(next);
    const root = document.getElementById('root');
    if (root) {
      if (next) root.style.setProperty('font-family', 'Arial, sans-serif', 'important');
      else root.style.removeProperty('font-family');
    }
  };

  const increaseFontSize = () => {
    const next = Math.min(fontSizeRef.current + 0.1, 2.5);
    fontSizeRef.current = next;
    setFontSize(next);
    document.documentElement.style.fontSize = `${16 * next}px`;
  };

  const decreaseFontSize = () => {
    const next = Math.max(fontSizeRef.current - 0.1, 0.75);
    fontSizeRef.current = next;
    setFontSize(next);
    document.documentElement.style.fontSize = `${16 * next}px`;
  };

  const resetAll = () => {
    fontSizeRef.current = 1;
    setFontSize(1);
    setGrayscale(false);
    setHighContrast(false);
    setInvertColors(false);
    setLightBg(false);
    setHighlightLinks(false);
    setReadableFont(false);

    document.documentElement.style.fontSize = '16px';
    applyFilter('');

    const wrapper = document.getElementById('content-wrapper');
    if (wrapper) wrapper.style.removeProperty('filter');

    const root = document.getElementById('root');
    if (root) {
      root.style.removeProperty('background');
      root.style.removeProperty('font-family');
    }
    document.querySelectorAll('#root *').forEach(el => {
      el.style.removeProperty('background-color');
    });
    document.querySelectorAll('#root a').forEach(link => {
      link.style.removeProperty('text-decoration');
      link.style.removeProperty('outline');
    });
  };

  return (
    <AccessibilityContext.Provider value={{
      fontSize, grayscale, highContrast, invertColors, lightBg, highlightLinks, readableFont,
      toggleGrayscale, toggleHighContrast, toggleInvert, toggleLightBg,
      toggleHighlightLinks, toggleReadableFont, increaseFontSize, decreaseFontSize, resetAll,
    }}>
      {children}
    </AccessibilityContext.Provider>
  );
};

const Feature = ({ icon, label, active, onClick }) => (
  <Box
    component="button"
    onClick={onClick}
    sx={{
      display: 'flex',
      alignItems: 'center',
      gap: 1.5,
      width: '100%',
      background: active ? 'rgba(196,122,58,0.1)' : 'transparent',
      border: 'none',
      borderBottom: '1px solid rgba(0,0,0,0.07)',
      px: 2,
      py: 1.2,
      cursor: 'pointer',
      textAlign: 'right',
      direction: 'rtl',
      transition: 'background 0.2s',
      '&:hover': { background: 'rgba(196,122,58,0.08)' },
      '&:last-child': { borderBottom: 'none' },
    }}
  >
    <Box sx={{ color: active ? colors.copper : '#555', display: 'flex', flexShrink: 0 }}>
      {icon}
    </Box>
    <Typography sx={{
      fontFamily: '"Rubik", sans-serif',
      fontSize: '0.9rem',
      fontWeight: active ? 700 : 400,
      color: active ? colors.copper : '#222',
    }}>
      {label}
    </Typography>
  </Box>
);

const AccessibilityPanel = ({ open, onClose }) => {
  const {
    fontSize, grayscale, highContrast, invertColors, lightBg, highlightLinks, readableFont,
    toggleGrayscale, toggleHighContrast, toggleInvert, toggleLightBg,
    toggleHighlightLinks, toggleReadableFont, increaseFontSize, decreaseFontSize, resetAll,
  } = useAccessibility();
  const closeRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open, onClose]);

  useEffect(() => {
    if (open && closeRef.current) closeRef.current.focus();
  }, [open]);

  const fontPct = Math.round(fontSize * 100);

  return (
    <>
      <Box onClick={onClose} sx={{
        position: 'fixed', inset: 0, zIndex: 1299,
        background: 'rgba(0,0,0,0.35)',
        opacity: open ? 1 : 0,
        pointerEvents: open ? 'auto' : 'none',
        transition: 'opacity 0.25s',
      }} />

      <Box
        role="dialog"
        aria-modal="true"
        aria-label="כלי נגישות"
        sx={{
          position: 'fixed',
          top: 0,
          right: 0,
          height: '100dvh',
          width: { xs: '280px', sm: '300px' },
          zIndex: 1300,
          background: '#ffffff',
          boxShadow: '-4px 0 24px rgba(0,0,0,0.18)',
          transform: open ? 'translateX(0)' : 'translateX(110%)',
          transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)',
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'auto',
        }}
      >
        {/* Header */}
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 2,
          py: 1.5,
          borderBottom: '2px solid #1a237e',
          background: '#1a237e',
          direction: 'rtl',
        }}>
          <Typography sx={{
            fontFamily: '"Rubik", sans-serif',
            fontWeight: 700,
            fontSize: '1rem',
            color: '#fff',
          }}>
            כלי נגישות
          </Typography>
          <Box
            ref={closeRef}
            component="button"
            onClick={onClose}
            aria-label="סגור תפריט נגישות"
            sx={{
              background: 'transparent',
              border: 'none',
              color: '#fff',
              cursor: 'pointer',
              display: 'flex',
              p: 0.5,
              borderRadius: '4px',
              '&:hover': { background: 'rgba(255,255,255,0.2)' },
              '&:focus-visible': { outline: '2px solid #fff' },
            }}
          >
            <CloseIcon fontSize="small" />
          </Box>
        </Box>

        {/* Font size controls */}
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 2, py: 1,
          borderBottom: '1px solid rgba(0,0,0,0.07)',
          direction: 'rtl',
          background: fontPct !== 100 ? 'rgba(196,122,58,0.06)' : 'transparent',
        }}>
          <Box component="button" onClick={increaseFontSize} aria-label="הגדל טקסט" sx={{
            display: 'flex', alignItems: 'center', gap: 0.5,
            background: 'transparent', border: '1px solid #ddd',
            borderRadius: '6px', px: 1.2, py: 0.6, cursor: 'pointer',
            color: '#333', fontFamily: '"Rubik", sans-serif', fontSize: '0.82rem',
            '&:hover': { background: 'rgba(196,122,58,0.1)', borderColor: colors.copper, color: colors.copper },
          }}>
            <TextIncreaseIcon sx={{ fontSize: '1.1rem' }} />
            הגדל טקסט
          </Box>
          <Typography sx={{ fontFamily: '"Rubik", sans-serif', fontSize: '0.8rem', color: fontPct !== 100 ? colors.copper : '#888', fontWeight: fontPct !== 100 ? 700 : 400 }}>
            {fontPct}%
          </Typography>
          <Box component="button" onClick={decreaseFontSize} aria-label="הקטן טקסט" sx={{
            display: 'flex', alignItems: 'center', gap: 0.5,
            background: 'transparent', border: '1px solid #ddd',
            borderRadius: '6px', px: 1.2, py: 0.6, cursor: 'pointer',
            color: '#333', fontFamily: '"Rubik", sans-serif', fontSize: '0.82rem',
            '&:hover': { background: 'rgba(196,122,58,0.1)', borderColor: colors.copper, color: colors.copper },
          }}>
            <TextDecreaseIcon sx={{ fontSize: '1.1rem' }} />
            הקטן טקסט
          </Box>
        </Box>

        {/* Feature list */}
        <Box sx={{ flex: 1 }}>
          <Feature icon={<GradientIcon />}       label="גווני אפור"          active={grayscale}      onClick={toggleGrayscale} />
          <Feature icon={<ContrastIcon />}        label="ניגודיות גבוהה"      active={highContrast}   onClick={toggleHighContrast} />
          <Feature icon={<InvertColorsIcon />}    label="ניגודיות הפוכה"      active={invertColors}   onClick={toggleInvert} />
          <Feature icon={<WbSunnyIcon />}         label="רקע בהיר"            active={lightBg}        onClick={toggleLightBg} />
          <Feature icon={<LinkIcon />}            label="הדגשת קישורים"       active={highlightLinks} onClick={toggleHighlightLinks} />
          <Feature icon={<FontDownloadIcon />}    label="פונט קריא"           active={readableFont}   onClick={toggleReadableFont} />
          <Feature icon={<RestartAltIcon />}      label="איפוס"               active={false}          onClick={resetAll} />
        </Box>

        <Box sx={{ p: 1.5, borderTop: '1px solid #eee', textAlign: 'center' }}>
          <Typography sx={{ fontSize: '0.68rem', color: '#aaa', fontFamily: '"Rubik", sans-serif' }}>
            לחץ ESC כדי לסגור
          </Typography>
        </Box>
      </Box>
    </>
  );
};

const AccessibilityButton = () => {
  const [open, setOpen] = useState(false);
  const btnRef = useRef(null);

  const handleClose = () => {
    setOpen(false);
    if (btnRef.current) btnRef.current.focus();
  };

  return (
    <>
      <Tooltip title="כלי נגישות" placement="top">
        <Box
          ref={btnRef}
          component="button"
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-label="פתח תפריט נגישות"
          sx={{
            position: 'fixed',
            bottom: { xs: 20, md: 30 },
            right: { xs: 20, md: 30 },
            zIndex: 1000,
            width: { xs: 52, md: 60 },
            height: { xs: 52, md: 60 },
            borderRadius: '16px',
            border: 'none',
            cursor: 'pointer',
            background: 'linear-gradient(135deg, #1565c0, #1976d2)',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 24px rgba(25,118,210,0.45)',
            transition: 'all 0.3s cubic-bezier(0.34,1.28,0.64,1)',
            '&:hover': { transform: 'translateY(-3px) scale(1.05)', boxShadow: '0 14px 32px rgba(25,118,210,0.55)' },
            '&:active': { transform: 'scale(0.96)' },
            '&:focus-visible': { outline: '3px solid #fff', outlineOffset: '3px' },
          }}
        >
          <AccessibilityNewIcon sx={{ fontSize: { xs: '1.5rem', md: '1.7rem' } }} />
        </Box>
      </Tooltip>

      <AccessibilityPanel open={open} onClose={handleClose} />
    </>
  );
};

export default AccessibilityButton;
