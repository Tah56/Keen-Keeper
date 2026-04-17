
import { friendData } from "../ContextApi/ContextApi";
import AllData from "../AllData/AllData";
import VideoData from "../VideoData/VideoData";
import TextData from "../TextData/TextData";
import CallData from "../CallData/CallData";
import { useContext } from "react";

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
    <div className=" bg-[#F8FAFC]">
      <div className="container mx-auto py-10 h-full">
        <h2 className="font-bold text-2xl mb-5">TimeLine</h2>

      <select
        onChange={(e) => {
          setFilter(e.target.value);
          filtering(e.target.value);
        }}
        defaultValue="Pick a color"
        className="select appearance-none mb-5"
        >
        <option  value="all" >Filter TimeLine</option>
        <option value="text">Text</option>
        <option value="video">Video</option>
        <option value="call">Call</option>
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
    </div>
  );
};

export default TimeLine;
