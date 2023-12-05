// import {Box} from "@mui/material"
// function MediaQuere() {

//     return (
//         <>
//             <Box
//                 sx={{
//                     height: "400px",
//                     background:"red",



//                     width: {
//                         xs: 100,
//                         sm: 200,
//                         md: 300,
//                         lg: 400,
//                         xl: 500


//                     }
//                 }}
//             >
//                 <p>i am khushboo</p>

//             </Box>
//         </>
//     )
// }
// export default MediaQuere;


import * as React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { red, green, blue } from '@mui/material/colors';

const Root = styled('div')(({ theme }) => ({
    padding: theme.spacing(10),
    [theme.breakpoints.down('md')]: {
        backgroundColor: red[500],
    },
    [theme.breakpoints.up('md')]: {
        backgroundColor: blue[500],
    },
    [theme.breakpoints.up('lg')]: {
        backgroundColor: green[500],
    },
}));

export default function MediaQuery() {
    return (
        <Root>
            <div style={{background:"pink"}}>
                <Typography>down(md): red</Typography>
                <Typography>up(md): blue</Typography>
                <Typography>up(lg): green</Typography>
            </div>
        </Root>
    );
}
