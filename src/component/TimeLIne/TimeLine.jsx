import React, { useContext } from "react";
import { friendData } from "../ContextApi/ContextApi";
import AllData from "../AllData/AllData";


const TimeLine = () => {
  const context = useContext(friendData);
  const { timeLIne, setTimeLine,filtering,nam,type,call } = context;
 
 
  

  return (

    <div>
      <select onClick={(e)=>{filtering(e.target.value)}} defaultValue="Pick a color" className="select appearance-none">
        <option disabled={true}>Pick a color</option>
        <option>Crimson</option>
        <option>video</option>
        <option>Velvet</option>
      </select>
     <AllData></AllData>
    </div>
  );
};

export default TimeLine;
