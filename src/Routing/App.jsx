import React from 'react';
// import Form from './Form';
// import ToDoList from './ToDoList';
// import Login from './Login';
// import Counter from './Counter';
// import ToDoListAdv from './ToDoListAdv';
// import KeepApp from './GoogleKeepApp/KeepApp';
// import KeepApp2 from './GoogleKeepApp2/KeepApp2';
import Home from './Routing/Home';
import About from './Routing/About';
import Contact from './Routing/Contact'
import User from './Routing/User';
import Navbar from './Routing/Navbar';
import { Routes ,Route } from 'react-router-dom';

function App(){

  return(
    <>
       <Navbar></Navbar>
      <Routes>
      <Route exact path="/" element={<Home/>} ></Route>
      <Route exact path="/about" element={<About/>} ></Route>
      <Route exact path="/contact" element={<Contact/>} ></Route>
      <Route exact path="/user/:FirstName/:LastName" element={<User/>} ></Route> {/* her after user the parameter are dynamic if user type its name over url then ":FirstName/:LastName" catches its name and send it to user page for display */}

        
      </Routes>
        
    </>
  )
}
export default App;