import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { supabase } from "../services/supabase";

function Login(){
    const navigate = useNavigate()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [loading,setLoading] = useState(false)

    async function handleLogin(e){
        e.preventDefault();

        setLoading(true)

        const { error } = await supabase.auth.signInWithPassword({
            email,password,
    });

    setLoading(false);

    if(error){
        alert(error.message)
        return
    }
    NavigateEvent("/dashboard")
    }
    return(
        <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
            <div className="bg-slate-800 w-full max-w-md rounded-2x1 shadow-x1 p-8">
                <h1 className="text-4x1 font-bold text-center text-white mb-2">
                    AI Chat Bot
                </h1>
                <p className="text-grey-400 textx-center mb-8">
                    Welcome Back
                </p>
                <form onSubmit={handleLogin} className="space-y-5">
                    <div>
                        <label className="text-gray-300">
                            Email
                        </label>
                        <input 
                            type= "email"
                            placeholder="Enter email"
                            value = {email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-ful mt-2 p-3 rounded-lg bg-slate-700 text-white outline-none focus: ring-2 focus:ring-blue-500"/>
                    </div>
                    <div>
                        <label className="text-gray-300">Password</label>

                        <input
                            type = "password"
                            placeholder="Enter password"
                            value =  {password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full mt-2 p-3 rounded-lg bg-slate-700 textx-white outline-none focus:ring-2 focus:ring-blue-500"/>
                        
                    </div>

                    <button 
                        disabled = {loading} 
                        className="w-full bg-blue-600 hover:bg-blue-700 transition p-3 rounded-lg text-white font-semibold">
                        {login ? "Logging in..." : "Login"}
                    </button>
                </form>

                <p className="text-center text-gray-400 mt-6">
                    Don't have an account?

                    <Link
                        to = "/signup" 
                        className="text-blue-500 ml-2">
                            Sign Up
                    </Link>
                </p>
            </div>

        </div>
    )
}

export default Login;