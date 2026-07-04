import { useState } from "react";

function Log(){
    const[isLoggedIn,setIsLoggedIn] = useState(false);

    return(
        <>
            <h1>
                {isLoggedIn ? "Welcome Ali" : "Please Login"}
            </h1>

            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
                {isLoggedIn ? "Logout" : "Login"}
            </button>
        </>
    )
}

export default Log