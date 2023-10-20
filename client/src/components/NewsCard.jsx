import React from "react";
import { BiSolidDownvote, BiSolidUpvote } from "react-icons/bi";
import { IoStatsChart } from "react-icons/io5";

const NewsCard = ({ heading, photo }) => {
  return (
    <>
      <div className="my-4 rounded-lg backdrop-blur-md p-4 bg-white">
        <div className="w-full">
          <img
            src={photo}
            alt={heading}
            className="rounded-lg bg-center w-full"
          />
          <div>{heading}</div>
        </div>
        <div className="flex justify-between items-center text-sm mt-4">
          <div className="flex gap-4">
            <button className="hover:text-green-500">
              <BiSolidUpvote className="inline mr-1" />
              Upvote
            </button>
            <button className="hover:text-red-500">
              <BiSolidDownvote className="inline" />
              Downvote
            </button>
          </div>
          {/* <div className="flex items-center gap-1">
            <IoStatsChart className="" />
            302 views
          </div> */}
        </div>
        <div></div>
      </div>
    </>
  );
};

export default NewsCard;
