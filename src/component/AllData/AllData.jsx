
import { useContext } from "react";
import { friendData } from "../ContextApi/ContextApi";
import { MdCall } from "react-icons/md";
import { FaVideo } from "react-icons/fa";
import { BsChatRightTextFill } from "react-icons/bs";

const AllData = () => {
  const context = useContext(friendData);
  const { timeLIne, setTimeLine, filtering, nam, type, call } = context;

  return (
    <div className="mb-5">
      {timeLIne.length === 0 ? (
        <h2></h2>
      ) : (
        <div className=" p-5">
          {timeLIne.map((data,i) => {
            return (
              <ul key={i} className="list bg-base-100 rounded-box shadow-md  mb-5">
                <li className="p-4 pb-2 text-xs opacity-60 tracking-wide"></li>

                <li className="list-row">
                  <div>
                    {data.type==="call"?<MdCall />: data.type ==="video"?<FaVideo />:<BsChatRightTextFill />}
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

export default AllData;
