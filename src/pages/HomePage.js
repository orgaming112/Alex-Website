import React from 'react';
import {
  Container,
  Box,
  Grid,
  Card,
  CardContent,
  Stack,
  Divider,
  Typography,
} from '@mui/material';
import PlumbingIcon from '@mui/icons-material/Plumbing';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import BuildIcon from '@mui/icons-material/Build';
import HandymanIcon from '@mui/icons-material/Handyman';
import PhoneIcon from '@mui/icons-material/Phone';
import ImageSlider from '../components/ImageSlider';
import StyledButton from '../components/StyledButton';
import Accordion from '../components/Accordion';
import { colors } from '../App';

const HomePage = () => {
  // Services data for accordion
  const servicesData = [
    {
      icon: PlumbingIcon,
      title: 'שירותי אינסטלציה',
      content: ['התקנת ברזים', 'מקלחות', 'תיקור דליפות', 'ומערכות מים'],
    },
    {
      icon: ElectricBoltIcon,
      title: 'עבודות חשמל ותיקור',
      content: ['התקנת שקעים', 'תיקור לוחות חשמל', 'בדיקות בטיחות'],
    },
    {
      icon: BuildIcon,
      title: 'תיקון כללי',
      content: ['תיקור דלתות', 'חלונות', 'טיח', 'צבע ותיקורים שונים'],
    },
    {
      icon: HandymanIcon,
      title: 'עבודות יד וריהוט',
      content: ['התקנה', 'תיקור ריהוט', 'קביעת מידוגים', 'וקרנישים'],
    },
  ];

  return (
    <Box sx={{ width: '100%', maxWidth: '100%', overflowX: 'hidden' }}>
      {/* Hero Section with Slider */}
      <Container maxWidth="lg" sx={{ py: { xs: 2, md: 4 } }}>
        <ImageSlider />
      </Container>

      {/* Services Section */}
      <Box sx={{ backgroundColor: colors.cream, py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Stack spacing={3.5} alignItems="center">
            {/* Title */}
            <Box sx={{ textAlign: 'center' }}>
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
                השירותים שלנו
              </Typography>
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

            {/* Divider */}
            <Divider sx={{ width: '80%', borderColor: colors.copper, opacity: 0.5 }} />

            {/* Description */}
            <Typography
              variant="h5"
              sx={{
                color: colors.pipeGray,
                maxWidth: '700px',
                textAlign: 'center',
                fontFamily: '"Heebo", sans-serif',
                fontSize: { xs: '0.95rem', md: '1.1rem' },
                lineHeight: 1.7,
                fontWeight: 400,
              }}
            >
              אנחנו מתמחים בשירותי אינסטלציה ותיקון כללי עם ניסיון של שנים רבות.
              סיוע מהיר, עבודה איכותית, ומחיר הוגן.
            </Typography>

            {/* Divider */}
            <Divider sx={{ width: '80%', borderColor: colors.copper, opacity: 0.5 }} />

            {/* Services Accordion */}
            <Box sx={{ width: '100%', maxWidth: '800px' }}>
              <Accordion items={servicesData} />
            </Box>
          </Stack>
        </Container>
      </Box>

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
            למה לבחור בנו?
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
                  ✓ ניסיון רב שנים
                </Typography>
                <Typography
                  sx={{
                    color: colors.pipeGray,
                    fontFamily: '"Heebo", sans-serif',
                    lineHeight: 1.6,
                    fontSize: '0.95rem',
                  }}
                >
                 הצטרפו גם אתם למאות לקוחות מרוצים שכבר בחרו בנו.
                 <br />
                 אנחנו כאן כדי לספק לכם שירות מקצועי, אמין ובמחיר הוגן, בדיוק כמו שמגיע לכם.
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
                  ✓ מענה מהיר
                </Typography>
                <Typography
                  sx={{
                    color: colors.pipeGray,
                    fontFamily: '"Heebo", sans-serif',
                    lineHeight: 1.6,
                    fontSize: '0.95rem',
                  }}
                >
                  אנחנו מגיעים בתוך 24 שעות למרבית הקריאות.
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
                  ✓ עבודה איכותית
                </Typography>
                <Typography
                  sx={{
                    color: colors.pipeGray,
                    fontFamily: '"Heebo", sans-serif',
                    lineHeight: 1.6,
                    fontSize: '0.95rem',
                  }}
                >
                  כל עבודה מבוצעת בדייקנות עם שימוש בחומרים איכותיים.
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
                  ✓ מחיר הוגן
                </Typography>
                <Typography
                  sx={{
                    color: colors.pipeGray,
                    fontFamily: '"Heebo", sans-serif',
                    lineHeight: 1.6,
                    fontSize: '0.95rem',
                  }}
                >
                  בדיקת העבודה והצעה ברורה לפני תחילת כל עבודה.
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
            צריך עזרה? תצור קשר עכשיו!
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
            052-641-0042
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
            לחץ כאן
          </StyledButton>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
