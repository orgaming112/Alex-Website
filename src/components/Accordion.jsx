import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import './Accordion.css';

const Accordion = ({ items = [] }) => {
  const [expanded, setExpanded] = useState(0);

  const toggleItem = (index) => {
    setExpanded(expanded === index ? -1 : index);
  };

  return (
    <Box className="accordion-container">
      {items.map((item, index) => {
        const Icon = item.icon;
        const isOpen = expanded === index;
        const contentArray = Array.isArray(item.content) ? item.content : [item.content];

        return (
          <Box
            key={index}
            className={`accordion-item ${isOpen ? 'open' : ''}`}
          >
            {/* Header */}
            <Box
              className="accordion-item-header"
              onClick={() => toggleItem(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  toggleItem(index);
                }
              }}
            >
              <Box className="accordion-item-icon-box">
                {Icon && <Icon className="accordion-service-icon" />}
              </Box>

              <Typography variant="h6" className="accordion-item-title">
                {item.title}
              </Typography>

              <Box className={`accordion-item-toggle-icon ${isOpen ? 'open' : ''}`}>
                {isOpen ? (
                  <RemoveIcon sx={{ fontSize: '1.5rem' }} />
                ) : (
                  <AddIcon sx={{ fontSize: '1.5rem' }} />
                )}
              </Box>
            </Box>

            {/* Content */}
            <Box
              className={`accordion-item-content ${isOpen ? 'expanded' : ''}`}
              style={{
                maxHeight: isOpen ? '500px' : '0',
              }}
            >
              <Box className="accordion-item-body">
                {contentArray.length > 1 ? (
                  <Box className="accordion-item-list">
                    {contentArray.map((item, idx) => (
                      <Box key={idx} className="accordion-list-item">
                        <CheckCircleIcon className="accordion-list-icon" />
                        <Typography className="accordion-list-text">
                          {item}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                ) : (
                  <Typography className="accordion-item-text">
                    {contentArray[0]}
                  </Typography>
                )}
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default Accordion;


