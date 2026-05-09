import React from 'react';
import { Box, Typography, IconButton, Collapse } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { colors } from '../App';

const ExpandableSection = ({ title, subtitle, summary, icon: Icon, isOpen, onToggle, children }) => {
  return (
    <Box
      component="section"
      sx={{
        borderRadius: '24px',
        border: '1px solid rgba(196, 122, 58, 0.18)',
        backgroundColor: colors.white,
        overflow: 'hidden',
        boxShadow: '0 18px 40px rgba(10, 22, 40, 0.08)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 2,
          px: { xs: 3, md: 4 },
          py: { xs: 2.25, md: 2.75 },
          backgroundColor: colors.cream,
          cursor: 'pointer',
          direction: 'rtl',
        }}
        onClick={onToggle}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            onToggle();
          }
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1, minWidth: 0 }}>
          <Box
            sx={{
              width: 58,
              height: 58,
              minWidth: 58,
              borderRadius: '18px',
              backgroundColor: colors.navy,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 6px 18px rgba(196, 122, 58, 0.18)',
            }}
          >
            {Icon && <Icon sx={{ color: colors.white, fontSize: '1.7rem' }} />}
          </Box>

          <Box sx={{ textAlign: 'right', flex: 1, minWidth: 0 }}>
            <Typography
              variant="h5"
              sx={{
                fontFamily: '"Rubik", sans-serif',
                fontWeight: 800,
                color: colors.navy,
                lineHeight: 1.1,
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: colors.pipeGray,
                fontFamily: '"Heebo", sans-serif',
                mt: 0.5,
              }}
            >
              {subtitle}
            </Typography>
          </Box>
        </Box>

        <IconButton
          onClick={(event) => {
            event.stopPropagation();
            onToggle();
          }}
          sx={{
            borderRadius: '14px',
            width: 46,
            height: 46,
            backgroundColor: colors.copper,
            color: colors.white,
            '&:hover': {
              backgroundColor: colors.copperLight,
            },
          }}
          aria-label={isOpen ? 'Collapse section' : 'Expand section'}
        >
          {isOpen ? <RemoveIcon /> : <AddIcon />}
        </IconButton>
      </Box>

      <Collapse in={isOpen} timeout={300} unmountOnExit>
        <Box sx={{ px: { xs: 3, md: 4 }, py: { xs: 3, md: 4 } }}>
          <Typography
            variant="body1"
            sx={{
              color: colors.pipeGray,
              fontFamily: '"Heebo", sans-serif',
              mb: 3,
              lineHeight: 1.8,
              textAlign: 'right',
            }}
          >
            {summary}
          </Typography>

          {children}
        </Box>
      </Collapse>
    </Box>
  );
};

export default ExpandableSection;
