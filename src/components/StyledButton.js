import React from 'react';
import { Button as MuiButton, Box } from '@mui/material';
import { colors } from '../App';

/**
 * StyledButton - Reusable Button Component with Preset Variants
 * 
 * Features:
 * - Modern, clean design with copper accent color
 * - 3 built-in variants: primary, secondary, text
 * - Smooth animations and hover effects
 * - RTL support
 * - Accessibility optimized (min 44px height, proper contrast)
 * - Icon support via startIcon/endIcon props
 * 
 * Usage:
 * <StyledButton variant="primary">Click Me</StyledButton>
 * <StyledButton variant="secondary" startIcon={<SomeIcon />}>Secondary</StyledButton>
 * <StyledButton variant="text">Text Only</StyledButton>
 */

const StyledButton = React.forwardRef(
  (
    {
      variant = 'primary',
      children,
      fullWidth = false,
      size = 'medium',
      disabled = false,
      sx = {},
      ...props
    },
    ref
  ) => {
    // Variant-specific MUI button variant mapping
    const variantMap = {
      primary: 'contained',
      secondary: 'outlined',
      text: 'text',
    };

    // Size-specific padding and fontSize
    const sizeStyles = {
      small: {
        px: 2.5,
        py: 1,
        fontSize: '0.9rem',
      },
      medium: {
        px: 4,
        py: 1.5,
        fontSize: '1rem',
      },
      large: {
        px: 5,
        py: 2,
        fontSize: '1.1rem',
      },
    };

    // Combined styles for each variant
    const variantStyles = {
      primary: {
        backgroundColor: colors.copper,
        color: colors.white,
        boxShadow: `0 6px 16px rgba(196, 122, 58, 0.35)`,
        '&:hover': {
          backgroundColor: colors.copperLight,
          boxShadow: `0 12px 24px rgba(196, 122, 58, 0.4)`,
          transform: 'translateY(-2px)',
        },
        '&:active': {
          transform: 'translateY(0)',
          boxShadow: `0 4px 12px rgba(196, 122, 58, 0.3)`,
        },
        '&:disabled': {
          backgroundColor: colors.pipeGray,
          color: 'rgba(255, 255, 255, 0.5)',
          boxShadow: 'none',
        },
      },
      secondary: {
        borderColor: colors.copper,
        color: colors.copper,
        border: '2px solid',
        '&:hover': {
          backgroundColor: `rgba(196, 122, 58, 0.08)`,
          borderColor: colors.copperLight,
          color: colors.copperLight,
          transform: 'translateY(-2px)',
          boxShadow: `0 6px 16px rgba(196, 122, 58, 0.15)`,
        },
        '&:active': {
          transform: 'translateY(0)',
        },
        '&:disabled': {
          borderColor: colors.pipeGray,
          color: 'rgba(138, 155, 176, 0.5)',
        },
      },
      text: {
        color: colors.copper,
        backgroundColor: 'transparent',
        '&:hover': {
          backgroundColor: `rgba(196, 122, 58, 0.1)`,
          color: colors.copperLight,
          transform: 'translateY(-2px)',
        },
        '&:active': {
          transform: 'translateY(0)',
        },
        '&:disabled': {
          color: colors.pipeGray,
        },
      },
    };

    const buttonSx = {
      ...sizeStyles[size],
      ...variantStyles[variant],
      ...sx,
    };

    return (
      <MuiButton
        ref={ref}
        variant={variantMap[variant]}
        fullWidth={fullWidth}
        disabled={disabled}
        sx={buttonSx}
        {...props}
      >
        {children}
      </MuiButton>
    );
  }
);

StyledButton.displayName = 'StyledButton';

export default StyledButton;
