import {useState} from "react"

function Updating(){
    const[isLoggedIn,setisLoggedIn] = useState(false);

    return(
        <>
            <h1>{isLoggedIn ? "Logged in" : "Logged out"}</h1>

            <button onClick={() => setisLoggedIn(true)}>Login</button>
        </>
    );
}

export default Updating;