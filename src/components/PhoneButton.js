import React from 'react';
import { Fab, Tooltip } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import { colors } from '../App';
import { useLanguage } from '../contexts/LanguageContext';

const PhoneButton = () => {
  const { t } = useLanguage();

  return (
    <Tooltip title={t('buttons.phone')}>
      <Fab
        component="a"
        href="tel:0526410042"
        sx={{
          position: 'fixed',
          bottom: { xs: 90, md: 100 },
          left: { xs: 20, md: 30 },
          right: 'auto',
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
        <PhoneIcon sx={{ fontSize: { xs: '1.4rem', md: '2.5rem' } }} />
      </Fab>
    </Tooltip>
  );
};

export default PhoneButton;
