// import { useEffect } from "react"
// import { useState } from "react"

// function MapMethod() {
//     const [data, setData] = useState([])
//     const [search, setSearch] = useState("")
//     const [filterItem, setFilterItem] = useState([])

//     const HandleClick = () => {
//         fetch("http://localhost:3000/userTask").then((res) => {
//             return res.json()
//         }).then((res) => {
//             setData(res)
//         })
//     }

//     useEffect(()=>{
//         HandleClick()
//     },[])
//     const HandleChange = (e) => {
//         const item=e.target.value
//         setSearch(item)
//        if (item){
//          let result=data.filter((value)=>{
//             value.includes(item)
//          })
//          console.log(result,"ppuja.....")
//        }
//        else{
//         setData()
//        }
//     }
//     console.log(filterItem, "khushboooooo")


//     return (
//         <>
//             <center>
//                 <p>serach bar</p>
//                 <input onChange={HandleChange} value={search}></input>
//             </center>

//         </>
//     )
// }
// export default MapMethod;


// import { useEffect, useState } from "react";

// const MapMethod = () => {
//     const [searchTerm, setSearchTerm] = useState('');

//     const [data, setData] = useState([])
//     const [filteredData, setFilteredData] = useState([]);

//     const HandleClick = () => {
//         fetch("http://localhost:3000/userTask").then((res) => {
//             return res.json()
//         }).then((res) => {
//             setFilteredData(res)
//         })
//     }


//     const handleInputChange = (event) => {
//         const { value } = event.target;
//         setSearchTerm(value);
//         filterData(value);
//     };


//     const filterData = (searchTerm) => {
//         const filteredData = filterData.filter((item) =>
//             item.userName.toLowerCase().includes(searchTerm.toLowerCase())
//         );
//         setData(filteredData)
//     };


//     useEffect(() => {
//         HandleClick()
//     })

//     return (
//         <center>
//             <p>searchBar.......</p>
//             <div>
//                 <input
//                     type="text"
//                     placeholder="Search..."
//                     value={searchTerm}
//                     onChange={handleInputChange}
//                 />
//                 <ul>
//                     {data
//                     .map((item) => (
//                         <li key={item.id}>{item.userName}</li>
//                     ))}
//                 </ul>
//             </div>
//         </center>
//     );
// };


// export default MapMethod;




import React, { useEffect, useState } from "react";
const MapMethod = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    const FetchData = () => {
        fetch("http://localhost:3000/userTask")
            .then((res) => res.json())
            .then((res) => {
                setData(res);
                setFilteredData(res);
            });
    };

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
        
    };
    const HandleData= () => {

        setSearchTerm("")
        const filtered = data.filter((record) => {
            return record.userName.toLowerCase().includes(searchTerm.toLowerCase());
        });
        setFilteredData(filtered);
    };


    useEffect(() => {               
        FetchData()
    }, []);

    return (
        <center>
            <p>searchBar.......</p>
            <div>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleInputChange}
                />
                <button onClick={HandleData}>serach</button>

                {filteredData.map((item) => (
                    <p key={item.id}>{item.userName}</p>
                ))}
            </div>
        </center>
    );
};

export default MapMethod;

