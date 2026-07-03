

function Student({icon,name,age,city,isStudent,skills}) {
  return (
    <>
        {icon}
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <p>City: {city}</p>
      <p>Student: {isStudent ? "Yes": "No"}</p>
      <p>Skills: {skills.join(", ")}</p>
      <hr />
    </>
      /*  we can also use this approach but in this approach we write props before name , age etc so we use above approach  
       <>
        <h2>Name: {props.name}</h2>
        <p>Age: {props.age}</p>
        <p>Student: {props.isStudent ? "Yes": "No"}</p>
        <p>Skills: {props.skills.join(", ")}</p>
        <hr />
        </>
       */ 
  );
}

export default Student;