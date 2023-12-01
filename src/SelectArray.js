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


import React, { useState } from "react";

function SelectArray() {
  const data = ["completed", "pending", "not started", "started"];

  const [selectedStatus, setSelectedStatus] = useState("");

  const handleChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedStatus(selectedValue);

    // Assuming you want to send the selected status to the server immediately
    fetch("http://localhost:3000/status", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: selectedValue }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((res) => {
        alert("Successfully saved data in JSON");
        console.log("Response from server:", res);
      })
      .catch((error) => {
        console.error("Error saving data to server:", error);
      });
  };

  return (
    <>
      <select onChange={handleChange} value={selectedStatus}>
        <option value="" disabled>Select a status</option>
        {data.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <p>Selected Status: {selectedStatus}</p>
    </>
  );
}

export default SelectArray;
