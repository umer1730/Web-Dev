import {useState} from "react"
function Reading(){
    const[name,setName] = useState("")

    return(
        <>
            <input type="text"
            onChange = {(e) => setName(e.target.value)}
            />
            <h2>{name}</h2>
        </>
    )
}
export default Reading