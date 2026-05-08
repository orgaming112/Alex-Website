import React, { useState, useEffect } from 'react';
import {
  Box,
  IconButton,
  MobileStepper,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { colors } from '../App';

// Sample images from /photos/home folder
const sliderImages = [
  {
    id: 1,
    title: 'שירותי אינסטלציה',
    src: '/photos/home/image1.jpeg',
  },
  {
    id: 2,
    title: 'תיקון ברזים',
    src: '/photos/home/image2.jpeg',
  },
  {
    id: 3,
    title: 'שירותי תיקון כללי',
    src: '/photos/home/image3.jpeg',
  },
  {
    id: 4,
    title: 'התקנת מערכות מים',
    src: '/photos/home/image4.jpeg',
  },
];

const ImageSlider = () => {
  const [activeStep, setActiveStep] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const maxSteps = sliderImages.length;

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prevStep) => (prevStep + 1) % maxSteps);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [maxSteps]);

  const handleNext = () => {
    setActiveStep((prevStep) => (prevStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => (prevStep - 1 + maxSteps) % maxSteps);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        maxWidth: '100%',
        height: { xs: '300px', sm: '400px', md: '500px' },
        overflow: 'hidden',
        overflowX: 'hidden',
        borderRadius: '10px',
        boxShadow: `0 8px 24px ${colors.navy}40`,
        border: `3px solid ${colors.copper}`,
      }}
    >
      {/* Slider Container */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          maxWidth: '100%',
          height: '100%',
          overflow: 'hidden',
        }}
      >
        {/* Images */}
        {sliderImages.map((image, index) => (
          <Box
            key={image.id}
            component="img"
            src={image.src}
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/1200x500?text=' + image.title;
            }}
            alt={image.title}
            sx={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: activeStep === index ? 1 : 0,
              transition: 'opacity 0.8s ease-in-out',
              zIndex: activeStep === index ? 1 : 0,
            }}
          />
        ))}

        {/* Overlay with title */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            background: `linear-gradient(to top, ${colors.navy}DD, transparent)`,
            color: colors.white,
            p: 3,
            zIndex: 2,
            textAlign: isMobile ? 'center' : 'right',
          }}
        >
          <Box
            component="h2"
            sx={{
              margin: 0,
              fontSize: { xs: '1.5rem', md: '2rem' },
              fontWeight: 700,
              fontFamily: '"Rubik", sans-serif',
              color: colors.copper,
            }}
          >
            {sliderImages[activeStep].title}
          </Box>
        </Box>

        {/* Navigation Arrows */}
        {/* Left Button - Previous Slide (for RTL) */}
        <IconButton
          onClick={handleBack}
          sx={{
            position: 'absolute',
            top: '50%',
            left: 16,
            transform: 'translateY(-50%)',
            zIndex: 3,
            backgroundColor: `${colors.copper}CC`,
            color: colors.white,
            width: 48,
            height: 48,
            '&:hover': {
              backgroundColor: colors.copper,
              transform: 'translateY(-50%) scale(1.1)',
              opacity: 0.9,
            },
            transition: 'all 0.3s ease',
          }}
        >
          <KeyboardArrowLeft sx={{ fontSize: '2rem' }} />
        </IconButton>

        {/* Right Button - Next Slide (for RTL) */}
        <IconButton
          onClick={handleNext}
          sx={{
            position: 'absolute',
            top: '50%',
            right: 16,
            transform: 'translateY(-50%)',
            zIndex: 3,
            backgroundColor: `${colors.copper}CC`,
            color: colors.white,
            width: 48,
            height: 48,
            '&:hover': {
              backgroundColor: colors.copper,
              transform: 'translateY(-50%) scale(1.1)',
              opacity: 0.9,
            },
            transition: 'all 0.3s ease',
          }}
        >
          <KeyboardArrowRight sx={{ fontSize: '2rem' }} />
        </IconButton>
      </Box>

      {/* Indicators */}
      <MobileStepper
        steps={maxSteps}
        position="bottom"
        activeStep={activeStep}
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'transparent',
          zIndex: 4,
          justifyContent: 'center',
          '& .MuiMobileStepper-dotActive': {
            backgroundColor: colors.copper,
          },
          '& .MuiMobileStepper-dot': {
            backgroundColor: `${colors.copper}66`,
          },
        }}
        nextButton={<div />}
        backButton={<div />}
        LinearProgressProps={{
          sx: { display: 'none' },
        }}
      />
    </Box>
  );
};

export default ImageSlider;
