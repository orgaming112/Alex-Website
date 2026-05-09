import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import ServiceCard from './ServiceCard';
import { useLanguage } from '../contexts/LanguageContext';
import { colors } from '../App';

const ServiceCategory = ({ service }) => {
  const { language } = useLanguage();
  const title = service[`title_${language}`];
  const subtitle = service[`subtitle_${language}`];

  const states = [
    {
      id: 'before',
      label: service[`beforeLabel_${language}`],
      image: service.beforeImage,
    },
    {
      id: 'during',
      label: service[`duringLabel_${language}`],
      image: service.duringImage,
    },
    {
      id: 'after',
      label: service[`afterLabel_${language}`],
      image: service.afterImage,
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: colors.white,
        borderRadius: '24px',
        boxShadow: '0 24px 60px rgba(10, 22, 40, 0.08)',
        overflow: 'hidden',
        border: '1px solid rgba(196, 122, 58, 0.16)',
      }}
    >
      <Box sx={{ p: { xs: 3, md: 4 } }}>
        <Typography
          variant="h4"
          sx={{
            fontFamily: '"Rubik", sans-serif',
            fontWeight: 800,
            color: colors.navy,
            lineHeight: 1.1,
            mb: 1.5,
            textAlign: language === 'he' ? 'right' : 'left',
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: colors.pipeGray,
            fontFamily: '"Heebo", sans-serif',
            lineHeight: 1.8,
            fontSize: '1rem',
            textAlign: language === 'he' ? 'right' : 'left',
          }}
        >
          {subtitle}
        </Typography>
      </Box>

      <Grid container spacing={3} sx={{ px: { xs: 3, md: 4 }, pb: { xs: 3, md: 4 } }}>
        {states.map((state) => (
          <Grid item xs={12} md={4} key={state.id}>
            <ServiceCard title={state.label} image={state.image} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServiceCategory;
