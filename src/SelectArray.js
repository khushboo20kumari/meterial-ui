import { useState } from "react";

function SelectArray() {
    const data=["completed","pending","not started","started"]

    const [str,setStr]=useState("")

    const HandleChange=(e)=>{
        setStr(e.target.value)
        

    }
    console.log(str)
    return (
        <>
            hello Select Arrray data.....
            <select onChange={HandleChange}>
                {data.map((item)=>(
                    <option>{item}</option>
                ))}
               
            </select>
            <p>{str}</p>


        </>
    )
}
export default SelectArray;