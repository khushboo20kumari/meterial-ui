// import { useState } from "react";

// function SelectArray() {
//     const data=["completed","pending","not started","started"]

//     const [str,setStr]=useState("")

//     const HandleChange=(e)=>{
//         setStr(e.target.value)
//     }

//     return (
//         <>
//             hello Select Arrray data.....
//             <select onChange={HandleChange} value={str}>
//                 {data.map((item)=>(
//                     <option>{item}</option>
//                 ))}

//             </select>
//             <p>{str}</p>


//         </>
//     )
// }
// export default SelectArray;



// function SelectArray() {

//   const data = ["completed", "pending", "not started", "started"]

//   const [str, setStr] = useState("")

//   const HandleChange = (e) => {
//     setStr(e.target.value)
//   }

//   fetch("http://localhost:3000/status", {
//     method: "POST",
//     headers: {
//       "content-Type": "application/json"
//     },
//     body: JSON.stringify(data)
//   }).then((res) => {
//     alert("succefully save data in json")
//   })

//   return (
//     <>
//       <select onChange={HandleChange}>
//         {data.map((item) => (
//           <option>{item}</option>
//         ))}

//       </select>
//       <p>{str}</p>

//     </>
//   )
// }
// export default SelectArray;


// import React, { useState } from "react";

// function SelectArray() {
//   const data = ["completed", "pending", "not started", "started"];

//   const [selectedStatus, setSelectedStatus] = useState("");

//   const handleChange = (e) => {
//     const selectedValue = e.target.value;
//     setSelectedStatus(selectedValue);

//     fetch("http://localhost:3000/status", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ status: selectedValue }),
//     })
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error(`HTTP error! Status: ${res.status}`);
//         }
//         return res.json();
//       })
//       .then((res) => {
//         alert("Successfully saved data in JSON");
//         console.log("Response from server:", res);
//       })
//       .catch((error) => {
//         console.error("Error saving data to server:", error);
//       });
//   };

//   return (
//     <>
//       <select onChange={handleChange} value={selectedStatus}>
//         <option value="" disabled>Select a status</option>
//         {data.map((item) => (
//           <option key={item} value={item}>
//             {item}
//           </option>
//         ))}
//       </select>
//       <p>Selected Status: {selectedStatus}</p>
//     </>
//   );
// }

// export default SelectArray;



// function SelectArray() {
//   fetch("http://localhost:3000/userTask", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(),
//   })
//     .then((res) => {
//       return res.json();
//     })
//     .then((res) => {
//       alert("Successfully saved data in JSON");

//     })


//   return (
//     <>
//       <p>
//         <select>
//           <option></option>
//         </select>
//       </p>
//     </>
//   )
// }
// export default SelectArray;






// import React, { useState, useEffect } from 'react';

// function DialogForm() {
//   const [data, setData] = useState([]);
//   const [str, setStr] = useState('');

//   const fetchData = () => {
//     fetch('http://localhost:3000/userTask')
//       .then((res) => res.json())
//       .then((res) => setData(res));
//   };

//   const updateStatus = (taskId, newStatus) => {
//     const updatedData = data.map((item) =>
//       item.id === taskId ? { ...item, status: newStatus } : item
//     );

//     fetch('http://localhost:3000/userTask', {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ userTask: updatedData }),
//     })
//       .then((res) => res.json())
//       .then(() => {
//         alert('Successfully saved data in JSON');
//       })
//       .catch((error) => {
//         console.error('Error updating status:', error);
//       });
//   };

//   const handleStatusChange = (taskId) => (e) => {
//     const newStatus = e.target.value;
//     setStr(newStatus);
//     updateStatus(taskId, newStatus);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []); // Fetch data on component mount

//   return (
//     <>
//       {data.map((task) => (
//         <div key={task.id}>
//           <p>{task.task}</p>
//           <select value={task.status} onChange={handleStatusChange(task.id)}>
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

// import { Box ,TextField,MenuItem} from "@mui/material";
// import { useState } from "react";

// function SelectArray() {
//   const [data,setData]=useState("")

//   const selectStatus = [
//     {
//       value: 'started',
//       status: 'Started',
//     },
//     {
//       value: 'prossesing',
//       status: 'Prossesing',
//     },
//     {
//       value: 'completed',
//       status: 'Completed',
//     },
//     {
//       value: 'Not started',
//       status: 'Not started',
//     },
//   ];

