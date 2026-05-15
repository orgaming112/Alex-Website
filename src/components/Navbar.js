import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  Typography,
  useMediaQuery,
  useTheme,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { colors } from '../App';
import StyledButton from './StyledButton';
import PhonePillButton from './PhonePillButton';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  const { language, switchLanguage, t } = useLanguage();

  const langOptions = [
    { code: 'he', label: 'עברית' },
    { code: 'ru', label: 'Русский' },
  ];

  const whatsappLink = 'https://wa.me/972526410042';

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Close drawer when location changes
  React.useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const drawer = (
    <Box
      sx={{
        width: 280,
        pt: 2,
        direction: 'rtl',
        backgroundColor: colors.navy,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'flex-start', px: 2, mb: 3 }}>
        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            color: colors.copper,
            p: 1.25,
            borderRadius: '8px',
            transition: 'all 0.25s cubic-bezier(0.4, 0.0, 0.2, 1)',
            '&:hover': {
              backgroundColor: `${colors.copper}15`,
              transform: 'rotate(90deg)',
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <List sx={{ textAlign: 'center', flex: 1, px: 2 }}>
        {/* Phone Button in Mobile Drawer */}
        <ListItem disablePadding sx={{ justifyContent: 'center', mb: 2 }}>
          <PhonePillButton size="compact" fullWidth iconLeft />
        </ListItem>

      </List>

      <Divider sx={{ backgroundColor: colors.copper, opacity: 0.3, my: 2 }} />

      <Box sx={{
        p: { xs: 2, sm: 2.5 },
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: 1.5, sm: 2 },
      }}>
        <PhonePillButton size="compact" fullWidth iconLeft />

        <StyledButton
          component="a"
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          fullWidth
          variant="primary"
          size="medium"
          startIcon={<WhatsAppIcon />}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            px: { xs: 1.5, sm: 2 },
            py: { xs: 1.25, sm: 1.5 },
            backgroundColor: '#25d366',
            boxShadow: `0 6px 16px rgba(37, 211, 102, 0.35)`,
            '& .MuiButton-startIcon': {
              marginRight: { xs: '0.75rem', sm: '1rem' },
              marginLeft: 0,
            },
            '&:hover': {
              backgroundColor: '#20ba5c',
              boxShadow: `0 12px 24px rgba(37, 211, 102, 0.4)`,
              transform: 'translateY(-2px)',
            },
            '&:active': {
              transform: 'translateY(0)',
              boxShadow: `0 4px 12px rgba(37, 211, 102, 0.3)`,
            },
          }}
        >
          {t('navbar.whatsapp')}
        </StyledButton>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: colors.navy,
          borderBottom: `3px solid ${colors.copper}`,
          boxShadow: `0 2px 8px rgba(${10}, ${22}, ${40}, 0.4)`,
          zIndex: 1200,
        }}
      >
        <Toolbar
          sx={{
            minHeight: { xs: '56px', md: '64px' },
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: { xs: 1, md: 2 },
            direction: 'rtl',
            pr: { xs: 1, md: 2 },
          }}
        >
          {/* Mobile Menu Button - Right Side */}
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              sx={{
                color: colors.copper,
                p: 1.25,
                borderRadius: '8px',
                transition: 'all 0.25s cubic-bezier(0.4, 0.0, 0.2, 1)',
                '&:hover': {
                  backgroundColor: `${colors.copper}15`,
                  transform: 'scale(1.1)',
                },
                '&:active': {
                  transform: 'scale(0.95)',
                },
              }}
            >
              <MenuIcon sx={{ fontSize: '1.8rem' }} />
            </IconButton>
          )}

          {/* Language Switcher */}
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', mr: { xs: 1, md: 2 } }}>
            {langOptions.map((option) => (
              <Button
                key={option.code}
                onClick={() => switchLanguage(option.code)}
                size="small"
                variant={language === option.code ? 'contained' : 'text'}
                sx={{
                  minWidth: '74px',
                  color: language === option.code ? colors.white : colors.copper,
                  backgroundColor: language === option.code ? colors.copper : 'transparent',
                  borderRadius: '999px',
                  fontWeight: 700,
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: language === option.code ? colors.copperLight : `${colors.copper}15`,
                  },
                }}
              >
                {option.label}
              </Button>
            ))}
          </Box>

          {/* Logo / Title - Center */}
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              flex: 1,
              textDecoration: 'none',
              color: colors.copper,
              fontWeight: 900,
              fontSize: { xs: language === 'ru' ? '0.85rem' : '1.1rem', md: '1.5rem' },
              letterSpacing: 0.5,
              fontFamily: '"Rubik", sans-serif',
              textAlign: 'center',
              transition: 'all 0.25s cubic-bezier(0.4, 0.0, 0.2, 1)',
              '&:hover': {
                transform: 'scale(1.05)',
                textShadow: `0 2px 8px ${colors.copper}40`,
              },
            }}
          >
            {t('navbar.title')}
          </Typography>

          {/* Desktop Menu - Left Side */}
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: { xs: 0.5, md: 1.5 }, alignItems: 'center' }}>
              {/* Phone Button - Direct Call */}
              <PhonePillButton size="compact" iconLeft />

            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        SlideProps={{
          direction: 'left',
        }}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: colors.navy,
            direction: 'rtl',
            width: 280,
            maxWidth: '100vw',
            overflowX: 'hidden',
            boxShadow: `0 8px 16px rgba(0, 0, 0, 0.3)`,
          },
          '& .MuiBackdrop-root': {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
