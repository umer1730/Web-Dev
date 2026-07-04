function Age(){
    const age = 20;

    return (
        <>
            {age >= 18 ? (
                <h2>Eligile for vote</h2>
            ) : (
                <h2>Not Eligible</h2>
            )}
        </>
    )
}

export default Age