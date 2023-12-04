

// import * as React from 'react';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';

import { useState } from "react"

// import Box from "@mui/material/Box"
// import { TextField, Typography } from '@mui/material';
// export default function DialogForm() {
//     const [open, setOpen] = React.useState(false);

//     const handleClickOpen = () => {
//         setOpen(true);
//     };

//     const handleClose = () => {
//         setOpen(false);
//     };

//     return (
//         <>
//             <Button variant="outlined" onClick={handleClickOpen}>
//                 Open full-screen dialog
//             </Button>
//             <Dialog
//                 fullScreen
//                 open={open}
//                 onClose={handleClose}

//             >
//                 <Box sx={{ position: 'relative' }}>

//                     <Box margin='auto'
//                         justifyContent='center'
//                         style={{ width: "40%", height: "300px", background: "red" }}>
//                         <Typography>i am khushboo khushboooo</Typography>
//                         <TextField></TextField>
//                         <Button>add</Button>

//                         <Button autoFocus color="inherit" onClick={handleClose} variant='contained'>
//                             save
//                         </Button>
//                     </Box>


//                 </Box>
//             </Dialog>
//         </>
//     );
// }



// function DialogForm() {

//     const [str,setStr]=useState("")
//     const data = ["completed", "panding", "Started"]
//     fetch("http://localhost:3000/Employee", {
//         method: "PUT",
//         headers: {
//             "content-Type": "application/json"
//         },
//         body: JSON.stringify(str)
//     }).then((res) => {
//         alert("succefully save data in json")
//     })

//     const HandleChange=(e)=>{
//         setStr(e.target.value)

//     }
//     return (
//         <>
//             <select onChange={HandleChange}>
//                 {data.map((item) => (
//                     <option>{item}</option>
//                 ))}
//             </select>
//         </>
//     )
// }
// export default DialogForm;


// // import React, { useState } from 'react';



// import React, { useState } from 'react';

// function DialogForm() {
//   const [str, setStr] = useState("");
//   const data = ["completed", "pending", "started"];

//   const HandleChange = (e) => {
//     const selectedStatus = e.target.value;


//     const taskId = 1; 


//     setStr(selectedStatus);

//     fetch(`http://localhost:3000/Employee/${taskId}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({ status: selectedStatus })
//     })
//     .then((res) => res.json())
//     .then(() => {
//       alert("Successfully saved data in JSON");
//     })
//     .catch((error) => {
//       console.error("Error updating status:", error);
//     });
//   }

//   return (
//     <>
//       <select onChange={HandleChange}>
//         {data.map((item) => (
//           <option key={item}>{item}</option>
//         ))}
//       </select>
//     </>
//   );
// }

// export default DialogForm;


function DialogForm() {
    const [data, setData] = useState([])
    const [str,setStr]=useState("")
    const item=["completed","panding","started"]
    const fetchData = () => {
        fetch("http://localhost:3000/userTask").then((res) => {
            return res.json()
        }).then((res) => {
            setData(res)
        })
    }
    fetch("http://localhost:3000/Employee", {
        method: "PUT",
        headers: {
            "content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then((res) => {
        alert("succefully save data in json")
    })
    const HandleChange=(e)=>{
        setStr(e.target.value)

    }
    return (
        <>
            {data.map((item) => (
                <div>
                    <p>{item.name}</p>
                    <select onChange={HandleChange}>
                        <option></option>
                    </select>

                </div>
            ))}

        </>

    )
}
export default DialogForm;


// import React, {useEffect } from 'react';

// function DialogForm() {
//   const [data, setData] = useState([]);
//   const [str, setStr] = useState('');
//   const item=["completed","panding","started"]

//   const fetchData = () => {
//     fetch('http://localhost:3000/userTask')
//       .then((res) => res.json())
//       .then((res) => setData(res));
//   };

//   const updateStatus = (taskId, newStatus) => {
//     const updatedData = data.map((item) =>
//       item.id === taskId ? { ...item, status: newStatus } : item
//     );

//     fetch(' http://localhost:3000/userTask', {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ userTask: updatedData }),
//     }).then(() => {
//       alert('Successfully saved data in JSON');
//     });
//   };

//   const handleStatusChange = (taskId) => (e) => {
//     const newStatus = e.target.value;
//     setStr(newStatus);
//     updateStatus(taskId, newStatus);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <>
//       {data.map((task) => (
//         <div key={task.id}>
//           <p>{task.task}</p>
//           <select value={str} onChange={handleStatusChange(task.id)}>
//             <option value="">Select Status</option>
//             {item.map((status) => (
//               <option key={status} value={status}>
//                 {status}
//               </option>
//             ))}
//           </select>
//         </div>
//       ))}
//     </>
//   );
// }

// export default DialogForm;


