import React from 'react';
import { Card, Box, Typography } from '@mui/material';
import { colors } from '../App';

const ServiceCard = ({ title, image }) => {
  return (
    <Card
      elevation={0}
      sx={{
        border: '1px solid rgba(196, 122, 58, 0.15)',
        borderRadius: '20px',
        overflow: 'hidden',
        backgroundColor: colors.cream,
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 18px 40px rgba(10, 22, 40, 0.14)',
        },
      }}
    >
      <Box sx={{ position: 'relative', pt: '55%', overflow: 'hidden', backgroundColor: '#f3ece2' }}>
        <Box
          component="img"
          src={image}
          alt={title}
          loading="lazy"
          sx={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.4s ease',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
        />
      </Box>

      <Box sx={{ p: 2.5, textAlign: 'center' }}>
        <Typography
          variant="subtitle1"
          sx={{
            color: colors.navy,
            fontWeight: 800,
            fontFamily: '"Rubik", sans-serif',
            letterSpacing: '0.02em',
          }}
        >
          {title}
        </Typography>
      </Box>
    </Card>
  );
};

export default ServiceCard;
