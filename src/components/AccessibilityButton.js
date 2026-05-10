import React, { useState, createContext, useContext, useEffect, useRef } from 'react';
import {
  Box,
  Typography,
  IconButton,
  Switch,
  Slider,
  Tooltip,
} from '@mui/material';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import CloseIcon from '@mui/icons-material/Close';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import ContrastIcon from '@mui/icons-material/Contrast';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import LanguageIcon from '@mui/icons-material/Language';
import { colors } from '../App';
import { useLanguage } from '../contexts/LanguageContext';

const AccessibilityContext = createContext();

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within AccessibilityProvider');
  }
  return context;
};

export const AccessibilityProvider = ({ children }) => {
  const [fontSize, setFontSize] = useState(1);
  const [highContrast, setHighContrast] = useState(false);
  const [grayscale, setGrayscale] = useState(false);

  useEffect(() => {
    document.documentElement.style.fontSize = `${16 * fontSize}px`;
  }, [fontSize]);

  useEffect(() => {
    const html = document.documentElement;
    let filterVal = 'none';
    if (grayscale && highContrast) filterVal = 'contrast(1.5) grayscale(100%)';
    else if (grayscale)            filterVal = 'grayscale(100%)';
    else if (highContrast)         filterVal = 'contrast(1.5)';

    if (filterVal === 'none') {
      html.style.filter = '';
      html.style.backgroundColor = '';
    } else {
      // Setting backgroundColor on <html> prevents the body background from
      // painting to the viewport canvas outside the filter context.
      html.style.backgroundColor = '#0a1628';
      html.style.filter = filterVal;
    }
  }, [highContrast, grayscale]);

  return (
    <AccessibilityContext.Provider value={{ fontSize, setFontSize, highContrast, setHighContrast, grayscale, setGrayscale }}>
      {children}
    </AccessibilityContext.Provider>
  );
};

const ControlCard = ({ icon, label, children }) => (
  <Box
    sx={{
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(196,122,58,0.15)',
      borderRadius: '14px',
      p: 2,
      display: 'flex',
      flexDirection: 'column',
      gap: 1.5,
    }}
  >
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <Box sx={{ color: colors.copper, display: 'flex', alignItems: 'center' }}>
        {icon}
      </Box>
      <Typography sx={{ fontFamily: '"Rubik", sans-serif', fontWeight: 600, color: colors.cream, fontSize: '0.88rem' }}>
        {label}
      </Typography>
    </Box>
    {children}
  </Box>
);

