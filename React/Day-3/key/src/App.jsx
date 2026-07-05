import Product from "./product_data";
import List from "./product_list";
import Student from "./student_card";
import Refresh from "./page_refrsh";
import Reading from "./reading_data";
import Submission from "./form_submit";
import Multiple from "./multiple_inputs";
import Form from "./login_form";
import Controlled from "./controlled_comp";
import Live from "./live_counter";
import Search from "./Live_search";

const students = [
    {id: 1, name: "Ali", age: 22},
    {id: 2, name: "Asad", age:21},
    {id: 3, name: "Ashar", age: 33},
  ];

function App(){
  return (
    <>
    {
      students.map((student) => (
        <div key = {student.id}>
          <h2>{student.name}</h2>
          <p>{student.age}</p>
        </div>
      ))}
      <hr />
      <Product />
      <hr />
      <List />
      <hr />
      <Student />
      <hr />
      <Refresh />
      <hr />
      <Reading />
      <hr />
      <Submission />
      <hr />
      <Multiple />
      <hr />
      <Form />
      <hr />
      <Controlled />
      <hr />
      <Live />
      <hr />
      <Search />
    </>
  )
}  
 
export default App