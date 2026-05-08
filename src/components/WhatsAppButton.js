import React from 'react';
import { Box, Fab, Tooltip, useMediaQuery, useTheme } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { colors } from '../App';

const WhatsAppButton = () => {
  const whatsappLink = 'https://wa.me/972526410042';
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Tooltip title="צור קשר דרך WhatsApp">
      <Fab
        component="a"
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          position: 'fixed',
          bottom: { xs: 20, md: 30 },
          left: { xs: 20, md: 30 },
          backgroundColor: '#25d366',
          color: colors.white,
          zIndex: 999,
          width: { xs: 56, md: 70 },
          height: { xs: 56, md: 70 },
          boxShadow: `0 6px 20px rgba(37, 211, 102, 0.35)`,
          transition: 'all 0.25s cubic-bezier(0.4, 0.0, 0.2, 1)',
          '&:hover': {
            backgroundColor: '#20ba5c',
            boxShadow: `0 12px 32px rgba(37, 211, 102, 0.4)`,
            transform: 'translateY(-2px)',
          },
          '&:active': {
            transform: 'translateY(0)',
            boxShadow: `0 4px 12px rgba(37, 211, 102, 0.3)`,
          },
        }}
      >
        <WhatsAppIcon sx={{ fontSize: { xs: '1.4rem', md: '2.5rem' } }} />
      </Fab>
    </Tooltip>
  );
};

export default WhatsAppButton;
