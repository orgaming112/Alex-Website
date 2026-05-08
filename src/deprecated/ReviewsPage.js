import React from 'react';
import {
  Container,
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Rating,
  Avatar,
  useTheme,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { colors } from '../App';
import StyledButton from '../components/StyledButton';

const ReviewsPage = () => {
  const theme = useTheme();

  const reviews = [
    {
      id: 1,
      name: 'דוד לוי',
      rating: 5,
      date: '2026-03-20',
      text: 'שירות יוצא דופן! התמחה הגיע בזמן, עבד באופן מקצועי ונקה הכל בסוף. ממליץ בחום!',
      service: 'תיקור ברז',
    },
    {
      id: 2,
      name: 'שרה כהן',
      rating: 5,
      date: '2026-03-18',
      text: 'עבודה איכותית מאוד. המחיר הוא הוגן והבחור מאוד אדיב. תודה!',
      service: 'תיקור דליפה',
    },
    {
      id: 3,
      name: 'משה רבי',
      rating: 4,
      date: '2026-03-15',
      text: 'עבודה טובה. קצת ארך זמן יותר מהצפוי אבל התוצאה הייתה טובה.',
      service: 'התקנת ברז חדש',
    },
    {
      id: 4,
      name: 'נעמי גוטמן',
      rating: 5,
      date: '2026-03-12',
      text: 'התמחה הגיע בדיוק בזמן המוזמן, עבד בדייקנות רבה וגם ערך סדר בסוף. מומלץ מאוד!',
      service: 'חשמלאות',
    },
    {
      id: 5,
      name: 'אברהם שלום',
      rating: 5,
      date: '2026-03-10',
      text: 'שירות מעולה! הקשיבו לכל הצרכים שלי וסיפקו פתרון מומלץ. תודה רבה!',
      service: 'תיקור כללי',
    },
    {
      id: 6,
      name: 'רחל מנדלבאום',
      rating: 4,
      date: '2026-03-08',
      text: 'עבודה מינהלתית טובה. בחור אדיב ומקצועי. מוצלח!',
      service: 'התקנה מקלחת',
    },
  ];

  const getInitials = (name) => {
    return name
      .split(' ')
      .map((word) => word[0])
      .join('')
      .toUpperCase();
  };

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
            ביקורות לקוחות
          </Typography>
          {/* Copper underline bar */}
          <Box
            sx={{
              width: '60px',
              height: '4px',
              backgroundColor: colors.copper,
              margin: '0 auto 2rem auto',
              borderRadius: '2px',
            }}
          />
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: '1rem', md: '1.2rem' },
              opacity: 0.9,
              fontFamily: '"Heebo", sans-serif',
              lineHeight: 1.6,
            }}
          >
            הצטרפו גם אתם למאות לקוחות מרוצים שכבר בחרו בנו.
            <br />
            אנחנו כאן כדי לספק לכם שירות מקצועי, אמין ובמחיר הוגן, בדיוק כמו שמגיע לכם.
          </Typography>
        </Container>
      </Box>

      {/* Write Review Button */}
      <Box sx={{ backgroundColor: colors.cream, py: { xs: 3, md: 4 }, textAlign: 'center' }}>
        <Container maxWidth="sm">
          <StyledButton
            component="a"
            href="https://g.page/r/CaLf7vhW4l_4EBM/review"
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="large"
            startIcon={<StarIcon />}
            sx={{
              '& .MuiButton-startIcon': {
                marginLeft: 0,
                marginRight: '0.75rem',
              },
            }}
          >
            לכתיבת ביקורת
          </StyledButton>
        </Container>
      </Box>

      {/* Reviews Grid */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        {/* Overall Rating Summary */}
        <Box
          sx={{
            textAlign: 'center',
            mb: { xs: 4, md: 6 },
            p: { xs: 2, md: 4 },
            backgroundColor: colors.slate,
            borderRadius: '8px',
            boxShadow: `0 2px 8px rgba(${10}, ${22}, ${40}, 0.1)`,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              mb: 1,
              color: colors.copper,
              fontFamily: '"Rubik", sans-serif',
            }}
          >
            ממוצע דירוגים
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mb: 1 }}>
            <Rating value={4.8} readOnly size="large" sx={{ color: colors.copper }} />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: colors.copper,
                fontFamily: '"Rubik", sans-serif',
              }}
            >
              4.8 / 5.0
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: '0.95rem',
              color: colors.pipeGray,
              fontFamily: '"Heebo", sans-serif',
            }}
          >
            בהתאם ל-{reviews.length} ביקורות אמתיות מלקוחות
          </Typography>
        </Box>

        {/* Reviews Cards */}
        <Grid container spacing={3} alignItems="stretch" justifyContent="center">
          {reviews.map((review) => (
            <Grid item xs={12} md={6} key={review.id} sx={{ display: 'flex', maxWidth: '500px' }}>
              <Card
                sx={{
                  height: '100%',
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: colors.slate,
                  boxShadow: `0 2px 8px rgba(${10}, ${22}, ${40}, 0.1)`,
                  transition: 'all 0.3s ease',
                  borderRadius: '8px',
                  '&:hover': {
                    boxShadow: `0 8px 24px rgba(${196}, ${122}, ${58}, 0.25)`,
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  {/* Header with Avatar and Name */}
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      mb: 2,
                      flexDirection: 'row-reverse',
                    }}
                  >
                    <Avatar
                      sx={{
                        backgroundColor: colors.copper,
                        width: 48,
                        height: 48,
                        fontWeight: 700,
                        fontSize: '1.1rem',
                        color: 'white',
                      }}
                    >
                      {getInitials(review.name)}
                    </Avatar>
                    <Box sx={{ flex: 1, textAlign: 'right' }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          mb: 0.5,
                          color: colors.copper,
                          fontFamily: '"Rubik", sans-serif',
                        }}
                      >
                        {review.name}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          display: 'block',
                          color: colors.pipeGray,
                          fontFamily: '"Heebo", sans-serif',
                        }}
                      >
                        {review.service}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Rating */}
                  <Box sx={{ mb: 2 }}>
                    <Rating value={review.rating} readOnly size="small" sx={{ color: colors.copper }} />
                  </Box>

                  {/* Review Text */}
                  <Typography
                    variant="body2"
                    sx={{
                      lineHeight: 1.7,
                      mb: 2,
                      color: colors.pipeGray,
                      textAlign: 'right',
                      fontStyle: 'italic',
                      fontFamily: '"Heebo", sans-serif',
                    }}
                  >
                    "{review.text}"
                  </Typography>

                  {/* Date */}
                  <Typography
                    variant="caption"
                    sx={{
                      display: 'block',
                      textAlign: 'right',
                      color: colors.pipeGray,
                      fontFamily: '"Heebo", sans-serif',
                    }}
                  >
                    {new Date(review.date).toLocaleDateString('he-IL')}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Share Your Experience */}
      <Container maxWidth="md" sx={{ py: { xs: 4, md: 6 } }}>
        <Box
          sx={{
            backgroundColor: colors.slate,
            p: { xs: 3, md: 4 },
            borderRadius: '8px',
            textAlign: 'center',
            boxShadow: `0 2px 8px rgba(${10}, ${22}, ${40}, 0.1)`,
            border: `1px solid ${colors.copper}`,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              mb: 2,
              fontWeight: 700,
              color: colors.copper,
              fontFamily: '"Rubik", sans-serif',
            }}
          >
            ⭐ נהנית מהשירות שלנו?
          </Typography>
          <Typography
            variant="body2"
            sx={{
              mb: 2,
              color: colors.pipeGray,
              fontFamily: '"Heebo", sans-serif',
            }}
          >
            נהניתם מהשירות שלנו?
            <br />
            נשמח מאוד אם תקדישו רגע ותשתפו את החוויה שלכם.
            <br />
            הביקורת שלכם עוזרת לנו להשתפר ועוזרת לאחרים לבחור נכון ❤️
          </Typography>
          <StyledButton
            component="a"
            href="https://g.page/r/CaLf7vhW4l_4EBM/review"
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="medium"
            startIcon={<StarIcon />}
            sx={{
              '& .MuiButton-startIcon': {
                marginLeft: 0,
                marginRight: '0.5rem',
              },
            }}
          >
            לכתיבת ביקורת
          </StyledButton>
        </Box>
      </Container>
    </Box>
  );
};

export default ReviewsPage;
