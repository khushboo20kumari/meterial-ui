function SelectArray() {
    const data=["completed","pending","not started","started"]
    return (
        <>
            hello Select Arrray data.....
            <select>
                {data.map((item)=>(
                    <option>{item}</option>
                ))}
            </select>

        </>
    )
}
export default SelectArray;