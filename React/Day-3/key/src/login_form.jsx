import { useState } from "react";

function Form(){
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")

    function login(e){
        e.preventDefault();
        console.log(email,password);
    }

    return(
        <form onSubmit = {login}>
            <input 
                placeholder="Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
            />
            <br />
            <input 
            type = "password"            
            placeholder="Password"
            value = {password}
            onChange={(e)=>setPassword(e.target.value)}
            />
            <button>
                Login
            </button>
        </form>
    )
}

export default Form