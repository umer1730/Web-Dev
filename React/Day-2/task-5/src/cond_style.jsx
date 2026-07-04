function Condition(){
   /* const isOnline = false; give offline & red*/
    const isOnline = false; 

    return (
        <h1 style = {{color: isOnline ? "green" : "red",            
        }}>
            {isOnline ? "Online" : "Offline"}
        </h1>
    )
}

export default Condition