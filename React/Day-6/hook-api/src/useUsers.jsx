import { useState,useEffect } from "react";

function useUsers(){
    const[users,setUsers] = useState([])

    useEffect(() => {
        async function fetchUsers(){
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            )
            const data = await response.json()
            setUsers(data)
        }
        fetchUsers();
    },[])
    return users
}

export default useUsers