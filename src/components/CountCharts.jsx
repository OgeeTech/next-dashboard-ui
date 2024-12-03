"use client"
import Image from "next/image";
import React, { PureComponent } from "react";
import {
    RadialBarChart,
    RadialBar,
    Legend,
    ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Total",
    count: 105,
    fill: "white",
  },
  {
    name: "Boys",
    count: 53,
    fill: "#FAE27C",
  },
  {
    name: "Girls",
    count: 47,
    fill: "#C3EBFA",
  },
];

const style = {
    top: "50%",
    right: 0,
    transform: "translate(0, -50%)",
    lineHeight: "24px",
};

const CountCharts = () => {
    return (
      <div>
        {/* TITLE */}
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-semibold">Students</h1>
          <Image src="/moreDark.png" alt="" width={20} height={20} />
        </div>
        {/* CHART */}
        <div style={{ width: "100%", height: 300 }} className="relative">
          <ResponsiveContainer>
            <RadialBarChart
              cx="50%"
              cy="50%"
              innerRadius="40%"
              outerRadius="100%"
              barSize={32}
              data={data}
            >
              <RadialBar background dataKey="count" />
            </RadialBarChart>
          </ResponsiveContainer>
          <Image
            src="/maleFemale.png"
            width={50}
            height={50}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>

        {/* BOTTOM */}
        <div className="flex justify-center gap-16">
          <div className="flex flex-col gap-1">
            <div className="w-5 h-5 bg-lamaSky rounded-full" />
            <h1 className="font-bold">1,1234</h1>
            <h2 className="text-xs text-gray-300">Boys(55%)</h2>
          </div>
          <div className="flex flex-col gap-1">
            <div className="w-5 h-5 bg-lamaYellow rounded-full" />
            <h1 className="font-bold">1,1234</h1>
            <h2 className="text-xs text-gray-300">Female(45%)</h2>
          </div>
        </div>
      </div>
    );
}

export default CountCharts
