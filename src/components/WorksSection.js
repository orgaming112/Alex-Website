import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PlumbingIcon from '@mui/icons-material/Plumbing';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import BuildIcon from '@mui/icons-material/Build';
import WindowIcon from '@mui/icons-material/Window';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { colors } from '../App';

const WorksSection = () => {
  const theme = useTheme();
  const [expandedService, setExpandedService] = useState(null);

  const handleExpand = (serviceId) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  const works = [
    {
      id: 1,
      title: 'שירותי אינסטלציה',
      icon: PlumbingIcon,
      description: 'שירותים מלאים של אינסטלציה',
      image: '/works/plumbing.jpg',
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
      image: '/works/electrical.jpg',
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
      image: '/works/general.jpg',
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
      image: '/works/furniture.jpg',
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
    <Container maxWidth="sm" sx={{ py: { xs: 5, md: 8 }, direction: 'rtl' }}>
      {works.map((work) => {
        const IconComponent = work.icon;
        return (
          <Accordion
            key={work.id}
            expanded={expandedService === work.id}
            onChange={() => handleExpand(work.id)}
            sx={{
              mb: 2,
              backgroundColor: colors.slate,
              boxShadow: `0 4px 12px rgba(${10}, ${22}, ${40}, 0.15)`,
              borderRadius: '12px !important',
              '&:before': {
                display: 'none',
              },
              '&.Mui-expanded': {
                boxShadow: `0 12px 32px rgba(${196}, ${122}, ${58}, 0.3)`,
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: colors.copper }} />}
              sx={{
                '& .MuiAccordionSummary-content': {
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                },
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexDirection: { xs: 'row', sm: 'row' },
                  width: '100%',
                  textAlign: { xs: 'right', sm: 'right' },
                  gap: 1,
                  direction: 'rtl',
                }}
              >
                <Box
                  sx={{
                    p: 1.5,
                    backgroundColor: colors.copper,
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: `0 4px 12px rgba(${196}, ${122}, ${58}, 0.3)`,
                    minWidth: 48,
                    minHeight: 48,
                  }}
                >
                  <IconComponent sx={{ color: 'white', fontSize: '1.8rem' }} />
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: { xs: 'flex-start', sm: 'flex-end' },
                    justifyContent: 'center',
                    width: { xs: '100%', sm: 'auto' },
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: colors.copper,
                      fontFamily: '"Rubik", sans-serif',
                      fontSize: '1.1rem',
                    }}
                  >
                    {work.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: colors.pipeGray,
                      fontFamily: '"Heebo", sans-serif',
                      fontSize: '0.9rem',
                    }}
                  >
                    {work.description}
                  </Typography>
                </Box>
              </Box>
            </AccordionSummary>
            <AccordionDetails sx={{ pt: 0, pb: 3, px: 3 }}>
              <Typography
                variant="subtitle2"
                sx={{
                  mb: 2,
                  fontWeight: 600,
                  color: colors.pipeGray,
                  fontFamily: '"Rubik", sans-serif',
                  fontSize: '0.95rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}
              >
                מה כלול בשירות זה:
              </Typography>
              <List sx={{ p: 0 }}>
                {work.details.map((detail, index) => (
                  <ListItem
                    key={index}
                    sx={{
                      py: 1,
                      px: 0,
                      '&:not(:last-child)': {
                        borderBottom: `1px solid rgba(${196}, ${122}, ${58}, 0.2)`,
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 42,
                        display: 'flex',
                        justifyContent: 'flex-end',
                        ml: 1,
                        mr: 1,
                      }}
                    >
                      <CheckCircleIcon
                        sx={{
                          color: colors.copper,
                          fontSize: '1.4rem',
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={detail}
                      sx={{
                        textAlign: 'right',
                        color: colors.pipeGray,
                        '& .MuiTypography-root': {
                          fontFamily: '"Heebo", sans-serif',
                        },
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Container>
  );
};

export default WorksSection;