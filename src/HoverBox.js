import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function HoverBox() {
  return (
    <Box className="box">
      <Button variant="contained" color="primary">
        Click me
      </Button>
    </Box>
  );
}

export default HoverBox;
