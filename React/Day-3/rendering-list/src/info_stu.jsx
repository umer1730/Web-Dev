function Info(){
    const students = [
        {
            id: 1,
            name: "Ali",
            age: 22
        },
        {   
            id: 2,
            name: "Asad",
            age: 21
        },
        {
            id: 3,
            name: "Hamza",
            age: 33
        }
    ];

    return(
        <>
            {
                students.map((student) =>(
                    <div>
                        <h2>{student.name}</h2>
                        <p>{student.age}</p>
                    </div>
                ))
            }
        </>
    )
}

export default Info