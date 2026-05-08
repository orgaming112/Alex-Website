import React, { useState, createContext, useContext, useEffect, useRef, useCallback } from 'react';import {
  Fab,
  Drawer,
  Box,
  Typography,
  Button,
  Stack,
  IconButton,
  Divider,
  Tooltip,
} from '@mui/material';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import HighlightIcon from '@mui/icons-material/Highlight';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import { colors } from '../App';

/**
 * AccessibilityContext - Global state for accessibility settings
 */
const AccessibilityContext = createContext();

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within AccessibilityProvider');
  }
  return context;
};

/**
 * AccessibilityProvider - Wraps the app to provide global accessibility settings
 */
export const AccessibilityProvider = ({ children }) => {
  const [fontSize, setFontSize] = useState(1); // multiplier: 1, 1.1, 1.2, 1.3, 1.5
  const [highContrast, setHighContrast] = useState(false);
  const [grayscale, setGrayscale] = useState(false);

  // Apply settings to root element
  useEffect(() => {
    const root = document.documentElement;
    
    // Font size
    root.style.fontSize = `${16 * fontSize}px`;
    
    // High contrast
    if (highContrast) {
      root.style.filter = 'contrast(1.5)';
    } else {
      root.style.filter = 'grayscale(0)';
    }
    
    // Grayscale
    if (grayscale) {
      root.style.filter = highContrast 
        ? 'contrast(1.5) grayscale(100%)' 
        : 'grayscale(100%)';
    }
  }, [fontSize, highContrast, grayscale]);

  const value = {
    fontSize,
    setFontSize,
    highContrast,
    setHighContrast,
    grayscale,
    setGrayscale,
  };

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
};

/**
 * AccessibilityPanel - Drawer content with accessibility controls
 */
