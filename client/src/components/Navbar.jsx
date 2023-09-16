import React from "react";
// import { TbSocial } from "react-icons/tb";
import { IoIosNotifications } from "react-icons/io";
import { BsPeopleFill } from "react-icons/bs";
// import { GiNuclear } from "react-icons/gi";
import { SiReactos } from "react-icons/si";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="fixed bottom-0 bg-gray-900 text-white flex justify-around items-center w-full text-3xl h-16 ">
        <Link to="/social">
          <BsPeopleFill />
        </Link>
        <IoIosNotifications />
        <SiReactos className="custom-animate-spin" />
      </div>
    </>
  );
};

export default Navbar;
