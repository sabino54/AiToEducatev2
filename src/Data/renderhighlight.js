import React, { useState } from 'react';
import { Tooltip } from "@mui/material";

const RenderHighlight = ({ children, tooltipText }) => {
  const [open, setOpen] = useState(false);

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  const handleTooltipClose = () => {
    setOpen(false);
  };

  return (
    <Tooltip
      placement='left'
      arrow
      interactive
      open={open}
      onClose={handleTooltipOpen}
      title={
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontWeight: 'bold', fontSize: '15px' }}>{tooltipText}</span>
          <button onClick={handleTooltipClose} style={{ marginTop: 'auto' }}>Close</button>
        </div>
      }>
      <span 
        style={{ backgroundColor: '#FAA0A0' }}
        onMouseEnter={handleTooltipOpen}
        onMouseLeave={handleTooltipOpen}
      >
        {children}
      </span>
    </Tooltip>
  );
};

export default RenderHighlight;
