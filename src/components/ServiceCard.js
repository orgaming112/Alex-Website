import React from 'react';
import { Box, Typography } from '@mui/material';
import { colors } from '../App';

/**
 * ServiceCard - Reusable service display component
 * 
 * Props:
 * - icon: Icon component
 * - title: Service title (string)
 * - description: Service description (string)
 * - sx: Additional styles (optional)
 */
const ServiceCard = ({ icon: Icon, title, description, sx = {} }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 3,
        p: 3,
        backgroundColor: colors.slate,
        borderRadius: '12px',
        boxShadow: `0 4px 12px rgba(${10}, ${22}, ${40}, 0.15)`,
        transition: 'all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: `0 8px 20px rgba(${196}, ${122}, ${58}, 0.2)`,
        },
        ...sx,
      }}
    >
      {/* Icon Box - on the right for RTL */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minWidth: '60px',
          minHeight: '60px',
          backgroundColor: colors.copper,
          borderRadius: '10px',
          flexShrink: 0,
          boxShadow: `0 4px 12px rgba(${196}, ${122}, ${58}, 0.3)`,
          order: 2,
        }}
      >
        <Icon sx={{ color: 'white', fontSize: '1.8rem' }} />
      </Box>

      {/* Text Content - on the left for RTL */}
      <Box sx={{ flex: 1, textAlign: 'right', order: 1 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            color: colors.copper,
            fontFamily: '"Rubik", sans-serif',
            fontSize: '1.1rem',
            mb: 0.5,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: colors.pipeGray,
            fontFamily: '"Heebo", sans-serif',
            lineHeight: 1.6,
            fontSize: '0.95rem',
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default ServiceCard;
