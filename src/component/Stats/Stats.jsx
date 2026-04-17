import React, { useContext } from "react";
import { friendData } from "../ContextApi/ContextApi";
import { Legend, Pie, PieChart, Tooltip } from "recharts";


const Stats = () => {
  const context = useContext(friendData);
  const { nam, video, call } = context;
 
  const data = [
      { name: 'call', value:  call.length, fill: '#FFBB28' },
      { name: 'video', value:video.length, fill: '#00C49F' },
      { name: "text", value: nam.length, fill: '#0088FE' },
 
];

   return (
    <div className="bg-[#F8FAFC] py-10 h-[93vh]">
      <div className="container mx-auto mb-5">

      <h2 className="font-semibold text-3xl">Friendship Analytics</h2>
      </div>
    <div className="    container mx-auto  flex flex-col items-center justify-center  shadow-2xl  p-20 ">
    <h2 className="text-left font-bold text-2xl mb-5 ">By Interaction Type</h2>
    <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
        />
        <Legend></Legend>
        <Tooltip/>
    </PieChart>
        </div>
        </div>
  );
};

export default Stats;
