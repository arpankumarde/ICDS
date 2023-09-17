import React, { useEffect, useState } from "react";
import { Navbar, NewsCard } from "../components";
import { BsFillBadge4KFill } from "react-icons/bs";

const Social = () => {
  const [feed, setFeed] = useState([]);

  const loadData = async () => {
    let response = await fetch(`https://jsonplaceholder.typicode.com/photos`, {
      method: "GET",
    });

    response = await response.json();
    // console.log(response[0], response[1]);
    setFeed(response);
    console.log(feed);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="bg-gray-800 min-h-screen">
      <div className="bg-green-300 py-4 px-2">
        <div className="bg-pink-300 flex justify-between items-center text-xl">
          <div>Hi Sam!</div>
          <div className="text-3xl">
            <BsFillBadge4KFill />
          </div>
        </div>
        <div className="bg-center bg-green-600">
          {feed
            .filter((info) => info.id <= 10)
            .map((info, key) => (
              <NewsCard heading={info.title} photo={info.thumbnailUrl} key={key} />
            ))}
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Social;
