import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./components/pages/About";
import HomePage from "./components/pages/HomePage";
import Privacy from "./components/pages/Privacy";
import Contact from "./components/pages/Contact";
import Login from "./components/pages/Auth/Login";
import Logout from "./components/pages/Auth/Logout";
import Signup from "./components/pages/Auth/Signup";
import Layout2 from "./components/Layout/Layout2";
import Chat from "./components/pages/Nav/Chat";
import Story from "./components/pages/Nav/Story";
import Call from "./components/pages/Nav/Call";
import PageNotFound from "./components/Layout/Routes/PageNotFound";
import Private from "./components/Layout/Routes/Private";
import GroupChat from "./components/pages/Chat/GroupChat/GroupChat";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/dashboard/*" element={<Private />}>
          <Route path="" element={<Chat />} />
          <Route path="group" element={<GroupChat />} />
          <Route path="chats" element={<Chat />} />
          <Route path="story" element={<Story />} />
          <Route path="call" element={<Call />} />
          <Route path="about" element={<About />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
