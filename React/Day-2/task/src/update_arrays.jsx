import { useState } from "react";

function Arrays(){
    const[numbers,setNumbers] = useState([1,2,3]);

    return(
        <>
            <h1>{numbers.join(",")}</h1>
            <button onClick={() =>setNumbers([...numbers,4])}>Add numbers</button>
        </>

    )
}

export default Arrays