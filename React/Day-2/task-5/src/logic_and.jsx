function Logical(){
    /*
    const isAdmin = false; then Dashorad
    */
    const isAdmin = true;

    return(
        <>
            <h1>Dashboard</h1>
            {isAdmin && <button>Delete User</button>}
        </>
    )
}

export default Logical