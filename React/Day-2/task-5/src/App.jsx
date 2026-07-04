import Ternary from "./ter_operator";
import Logical from "./logic_and";
import Log from "./real_example";
import Age from "./age_check";
import Image from "./show_image";
import Condition from "./cond_style";
import Combine from "./combine";

function App() {
  /*const isLoggedIn = false;
  if i use this then return else statement */
   
  /*
  const isLoggedIn = true;
   if (isLoggedIn){
      return <h1>Welcome Ali</h1>
   }else{
      return <h1>Please Login</h1>
   }
      */
    return(
      <>
        <Ternary />
        <hr />
        <Logical />
        <hr />
        <Log />
        <hr />
        <Age />
        <hr />
        <Image />
      
        <hr />
        <Condition />
        <hr />
        <Combine />
        
      </> 
    )
   
}

export default App
