'use client';

import React, { createContext, use, useState } from 'react';
import { data } from 'react-router';

export const friendData = createContext()

const ContextApi = ({children}) => {
    const [timeLIne ,setTimeLine] =useState([])
    const [nam, setNam]=useState("")
    
    
    const timelineHandler =(id, data)=>{
        
        
        if(id ==="video"){
            
            setTimeLine([...timeLIne,data])
            setNam("video")
            return
        }else if (id==="text"){
            setTimeLine([...timeLIne,data])
            setNam("text")
            return
        }else{
            setTimeLine([...timeLIne,data])
            setNam("call")
            return
            
        }
    }
    
    
    const data ={
        timelineHandler,
        timeLIne,
        setTimeLine,
        id:id,
    }

    return (
        <friendData.Provider value={data}>
            {children}
        </friendData.Provider>
    );
};

export default ContextApi;