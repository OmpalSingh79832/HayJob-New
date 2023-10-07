import React from "react";
import NavBar from "../src/layout/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import Home from "./view/Home";
import Footer from "./layout/Footer";
import Login from "./user/Login";
import SignUp from "./user/SignUp";

function App() {
  return (
    <>
      {/* <NavBar />
      <Home />
      <Footer /> */}
      {/* <Login /> */}
      <SignUp />
    </>
  );
}

export default App;
