import { useEffect, useState } from "react";

function DropDown() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");

    const fetchData = () => {
        fetch("http://localhost:3000/userTask")
            .then((res) => res.json())
            .then((res) => {
                setData(res);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleChange = (e) => {
        const filterData = e.target.value;
        const selectData = data.find((item) => item.id == filterData);
        console.log(selectData, "khushbooooo");
        setSearch(selectData);
    };

    useEffect(() => {
        setSearch(data[0]);
    }, [data]); 

    return (
        <>
            <p>i am khushbooo</p>
            <select onChange={handleChange}>
                {data.map((item) => (
                    <option key={item.id} value={item.id}>
                        {item.userName}
                    </option>
                ))}
            </select>
            {search && (
                <>
                    <p>{search.userName}</p>
                    <p>{search.task}</p>
                    <p>{search.status}</p>
                </>

            )}
        </>
    );
}

export default DropDown;
