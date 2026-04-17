import React, { useContext } from "react";
import { friendData } from "../ContextApi/ContextApi";
import { FaVideo } from "react-icons/fa";
import { MdCall } from "react-icons/md";

const CallData = () => {
  const context = useContext(friendData);
  const { call } = context;
 
  return (
    <div>
      {call.length === 0 ? (
        <h2>{call.length}</h2>
      ) : (
        <div className="">
          {call.map((data,i) => {
            return (
              <ul key={i} className="list bg-base-100 rounded-box shadow-md mb-5">
                <li className="p-4 pb-2 text-xs opacity-60 tracking-wide"></li>

                <li className="list-row">
                  <div>
                    <MdCall />
                  </div>
                  <div>
                    <div>{data.name}</div>
                    <div className="text-xs uppercase font-semibold opacity-60">
                      with {data.type} {data.date}
                    </div>
                  </div>
                 
                </li>
              </ul>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CallData;
