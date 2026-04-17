import React, { useContext } from "react";
import { friendData } from "../ContextApi/ContextApi";
import { FaVideo } from "react-icons/fa";

const VideoData = () => {
  const context = useContext(friendData);
  const {  video } = context;

  return (
    <div>
      {video.length === 0 ? (
      ''
      ) : (
        <div className="">
          {video.map((data,i) => {
            return (
              <ul key={i} className="list bg-base-100 rounded-box shadow-md mb-5">
                <li className="p-4 pb-2 text-xs opacity-60 tracking-wide"></li>

                <li className="list-row">
                  <div>
                    <FaVideo />
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

export default VideoData;
