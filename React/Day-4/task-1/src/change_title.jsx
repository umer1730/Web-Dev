import { useState,useEffect } from "react";

function ChangeTitle(){
    const[count,setCount] = useState(0)

    useEffect(() =>{
        document.title = `Count: ${count}`;
    },[count])

    return (
        <>
            <h1>{count}</h1>

            <button onClick={() => setCount(count+1)}
            >
                Increase
            </button>
        </>
    )
}

export default ChangeTitle