//   const handleSelect = (event, index) => {
//     const { value } = event.target;
//     const updatedData = [...data];
//     updatedData[index] = { ...updatedData[index], status: value };
//     setData(updatedData);

//     const updatedStatus = {
//       status: value,
//       userName: data[index].userName,
//       task: data[index].task,
//     };
//     const taskId = data[index].id;

//     fetch(`http://localhost:3000/userTask/${taskId}`, {
//       method: "PUT",
//       headers: {
//       "Content-Type": "application/json",
//     },
//       body: JSON.stringify(updatedStatus),
//     })
//         .then((response) => response.json())
//     .then(() => {
//     })
//     .catch((error) => {
//       console.error("Error updating status:", error);
//     });
// };
// return (
//   <>
//     {data.map((item, i) => (
//       <Box className="statusbox" key={i} marginBottom={2} style={{ textAlign: "center" }}>
//         <TextField
//           name="status"
//           select
//           label="Status"
//           value={item.status}
//           onChange={(event) => handleSelect(event, i)}
//           helperText={!item.status ? 'Choose status' : 'Select Status from here'}
//         >
//           {selectStatus.map((item) => (
//             <MenuItem key={item.value} value={item.value}>
//               {item.status}
//             </MenuItem>
//           ))}

//         </TextField>
//       </Box>

//     ))}
//   </>
// )
// }
// export default SelectArray;



// import { Box, TextField, MenuItem } from "@mui/material";
// import { useState, useEffect } from "react";

// function SelectArray() {
//   const [data, setData] = useState([]); 

//   useEffect(() => {
  
//     fetchData();
//   }, []);

//   const selectStatus = [
//     {
//       value: 'started',
//       status: 'Started',
//     },
//     {
//       value: 'prossesing',
//       status: 'Processing',
//     },
//     {
//       value: 'completed',
//       status: 'Completed',
//     },
//     {
//       value: 'Not started',
//       status: 'Not started',
//     },
//   ];

//   const fetchData = () => {
//     fetch('http://localhost:3000/userTask')
//       .then((res) => res.json())
//       .then((res) => setData(res));
//   };

//   const handleSelect = (event, index) => {
//     const { value } = event.target;
//     const updatedData = [...data];
//     updatedData[index] = { ...updatedData[index], status: value };
//     setData(updatedData);

//     const updatedStatus = {
//       status: value,
//       userName: data[index].userName,
//       task: data[index].task,
//     };
//     const taskId = data[index].id;

//     fetch(`http://localhost:3000/userTask/${taskId}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(updatedStatus),
//     })
//       .then((response) => response.json())
//       .then(() => {
  
//       })
//       .catch((error) => {
//         console.error("Error updating status:", error);
//       });
//   };

//   return (
//     <>
//       {data.map((item, i) => (
//         <Box className="statusbox" key={i} marginBottom={2} style={{ textAlign: "center" }}>
//           <TextField
//             name="status"
//             select
//             label="Status"
//             value={item.status}
//             onChange={(event) => handleSelect(event, i)}
//             helperText={!item.status ? 'Choose status' : 'Select Status from here'}
//           >
//             {selectStatus.map((status) => (
//               <MenuItem key={status.value} value={status.value}>
//                 {status.status}
//               </MenuItem>
//             ))}
//           </TextField>
//         </Box>
//       ))}
//     </>
//   );
// }

// export default SelectArray;



// import { Box, TextField, MenuItem } from "@mui/material";
// import { useState, useEffect } from "react";
// function SelectArray() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const selectStatus = [
//     {
//       value: 'started',
//       status: 'Started',
//     },
//     {
//       value: 'processing',
//       status: 'Processing',
//     },
//     {
//       value: 'completed',
//       status: 'Completed',
//     },
//     {
//       value: 'notStarted',
//       status: 'Not Started',
//     },
//   ];

//   const fetchData = () => {
//     fetch('http://localhost:3000/userTask')
//       .then((res) => res.json())
//       .then((res) => setData(res));
//   };

//   const handleSelect = (event, index) => {
//     const { value } = event.target;

//     const updatedData = [...data];
//     updatedData[index] = { ...updatedData[index], status: value };
//     setData(updatedData);

//     const updatedStatus = {
//       status: value,
//       userName: data[index].userName,
//       task: data[index].task,
//     };
//     const taskId = data[index].id;

//     fetch(`http://localhost:3000/userTask/${taskId}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(updatedStatus),
//     })
//       .then((response) => response.json())
//       .then(() => {
        
