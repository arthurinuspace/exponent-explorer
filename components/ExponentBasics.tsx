import React, { useState } from 'react';
import { Layers, X } from 'lucide-react';

const ExponentBasics: React.FC = () => {
  const [base, setBase] = useState(2);
  const [exponent, setExponent] = useState(3);

  // Calculate value
  const result = Math.pow(base, exponent);
  const isTooBig = result > 200; // Limit visual dots for performance/layout

  // Generate dots array
  const dots = Array.from({ length: Math.min(result, 200) });

  // Generate expansion string (2 x 2 x 2)
  const expansion = Array(exponent).fill(base).join(' × ');

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-3xl shadow-xl p-8 border-4 border-blue-100">
        <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center flex items-center justify-center gap-3">
          <Layers className="w-8 h-8" />
          認識指數 (Exponents)
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Controls */}
          <div className="space-y-8">
            <div className="bg-blue-50 p-6 rounded-2xl">
              <label className="block text-lg font-bold text-blue-800 mb-2">
                底數 (Base): <span className="text-3xl text-blue-600">{base}</span>
              </label>
              <p className="text-sm text-blue-400 mb-4">這是要重複相乘的數字</p>
              <input
                type="range"
                min="1"
                max="10"
                value={base}
                onChange={(e) => setBase(Number(e.target.value))}
                className="w-full h-4 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
            </div>

            <div className="bg-purple-50 p-6 rounded-2xl">
              <label className="block text-lg font-bold text-purple-800 mb-2">
                指數 (Exponent): <span className="text-3xl text-purple-600">{exponent}</span>
              </label>
              <p className="text-sm text-purple-400 mb-4">這是要乘幾次</p>
              <input
                type="range"
                min="0"
                max="7"
                value={exponent}
                onChange={(e) => setExponent(Number(e.target.value))}
                className="w-full h-4 bg-purple-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
              />
            </div>

            <div className="bg-yellow-50 p-6 rounded-2xl text-center">
              <div className="text-gray-500 font-semibold mb-2">數學式寫法</div>
              <div className="text-6xl font-black text-gray-800 flex items-start justify-center leading-none">
                {base}
                <span className="text-4xl text-purple-600 mt-[-10px] ml-1">{exponent}</span>
              </div>
            </div>
          </div>

          {/* Visualization & Result */}
          <div className="flex flex-col justify-center items-center space-y-6">
            <div className="text-center">
              <div className="text-xl text-gray-500 font-medium mb-2">展開來看</div>
              <div className="text-2xl md:text-3xl font-mono bg-gray-100 px-6 py-3 rounded-xl break-all">
                {exponent === 0 ? '1 (任何非0數的0次方都是1)' : expansion}
                {exponent > 0 && <span className="text-gray-400 mx-2">=</span>}
                {exponent > 0 && <span className="font-bold text-blue-600">{result}</span>}
              </div>
            </div>

            <div className="w-full bg-gray-50 rounded-2xl p-4 min-h-[300px] flex flex-col items-center justify-center border-2 border-dashed border-gray-300 relative overflow-hidden">
               <div className="absolute top-2 left-4 text-xs text-gray-400 font-bold">
                  數量視覺化 ({result})
               </div>
               
               {exponent === 0 ? (
                 <div className="flex flex-col items-center animate-bounce-slow">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg text-2xl font-bold text-white">1</div>
                    <p className="mt-4 text-gray-500 font-medium">只有一個，就是我自己！</p>
                 </div>
               ) : isTooBig ? (
                 <div className="text-center p-8">
                   <div className="text-6xl mb-4">🤯</div>
                   <p className="text-xl font-bold text-gray-600">數量太多了！</p>
                   <p className="text-gray-500">已經超過 200 個點點，畫不下了！</p>
                 </div>
               ) : (
                 <div className="flex flex-wrap gap-2 justify-center content-center max-h-[400px] overflow-y-auto">
                   {dots.map((_, i) => (
                     <div 
                        key={i} 
                        className="w-4 h-4 rounded-full bg-blue-500 shadow-sm transition-all duration-500 ease-out transform scale-100 hover:scale-150 hover:bg-purple-500"
                        style={{ animationDelay: `${i * 0.01}s` }}
                      />
                   ))}
                 </div>
               )}
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 bg-green-50 rounded-xl border border-green-200">
            <h3 className="font-bold text-green-800 mb-2 flex items-center">
                💡 小知識
            </h3>
            <p className="text-green-700">
                指數就是一種「魔法倍增」！如果你把 {base} 當作細菌，每過一分鐘分裂一次，過了 {exponent} 分鐘後，就會變成 {result} 隻細菌喔！
            </p>
        </div>
      </div>
    </div>
  );
};

export default ExponentBasics;
