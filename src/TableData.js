// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   '&:nth-of-type(odd)': {
//     backgroundColor: theme.palette.action.hover,
//   }

// }));

// function createData(
//   name: string,
//   calories: number,
//   fat: number,
//   carbs: number,
//   protein: number,
// ) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

// export default function TableData() {
//   return (
//     <TableContainer>
//       <Table sx={{ minWidth: 700 }}>
//         <TableHead>
//           <TableRow>
//             <StyledTableCell>Dessert (100g serving)</StyledTableCell>
//             <StyledTableCell align="right">Calories</StyledTableCell>
//             <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
//             <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
//             <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <StyledTableRow key={row.name}>
//               <StyledTableCell component="th" scope="row">
//                 {row.name}
//               </StyledTableCell>
//               <StyledTableCell align="right">{row.calories}</StyledTableCell>
//               <StyledTableCell align="right">{row.fat}</StyledTableCell>
//               <StyledTableCell align="right">{row.carbs}</StyledTableCell>
//               <StyledTableCell align="right">{row.protein}</StyledTableCell>
//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }


// import * as React from 'react';
// import { styled } from '@mui/system';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   '&:nth-of-type(odd)': {
//     backgroundColor: theme.palette.action.hover,
//   },
// }));

// function TableData() {


//   const rows =
//     [
//       {
//         "status": "processing",
//         "userName": "Laxmi Yadav",
//         "task": "React about javscript",
//         "id": 2
//       },
//       {
//         "status": "processing",
//         "userName": "Laxmi Yadav",
//         "task": "React About Html",
//         "id": 3
//       },
//       {
//         "status": "completed",
//         "userName": "Sukanya",
//         "task": "Read About Css",
//         "id": 4
//       },
//       {
//         "status": "started",
//         "userName": "Sukanya",
//         "task": "Read About Python",
//         "id": 5
//       },
//       {
//         "status": "notStarted",
//         "userName": "ujala",
//         "task": "Read About DataBase",
//         "id": 6
//       }
//     ]
//   return (
//     <>
//       <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 650 }} aria-label="simple table">
//           <TableHead>
//             <TableRow>
//               <TableCell></TableCell>
//               <TableCell align="right"></TableCell>
//               <TableCell align="right"></TableCell>
//               <TableCell align="right"></TableCell>
//               <TableCell align="right"></TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows.map((row) => (
//               <StyledTableRow key={row.userName}>
//                 <TableCell component="th" scope="row">
//                   {row.userName}
//                 </TableCell>
//                 <TableCell align="right">{row.userName}</TableCell>
//                 <TableCell align="right">{row.status}</TableCell>
//                 <TableCell align="right">{row.task}</TableCell>
//                 <TableCell align="right">{row.status}</TableCell>
//               </StyledTableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </>
//   );
// }

// export default TableData;


// import * as React from 'react';
// import { styled } from '@mui/system';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   '&:nth-of-type(odd)': {
//     backgroundColor: theme.palette.action.hover,
//   },
// }));

// function TableData() {
//   return (
//     <>
//       <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 650 }} aria-label="simple table">
//           <TableHead>
//             <TableRow>
//               <TableCell>User Name</TableCell>
//               <TableCell align="right">Status</TableCell>
//               <TableCell align="right">Task</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             <StyledTableRow>
//               <TableCell component="th" scope="row">
//                 khushboo
//               </TableCell>
//               <TableCell align="right">puja</TableCell>
//               <TableCell align="right">Laxmi</TableCell>
//             </StyledTableRow>
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </>
//   );
// }

// export default TableData;





import * as React from 'react';
import { styled } from '@mui/system';
import Table from '@mui/material/Table';

import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableRow = styled(TableRow)(({ theme }) => ({

  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action?.hover || theme.palette.action.selected, // Fallback to another property if hover is undefined
  },


}));

function TableData() {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>User Name</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Task</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow>
              <TableCell component="th" scope="row">
                khushboo
              </TableCell>
              <TableCell align="right">puja</TableCell>
              <TableCell align="right">Laxmi</TableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default TableData;