const AccessibilityPanel = ({ open, onClose }) => {
  const { 
    fontSize, 
    setFontSize, 
    highContrast, 
    setHighContrast, 
    grayscale, 
    setGrayscale 
  } = useAccessibility();

  const closeButtonRef = useRef(null);
  const firstFocusableRef = useRef(null);

  // Handle keyboard events (Escape to close)
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  // Focus management when drawer opens
  useEffect(() => {
    if (open && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [open]);

  const handleIncreaseFontSize = () => {
    if (fontSize < 1.5) {
      setFontSize(prev => Math.min(prev + 0.1, 1.5));
    }
  };

  const handleDecreaseFontSize = () => {
    if (fontSize > 1) {
      setFontSize(prev => Math.max(prev - 0.1, 1));
    }
  };

  const handleResetFontSize = () => {
    setFontSize(1);
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      role="region"
      aria-label="תפריט נגישות"
      aria-modal="true"
      PaperProps={{
        sx: {
          backgroundColor: colors.slate,
          borderLeft: `3px solid ${colors.copper}`,
        },
      }}
    >
      <Box
        component="nav"
        aria-label="בקרות נגישות"
        sx={{
          width: { xs: '80vw', sm: 300 },
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            id="accessibility-panel-title"
            component="h2"
            variant="h6"
            sx={{
              fontWeight: 700,
              color: colors.copper,
              fontFamily: '"Rubik", sans-serif',
            }}
          >
            ♿ נגישות
          </Typography>
          <IconButton
            ref={closeButtonRef}
            onClick={onClose}
            size="small"
            aria-label="סגור תפריט נגישות"
            title="סגור תפריט נגישות (Escape)"
            sx={{
              color: colors.pipeGray,
              '&:hover': { color: colors.copper },
              '&:focus-visible': {
                outline: `2px solid ${colors.copper}`,
                outlineOffset: '2px',
              },
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider sx={{ borderColor: colors.copper, opacity: 0.2 }} />

        {/* Font Size Control */}
        <Box>
          <Typography
            id="font-size-label"
            variant="body2"
            sx={{
              fontWeight: 600,
              color: colors.copper,
              fontFamily: '"Rubik", sans-serif',
              mb: 1.5,
            }}
          >
            גודל הגופן: {Math.round(fontSize * 100)}%
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            sx={{
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 1,
            }}
            role="group"
            aria-labelledby="font-size-label"
          >
            <Tooltip title="הקטן">
              <IconButton
                onClick={handleDecreaseFontSize}
                disabled={fontSize <= 1}
                size="small"
                aria-label="הקטן גודל גופן"
                aria-disabled={fontSize <= 1}
                sx={{
                  backgroundColor: colors.copper,
                  color: 'white',
                  transition: 'all 0.2s',
                  '&:hover:not(:disabled)': {
                    backgroundColor: colors.copperLight,
                  },
                  '&:focus-visible': {
                    outline: `2px solid ${colors.cream}`,
                    outlineOffset: '2px',
                  },
                  '&:disabled': {
                    backgroundColor: colors.pipeGray,
                    opacity: 0.5,
                  },
                }}
              >
                <RemoveIcon fontSize="small" />
              </IconButton>
            </Tooltip>

            <Button
              variant="outlined"
              size="small"
              onClick={handleResetFontSize}
              aria-label="אפס גודל גופן לברירת מחדל"
              sx={{
                flex: 1,
                borderColor: colors.copper,
                color: colors.copper,
                fontFamily: '"Rubik", sans-serif',
                '&:hover': {
                  borderColor: colors.copperLight,
                  backgroundColor: `rgba(${196}, ${122}, ${58}, 0.1)`,
                },
                '&:focus-visible': {
                  outline: `2px solid ${colors.copper}`,
                  outlineOffset: '2px',
                },
              }}
            >
              איפוס
            </Button>

            <Tooltip title="הגדל">
              <IconButton
                onClick={handleIncreaseFontSize}
                disabled={fontSize >= 1.5}
                size="small"
                aria-label="הגדל גודל גופן"
                aria-disabled={fontSize >= 1.5}
                sx={{
                  backgroundColor: colors.copper,
                  color: 'white',
                  transition: 'all 0.2s',
                  '&:hover:not(:disabled)': {
                    backgroundColor: colors.copperLight,
                  },
                  '&:focus-visible': {
                    outline: `2px solid ${colors.cream}`,
                    outlineOffset: '2px',
                  },
                  '&:disabled': {
                    backgroundColor: colors.pipeGray,
                    opacity: 0.5,
                  },
                }}
              >
                <AddIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Stack>
        </Box>

        <Divider sx={{ borderColor: colors.copper, opacity: 0.2 }} />

        {/* High Contrast Toggle */}
        <Box>
          <Stack
            direction="row"
            spacing={2}
            sx={{
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
            role="group"
            aria-labelledby="contrast-label"
          >
            <Typography
              id="contrast-label"
              variant="body2"
              sx={{
                fontWeight: 600,
                color: colors.pipeGray,
                fontFamily: '"Heebo", sans-serif',
              }}
            >
              ניגודיות גבוהה
            </Typography>
            <Button
              variant={highContrast ? 'contained' : 'outlined'}
              size="small"
              startIcon={<HighlightIcon />}
              onClick={() => setHighContrast(!highContrast)}
              aria-pressed={highContrast}
              aria-label={highContrast ? 'ניגודיות גבוהה פעילה, לחץ להשבתה' : 'ניגודיות גבוהה כבויה, לחץ להפעלה'}
              sx={{
                backgroundColor: highContrast ? colors.copper : 'transparent',
                borderColor: colors.copper,
                color: highContrast ? 'white' : colors.copper,
                fontFamily: '"Rubik", sans-serif',
                fontWeight: 600,
                transition: 'all 0.2s',
                '&:hover': {
                  backgroundColor: highContrast ? colors.copperLight : `rgba(${196}, ${122}, ${58}, 0.1)`,
                },
                '&:focus-visible': {
                  outline: `2px solid ${colors.cream}`,
                  outlineOffset: '2px',
                },
              }}
            >
              {highContrast ? 'פעיל' : 'כבוי'}
            </Button>
          </Stack>
        </Box>

        <Divider sx={{ borderColor: colors.copper, opacity: 0.2 }} />

        {/* Grayscale Toggle */}
        <Box>
          <Stack
            direction="row"
            spacing={2}
            sx={{
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
            role="group"
            aria-labelledby="grayscale-label"
          >
            <Typography
              id="grayscale-label"
              variant="body2"
              sx={{
                fontWeight: 600,
                color: colors.pipeGray,
                fontFamily: '"Heebo", sans-serif',
              }}
            >
              מצב שחור-לבן
            </Typography>
            <Button
              variant={grayscale ? 'contained' : 'outlined'}
              size="small"
              startIcon={<InvertColorsIcon />}
              onClick={() => setGrayscale(!grayscale)}
              aria-pressed={grayscale}
              aria-label={grayscale ? 'מצב שחור-לבן פעיל, לחץ להשבתה' : 'מצב שחור-לבן כבוי, לחץ להפעלה'}
              sx={{
                backgroundColor: grayscale ? colors.copper : 'transparent',
                borderColor: colors.copper,
                color: grayscale ? 'white' : colors.copper,
                fontFamily: '"Rubik", sans-serif',
                fontWeight: 600,
                transition: 'all 0.2s',
                '&:hover': {
                  backgroundColor: grayscale ? colors.copperLight : `rgba(${196}, ${122}, ${58}, 0.1)`,
                },
                '&:focus-visible': {
                  outline: `2px solid ${colors.cream}`,
                  outlineOffset: '2px',
                },
              }}
            >
              {grayscale ? 'פעיל' : 'כבוי'}
            </Button>
          </Stack>
        </Box>

        <Divider sx={{ borderColor: colors.copper, opacity: 0.2 }} />

        {/* Info */}
        <Typography
          variant="caption"
          sx={{
            color: colors.pipeGray,
            fontFamily: '"Heebo", sans-serif',
            textAlign: 'center',
            mt: 1,
          }}
        >
          ההגדרות שלך יישמרו באופן זמני בדפדפן זה
        </Typography>

        {/* Keyboard hint */}
        <Typography
          variant="caption"
          sx={{
            color: colors.pipeGray,
            fontFamily: '"Heebo", sans-serif',
            textAlign: 'center',
            fontSize: '0.75rem',
            opacity: 0.8,
          }}
        >
          לחץ ESC כדי לסגור
        </Typography>
      </Box>
    </Drawer>
  );
};

/**
 * AccessibilityButton - Floating action button for accessibility
 */
const AccessibilityButton = () => {
  const [panelOpen, setPanelOpen] = useState(false);
  const fabRef = useRef(null);

  const handleOpenPanel = () => {
    setPanelOpen(true);
  };

  const handleClosePanel = () => {
    setPanelOpen(false);
    // Return focus to FAB after closing
    if (fabRef.current) {
      fabRef.current.focus();
    }
  };

  return (
    <>
      <Tooltip title="נגישות" placement="top">
        <Fab
          ref={fabRef}
          onClick={handleOpenPanel}
          aria-expanded={panelOpen}
          aria-controls="accessibility-panel-controls"
          aria-label="פתח תפריט נגישות - בקרות גודל גופן, ניגודיות וצבעים"
          sx={{
            position: 'fixed',
            bottom: { xs: 20, md: 30 },
            right: { xs: 20, md: 30 },
            backgroundColor: '#1976d2',
            color: 'white',
            boxShadow: `0 6px 20px rgba(25, 118, 210, 0.35)`,
            zIndex: 1000,
            width: { xs: 56, md: 70 },
            height: { xs: 56, md: 70 },
            transition: 'all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
            '&:hover': {
              backgroundColor: '#1565c0',
              boxShadow: `0 12px 32px rgba(25, 118, 210, 0.4)`,
              transform: 'translateY(-2px)',
            },
            '&:focus-visible': {
              outline: `3px solid white`,
              outlineOffset: '2px',
            },
            '&:active': {
              transform: 'translateY(0)',
            },
          }}
        >
          <AccessibilityNewIcon sx={{ fontSize: { xs: '1.4rem', md: '2.5rem' } }} />
        </Fab>
      </Tooltip>

      <Box
        id="accessibility-panel-controls"
        role="region"
        aria-hidden={!panelOpen}
      >
        <AccessibilityPanel open={panelOpen} onClose={handleClosePanel} />
      </Box>
    </>
  );
};

export default AccessibilityButton;
