import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./components/context/auth.jsx";
import { Toaster } from "react-hot-toast";
import Chat from "./components/context/chat.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Chat>
    <BrowserRouter>
      <Toaster />
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </Chat>
);
