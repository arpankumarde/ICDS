import React from "react";

const NotificationCard = ({ head, photo }) => {
  return (
    <div className="mt-4 rounded-lg bg-black text-white">
      <img src={photo} alt="" />
      <div>{head}</div>
    </div>
  );
};

export default NotificationCard;
