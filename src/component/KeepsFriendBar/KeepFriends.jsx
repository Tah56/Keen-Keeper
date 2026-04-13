import React from "react";
import { FaPlus } from "react-icons/fa";

const KeepFriends = () => {
  return (
    <div className="w-1/2 mx-auto ">
      <div className="flex flex-col justify-center items-center space-y-5 text-center
      ">
        <h2 className="font-extrabold text-5xl">Friends to keep close in your life</h2>
        <p className="text-[#64748B]">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture <br /> the relationships that matter most.
        </p>
        <button className="btn bg-[#244D3F] text-white"><FaPlus />Add a Friend</button>
      </div>
    </div>
  );
};

export default KeepFriends;
