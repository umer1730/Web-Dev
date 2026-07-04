function Arguments(){
    function Welcome(name){
        alert(`Welcome ${name}`);
    }
    return (
        <>
            <button onClick={() => Welcome("ALi")}>ALi</button>
            <button onClick={() => Welcome("Asad")}>Asad</button>
        </>
    )
}
export default Arguments