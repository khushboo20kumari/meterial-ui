// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import { Box } from '@mui/material';
// import {green, blue, yellow ,orange, lightBlue,red,blueGrey} from '@mui/material/colors';

// const Root = styled('div')(({ theme }) => ({
//   padding: theme.spacing(1),
//   [theme.breakpoints.down('sm')]: {
//     backgroundColor: orange[500],
//   },
//   [theme.breakpoints.up('sm')]: {
//     backgroundColor: red[500],
//   },
//   [theme.breakpoints.up('md')]: {
//     backgroundColor: blue[500],
//   },
//   [theme.breakpoints.up('lg')]: {
//     backgroundColor: green[500],
//   },
//   [theme.breakpoints.up('xl')]: {
//     backgroundColor: yellow[500],
//   },
  
// }));

// function Breakpoint() {
//   return (
//     <Root>
//          <Box style={{border:"1px solid red"}}>green</Box>
//          <Box style={{border:"1px solid red"}}>Yellow</Box>
//          <Box style={{border:"1px solid red"}}>Red</Box>
//     </Root>
//   );
// }
// export default Breakpoint;



// import React from 'react';
// import { ThemeProvider, createTheme } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';

// const theme = createTheme({
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 600,
//       md: 960,
//       lg: 1280,
//       xl: 1920,
//     },
//   },
// });

// const App = () => {
//   return (
//     <ThemeProvider theme={theme}>
//       <Button variant="contained" color="primary">
//         Click me
//       </Button>
//     </ThemeProvider>
//   );
// };

// export default App;

import { Box } from '@mui/material'; 
  
const breakpoints = { 
   border: "1px solid black", 
   margin: 2, 
   flex: { xs: "100%", sm: "calc(50% - 50px)", 
    md: "calc(33% - 50px)", lg: "calc(25% - 50px)" }, 
}; 
  
const Break = () => { 
   return ( 
       <Box sx={{ display: "flex", flexWrap: "wrap", 
        textAlign: 'center' }}> 
           <Box sx={breakpoints}>One</Box> 
           <Box sx={breakpoints}>Two</Box> 
           <Box sx={breakpoints}>Three</Box> 
           <Box sx={breakpoints}>Four</Box> 
       </Box> 
   ); 
} 
  
export default Break;

