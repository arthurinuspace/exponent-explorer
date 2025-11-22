import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp } from 'lucide-react';

const GrowthGraph: React.FC = () => {
  const [base, setBase] = useState(2);

  const data = Array.from({ length: 8 }, (_, x) => ({
    x,
    linear: base * x,         // y = ax
    exponential: Math.pow(base, x) // y = a^x
  }));

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-3xl shadow-xl p-8 border-4 border-pink-100">
        <h2 className="text-3xl font-bold text-pink-600 mb-6 text-center flex items-center justify-center gap-3">
          <TrendingUp className="w-8 h-8" />
          指數長得有多快？
        </h2>
        
        <p className="text-center text-gray-600 mb-6">
            比較看看：<span className="font-bold text-green-600">加法成長 ({base}x)</span> vs <span className="font-bold text-pink-600">指數成長 ({base}<sup>x</sup>)</span>
        </p>

        <div className="mb-6 flex justify-center items-center gap-4 bg-gray-50 p-4 rounded-xl">
            <label className="font-bold text-gray-700">調整底數:</label>
            <input 
                type="range" 
                min="2" 
                max="5" 
                step="0.5"
                value={base} 
                onChange={(e) => setBase(Number(e.target.value))} 
                className="w-48 accent-pink-500"
            />
            <span className="font-bold text-2xl text-pink-600">{base}</span>
        </div>

        <div className="h-[400px] w-full bg-gray-50 rounded-xl p-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis dataKey="x" label={{ value: '時間 (x)', position: 'insideBottomRight', offset: -5 }} />
              <YAxis label={{ value: '數量', angle: -90, position: 'insideLeft' }} />
              <Tooltip 
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
              />
              <Legend verticalAlign="top" height={36}/>
              <Line 
                type="monotone" 
                dataKey="linear" 
                name={`加法 ( ${base} * x )`} 
                stroke="#10b981" 
                strokeWidth={3} 
                activeDot={{ r: 8 }} 
              />
              <Line 
                type="monotone" 
                dataKey="exponential" 
                name={`指數 ( ${base}^x )`} 
                stroke="#db2777" 
                strokeWidth={3} 
                activeDot={{ r: 8 }} 
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-6 p-4 bg-pink-50 rounded-xl text-pink-800 text-center">
            <p className="font-medium">
                發現了嗎？一開始兩條線可能很接近，但指數線（粉紅色）很快就會衝到天上去！
                這就是為什麼人們說「爆炸性成長」通常是指數級的喔。
            </p>
        </div>
      </div>
    </div>
  );
};

export default GrowthGraph;
