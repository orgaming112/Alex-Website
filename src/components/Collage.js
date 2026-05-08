import React, { useState } from 'react';
import { Box, IconButton, Typography, Grid } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { colors } from '../App';

/**
 * Collage - Reusable image gallery component with image switching
 * 
 * Props:
 * - images: Array of image objects [{ id, images: [img1, img2, img3] }, ...]
 *   Each item has up to 3 images per entry (collage shows 3 entries per grid)
 * - title: Optional title for the collage section (string)
 * - spacing: Grid spacing (default: 2)
 * - sx: Additional styles (optional)
 */
const Collage = ({ images = [], title, spacing = 2, sx = {} }) => {
  const [currentImages, setCurrentImages] = useState(images.map(() => 0));

  const handleNext = (index) => {
    setCurrentImages((prev) => {
      const newImages = [...prev];
      newImages[index] = (newImages[index] + 1) % 3;
      return newImages;
    });
  };

  const handlePrev = (index) => {
    setCurrentImages((prev) => {
      const newImages = [...prev];
      newImages[index] = (newImages[index] - 1 + 3) % 3;
      return newImages;
    });
  };

  return (
    <Box sx={sx}>
      {/* Title (optional) */}
      {title && (
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
            {title}
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
      )}

      {/* Image Grid */}
      <Grid container spacing={spacing}>
        {images.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={item.id || index}>
            <Box
              sx={{
                height: { xs: 200, md: 250 },
                backgroundColor: colors.slate,
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                border: `2px dashed ${colors.copper}`,
                position: 'relative',
                p: 2,
              }}
            >
              {/* Image Info */}
              <Typography
                sx={{
                  color: colors.pipeGray,
                  fontFamily: '"Heebo", sans-serif',
                  textAlign: 'center',
                  mb: 2,
                  fontSize: '0.9rem',
                }}
              >
                תמונה {currentImages[index] + 1} מתוך 3
              </Typography>

              {/* Navigation Controls */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconButton
                  onClick={() => handlePrev(index)}
                  sx={{
                    color: colors.copper,
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      backgroundColor: `rgba(${196}, ${122}, ${58}, 0.1)`,
                      transform: 'scale(1.1)',
                    },
                  }}
                  size="small"
                >
                  <ArrowForwardIcon />
                </IconButton>

                <Typography
                  sx={{
                    color: colors.pipeGray,
                    fontFamily: '"Heebo", sans-serif',
                    textAlign: 'center',
                    px: 1,
                    minWidth: '60px',
                  }}
                >
                  עבודה {index + 1}
                </Typography>

                <IconButton
                  onClick={() => handleNext(index)}
                  sx={{
                    color: colors.copper,
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      backgroundColor: `rgba(${196}, ${122}, ${58}, 0.1)`,
                      transform: 'scale(1.1)',
                    },
                  }}
                  size="small"
                >
                  <ArrowBackIcon />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Collage;
