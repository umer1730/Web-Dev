import { useContext } from "react";
import UserContext from "./UserContext";

function Home(){
    const user = useContext(UserContext)

    return (
        <>
        <h1>{user.name}</h1>
        <h3>Age: {user.age}</h3>
        <h3>City: {user.city}</h3>
        <h3>Language: {user.language}</h3>
        </>
    )
}

export default Home