const AccessibilityPanel = ({ open, onClose, isRtl }) => {
  const { fontSize, setFontSize, highContrast, setHighContrast, grayscale, setGrayscale } = useAccessibility();
  const { t, language, switchLanguage } = useLanguage();
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  useEffect(() => {
    if (open && closeButtonRef.current) closeButtonRef.current.focus();
  }, [open]);

  const fontPercent = Math.round(fontSize * 100);

  return (
    <>
      {/* Backdrop */}
      <Box
        onClick={onClose}
        sx={{
          position: 'fixed', inset: 0, zIndex: 1299,
          background: 'rgba(6,14,26,0.55)',
          backdropFilter: 'blur(4px)',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity 0.35s ease',
        }}
      />

      {/* Panel */}
      <Box
        role="dialog"
        aria-modal="true"
        aria-label={t('accessibility.panel.ariaLabel')}
        sx={{
          position: 'fixed',
          top: 0,
          right: 0,
          height: '100dvh',
          width: { xs: '82vw', sm: '340px' },
          zIndex: 1300,
          display: 'flex',
          flexDirection: 'column',
          background: `linear-gradient(160deg, #0f2040 0%, ${colors.navy} 60%, #0a1628 100%)`,
          borderLeft: `2px solid ${colors.copper}`,
          boxShadow: '-12px 0 48px rgba(0,0,0,0.55)',
          transform: open ? 'translateX(0)' : 'translateX(110%)',
          transition: 'transform 0.4s cubic-bezier(0.34, 1.28, 0.64, 1)',
          direction: isRtl ? 'rtl' : 'ltr',
          overflowY: 'auto',
        }}
      >
        {/* Header */}
        <Box
          sx={{
            background: `linear-gradient(135deg, ${colors.copper}22 0%, transparent 100%)`,
            borderBottom: `1px solid ${colors.copper}30`,
            p: 2.5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: isRtl ? 'row-reverse' : 'row',
            flexShrink: 0,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2, flexDirection: isRtl ? 'row-reverse' : 'row' }}>
            <Box
              sx={{
                width: 36, height: 36, borderRadius: '10px',
                background: `linear-gradient(135deg, ${colors.copper}, ${colors.copperLight})`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: `0 4px 12px ${colors.copper}55`,
              }}
            >
              <AccessibilityNewIcon sx={{ fontSize: '1.1rem', color: '#fff' }} />
            </Box>
            <Typography
              component="h2"
              sx={{
                fontFamily: '"Rubik", sans-serif',
                fontWeight: 800,
                fontSize: '1.05rem',
                color: colors.cream,
                letterSpacing: 0.3,
              }}
            >
              {t('accessibility.panel.title')}
            </Typography>
          </Box>

          <IconButton
            ref={closeButtonRef}
            onClick={onClose}
            size="small"
            aria-label={t('accessibility.panel.closeButton')}
            sx={{
              color: colors.pipeGray,
              border: `1px solid rgba(138,155,176,0.2)`,
              borderRadius: '8px',
              p: 0.6,
              transition: 'all 0.2s',
              '&:hover': {
                color: colors.cream,
                borderColor: colors.copper,
                background: `${colors.copper}18`,
              },
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>

        {/* Controls */}
        <Box sx={{ p: 2.5, display: 'flex', flexDirection: 'column', gap: 2, flex: 1 }}>

          {/* Font size */}
          <ControlCard icon={<TextFieldsIcon sx={{ fontSize: '1.1rem' }} />} label={`${t('accessibility.fontSize.label').replace('{percentage}', fontPercent)}`}>
            <Box sx={{ px: 0.5 }}>
              <Slider
                value={fontSize}
                min={1}
                max={1.5}
                step={0.1}
                onChange={(_, v) => setFontSize(v)}
                aria-label={t('accessibility.fontSize.label').replace('{percentage}', fontPercent)}
                sx={{
                  color: colors.copper,
                  '& .MuiSlider-thumb': {
                    width: 18,
                    height: 18,
                    background: `linear-gradient(135deg, ${colors.copper}, ${colors.copperLight})`,
                    boxShadow: `0 2px 8px ${colors.copper}66`,
                    '&:hover, &.Mui-focusVisible': {
                      boxShadow: `0 0 0 8px ${colors.copper}28`,
                    },
                  },
                  '& .MuiSlider-rail': { background: 'rgba(255,255,255,0.1)', height: 4 },
                  '& .MuiSlider-track': { height: 4, background: `linear-gradient(90deg, ${colors.copper}, ${colors.copperLight})` },
                }}
              />
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: -0.5 }}>
                <Typography sx={{ fontSize: '0.72rem', color: colors.pipeGray, fontFamily: '"Rubik", sans-serif' }}>100%</Typography>
                <Typography sx={{ fontSize: '0.72rem', color: colors.pipeGray, fontFamily: '"Rubik", sans-serif' }}>150%</Typography>
              </Box>
            </Box>
          </ControlCard>

          {/* High contrast */}
          <ControlCard icon={<ContrastIcon sx={{ fontSize: '1.1rem' }} />} label={t('accessibility.contrast.label')}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: isRtl ? 'row-reverse' : 'row' }}>
              <Typography sx={{ fontFamily: '"Rubik", sans-serif', fontSize: '0.8rem', color: highContrast ? colors.copper : colors.pipeGray, transition: 'color 0.2s' }}>
                {highContrast ? t('accessibility.contrast.on') : t('accessibility.contrast.off')}
              </Typography>
              <Switch
                checked={highContrast}
                onChange={(e) => setHighContrast(e.target.checked)}
                aria-label={t('accessibility.contrast.label')}
                sx={{
                  '& .MuiSwitch-switchBase.Mui-checked': { color: colors.copper },
                  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': { backgroundColor: colors.copper },
                  '& .MuiSwitch-track': { backgroundColor: 'rgba(255,255,255,0.15)' },
                }}
              />
            </Box>
          </ControlCard>

          {/* Grayscale */}
          <ControlCard icon={<InvertColorsIcon sx={{ fontSize: '1.1rem' }} />} label={t('accessibility.grayscale.label')}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: isRtl ? 'row-reverse' : 'row' }}>
              <Typography sx={{ fontFamily: '"Rubik", sans-serif', fontSize: '0.8rem', color: grayscale ? colors.copper : colors.pipeGray, transition: 'color 0.2s' }}>
                {grayscale ? t('accessibility.grayscale.on') : t('accessibility.grayscale.off')}
              </Typography>
              <Switch
                checked={grayscale}
                onChange={(e) => setGrayscale(e.target.checked)}
                aria-label={t('accessibility.grayscale.label')}
                sx={{
                  '& .MuiSwitch-switchBase.Mui-checked': { color: colors.copper },
                  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': { backgroundColor: colors.copper },
                  '& .MuiSwitch-track': { backgroundColor: 'rgba(255,255,255,0.15)' },
                }}
              />
            </Box>
          </ControlCard>

          {/* Language switcher */}
          <ControlCard icon={<LanguageIcon sx={{ fontSize: '1.1rem' }} />} label={language === 'ru' ? 'Изменить язык' : 'שינוי שפה'}>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {[
                { code: 'he', label: 'עברית' },
                { code: 'ru', label: 'Русский' },
              ].map(({ code, label }) => {
                const active = language === code;
                return (
                  <Box
                    key={code}
                    component="button"
                    onClick={() => switchLanguage(code)}
                    aria-pressed={active}
                    sx={{
                      flex: 1,
                      py: 0.9,
                      px: 1,
                      border: `1.5px solid ${active ? colors.copper : 'rgba(196,122,58,0.25)'}`,
                      borderRadius: '10px',
                      background: active
                        ? `linear-gradient(135deg, ${colors.copper}33, ${colors.copperLight}22)`
                        : 'rgba(255,255,255,0.03)',
                      color: active ? colors.cream : colors.pipeGray,
                      fontFamily: '"Rubik", sans-serif',
                      fontWeight: active ? 700 : 400,
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      boxShadow: active ? `0 2px 10px ${colors.copper}30` : 'none',
                      '&:hover': {
                        borderColor: colors.copper,
                        color: colors.cream,
                        background: `${colors.copper}18`,
                      },
                    }}
                  >
                    {label}
                  </Box>
                );
              })}
            </Box>
          </ControlCard>

        </Box>

        {/* Footer */}
        <Box
          sx={{
            p: 2,
            borderTop: `1px solid ${colors.copper}20`,
            flexShrink: 0,
          }}
        >
          <Typography sx={{ fontFamily: '"Rubik", sans-serif', fontSize: '0.72rem', color: colors.pipeGray, textAlign: isRtl ? 'right' : 'left', lineHeight: 1.6 }}>
            {t('accessibility.info')}
          </Typography>
          <Typography sx={{ fontFamily: '"Rubik", sans-serif', fontSize: '0.7rem', color: `${colors.pipeGray}90`, textAlign: isRtl ? 'right' : 'left', mt: 0.5 }}>
            {t('accessibility.keyboardHint')}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

