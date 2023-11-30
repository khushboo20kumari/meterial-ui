import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { Select } from '@mui/material';
function Selectoption() {
  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel>Status</InputLabel>
        <Select
         
          label="Status"
        >
          <MenuItem value="">
          </MenuItem>
          <MenuItem value="">Completed</MenuItem>
          <MenuItem value="">Panding</MenuItem>
          <MenuItem value="">Not Started</MenuItem>
          <MenuItem value="">Started</MenuItem>
        </Select>
      </FormControl>
     
    </div>
  );
}

export default Selectoption;