//         fetchData();
//       })
//       .catch((error) => {
//         console.error("Error updating status:", error);
//         setData([...data]);
//       });
//   };

//   return (
//     <>
//       {data.map((item, i) => (
//         <Box className="statusbox" key={i} marginBottom={2} style={{ textAlign: "center" }}>
//           <TextField
//             name="status"
//             select
//             label="Status"
//             value={item.status}
//             onChange={(event) => handleSelect(event, i)}
//             helperText={!item.status ? 'Choose status' : 'Select Status from here'}
//           >
//             {selectStatus.map((status) => (
//               <MenuItem key={status.value} value={status.value}>
//                 {status.status}
//               </MenuItem>
//             ))}
//           </TextField>
//         </Box>
//       ))}
//     </>
//   );
// }

// export default SelectArray;



// import { Box, TextField, MenuItem, FormControl, InputLabel, Select } from "@mui/material";
// import { useState, useEffect, useRef } from "react";
// import { useReactToPrint } from "react-to-print";
// import DataTask from "./TaskData";
// import PaginationCom from "./Pegination";
// import GeneratePdf from "./GeneratePdf";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

// function TableData({ data, setFilteredData }) {
//   const [task, setTask] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [clickedItem, setClickedItem] = useState(null);
//   const [openForm, setOpenForm] = useState(false);
//   const [employeStatus, setEmployeStatus] = useState("");
//   const [taskData, setTaskData] = useState([]);

//   const itemsPerPage = 10;

//   const componentRef = useRef();

//   const GenretePdfSave = useReactToPrint({
//     content: () => componentRef.current,
//   });

//   const fetchData = () => {
//     if (!task || !clickedItem || !employeStatus) {
//       alert("Please enter the task, select a user, and choose a status.");
//       return;
//     }

//     const item = {
//       userName: clickedItem.name,
//       task,
//       status: employeStatus,
//     };

//     fetch("http://localhost:8000/userTask", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(item),
//     })
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error(`HTTP error! Status: ${res.status}`);
//         }
//         return res.json();
//       })
//       .then(() => {
//         alert("Successfully saved data in JSON");
//         fetchDataApi();
//       })
//       .catch((error) => {
//         console.error("Error saving data to server:", error);
//       });
//   };

//   const fetchDataApi = () => {
//     fetch("http://localhost:8000/userTask")
//       .then((res) => res.json())
//       .then((res) => {
//         setTaskData(res);
//       });
//   };

//   useEffect(() => {
//     fetchDataApi();
//   }, []);

//   const handleChangePage = (event, newPage) => {
//     setCurrentPage(newPage);
//   };

//   const handleClick = (item) => {
//     setClickedItem(item);
//     setOpenForm(true);
//   };

//   const handleClose = () => {
//     setClickedItem(null);
//     setOpenForm(false);
//   };

//   const handleFormSubmit = () => {
//     handleClose();
//   };

//   const HandleChange = (e) => {
//     setTask(e.target.value);
//   };

//   const HandleSelectOption = (e) => {
//     setEmployeStatus(e.target.value);
//   };

//   const getUserStatus = () => {
//     if (employeStatus) {
//       const filteredData = data.filter((item) => item.status === employeStatus);
//       setFilteredData(filteredData);
//     } else {
//       setFilteredData(data);
//     }
//   };

//   return (
//     <>
//       <Box sx={{ m: "20px", background: "#FAEBD7" }} ref={componentRef}>
//         {/* Existing Table Code */}

//         {data.map((item, i) => (
//           <Box className="statusbox" key={i} marginBottom={2} style={{ textAlign: "center" }}>
//             <TextField
//               name="status"
//               select
//               label="Status"
//               value={item.status}
//               onChange={(event) => handleSelect(event, i)}
//               helperText={!item.status ? 'Choose status' : 'Select Status from here'}
//             >
//               {/* Existing MenuItem Code */}
//             </TextField>
//           </Box>
//         ))}

//       </Box>

//       {/* Existing Pagination and GeneratePdf Code */}
//       {/* ... */}

//       <DataTask
//         openForm={openForm}
//         handleClose={handleClose}
//         name={clickedItem?.name}
//         HandleChange={HandleChange}
//         fetchData={fetchData}
//         taskData={taskData}
//         handleFormSubmit={handleFormSubmit}
//         fetchDataApi={fetchDataApi}
//       />
//     </>
//   );
// }

// export default TableData;
