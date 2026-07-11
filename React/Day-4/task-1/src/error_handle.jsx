import { useState,useEffect } from "react";

function Error(){
    const[users,setUsers] = useState([])
    const[loading,setLoading] = useState([])
    const[error,setError] = useState([])

    useEffect(() =>{
        async function fetchUsers(){
            try{
                const response = await fetch(
                              "https://jsonplaceholder.typicode.com/users"
                );
                const data = await response.json();
                setUsers(data);
            } catch {
                setError("Unable to fetch users");
            }
            finally{
                setLoading(false);
            }
        }
        fetchUsers();
    },[])
    if (loading){
        return <h1>{error}</h1>;
    }

    return (
        <>
            {
                users.map(user =>(
                    <h2 key={user.id}>
                        {user.name}
                    </h2>
                ))
            }
        </>
    )
}

export default Error