import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ChatClient from "./pages/Chat";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat" element={<ChatClient />} />
    </Routes>
  );
};

export default App;
