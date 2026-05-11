import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import ServiceCard from './ServiceCard';
import { useLanguage } from '../contexts/LanguageContext';
import { colors } from '../App';

const ServiceCategory = ({ service, imageIndex }) => {
  const { language } = useLanguage();
  const title = service[`title_${language}`];
  const subtitle = service[`subtitle_${language}`];

  const ext = (type) => service.imageExts?.[type] || 'jpeg';

  const states = [
    {
      id: 'before',
      label: service[`beforeLabel_${language}`],
      image: `/photos/before/image${imageIndex}.${ext('before')}`,
      position: service.beforePosition || 'center',
      scale: service.beforeScale ?? 1.18,
    },
    {
      id: 'during',
      label: service[`duringLabel_${language}`],
      image: `/photos/during/image${imageIndex}.${ext('during')}`,
      position: service.duringPosition || 'center',
      scale: service.duringScale ?? 1.18,
    },
    {
      id: 'after',
      label: service[`afterLabel_${language}`],
      image: `/photos/after/image${imageIndex}.${ext('after')}`,
      position: service.afterPosition || 'center',
      scale: service.afterScale ?? 1.18,
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: colors.slate,
        borderRadius: { xs: '14px', md: '24px' },
        boxShadow: { xs: '0 4px 16px rgba(10, 22, 40, 0.3)', md: '0 24px 60px rgba(10, 22, 40, 0.4)' },
        overflow: 'hidden',
        border: '1px solid rgba(196, 122, 58, 0.3)',
      }}
    >
      <Box sx={{ p: { xs: 2, md: 4 } }}>
        <Typography
          variant="h4"
          sx={{
            fontFamily: '"Rubik", sans-serif',
            fontWeight: 800,
            color: colors.copper,
            lineHeight: 1.1,
            mb: 0.5,
            fontSize: '2rem',
            textAlign: language === 'he' ? 'right' : 'left',
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'rgba(255, 255, 255, 0.7)',
            fontFamily: '"Heebo", sans-serif',
            lineHeight: 1.6,
            fontSize: { xs: '1rem', md: '1rem' },
            textAlign: language === 'he' ? 'right' : 'left',
          }}
        >
          {subtitle}
        </Typography>
      </Box>

      <Grid container spacing={{ xs: 1.5, md: 3 }} sx={{ px: { xs: 3, md: 4 }, pb: { xs: 2, md: 4 } }}>
        {states.map((state) => (
          <Grid item xs={12} sm={4} key={state.id} sx={{ display: 'flex' }}>
            <ServiceCard title={state.label} image={state.image} position={state.position} scale={state.scale} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServiceCategory;
