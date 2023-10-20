import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>Home</div>
      <div className="flex flex-col mt-10">
        <Link to="/login">Login</Link>
        <Link to="/social">Social</Link>
        <Link to="/notification">Notification</Link>
        <Link to="/simulation">Simulation</Link>
      </div>
    </>
  );
};

export default Home;
