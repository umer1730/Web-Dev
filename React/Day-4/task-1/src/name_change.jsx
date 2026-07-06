import { useState,useEffect } from "react";

function NameChange(){
    const[name,setName] = useState("Ali")

    useEffect(() =>{
        console.log("Name Changed");
    },[name]);

    return(
        <>
            <h1>{name}</h1>
            <button onClick={()=>setName("Asad")}
            >Name Changed</button>
        </>
    )
}

export default NameChange