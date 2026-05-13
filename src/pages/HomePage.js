import React from 'react';
import {
  Container,
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
} from '@mui/material';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import BoltIcon from '@mui/icons-material/Bolt';
import VerifiedIcon from '@mui/icons-material/Verified';
import HandshakeIcon from '@mui/icons-material/Handshake';
import ImageSlider from '../components/ImageSlider';
import PhonePillButton from '../components/PhonePillButton';
import ServicesSection from '../components/ServicesSection';
import { useLanguage } from '../contexts/LanguageContext';
import { colors } from '../App';

const HomePage = () => {
  const { t } = useLanguage();

  return (
    <Box sx={{ width: '100%', maxWidth: '100%', overflowX: 'hidden' }}>
      {/* Hero Section with Slider */}
      <Container maxWidth="lg" sx={{ py: { xs: 2, md: 4 } }}>
        <ImageSlider />
      </Container>

      {/* Services Section */}
      <Box id="services"><ServicesSection /></Box>

      {/* Why Choose Us */}
      <Box id="about" sx={{ backgroundColor: colors.navy, py: { xs: 6, md: 9 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
            <Typography
              variant="h2"
              sx={{
                mb: 2,
                fontSize: { xs: '1.8rem', md: '2.5rem' },
                color: colors.white,
                fontFamily: '"Rubik", sans-serif',
                fontWeight: 700,
                lineHeight: 1.3,
              }}
            >
              {t('home.whyChooseTitle')}
            </Typography>
            <Box sx={{ width: '60px', height: '4px', backgroundColor: colors.copper, margin: '0 auto 20px', borderRadius: '2px' }} />
            <Typography
              sx={{
                color: colors.white,
                fontFamily: '"Rubik", sans-serif',
                fontSize: { xs: '0.95rem', md: '1.1rem' },
                fontWeight: 600,
                lineHeight: 1.7,
                maxWidth: '600px',
                margin: '0 auto',
              }}
            >
              {t('home.whyChooseText')}
            </Typography>
          </Box>

          <Grid container spacing={3} justifyContent="center">
            {[
              { icon: <WorkHistoryIcon sx={{ fontSize: '2rem' }} />, title: t('home.features.experienceTitle'), text: t('home.features.experienceText') },
              { icon: <BoltIcon sx={{ fontSize: '2rem' }} />, title: t('home.features.quickResponseTitle'), text: t('home.features.quickResponseText') },
              { icon: <VerifiedIcon sx={{ fontSize: '2rem' }} />, title: t('home.features.qualityTitle'), text: t('home.features.qualityText') },
              { icon: <HandshakeIcon sx={{ fontSize: '2rem' }} />, title: t('home.features.fairPriceTitle'), text: t('home.features.fairPriceText') },
            ].map((feature, i) => (
              <Grid item xs={6} sm={6} lg={3} key={i} sx={{ display: 'flex' }}>
                <Card
                  sx={{
                    flex: 1,
                    backgroundColor: colors.slate,
                    border: `1px solid rgba(196, 122, 58, 0.18)`,
                    borderRadius: '16px',
                    boxShadow: `0 4px 20px rgba(10, 22, 40, 0.35)`,
                    transition: 'all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: `0 12px 32px rgba(196, 122, 58, 0.22)`,
                      borderColor: `rgba(196, 122, 58, 0.45)`,
                    },
                  }}
                >
                  <CardContent sx={{ p: { xs: 2, sm: 3 }, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1.5 }}>
                    <Box
                      sx={{
                        width: { xs: 52, sm: 64 },
                        height: { xs: 52, sm: 64 },
                        borderRadius: '50%',
                        backgroundColor: `rgba(196, 122, 58, 0.15)`,
                        border: `2px solid rgba(196, 122, 58, 0.4)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: colors.copper,
                        flexShrink: 0,
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: colors.copper,
                        fontFamily: '"Rubik", sans-serif',
                        fontSize: { xs: '1rem', sm: '1.15rem' },
                        lineHeight: 1.4,
                      }}
                    >
                      {feature.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box
        id="contact"
        sx={{
          backgroundColor: colors.navy,
          color: 'white',
          py: { xs: 4, md: 6 },
          textAlign: 'center',
          borderTop: `3px solid ${colors.copper}`,
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            sx={{
              mb: 2,
              fontSize: { xs: '1.5rem', md: '2rem' },
              fontWeight: 700,
              fontFamily: '"Rubik", sans-serif',
            }}
          >
            {t('home.contactTitle')}
          </Typography>
          <PhonePillButton size="large" />
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
