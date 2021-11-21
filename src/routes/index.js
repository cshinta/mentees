import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "../views/index";
import Login from "../views/Login";
import Register from "../views/Register";
import MentorRegister from "../views/Register/mentor/index.js";
import MenteeRegister from "../views/Register/mentee/index.js";
import Forum from "../views/Forum";
import Chat from "../views/chat";
import MenteeFindMentor from "../views/FindMentor/MenteePage";
import MentorFindMentor from "../views/FindMentor/MentorPage";

const Router = () => {
    return (
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/register/mentor" element={<MentorRegister/>} />
        <Route path="/register/mentee" element={<MenteeRegister/>} />
        <Route path="/mentee/find-mentor" element={<MenteeFindMentor/>} />
        <Route path="/mentor/mentee-request" element={<MentorFindMentor/>} />
        <Route path="/forum" element={<Forum/>} />
        <Route path="/chat" element={<Chat/>} />
      </Routes>
    );
  };
  
  export default Router;
  