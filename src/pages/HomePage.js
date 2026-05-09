import React from 'react';
import {
  Container,
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import ImageSlider from '../components/ImageSlider';
import StyledButton from '../components/StyledButton';
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
      <ServicesSection />

      {/* Why Choose Us */}
      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 8 } }}>
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <Typography
            variant="h2"
            sx={{
              mb: 2,
              fontSize: { xs: '1.8rem', md: '2.5rem' },
              color: colors.navy,
              fontFamily: '"Rubik", sans-serif',
              fontWeight: 700,
              lineHeight: 1.3,
            }}
          >
            {t('home.whyChooseTitle')}
          </Typography>
          {/* Copper underline bar */}
          <Box
            sx={{
              width: '60px',
              height: '4px',
              backgroundColor: colors.copper,
              margin: '0 auto',
              borderRadius: '2px',
            }}
          />
        </Box>

        <Typography
          variant="body1"
          sx={{
            color: colors.pipeGray,
            fontFamily: '"Heebo", sans-serif',
            fontSize: { xs: '0.95rem', md: '1.1rem' },
            lineHeight: 1.7,
            fontWeight: 400,
            textAlign: 'center',
          }}
        >
          {t('home.whyChooseText')}
        </Typography>

        <Grid container spacing={{ xs: 3, md: 4 }} sx={{ mt: 1 }}>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                backgroundColor: colors.slate,
                boxShadow: `0 4px 12px rgba(${10}, ${22}, ${40}, 0.15)`,
                borderRadius: '12px',
                transition: 'all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: `0 8px 20px rgba(${196}, ${122}, ${58}, 0.2)`,
                },
              }}
            >
              <CardContent sx={{ py: 2.5, px: 2.5 }}>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 1.5,
                    fontWeight: 700,
                    color: colors.copper,
                    fontFamily: '"Rubik", sans-serif',
                    fontSize: '1.05rem',
                  }}
                >
                  {t('home.features.experienceTitle')}
                </Typography>
                <Typography
                  sx={{
                    color: colors.pipeGray,
                    fontFamily: '"Heebo", sans-serif',
                    lineHeight: 1.6,
                    fontSize: '0.95rem',
                  }}
                >
                  {t('home.features.experienceText')}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card
              sx={{
                backgroundColor: colors.slate,
                boxShadow: `0 4px 12px rgba(${10}, ${22}, ${40}, 0.15)`,
                borderRadius: '12px',
                transition: 'all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: `0 8px 20px rgba(${196}, ${122}, ${58}, 0.2)`,
                },
              }}
            >
              <CardContent sx={{ py: 2.5, px: 2.5 }}>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 1.5,
                    fontWeight: 700,
                    color: colors.copper,
                    fontFamily: '"Rubik", sans-serif',
                    fontSize: '1.05rem',
                  }}
                >
                  {t('home.features.quickResponseTitle')}
                </Typography>
                <Typography
                  sx={{
                    color: colors.pipeGray,
                    fontFamily: '"Heebo", sans-serif',
                    lineHeight: 1.6,
                    fontSize: '0.95rem',
                  }}
                >
                  {t('home.features.quickResponseText')}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card
              sx={{
                backgroundColor: colors.slate,
                boxShadow: `0 4px 12px rgba(${10}, ${22}, ${40}, 0.15)`,
                borderRadius: '12px',
                transition: 'all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: `0 8px 20px rgba(${196}, ${122}, ${58}, 0.2)`,
                },
              }}
            >
              <CardContent sx={{ py: 2.5, px: 2.5 }}>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 1.5,
                    fontWeight: 700,
                    color: colors.copper,
                    fontFamily: '"Rubik", sans-serif',
                    fontSize: '1.05rem',
                  }}
                >
                  {t('home.features.qualityTitle')}
                </Typography>
                <Typography
                  sx={{
                    color: colors.pipeGray,
                    fontFamily: '"Heebo", sans-serif',
                    lineHeight: 1.6,
                    fontSize: '0.95rem',
                  }}
                >
                  {t('home.features.qualityText')}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card
              sx={{
                backgroundColor: colors.slate,
                boxShadow: `0 4px 12px rgba(${10}, ${22}, ${40}, 0.15)`,
                borderRadius: '12px',
                transition: 'all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: `0 8px 20px rgba(${196}, ${122}, ${58}, 0.2)`,
                },
              }}
            >
              <CardContent sx={{ py: 2.5, px: 2.5 }}>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 1.5,
                    fontWeight: 700,
                    color: colors.copper,
                    fontFamily: '"Rubik", sans-serif',
                    fontSize: '1.05rem',
                  }}
                >
                  {t('home.features.fairPriceTitle')}
                </Typography>
                <Typography
                  sx={{
                    color: colors.pipeGray,
                    fontFamily: '"Heebo", sans-serif',
                    lineHeight: 1.6,
                    fontSize: '0.95rem',
                  }}
                >
                  {t('home.features.fairPriceText')}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Contact Section */}
      <Box
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
          <Typography
            variant="h5"
            sx={{
              mb: 3,
              fontSize: { xs: '1rem', md: '1.3rem' },
              opacity: 0.9,
              fontFamily: '"Heebo", sans-serif',
            }}
          >
            {t('home.contactSubtitle')}
          </Typography>
          <StyledButton
            component="a"
            href="tel:0526410042"
            variant="primary"
            size="large"
            startIcon={<PhoneIcon />}
            sx={{
              flexDirection: 'row',
              '& .MuiButton-startIcon': {
                marginLeft: 0,
                marginRight: '0.75rem',
              },
            }}
          >
            {t('home.contactButton')}
          </StyledButton>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
