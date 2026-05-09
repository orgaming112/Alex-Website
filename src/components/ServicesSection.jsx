import React from 'react';
import { Container, Box, Typography, Divider, Grid } from '@mui/material';
import ServiceCategory from './ServiceCategory';
import { servicesData } from '../data/servicesData';
import { useLanguage } from '../contexts/LanguageContext';
import { colors } from '../App';

const ServicesSection = () => {
  const { t } = useLanguage();

  return (
    <Box sx={{ backgroundColor: colors.cream, py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
          <Typography
            variant="h2"
            sx={{
              mb: 2,
              fontSize: { xs: '2rem', md: '2.8rem' },
              color: colors.navy,
              fontFamily: '"Rubik", sans-serif',
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            {t('home.servicesHeading')}
          </Typography>
          <Box
            sx={{
              width: '80px',
              height: '4px',
              backgroundColor: colors.copper,
              margin: '0 auto',
              borderRadius: '2px',
            }}
          />
        </Box>

        <Grid container justifyContent="center" sx={{ mb: 4 }}>
          <Grid item xs={12} md={10}>
            <Typography
              variant="body1"
              sx={{
                color: colors.pipeGray,
                fontFamily: '"Heebo", sans-serif',
                fontSize: { xs: '0.97rem', md: '1.1rem' },
                lineHeight: 1.8,
                textAlign: 'center',
              }}
            >
              {t('home.servicesIntro')}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: colors.pipeGray,
                fontFamily: '"Heebo", sans-serif',
                fontSize: { xs: '0.97rem', md: '1.1rem' },
                lineHeight: 1.8,
                mt: 1,
                textAlign: 'center',
              }}
            >
              {t('home.servicesSubtext')}
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: colors.copper, opacity: 0.35, mb: 5 }} />

        <Box sx={{ display: 'grid', gap: 24 }}>
          {servicesData.map((service) => (
            <ServiceCategory key={service.id} service={service} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesSection;
