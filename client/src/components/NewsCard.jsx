import React from "react";
import { BiSolidDownvote, BiSolidUpvote } from "react-icons/bi";
import { IoStatsChart } from "react-icons/io5";

const NewsCard = ({ heading, photo }) => {
  return (
    <>
      <div className="my-4 rounded-lg backdrop-blur-md p-2 bg-white">
        <div className="bg-pink-900 flex gap-1">
          <img
            src={photo}
            alt={heading}
            className="w-28 rounded-lg bg-center"
          />
          <div>{heading}</div>
        </div>
        <div className="flex justify-between text-sm mt-4">
          <div className="flex gap-2">
            <button className="hover:text-green-500">
              <BiSolidUpvote className="inline" />
              Upvote
            </button>
            <button className="">
              <BiSolidDownvote className="inline group-hover:text-red-500" />
              Downvote
            </button>
          </div>
          <div className="flex items-center gap-1">
            <IoStatsChart className="" />
            302 views
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default NewsCard;
