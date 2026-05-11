import React, { useState } from 'react';
import { Card, Box, Typography, Dialog, IconButton, Tooltip } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import { colors } from '../App';

const ServiceCard = ({ title, image, position = 'center', scale = 1.18 }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card
        elevation={0}
        onClick={() => setOpen(true)}
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid rgba(196, 122, 58, 0.3)',
          borderRadius: '16px',
          overflow: 'hidden',
          backgroundColor: colors.navy,
          cursor: 'pointer',
          transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
          '&:hover': {
            boxShadow: '0 12px 32px rgba(196, 122, 58, 0.25)',
            borderColor: 'rgba(196, 122, 58, 0.6)',
          },
          '&:hover .card-img': {
            transform: 'scale(1.0)',
          },
          '&:hover .zoom-hint': {
            opacity: 1,
          },
        }}
      >
        {/* Image area */}
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            paddingTop: { xs: '65%', sm: '100%' },
            overflow: 'hidden',
            backgroundColor: colors.deepNavy,
          }}
        >
          <Box
            component="img"
            className="card-img"
            src={image}
            alt={title}
            loading="lazy"
            sx={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: position,
              transform: `scale(${scale})`,
              transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          />

          {/* Hover overlay */}
          <Box
            className="zoom-hint"
            sx={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.0) 50%, rgba(10,22,40,0.55) 100%)',
              opacity: 0,
              transition: 'opacity 0.3s ease',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              pb: 1.5,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#fff' }}>
              <OpenInFullIcon sx={{ fontSize: '0.95rem' }} />
              <Typography sx={{ fontSize: '0.78rem', fontFamily: '"Rubik", sans-serif', fontWeight: 600 }}>
                לחץ להגדלה
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Title */}
        <Box
          sx={{
            py: { xs: 1, sm: 1.5 },
            px: 1,
            textAlign: 'center',
            borderTop: '1px solid rgba(196,122,58,0.15)',
          }}
        >
          <Typography
            sx={{
              color: colors.white,
              fontWeight: 700,
              fontFamily: '"Rubik", sans-serif',
              fontSize: { xs: '0.82rem', sm: '0.95rem' },
              letterSpacing: '0.03em',
            }}
          >
            {title}
          </Typography>
        </Box>
      </Card>

      {/* Fullscreen dialog */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="lg"
        PaperProps={{
          sx: {
            backgroundColor: 'transparent',
            boxShadow: 'none',
            overflow: 'visible',
            m: { xs: 1, sm: 2 },
          },
        }}
        sx={{ '& .MuiBackdrop-root': { backgroundColor: 'rgba(0,0,0,0.9)' } }}
      >
        <Box sx={{ position: 'relative' }}>
          <IconButton
            onClick={() => setOpen(false)}
            sx={{
              position: 'absolute',
              top: -14,
              right: -14,
              zIndex: 10,
              backgroundColor: colors.copper,
              color: '#fff',
              width: 34,
              height: 34,
              '&:hover': { backgroundColor: colors.copperLight },
            }}
          >
            <CloseIcon sx={{ fontSize: '1rem' }} />
          </IconButton>

          <Box
            component="img"
            src={image}
            alt={title}
            sx={{
              display: 'block',
              maxWidth: '90vw',
              maxHeight: '88vh',
              width: 'auto',
              height: 'auto',
              borderRadius: '12px',
              boxShadow: '0 24px 60px rgba(0,0,0,0.7)',
              touchAction: 'pinch-zoom',
            }}
          />

          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.72), transparent)',
              borderRadius: '0 0 12px 12px',
              py: 1.5,
              textAlign: 'center',
            }}
          >
            <Typography sx={{ color: '#fff', fontFamily: '"Rubik", sans-serif', fontWeight: 700, fontSize: '1rem' }}>
              {title}
            </Typography>
          </Box>
        </Box>
      </Dialog>
    </>
  );
};

export default ServiceCard;
