import React, { useEffect, useState } from "react";
import { Navbar } from "../components";
import { BsFillBadge4KFill } from "react-icons/bs";

const Social = () => {
  const [feed, setFeed] = useState([]);

  const loadData = async () => {
    let response = await fetch(`https://jsonplaceholder.typicode.com/photos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    response = await response.json();
    // console.log(response[0], response[1]);
    setFeed(response);
    console.log();
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="bg-gray-800 min-h-screen">
      <div className="bg-green-300 p-4">
        <div className="bg-pink-200 flex justify-between items-center text-xl">
          <div>Hi Sam!</div>
          <div className="text-3xl">
            <BsFillBadge4KFill />
          </div>
        </div>
        <div></div>
      </div>
      <Navbar />
    </div>
  );
};

export default Social;
