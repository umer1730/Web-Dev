function Book(){
    const books = [
        {
            title: "React",
            author: "John"
        },
        {
            title: "Python",
            author: "Guido Van Russem"
        },
        {
            title: "C++",
            author: "Dev"
        }
    ];

    return (
        <>
        {
            books.map((books) =>(
                <div>
                    <h2>{books.title}</h2>
                    <p>{books.author}</p>
                </div>
            ))}
        </>
    )
}


export default Book