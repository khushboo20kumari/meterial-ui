import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
function SideBar() {
    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} lg={4} sm={4}>
                        <Item><img style={{ width: "100%" }} src='https://demo.bootstrapdash.com/purple-admin-free/assets/images/dashboard/img_1.jpg'></img></Item>
                    </Grid>
                    <Grid item xs={12} lg={4} sm={4} >
                        <Item>
                            <img style={{ width: "100%" }} src='https://demo.bootstrapdash.com/purple-admin-free/assets/images/dashboard/img_2.jpg'></img>
                        </Item>
                    </Grid>
                    <Grid item xs={12} lg={4} sm={4} >
                        <Item>
                            <img style={{ width: "100%" }} src='https://demo.bootstrapdash.com/purple-admin-free/assets/images/dashboard/img_3.jpg'></img>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ width: '100%', position: "relative", top: "40px" }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} lg={7} sm={12}>
                        <Item><img style={{ width: "100%" }} src='https://demo.bootstrapdash.com/purple-admin-free/assets/images/dashboard/img_1.jpg'></img></Item>
                    </Grid>
                    <Grid item xs={12} lg={5} sm={12} >
                        <Item>
                            <img style={{ width: "100%" }} src='https://demo.bootstrapdash.com/purple-admin-free/assets/images/dashboard/img_2.jpg'></img>
                        </Item>
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{ width: '100%', position: "relative", top: "80px" }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} lg={12} sm={12}>
                        <Item style={{ border: "1px solid red" }}>i am khushboo</Item>
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{ width: '100%', position: "relative", top: "130px" }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} lg={7} sm={12}>
                        <Item><img style={{ width: "100%" }} src='https://demo.bootstrapdash.com/purple-admin-free/assets/images/dashboard/img_1.jpg'></img></Item>
                    </Grid>
                    <Grid item xs={12} lg={5} sm={12} >
                        <Item>
                            <img style={{ width: "100%" }} src='https://demo.bootstrapdash.com/purple-admin-free/assets/images/dashboard/img_2.jpg'></img>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ width: '100%', position: "relative", top: "130px",border:"1px solid red"}}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} lg={12} sm={12}>
                        <Item>i am khushboo </Item>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
export default SideBar;