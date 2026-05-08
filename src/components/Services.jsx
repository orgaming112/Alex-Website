import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { colors } from '../App';
import './Services.css';

const Services = ({ services }) => {
  const [expanded, setExpanded] = useState(0);

  const toggleService = (index) => {
    setExpanded(expanded === index ? -1 : index);
  };

  return (
    <Box className="services-accordion">
      {services.map((service, index) => {
        const Icon = service.icon;
        const isOpen = expanded === index;

        return (
          <Box
            key={service.id}
            className={`accordion-item ${isOpen ? 'open' : ''}`}
          >
            {/* Header */}
            <Box
              className="accordion-header"
              onClick={() => toggleService(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  toggleService(index);
                }
              }}
            >
              <Box className="accordion-icon-box">
                <Icon className="accordion-service-icon" />
              </Box>

              <Typography variant="h6" className="accordion-title">
                {service.title}
              </Typography>

              <Box className={`accordion-toggle-icon ${isOpen ? 'rotate' : ''}`}>
                {isOpen ? (
                  <RemoveIcon sx={{ fontSize: '1.5rem', color: colors.copper }} />
                ) : (
                  <AddIcon sx={{ fontSize: '1.5rem', color: colors.copper }} />
                )}
              </Box>
            </Box>

            {/* Content */}
            <Box
              className={`accordion-content ${isOpen ? 'expanded' : ''}`}
              style={{
                maxHeight: isOpen ? '500px' : '0',
              }}
            >
              <Typography className="accordion-description">
                {service.description}
              </Typography>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default Services;
