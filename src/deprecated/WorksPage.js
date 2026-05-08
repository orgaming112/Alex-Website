import React from 'react';
import {
  Container,
  Box,
  Grid,
  Card,
  CardContent,
  Stack,
  Typography,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import { colors } from '../App';
import StyledButton from '../components/StyledButton';
import Collage from '../components/Collage';

const WorksPage = () => {
  // Sample image data for collages
  // In real implementation, replace with actual image paths
  const workCollages = [
    {
      id: 1,
      items: [
        { id: '1-1' },
        { id: '1-2' },
        { id: '1-3' },
        { id: '1-4' },
        { id: '1-5' },
        { id: '1-6' },
      ],
    },
  ];

  return (
    <Box sx={{ width: '100%', maxWidth: '100%', overflowX: 'hidden' }}>
      {/* Header */}
      <Box
        sx={{
          backgroundColor: colors.navy,
          color: 'white',
          py: { xs: 5, md: 8 },
          textAlign: 'center',
          borderBottom: `3px solid ${colors.copper}`,
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              mb: 2,
              fontWeight: 700,
              fontFamily: '"Rubik", sans-serif',
              lineHeight: 1.2,
            }}
          >
            מבחר העבודות שלנו
          </Typography>
          {/* Copper underline bar below title */}
          <Box
            sx={{
              width: '60px',
              height: '4px',
              backgroundColor: colors.copper,
              margin: '0 auto',
              mb: 2.5,
              borderRadius: '2px',
            }}
          />
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: '1rem', md: '1.2rem' },
              opacity: 0.9,
              fontFamily: '"Heebo", sans-serif',
            }}
          >
            מוזמנים להתרשם ממבחר עבודות שביצענו - איכות, דיוק ושירות ללא פשרות.
          </Typography>
        </Container>
      </Box>

      {/* Image Collage Section */}
      <Box sx={{ backgroundColor: colors.cream, py: { xs: 4, md: 6 } }}>
        <Container maxWidth="lg">
          <Collage images={workCollages[0].items} spacing={2} />
        </Container>
      </Box>

      {/* Pricing Section */}
      <Box sx={{ backgroundColor: colors.cream, py: { xs: 4, md: 6 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography
              variant="h2"
              sx={{
                mb: 3,
                fontSize: { xs: '1.8rem', md: '2.5rem' },
                color: colors.navy,
                fontFamily: '"Rubik", sans-serif',
                fontWeight: 700,
              }}
            >
              תשלום וביקור 
            </Typography>
            {/* Copper underline bar */}
            <Box
              sx={{
                width: '50px',
                height: '3px',
                backgroundColor: colors.copper,
                margin: '0 auto',
              }}
            />
          </Box>

          <Grid container spacing={3} sx={{ mt: 1 }} justifyContent="center">
            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Card
                sx={{
                  backgroundColor: colors.navy,
                  borderRadius: '8px',
                  boxShadow: `0 2px 8px rgba(${10}, ${22}, ${40}, 0.1)`,
                  width: '100%',
                  maxWidth: '400px',
                  p: 2,
                }}
              >
                <CardContent sx={{ textAlign: 'center', p: '16px !important' }}>
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 2,
                      fontWeight: 700,
                      color: colors.copper,
                      fontFamily: '"Rubik", sans-serif',
                    }}
                  >
                    📞 בדיקה
                  </Typography>
                  <Typography
                    color="textSecondary"
                    sx={{
                      mb: 2,
                      color: colors.pipeGray,
                      fontFamily: '"Heebo", sans-serif',
                    }}
                  >
                   שלחו לנו הודעה, ואנחנו כבר נדאג לכל השאר, נבין יחד את הצורך, נתאם זמן הגעה שנוח לכם, ונציג הצעת מחיר הוגנת וברורה עוד לפני תחילת העבודה.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Card
                sx={{
                  backgroundColor: colors.navy,
                  borderRadius: '8px',
                  boxShadow: `0 2px 8px rgba(${10}, ${22}, ${40}, 0.1)`,
                  width: '100%',
                  maxWidth: '400px',
                  p: 2,
                }}
              >
                <CardContent sx={{ textAlign: 'center', p: '16px !important' }}>
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 2,
                      fontWeight: 700,
                      color: colors.copper,
                      fontFamily: '"Rubik", sans-serif',
                    }}
                  >
                    💰 תיאום מחיר
                  </Typography>
                  <Typography
                    color="textSecondary"
                    sx={{
                      mb: 2,
                      color: colors.pipeGray,
                      fontFamily: '"Heebo", sans-serif',
                    }}
                  >
                    מחיר הוגן, שקוף וברור – כבר מהשלב הראשון.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Schedule Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <Box
          sx={{
            backgroundColor: colors.slate,
            p: { xs: 3, md: 4 },
            borderRadius: '8px',
            textAlign: 'center',
            border: `1px solid ${colors.copper}`,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              mb: 3,
              fontWeight: 700,
              color: colors.copper,
              fontFamily: '"Rubik", sans-serif',
            }}
          >
            רוצה לתאם ביקור?
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
            התקשרו עכשיו : 052-641-0042
          </StyledButton>
        </Box>
      </Container>
    </Box>
  );
};

export default WorksPage;
