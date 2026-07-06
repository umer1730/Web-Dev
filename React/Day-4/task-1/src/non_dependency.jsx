import { useEffect, useState } from "react";

function NonDependency(){
    const[count,setCount] = useState(0)

    useEffect(() =>{
        console.log("Component Rendered");
    })
    return(
        <>
            <h1>{count}</h1>

            <button
                onClick={() =>
                    setCount(count+1)
                }
            >
                Increase
            </button>
        </>
    )
}

export default NonDependency