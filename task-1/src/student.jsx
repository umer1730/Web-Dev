

function Student(props) {
  return (
    <>
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Student: {props.isStudent ? "Yes": "No"}</p>
      <p>Skills: {props.skills.join(", ")}</p>
      <hr />
    </>
  );
}

export default Student;