import React, { useState } from 'react';
import { Plus, Minus, X, Divide } from 'lucide-react';

const RulePlayground: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'product' | 'quotient' | 'power'>('product');
  const [base, setBase] = useState(2);
  const [m, setM] = useState(2);
  const [n, setN] = useState(3);

  const renderContent = () => {
    switch (activeTab) {
      case 'product':
        return (
          <div className="space-y-6">
            <div className="text-center p-6 bg-blue-50 rounded-2xl border border-blue-200">
              <h3 className="text-xl font-bold text-blue-800 mb-4">乘法規則 (Product Rule)</h3>
              <div className="flex items-center justify-center text-3xl md:text-5xl font-bold text-gray-700 space-x-2 md:space-x-4 flex-wrap">
                <div className="flex flex-col items-center">
                  <span>{base}<sup className="text-blue-600 text-xl md:text-3xl">{m}</sup></span>
                  <span className="text-sm font-normal text-gray-400 mt-2">({Array(m).fill(base).join('×')})</span>
                </div>
                <X className="w-8 h-8 text-gray-400" />
                <div className="flex flex-col items-center">
                  <span>{base}<sup className="text-purple-600 text-xl md:text-3xl">{n}</sup></span>
                  <span className="text-sm font-normal text-gray-400 mt-2">({Array(n).fill(base).join('×')})</span>
                </div>
                <span className="text-gray-400">=</span>
                <div className="flex flex-col items-center">
                   <span className="bg-yellow-100 px-4 py-2 rounded-xl border-2 border-yellow-400">
                     {base}<sup className="text-red-600 text-xl md:text-3xl">{m + n}</sup>
                   </span>
                   <span className="text-sm font-normal text-gray-400 mt-2">
                     總共 {m} + {n} = {m + n} 個 {base}
                   </span>
                </div>
              </div>
              <div className="mt-6 text-lg text-blue-700 font-medium">
                底數相同相乘時，指數相加： <span className="font-mono bg-white px-2 py-1 rounded border">a<sup>m</sup> × a<sup>n</sup> = a<sup>m+n</sup></span>
              </div>
            </div>
          </div>
        );
      case 'quotient':
        return (
          <div className="space-y-6">
            <div className="text-center p-6 bg-green-50 rounded-2xl border border-green-200">
              <h3 className="text-xl font-bold text-green-800 mb-4">除法規則 (Quotient Rule)</h3>
              
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="relative">
                   <div className="text-3xl md:text-5xl font-bold text-gray-700 border-b-4 border-gray-800 px-8 pb-2 mb-2">
                      {base}<sup className="text-blue-600 text-xl md:text-3xl">{Math.max(m, n)}</sup>
                   </div>
                   <div className="text-3xl md:text-5xl font-bold text-gray-700">
                      {base}<sup className="text-purple-600 text-xl md:text-3xl">{Math.min(m, n)}</sup>
                   </div>
                   <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 text-4xl text-gray-400">=</div>
                   
                   <div className="absolute top-1/2 -right-40 transform -translate-y-1/2">
                     <span className="bg-yellow-100 px-4 py-2 rounded-xl border-2 border-yellow-400 text-4xl font-bold text-gray-700">
                       {base}<sup className="text-red-600 text-2xl">{Math.abs(m - n)}</sup>
                     </span>
                   </div>
                </div>

                <div className="text-gray-500 text-sm mt-8 grid grid-cols-1 gap-2">
                    <div className="flex justify-center items-center gap-2">
                       <span className="font-mono text-lg">{Array(Math.max(m, n)).fill(base).join(' × ')}</span>
                    </div>
                    <div className="w-full h-px bg-gray-400"></div>
                    <div className="flex justify-center items-center gap-2">
                        <span className="font-mono text-lg">{Array(Math.min(m, n)).fill(base).join(' × ')}</span>
                    </div>
                    <div className="text-xs text-green-600">(上下消掉一樣的之後)</div>
                </div>
              </div>

              <div className="mt-8 text-lg text-green-700 font-medium">
                底數相同相除時，指數相減： <span className="font-mono bg-white px-2 py-1 rounded border">a<sup>m</sup> ÷ a<sup>n</sup> = a<sup>m-n</sup></span>
              </div>
            </div>
          </div>
        );
      case 'power':
         return (
          <div className="space-y-6">
            <div className="text-center p-6 bg-purple-50 rounded-2xl border border-purple-200">
              <h3 className="text-xl font-bold text-purple-800 mb-4">次方再次方 (Power of a Power)</h3>
              <div className="flex items-center justify-center text-3xl md:text-5xl font-bold text-gray-700 space-x-4">
                <div className="flex items-center">
                  <span>({base}<sup className="text-blue-600 text-xl md:text-3xl">{m}</sup>)<sup className="text-purple-600 text-xl md:text-3xl">{n}</sup></span>
                </div>
                <span className="text-gray-400">=</span>
                <div className="flex flex-col items-center">
                   <span className="bg-yellow-100 px-4 py-2 rounded-xl border-2 border-yellow-400">
                     {base}<sup className="text-red-600 text-xl md:text-3xl">{m * n}</sup>
                   </span>
                </div>
              </div>
               <div className="mt-6 flex flex-wrap justify-center gap-4">
                   {Array.from({length: n}).map((_, i) => (
                       <div key={i} className="bg-white border-2 border-purple-200 p-2 rounded-lg text-sm text-gray-500">
                           第 {i+1} 組: {base}<sup>{m}</sup>
                       </div>
                   ))}
               </div>
               <div className="text-sm text-gray-400 mt-2">總共有 {n} 組 {base}<sup>{m}</sup> 相乘</div>

              <div className="mt-6 text-lg text-purple-700 font-medium">
                括號外的指數相乘： <span className="font-mono bg-white px-2 py-1 rounded border">(a<sup>m</sup>)<sup>n</sup> = a<sup>m×n</sup></span>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-3xl shadow-xl p-8 border-4 border-indigo-100">
        <h2 className="text-3xl font-bold text-indigo-600 mb-6 text-center">指數律實驗室</h2>
        
        {/* Controls */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 bg-gray-50 p-4 rounded-xl">
           <div>
             <label className="block text-sm font-bold text-gray-600 mb-1">底數 (a)</label>
             <input type="range" min="2" max="5" value={base} onChange={(e) => setBase(Number(e.target.value))} className="w-full accent-indigo-500" />
             <div className="text-center font-mono font-bold text-indigo-500">{base}</div>
           </div>
           <div>
             <label className="block text-sm font-bold text-gray-600 mb-1">指數 1 (m)</label>
             <input type="range" min="1" max="4" value={m} onChange={(e) => setM(Number(e.target.value))} className="w-full accent-blue-500" />
             <div className="text-center font-mono font-bold text-blue-500">{m}</div>
           </div>
           <div>
             <label className="block text-sm font-bold text-gray-600 mb-1">指數 2 (n)</label>
             <input type="range" min="1" max="4" value={n} onChange={(e) => setN(Number(e.target.value))} className="w-full accent-purple-500" />
             <div className="text-center font-mono font-bold text-purple-500">{n}</div>
           </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-2 mb-6 overflow-x-auto">
          <button 
            onClick={() => setActiveTab('product')}
            className={`flex-1 py-3 px-4 rounded-xl font-bold transition-all whitespace-nowrap flex items-center justify-center gap-2
            ${activeTab === 'product' ? 'bg-blue-500 text-white shadow-lg scale-105' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
          >
            <Plus size={18} /> 乘法規則
          </button>
          <button 
            onClick={() => setActiveTab('quotient')}
            className={`flex-1 py-3 px-4 rounded-xl font-bold transition-all whitespace-nowrap flex items-center justify-center gap-2
            ${activeTab === 'quotient' ? 'bg-green-500 text-white shadow-lg scale-105' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
          >
            <Divide size={18} /> 除法規則
          </button>
          <button 
            onClick={() => setActiveTab('power')}
            className={`flex-1 py-3 px-4 rounded-xl font-bold transition-all whitespace-nowrap flex items-center justify-center gap-2
            ${activeTab === 'power' ? 'bg-purple-500 text-white shadow-lg scale-105' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
          >
            <X size={18} /> 次方規則
          </button>
        </div>

        {/* Content Area */}
        <div className="min-h-[400px]">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default RulePlayground;
