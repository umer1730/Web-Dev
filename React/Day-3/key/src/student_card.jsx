const students = [
    {
        id: 1,
        name: "Ali",
        cgpa: 3.8
    },
    {
        id: 2,
        name: "Hamza",
        cgpa: 3.9
    },
    {
        id: 3,
        name: 'Usman',
        cgpa: 3.5
    }
];

function Student(){
    return(
        <>
        {students.map((student) => (
            <div key={student.id}>
                <h2>{student.name}</h2>
                <p>CGPA: {student.cgpa}</p>
            </div>
        ))}
        </>
    )
}

export default Student