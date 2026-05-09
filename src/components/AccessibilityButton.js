import React, { useState, createContext, useContext, useEffect, useRef } from 'react';
import {
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
import { useLanguage } from '../contexts/LanguageContext';

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
const AccessibilityPanel = ({ open, onClose, isRtl }) => {
  const { 
    fontSize, 
    setFontSize, 
    highContrast, 
    setHighContrast, 
    grayscale, 
    setGrayscale 
  } = useAccessibility();
  const { t } = useLanguage();

  const closeButtonRef = useRef(null);

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
      aria-label={t('accessibility.panel.ariaLabel')}
      PaperProps={{
        sx: {
          backgroundColor: colors.slate,
          borderLeft: `3px solid ${colors.copper}`,
        },
      }}
    >
      <Box
        component="nav"
        aria-label={t('accessibility.panel.ariaControlsLabel')}
        sx={{
          width: { xs: '80vw', sm: 300 },
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          direction: isRtl ? 'rtl' : 'ltr',
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: isRtl ? 'row-reverse' : 'row',
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
            {t('accessibility.panel.title')}
          </Typography>
          <IconButton
            ref={closeButtonRef}
            onClick={onClose}
            size="small"
            aria-label={t('accessibility.panel.closeButton')}
            title={t('accessibility.panel.closeButtonTitle')}
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
              textAlign: isRtl ? 'right' : 'left',
            }}
          >
            {t('accessibility.fontSize.label').replace('{percentage}', Math.round(fontSize * 100))}
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            sx={{
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 1,
              flexDirection: isRtl ? 'row-reverse' : 'row',
            }}
            role="group"
            aria-labelledby="font-size-label"
          >
            <Tooltip title={t('accessibility.fontSize.decreaseLabel')}>
              <IconButton
                onClick={handleDecreaseFontSize}
                disabled={fontSize <= 1}
                size="small"
                aria-label={t('accessibility.fontSize.decreaseName')}
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
              aria-label={t('accessibility.fontSize.resetName')}
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
              {t('accessibility.fontSize.resetLabel')}
            </Button>

            <Tooltip title={t('accessibility.fontSize.increaseLabel')}>
              <IconButton
                onClick={handleIncreaseFontSize}
                disabled={fontSize >= 1.5}
                size="small"
                aria-label={t('accessibility.fontSize.increaseName')}
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
              flexDirection: isRtl ? 'row-reverse' : 'row',
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
                fontFamily: '"Rubik", sans-serif',
              }}
            >
              {t('accessibility.contrast.label')}
            </Typography>
            <Button
              variant={highContrast ? 'contained' : 'outlined'}
              size="small"
              startIcon={<HighlightIcon />}
              onClick={() => setHighContrast(!highContrast)}
              aria-pressed={highContrast}
              aria-label={highContrast ? t('accessibility.contrast.active') : t('accessibility.contrast.inactive')}
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
              {highContrast ? t('accessibility.contrast.on') : t('accessibility.contrast.off')}
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
              flexDirection: isRtl ? 'row-reverse' : 'row',
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
                fontFamily: '"Rubik", sans-serif',
              }}
            >
              {t('accessibility.grayscale.label')}
            </Typography>
            <Button
              variant={grayscale ? 'contained' : 'outlined'}
              size="small"
              startIcon={<InvertColorsIcon />}
              onClick={() => setGrayscale(!grayscale)}
              aria-pressed={grayscale}
              aria-label={grayscale ? t('accessibility.grayscale.active') : t('accessibility.grayscale.inactive')}
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
              {grayscale ? t('accessibility.grayscale.on') : t('accessibility.grayscale.off')}
            </Button>
          </Stack>
        </Box>

        <Divider sx={{ borderColor: colors.copper, opacity: 0.2 }} />

        {/* Info */}
        <Typography
          variant="caption"
          sx={{
            color: colors.pipeGray,
            fontFamily: '"Rubik", sans-serif',
            textAlign: isRtl ? 'right' : 'left',
            mt: 1,
          }}
        >
          {t('accessibility.info')}
        </Typography>

        {/* Keyboard hint */}
        <Typography
          variant="caption"
          sx={{
            color: colors.pipeGray,
            fontFamily: '"Rubik", sans-serif',
            textAlign: isRtl ? 'right' : 'left',
            fontSize: '0.75rem',
            opacity: 0.8,
          }}
        >
          {t('accessibility.keyboardHint')}
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
  const { language, t } = useLanguage();
  const isRtl = language === 'he';

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
      <Tooltip title={t('accessibility.button.tooltip')} placement="top">
        <Fab
          ref={fabRef}
          onClick={handleOpenPanel}
          aria-expanded={panelOpen}
          aria-controls="accessibility-panel-controls"
          aria-label={t('accessibility.button.ariaLabel')}
          sx={{
            position: 'fixed',
            bottom: { xs: 20, md: 30 },
            left: 'auto',
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
        <AccessibilityPanel open={panelOpen} onClose={handleClosePanel} isRtl={isRtl} />
      </Box>
    </>
  );
};

export default AccessibilityButton;
