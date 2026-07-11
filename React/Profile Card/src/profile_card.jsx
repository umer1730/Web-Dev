function ProfileCard({name, profession, age, city}){
    return(
        <div
            style={{
            border: "2px solid black",
            padding: "15px",
            margin: "10px",
            width: "250px",
            borderRadius: "12px",
            }}
        >
            <h2>{name}</h2>
            <p>Profession: {profession}</p>
            <p>Age: {age}</p>
            <p>City: {city}</p>
        </div>
    );
}

export default ProfileCard