import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 
import  Login from "./pages/Login"
 
import React from "react";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <link
        rel='stylesheet'
        href='https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css'
        integrity='sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4'
        crossorigin='anonymous'></link>{" "}
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />{" "}
           
          <Route path='/' element={<Home />} />
        
        </Routes>{" "}
      </Router>{" "}
     </>
  );
}

export default App;
