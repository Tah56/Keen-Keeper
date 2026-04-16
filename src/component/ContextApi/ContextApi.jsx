"use client";

import React, { createContext, use, useState } from "react";
import { data } from "react-router";
import AllData from "../AllData/AllData";

export const friendData = createContext();

const ContextApi = ({ children }) => {
  const [timeLIne, setTimeLine] = useState([]);
  const [nam, setNam] = useState([]);
  const [type, setType] = useState([]);
  const [call, setCall] = useState([]);
  const [filter,setFilter]=useState("all")
  console.log(filter);
  

  const timelineHandler = (d, data) => {
    const id = d.toLowerCase();

    console.log(id);

    console.log(nam);
    const date = new Date().toLocaleString()
    const update = {
      ...data,
      type: id,
      date
    };
    console.log(update);

    if (id === "video") {
      setTimeLine([...timeLIne, update]);
    } else if (id === "text") {
      setTimeLine([...timeLIne, update]);
    } else {
      setTimeLine([...timeLIne, update]);
    }
    if (update.type === "text") {
      setType([...type, update]);
    } else if (update.type === "video") {
      setNam([...nam, update]);
    } else {
      setCall([...call, update]);
    }
    console.log(timeLIne);
   
  };

  const filtering = (e="null")=>{
    const values = e

    console.log(values);
    
            if(values==="video"){
                const t = timeLIne.filter(id => id.type ==="video")
                setType(t)
               
                return
               
            }else if (values==="text") {
              const a = timeLIne.filter(id => id.type ==="text")
              setNam(a)
            }else if(values==="call"){
              const d= timeLIne.filter(id => id.type ==="call")
              setCall(d)

            }
    
    
    

  }
  const data = {
    timelineHandler,
    timeLIne,
    setTimeLine,
    nam,
    type,
    call,
    filtering,
    filter,
    setFilter 
  };

  return <friendData.Provider value={data}>{children}</friendData.Provider>;
};

export default ContextApi;
