import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "../views/index";
import Login from "../views/Login";
import Register from "../views/Register";
import MentorRegister from "../views/Register/mentor/index.js";

const Router = () => {
    return (
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/register/mentor" element={<MentorRegister/>} />
      </Routes>
    );
  };
  
  export default Router;
  