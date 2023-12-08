import React, { useState } from 'react';
import { Tooltip } from "@mui/material";

const RenderHighlight = ({ children, tooltipTitle, tooltipText }) => {
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
      open={open}
      onClose={handleTooltipOpen}
      title={
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontWeight: 'bold', fontSize: '15px' }}>{tooltipTitle}</span>
          <span style={{ fontSize: '12px' }}>{tooltipText}</span>
          <button onClick={handleTooltipClose} style={{ marginTop: 8 }}>Close</button>
        </div>
      }>
      <span 
        style={{ backgroundColor: 'rgba(251, 179, 179, 0.5)' }}
        onMouseEnter={handleTooltipOpen}
        onMouseLeave={handleTooltipOpen} // Change to handleTooltipClose if you want it to close on mouse leave
      >
        {children}
      </span>
    </Tooltip>
  );
};

export default RenderHighlight;
