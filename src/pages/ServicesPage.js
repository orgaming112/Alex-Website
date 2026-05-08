import React, { useState } from 'react';
import {
  Container,
  Box,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Button,
  Collapse,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PlumbingIcon from '@mui/icons-material/Plumbing';
import { colors } from '../App';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import BuildIcon from '@mui/icons-material/Build';
import WindowIcon from '@mui/icons-material/Window';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PhoneIcon from '@mui/icons-material/Phone';
import StyledButton from '../components/StyledButton';

const ServicesPage = () => {
  const theme = useTheme();
  const [expandedService, setExpandedService] = useState(null);

  const handleExpand = (serviceId) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  const services = [
    {
      id: 1,
      title: 'שירותי אינסטלציה',
      icon: PlumbingIcon,
      description: 'שירותים מלאים של אינסטלציה',
      details: [
        'התקנת ברזים ומקלחות',
        'תיקור קו הביוב',
        'התקנת מערכות מים חדשות',
        'תיקון זליגות וקשיות במים',
        'התקנת מכשירים סניטריים',
      ],
    },
    {
      id: 2,
      title: 'עבודות חשמל ותיקור',
      icon: ElectricBoltIcon,
      description: 'שירותי חשמל דירתי ותיקור',
      details: [
        'התקנת שקעים וחיבורים',
        'תיקור לוחות חשמל',
        'בדיקת בטיחות חשמלית',
        'התקנת משאבות ודוודים',
        'בדיקות שנתיות',
      ],
    },
    {
      id: 3,
      title: 'תיקון כללי ותיקור',
      icon: BuildIcon,
      description: 'שירותים כלליים לדירה',
      details: [
        'תיקור דלתות וחלונות',
        'היצקים והסתמות דליפות',
        'תיקור טיח וצבע',
        'תיקור מכשירים חשמליים',
        'עבודות אחרות בהגדרה',
      ],
    },
    {
      id: 4,
      title: 'עבודות יד וריהוט',
      icon: WindowIcon,
      description: 'עבודות יד וריהוט מותאם',
      details: [
        'סידור וספרים מעצבות',
        'קביעת מידוגים',
        'תיקור וציפוי ריהוט',
        'התקנת מראות וצילומים',
        'עבודות קרנישים',
      ],
    },
  ];

  return (
    <Box sx={{ width: '100%', maxWidth: '100%', overflowX: 'hidden' }}>
      {/* Header */}
      <Box
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: 'white',
          py: { xs: 4, md: 6 },
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              mb: 2,
              fontWeight: 700,
            }}
          >
            השירותים שלנו
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: '1rem', md: '1.2rem' },
              opacity: 0.9,
            }}
          >
            מוזמנים להתרשם ממבחר עבודות שביצענו - איכות, דיוק ושירות ללא פשרות.
          </Typography>
        </Container>
      </Box>

      {/* Services List */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <Grid container spacing={3}>
          {services.map((service) => {
            const IconComponent = service.icon;
            const isExpanded = expandedService === service.id;

            return (
              <Grid item xs={12} md={6} key={service.id}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: isExpanded
                      ? '0 8px 24px rgba(0,0,0,0.15)'
                      : '0 2px 8px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <CardHeader
                    avatar={
                      <Box
                        sx={{
                          p: 1.5,
                          backgroundColor: theme.palette.primary.main,
                          borderRadius: 1,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <IconComponent
                          sx={{ color: 'white', fontSize: '2rem' }}
                        />
                      </Box>
                    }
                    title={
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          color: theme.palette.primary.main,
                          textAlign: 'right',
                        }}
                      >
                        {service.title}
                      </Typography>
                    }
                    subheader={
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{ textAlign: 'right' }}
                      >
                        {service.description}
                      </Typography>
                    }
                    action={
                      <IconButton
                        onClick={() => handleExpand(service.id)}
                        sx={{
                          transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.3s ease',
                        }}
                      >
                        <ExpandMoreIcon />
                      </IconButton>
                    }
                  />
                  <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                    <CardContent sx={{ pt: 0 }}>
                      <Typography
                        variant="subtitle2"
                        sx={{ mb: 2, fontWeight: 600, color: 'textSecondary' }}
                      >
                        מה כלול בשירות זה:
                      </Typography>
                      <List sx={{ p: 0 }}>
                        {service.details.map((detail, index) => (
                          <ListItem
                            key={index}
                            sx={{
                              py: 1,
                              px: 0,
                              '&:not(:last-child)': {
                                borderBottom: `1px solid ${theme.palette.divider}`,
                              },
                            }}
                          >
                            <ListItemIcon
                              sx={{
                                minWidth: 36,
                                display: 'flex',
                                justifyContent: 'flex-end',
                                ml: 1,
                              }}
                            >
                              <CheckCircleIcon
                                sx={{
                                  color: theme.palette.success.main,
                                  fontSize: '1.3rem',
                                }}
                              />
                            </ListItemIcon>
                            <ListItemText
                              primary={detail}
                              sx={{ textAlign: 'right' }}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </CardContent>
                  </Collapse>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>

      {/* Pricing Section */}
      <Box sx={{ backgroundColor: '#f9f9f9', py: { xs: 4, md: 6 } }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: { xs: 3, md: 4 },
              fontSize: { xs: '1.8rem', md: '2.5rem' },
              color: theme.palette.primary.main,
            }}
          >
            תשלום וביקור 
          </Typography>

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
                  <Typography color="textSecondary" sx={{ mb: 2, color: colors.pipeGray }}>
                    שלחו לנו הודעה, ואנחנו כבר נדאג לכל השאר, נבין יחד את הצורך, נתאם זמן הגעה שנוח לכם, ונציג הצ עת מחיר הוגנת וברורה עוד לפני תחילת העבודה.
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
                  <Typography color="textSecondary" sx={{ mb: 2, color: colors.pipeGray }}>
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
            backgroundColor: '#e3f2fd',
            p: { xs: 3, md: 4 },
            borderRadius: 2,
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h5"
            sx={{
              mb: 2,
              fontWeight: 700,
              color: theme.palette.primary.main,
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
          >
            התקשרו : 052-641-0042
          </StyledButton>
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesPage;