const AccessibilityButton = () => {
  const [panelOpen, setPanelOpen] = useState(false);
  const fabRef = useRef(null);
  const { language, t } = useLanguage();
  const isRtl = language === 'he';

  const handleClosePanel = () => {
    setPanelOpen(false);
    if (fabRef.current) fabRef.current.focus();
  };

  return (
    <>
      <Tooltip title={t('accessibility.button.tooltip')} placement="top">
        <Box
          ref={fabRef}
          component="button"
          onClick={() => setPanelOpen(true)}
          aria-expanded={panelOpen}
          aria-label={t('accessibility.button.ariaLabel')}
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
            background: `linear-gradient(135deg, #1565c0, #1976d2)`,
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 24px rgba(25,118,210,0.45)',
            transition: 'all 0.3s cubic-bezier(0.34,1.28,0.64,1)',
            '&::before': {
              content: '""',
              position: 'absolute',
              inset: -4,
              borderRadius: '20px',
              border: '2px solid rgba(25,118,210,0.3)',
              animation: 'pulse-ring 2.5s ease-out infinite',
            },
            '@keyframes pulse-ring': {
              '0%': { transform: 'scale(1)', opacity: 0.6 },
              '100%': { transform: 'scale(1.3)', opacity: 0 },
            },
            '&:hover': {
              transform: 'translateY(-3px) scale(1.05)',
              boxShadow: '0 14px 32px rgba(25,118,210,0.55)',
            },
            '&:active': { transform: 'scale(0.96)' },
            '&:focus-visible': { outline: '3px solid #fff', outlineOffset: '3px' },
          }}
        >
          <AccessibilityNewIcon sx={{ fontSize: { xs: '1.5rem', md: '1.7rem' } }} />
        </Box>
      </Tooltip>

      <AccessibilityPanel open={panelOpen} onClose={handleClosePanel} isRtl={isRtl} />
    </>
  );
};

export default AccessibilityButton;
