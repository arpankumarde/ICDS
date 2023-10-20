import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { Home, Login, Social, Notification } from "./screens";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/notification/:id" element={<Notification />} />
        <Route path="/login" element={<Login />} />
        <Route path="/social" element={<Social />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
