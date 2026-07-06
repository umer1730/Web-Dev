import { useState,useEffect } from "react";

function Dependency(){
    const [count,setCount] = useState(0)

    useEffect(() =>{
        console.log("Count Changed");
    },[count]);

    return (
        <>
            <h1>{count}</h1>
            <button
                onClick={()=>setCount(count+1)}
            >Increase</button>
        </>
    )
}
export default Dependency