import { useState } from "react";
import "./App.css"


function Mode(){
    const[isDark,setIsDark] = useState(false)

    return(
        <div className= {isDark ? "dark" : "light"}>
            <h1>{isDark ? "Dark Mode" : "Light Mode"}</h1>
        
            <button onClick={() => setIsDark(!isDark)}>
                Toggle
            </button>
        </div>
    )
}

export default Mode