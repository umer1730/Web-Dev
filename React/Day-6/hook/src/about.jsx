import useCounter from "./useCounter";

function About(){
    const {count,increment} = useCounter()

    return (
        <>
            <h1>{count}</h1>
            <button onClick={increment}>
                +1
            </button>
        </>
    )
}
export default About