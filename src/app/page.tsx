"use client"
import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Dot } from 'recharts';
import { Sun } from 'lucide-react';

const VendorSalesChart = () => {
  const [activeTab, setActiveTab] = useState('DAY');
  
  const data = [
    { name: 'Lun', value: 400 },
    { name: 'Mar', value: 700 },
    { name: 'Mer', value: 620 },
    { name: 'Jeu', value: 1250 },
    { name: 'Ven', value: 950 },
    { name: 'Sam', value: 1000 },
    { name: 'Dim', value: 1300 }
  ];

  const CustomDot = (props) => {
    const { cx, cy } = props;
    return (
      <circle
        cx={cx}
        cy={cy}
        r={5}
        fill="white"
        stroke="#000"
        strokeWidth={2}
      />
    );
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-6 ">
      <div className="rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className=" text-white px-6 py-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Ventes effectives</h2>
          <span className="text-xl font-semibold">6,120 DT</span>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <div className="flex gap-6">
            {['DAY', 'WEEK', 'MONTH', 'ALL TIME'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-sm font-medium pb-1 transition-colors ${
                  activeTab === tab
                    ? 'text-gray-900 border-b-2 border-blue-500'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Chart */}
        <div className="p-6">
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0EA5E9" stopOpacity={1}/>
                  <stop offset="95%" stopColor="#0EA5E9" stopOpacity={1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="0" stroke="#f0f0f0" vertical={false} />
              <XAxis 
                dataKey="name" 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#d1d5db', fontSize: 12 }}
                dy={10}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#d1d5db', fontSize: 12 }}
                tickFormatter={(value) => `${value} DT`}
                dx={-10}
                ticks={[0, 200, 400, 600, 800, 1000, 1200, 1400]}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#000"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#colorValue)"
                dot={<CustomDot />}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default VendorSalesChart;