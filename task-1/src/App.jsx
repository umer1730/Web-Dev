import Student from "./Student";

function App() {
  return (
    <>
      <Student 
        icon={<span>🎓</span>}
        name="Ali" 
        age={22} 
        city = "Lahore"
        isStudent = {true}
        skills = {["React","Python","C++"]}/>
      
      <Student
        icon={<span>🎓</span>} 
        name="Asad" 
        age={24}
        city = "Islamabad"
        isStudent = {true}
        skills = {["Java","React","Flutter"]} 
      />
      
      <Student 
        icon={<span>🎓</span>}
        name="Saim" 
        age={25} 
        city= "Multan"
        isStudent = {true}
        skills = {["C++","JS","C#"]}
      />
    </>
  );
}

export default App;