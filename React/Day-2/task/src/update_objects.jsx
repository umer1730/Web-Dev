import { useState } from "react";

function Objects(){
    const[user,setUser] = useState({
        name: "Ali",
        age: 22});

    return (
        <>
            <h1>Name: {user.name}</h1>
            <p>Age: {user.age}</p>
            <button onClick={() => setUser({...user,age: user.age + 1,})}>Update Age</button>
        </>
    )
}

export default Objects