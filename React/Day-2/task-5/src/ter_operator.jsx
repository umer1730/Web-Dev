function Ternary(){
    const isLoggedIn = false; 
    return(
        <>
            {isLoggedIn ? (
                <h1>Welcome Ali</h1>
            ) : (
                <h1>Please Login</h1>
            )}
        </>
    )
}

export default Ternary