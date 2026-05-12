import React from 'react';
import { Box, Typography } from '@mui/material';
import PhonePillButton from './PhonePillButton';
import { colors } from '../App';
import { useLanguage } from '../contexts/LanguageContext';

const ImageSlider = () => {
  const { language } = useLanguage();

  const content = {
    he: {
      badge: '⚡ זמין 24/7',
      title: 'מגיע אליך מהיר',
      subtitle: 'שירות נייד ומקצועי — סתימות, אינסטלציה ותיקונים באזור ראשון והסביבה',
    },
    ru: {
      badge: '⚡ Доступен 24/7',
      title: 'Приедем быстро',
      subtitle: 'Мобильный профессиональный сервис — засоры, сантехника и ремонт в районе Ришон и окрестностях',
    },
  };

  const c = content[language] || content.he;

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: { xs: '300px', sm: '400px', md: '500px' },
        overflow: 'hidden',
        borderRadius: '12px',
        boxShadow: `0 8px 32px rgba(10,22,40,0.5)`,
        border: `3px solid ${colors.copper}`,
      }}
    >
      {/* Background image */}
      <Box
        component="img"
        src="/photos/home/image1.jpg"
        alt="אלכס ידי זהב - אינסטלטור נייד"
        sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center 40%',
        }}
      />

      {/* Gradient overlay — כהה משמאל תמיד */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(6,14,26,0.92) 0%, rgba(6,14,26,0.75) 40%, rgba(6,14,26,0.15) 100%)',
        }}
      />

      {/* Bottom gradient */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(6,14,26,0.6) 0%, transparent 50%)',
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          px: { xs: 3, sm: 5, md: 7 },
          direction: 'ltr',
          zIndex: 2,
        }}
      >
        {/* Badge */}
        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 0.5,
            backgroundColor: `${colors.copper}22`,
            border: `1.5px solid ${colors.copper}`,
            borderRadius: '999px',
            px: 1.5,
            py: 0.4,
            mb: { xs: 1.5, md: 2 },
          }}
        >
          <Typography
            sx={{
              color: colors.copper,
              fontFamily: '"Rubik", sans-serif',
              fontWeight: 700,
              fontSize: { xs: '0.78rem', md: '0.9rem' },
              letterSpacing: 0.5,
            }}
          >
            {c.badge}
          </Typography>
        </Box>

        {/* Title */}
        <Typography
          sx={{
            fontFamily: '"Rubik", sans-serif',
            fontWeight: 900,
            fontSize: { xs: '1.9rem', sm: '2.6rem', md: '3.2rem' },
            color: colors.white,
            lineHeight: 1.1,
            mb: { xs: 1, md: 1.5 },
            textShadow: '0 2px 12px rgba(0,0,0,0.5)',
            maxWidth: { xs: '85%', md: '55%' },
          }}
        >
          {c.title}
        </Typography>

        {/* Subtitle */}
        <Typography
          sx={{
            fontFamily: '"Heebo", sans-serif',
            fontSize: { xs: '0.88rem', sm: '1rem', md: '1.1rem' },
            color: 'rgba(255,255,255,0.8)',
            mb: { xs: 2, md: 3 },
            maxWidth: { xs: '90%', md: '50%' },
            lineHeight: 1.6,
          }}
        >
          {c.subtitle}
        </Typography>

        {/* CTA */}
        <PhonePillButton size="large" />
      </Box>
    </Box>
  );
};

export default ImageSlider;
