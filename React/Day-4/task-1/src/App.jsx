import { useEffect, useState } from 'react'
import NonDependency from './non_dependency';
import Dependency from './dependency';
import NameChange from './name_change';
import ChangeTitle from './change_title';

function App() {

   useEffect(() => {
    console.log("Component Loaded")
   },[]);

   return (
    <>
      <h1>Hello</h1>

      <hr />
      <NonDependency />
      <hr />
      <Dependency />
      <hr />
      <NameChange />
      <hr />
      <ChangeTitle />
    </>
   )
  
}

export default App
