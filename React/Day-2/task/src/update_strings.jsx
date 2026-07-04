import { useState } from "react";

function Update(){
    const[name,setName] = useState("Ali");

    return(
        <>
            <h1>{name}</h1>

            <button onClick={() => setName("Asad")}>Change Name</button>
            <button onClick={() => setName("Ali")}>Reset Name</button>
        </>
    );
}

export default Update;