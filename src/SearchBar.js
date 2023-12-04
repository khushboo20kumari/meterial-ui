import { useEffect, useState } from "react";

function SearchBar() {
    const [search, setSearch] = useState("")
    const [filterData, setFilterData] = useState([])
    const [data, setData] = useState([])

    const FetchData = () => {
        fetch("http://localhost:3000/userTask").then((res) => {
            return res.json()
        }).then((res) => {
            setData(res)
            setFilterData(res)
        })
    }

    const HandleChange = (e) => {
        setSearch(e.target.value)
    }

    const HandleClick = () => {

        setSearch("")
        const filtered = data.filter((item) => {
            return item.userName.toLowerCase().includes(search.toLowerCase());
        });
        setFilterData(filtered);
    };

    useEffect(() => {
        FetchData()
    }, [])
    return (
        <>

            <center>
                <input onChange={HandleChange} value={search}></input>
                <button onClick={HandleClick}>serach</button>
                {filterData.map((item) => (
                    <p key={item.id}>{item.userName}</p>
                ))}
            </center>
        </>

    )
}
export default SearchBar;