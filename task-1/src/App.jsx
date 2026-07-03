import Student from "./Student";

function App() {
  return (
    <>
      <Student 
        name="Ali" 
        age={22} 
        isStudent = {true}
        skills = {["React","Python","C++"]}/>
      
      <Student 
        name="Asad" 
        age={24}
        isStudent = {true}
        skills = {["Java","React","Flutter"]} 
      />
      
      <Student 
        name="Saim" 
        age={25} 
        isStudent = {true}
        skills = {["C++","JS","C#"]}
      />
    </>
  );
}

export default App;