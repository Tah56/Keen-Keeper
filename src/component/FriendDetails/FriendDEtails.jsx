import  { useContext } from "react";
import { BiArchive, BiPhoneCall } from "react-icons/bi";
import { HiVideoCamera } from "react-icons/hi";
import { HiMiniVideoCamera, HiVideoCameraSlash } from "react-icons/hi2";
import { PiChatText } from "react-icons/pi";
import { TbBellZ, TbTrash } from "react-icons/tb";
import { useLoaderData, useParams } from "react-router";
import ContextApi, { friendData } from "../ContextApi/ContextApi";
import { toast } from "react-toastify";

const FriendDEtails = () => {
  const context = useContext(friendData);
  const { timelineHandler } = context;
  const { num } = useParams();

  const data = useLoaderData();
  
  const finding = data.find((card) => card.id == num);
  console.log(finding);
  

  return (
    <div className="  bg-[#F8FAFC]  ">
      <div className=" container h-full mx-auto py-20 flex flex-col md:flex-row gap-5 items-center justify-center  ">
        <div className="flex flex-col  ">
          <div className="card bg-base-100  shadow-sm">
            <figure className="px-10 pt-10">
              <img
                src={finding.picture}
                alt={finding.name}
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{finding.name}</h2>
              <p className={ `w-20 rounded-2xl font-medium text-white text-center mx-auto ${finding.status==="on-track"?  'bg-green-900': finding.status==="overdue"? "bg-red-600":'bg-[#EFAD44]'}`}>
                {finding.status}
              </p>
              <div className="flex font-bold p-2.5 rounded-full gap-2 bg-[#CBFADB] uppercase">
                {finding.tags.map((id,k) => (
                  <p key={k} className="text-[#244D3F] ">{id}</p>
                ))}
              </div>
              <p className="text-[#64748B] italic up">"{finding.bio}"</p>
              <p className="text-[#64748B] text-[10px] md:text-base">Preferred:{finding.email}</p>
            </div>
          </div>
          <div className=" w-full mx-auto mt-4 flex flex-col items-center justify-center space-y-4">
            <button className="btn btn-wide bg-white">
              <TbBellZ />
              Snooze 2 weeks
            </button>
            <button className="btn btn-wide">
              <BiArchive />
              Archive
            </button>
            <button className="btn btn-wide text-red-500">
              <TbTrash />
            Delete
            </button>
          </div>
        </div>
        <div className=" h-full  space-y-6 ">
          <div className=" flex flex-col md:flex-row   gap-6 justify-between items-center text-center ">
            <div className="shadow-xl py-8 px-12 rounded-xl bg-white ">
              <h2 className="font-semibold text-3xl  text-[#244D3F]">
                {finding.days_since_contact}
              </h2>
              <p className="text-lg text-[#64748B]">Days Since Contact</p>
            </div>
            <div className="shadow-xl py-8 px-16  rounded-xl bg-white ">
              <h2 className="font-semibold text-3xl text-[#244D3F]">
                {finding.goal}
              </h2>
              <p className="text-lg text-[#64748B]">Goal (Days)</p>
            </div>
            <div className="shadow-xl py-8  px-12 rounded-xl bg-white  ">
              <h2 className="font-semibold text-3xl text-[#244D3F]">
                {finding.next_due_date}
              </h2>
              <p className="text-lg text-[#64748B]">Need Attention</p>
            </div>
          </div>
          <div className="shadow-xl p-6 w-full rounded-xl flex justify-between bg-white  ">
            <div className="space-y-6">
              <h2 className="font-medium text-xl text-[#244D3F]">
                Relationship Goal
              </h2>
              <p className="text-lg text-[#64748B]">
                Connect every{" "}
                <span className="font-bold text-black">{finding.goal}days</span>
              </p>
            </div>
            <button className="btn">Edit</button>
          </div>

          <div className="  bg-white p-10 rounded-2xl shadow-2xl ">
            <p className="mb-2.5 text-[#244D3F] font-medium ">Quick Check-In</p>
            <div className="flex flex-col md:flex-row   gap-2.5  items-center text-center">
              <button
                onClick={(e) => {
                  const d = e.target.innerText;
                  timelineHandler(d, finding)
                  toast.success(`${d} with ${finding.name}`);
                }}
                className="shadow-xl py-2.5  rounded-xl w-full md:w-1/3  h-full flex flex-col items-center btn bg-[#F8FAFC] "
              >
                <BiPhoneCall className="text-4xl" />
                Call
              </button>
               <button
                onClick={(e) => {
                  const d = e.target.innerText;
                  timelineHandler(d, finding);
                  toast.success(`${d} with ${finding.name}`);
                }}
                className="shadow-xl py-2.5  rounded-xl w-full md:w-1/3  h-full flex flex-col items-center btn bg-[#F8FAFC] "
              >
                <PiChatText className="text-4xl" />
                Text
              </button>
              <button
                onClick={(e) => {
                  const d = e.target.innerText;
                  timelineHandler(d, finding);
                  toast.success(`${d} with ${finding.name}`);
                }}
                className="shadow-xl py-2.5  rounded-xl w-full md:w-1/3   h-full flex flex-col items-center btn bg-[#F8FAFC] "
              >
                <HiVideoCamera className="text-4xl" />
                Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDEtails;
