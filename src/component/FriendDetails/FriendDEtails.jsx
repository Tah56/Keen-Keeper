import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { HiVideoCamera } from "react-icons/hi";
import { HiMiniVideoCamera, HiVideoCameraSlash } from "react-icons/hi2";
import { PiChatText } from "react-icons/pi";
import { TbBellZ } from "react-icons/tb";
import { useLoaderData, useParams } from "react-router";

const FriendDEtails = () => {
  const { id } = useParams();
  console.log(id);

  const data = useLoaderData();
  console.log(data);
  const finding = data.find((card) => card.id == id);
  console.log(finding);

  return (
    <div className="  bg-[#F8FAFC]  ">
      <div className="w-3/5 h-[93vh] mx-auto py-20 flex flex-col md:flex-row gap-5   ">
        <div className="flex flex-col w-2/5 ">
          <div className="card bg-base-100   shadow-sm">
            <figure className="px-10 pt-10">
              <img
                src={finding.picture}
                alt={finding.name}
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{finding.name}</h2>
              <p className=" w-20 rounded-2xl bg-[#EF4444] text-white font-medium">
                {finding.status}
              </p>
              <div className="flex font-bold p-2.5 rounded-full gap-2 bg-[#CBFADB] uppercase">
                {finding.tags.map((id) => (
                  <p className="text-[#244D3F] ">{id}</p>
                ))}
              </div>
              <p className="text-[#64748B] italic up">"{finding.bio}"</p>
              <p className="text-[#64748B]">Preferred:{finding.email}</p>
            </div>
          </div>
          <div className=" w-full mx-auto mt-4 flex flex-col items-center justify-center space-y-4">
            <button className="btn btn-wide bg-white">
              <TbBellZ />
              Snooze 2 weeks
            </button>
            <button className="btn btn-wide">
              <TbBellZ />
              Snooze 2 weeks
            </button>
            <button className="btn btn-wide">
              <TbBellZ />
              Snooze 2 weeks
            </button>
          </div>
        </div>
        <div className=" h-full w-full space-y-6 ">
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

               <div className="shadow-xl py-2.5  rounded-xl w-4/12 h-full flex flex-col items-center btn bg-[#F8FAFC] ">
               <p> <BiPhoneCall className="text-4xl" /></p>
                <p className="text-lg font-medium text-black">Call</p>
              </div>
              <div className="shadow-xl py-2.5  rounded-xl w-1/3 h-full flex flex-col items-center btn bg-[#F8FAFC] ">
               <p> <PiChatText className="text-4xl" /></p>
                <p className="text-lg font-medium text-black">Text</p>
              </div>
              <div className="shadow-xl py-2.5  rounded-xl w-1/3 h-full flex flex-col items-center btn bg-[#F8FAFC] ">
               <p> <HiVideoCamera className="text-4xl" /></p>
                <p className="text-lg font-medium text-black">Video</p>
              </div>
            </div>
          </div>
        </div>
      </div>
              </div>
  );
};

export default FriendDEtails;
