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


// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import { red, green, blue } from '@mui/material/colors';

// const Root = styled('div')(({ theme }) => ({

//     [theme.breakpoints.down('md')]: {
//         backgroundColor: red[500],
//     },
//     [theme.breakpoints.up('md')]: {
//         backgroundColor: blue[500],
//     },
//     [theme.breakpoints.up('lg')]: {
//         backgroundColor: green[500],
//     },
// }));

// export default function MediaQuery() {
//     return (
//         <Root>
//             <div style={{background:"pink",width:"80%",margin:"auto"}}>

//             </div>
//         </Root>
//     );
// }


// import React from 'react';
// import useMediaQuery from '@material-ui/core/useMediaQuery';

// export default function MediaQuere() {
//     const ourMediaQuery = useMediaQuery('(min-width:400px)');
//     return (
//         <div style={{ display: 'block', background: "red", width: "100%" }}>
//             <div style={{width:"60%",background:"blue"}}>
//                 <h4>How to use useMediaQuery Component in ReactJS?</h4>
//                 <input></input><button>add</button> <br></br>
//                 <span>{`Is Screen at Minimum 400px: ${ourMediaQuery}`}</span>
//             </div>
//         </div>
//     );
// }

import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function MediaQuery() {
    const isSmallScreen = useMediaQuery('(max-width:767px)');
    const isMediumScreen = useMediaQuery('(min-width:768px) and (max-width:991px)');
    const isLargeScreen = useMediaQuery('(min-width:992px)');

    const containerStyle = {
        width: isSmallScreen ? "100%" : isMediumScreen ? "50%" : "40%",
        background: "blue",
        margin: "auto",
        padding: "20px",
    };

    return (
        <div style={{ display: 'block', background: "red", width: "100%" }}>
            <div style={containerStyle}>
                <h4>How to use useMediaQuery Component in ReactJS?</h4>
                <input></input><button>add</button> <br></br>
                <span>{`Is Screen at Maximum 767px (Small): ${isSmallScreen}`}</span>
                <br />
                <span>{`Is Screen between 768px and 991px (Medium): ${isMediumScreen}`}</span>
                <br />
                <span>{`Is Screen at least 992px (Large): ${isLargeScreen}`}</span>
            </div>
        </div>
    );
}
