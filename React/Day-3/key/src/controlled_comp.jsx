import {useState} from "react";

function Controlled(){
    const[name,setName] = useState("");

    return(
        <>
            <input 
            type =  "text"
            value = {name}
            onChange = {(e) => setName(e.target.value)}
            />
            <h2>{name}</h2>
        </>
    )
}

export default Controlled