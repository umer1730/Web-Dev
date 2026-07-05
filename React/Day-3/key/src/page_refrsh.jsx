function Refresh(){
    function handleSubmit(event){
        event.prevenDefault();
        alert("Form Submitted")
    }
    return (
        <form onSubmit = {handleSubmit}>
            <input type="text" />
            <button>Submit</button>
        </form>
    )
}
export default Refresh;