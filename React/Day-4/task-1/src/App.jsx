import { useEffect, useState } from 'react'
import NonDependency from './non_dependency';
import Dependency from './dependency';
import NameChange from './name_change';
import ChangeTitle from './change_title';
import First from './first_fetch';
import Data from './data_state';
import Await from './await';
import User from './fetch_user';
import Post from './fetch_post';
import One from './fetch_one';
import Album from './fetch_album';
import Load from './load_data';
import Error from './error_handle';

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
      <hr />
      <First />
      <hr />
      <Data />
      <hr />
      <Await />
      <hr />
      <User />
      <hr />
      <Post />
      <hr />
      <One />
      <hr />
      <Album />
      <hr />
      <Load />
      <hr />
      <Error />
    </>
   )  
}

export default App
