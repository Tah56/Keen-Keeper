import React, { useContext } from "react";
import { friendData } from "../ContextApi/ContextApi";
import AllData from "../AllData/AllData";
import VideoData from "../VideoData/VideoData";
import TextData from "../TextData/TextData";
import CallData from "../CallData/CallData";

const TimeLine = () => {
  const context = useContext(friendData);
  const {
    timeLIne,
    setTimeLine,
    filtering,
    nam,
    type,
    call,
    filter,
    setFilter,
  } = context;

  return (
    <div>
      <select
        onChange={(e) => {
          setFilter(e.target.value);
          filtering(e.target.value);
        }}
        defaultValue="Pick a color"
        className="select appearance-none"
      >
        <option value="all" >filter</option>
        <option value="text">text</option>
        <option value="video">video</option>
        <option value="call">call</option>
      </select>
      {filter === "video" ? (
        <VideoData></VideoData>
      ) : filter === "text" ? (
        <TextData></TextData>
      ) : filter === "call" ? (
        <CallData></CallData>
      ) : (
        <AllData></AllData>
      )}
    </div>
  );
};

export default TimeLine;
