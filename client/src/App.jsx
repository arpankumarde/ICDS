import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { Home, Login, Social } from "./screens";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/notification" element={<Login />} />
        <Route path="/notification/:id" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/social" element={<Social />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
