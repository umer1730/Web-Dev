import { useState } from "react";

function Live(){
    const[text,setText] = useState("")

    return(
        <>
            <textarea
            value = {text}
            onChange={(e) => setText(e.target.value)}
            />
            <p>Character: {text.length}</p>
        </>
    )
}

export default Live