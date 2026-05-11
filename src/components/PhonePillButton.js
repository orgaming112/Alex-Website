import React from 'react';
import { Box, Typography } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import { colors } from '../App';

const PhonePillButton = ({ size = 'large', fullWidth = false }) => {
  const isCompact = size === 'compact';

  return (
    <Box
      component="a"
      href="tel:0526410042"
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        textDecoration: 'none',
        width: fullWidth ? '100%' : 'auto',
        justifyContent: fullWidth ? 'center' : 'flex-start',
        background: `linear-gradient(135deg, ${colors.copper} 0%, ${colors.copperLight} 100%)`,
        borderRadius: '60px',
        boxShadow: '0 8px 24px rgba(196, 122, 58, 0.25)',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-3px)',
          boxShadow: '0 14px 40px rgba(196, 122, 58, 0.4)',
        },
        '&:active': { transform: 'translateY(0)' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0,0,0,0.15)',
          width: isCompact ? { xs: 38, md: 42 } : { xs: 52, md: 60 },
          height: isCompact ? { xs: 38, md: 42 } : { xs: 52, md: 60 },
          borderRadius: '50%',
          mx: isCompact ? 0.5 : 1,
          flexShrink: 0,
        }}
      >
        <PhoneIcon
          sx={{
            color: colors.white,
            fontSize: isCompact ? { xs: '1rem', md: '1.1rem' } : { xs: '1.4rem', md: '1.6rem' },
          }}
        />
      </Box>
      <Box sx={{ pr: isCompact ? { xs: 2, md: 2.5 } : { xs: 3, md: 4 }, pl: 0.5 }}>
        <Typography
          sx={{
            color: colors.white,
            fontFamily: '"Rubik", sans-serif',
            fontWeight: 800,
            fontSize: isCompact ? { xs: '0.9rem', md: '1rem' } : { xs: '1.3rem', md: '1.6rem' },
            letterSpacing: '0.05em',
            lineHeight: 1,
            direction: 'ltr',
            whiteSpace: 'nowrap',
          }}
        >
          052-641-0042
        </Typography>
      </Box>
    </Box>
  );
};

export default PhonePillButton;
