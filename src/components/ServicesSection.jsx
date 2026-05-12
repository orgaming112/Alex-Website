import React from 'react';
import { Container, Box, Typography, Divider } from '@mui/material';
import ServiceCategory from './ServiceCategory';
import { servicesData } from '../data/servicesData';
import { useLanguage } from '../contexts/LanguageContext';
import { colors } from '../App';

const ServicesSection = () => {
  const { t } = useLanguage();

  return (
    <Box sx={{ backgroundColor: colors.cream, py: { xs: 3, md: 10 } }}>
      <Container maxWidth="lg" sx={{ px: { xs: 1.5, sm: 3, md: 4 } }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 3, md: 6 } }}>
          <Typography
            variant="h2"
            sx={{
              mb: 2,
              fontSize: { xs: '1.6rem', md: '2.8rem' },
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

        <Divider sx={{ borderColor: colors.copper, opacity: 0.35, mb: { xs: 3, md: 5 } }} />

        <Box sx={{ display: 'grid', gap: { xs: 3, md: 12 } }}>
          {servicesData.map((service, index) => (
            <ServiceCategory key={service.id} service={service} imageIndex={index + 1} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesSection;
