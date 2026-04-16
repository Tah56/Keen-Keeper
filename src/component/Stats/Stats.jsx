import React, { useContext } from "react";
import { friendData } from "../ContextApi/ContextApi";
import { Legend, Pie, PieChart, Tooltip } from "recharts";


const Stats = () => {
  const context = useContext(friendData);
  const { nam, video, call } = context;
  console.log(video.length, nam.length, call.length);
  const data = [
      { name: 'call', value:  call.length, fill: '#FFBB28' },
      { name: 'video', value:video.length, fill: '#00C49F' },
      { name: "text", value: nam.length, fill: '#0088FE' },
 
];

   return (
    <div className="mx-auto container flex items-center justify-center">

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
  );
};

export default Stats;
