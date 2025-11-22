import React, { useState } from 'react';
import { AppView } from './types';
import NavBar from './components/NavBar';
import ExponentBasics from './components/ExponentBasics';
import RulePlayground from './components/RulePlayground';
import GrowthGraph from './components/GrowthGraph';
import QuizGame from './components/QuizGame';
import AITutor from './components/AITutor';
import { Rocket, Star, Sparkles } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.HOME);

  const renderView = () => {
    switch (currentView) {
      case AppView.BASICS:
        return <ExponentBasics />;
      case AppView.RULES:
        return <RulePlayground />;
      case AppView.GRAPH:
        return <GrowthGraph />;
      case AppView.QUIZ:
        return <QuizGame />;
      case AppView.AI_TUTOR:
        return <AITutor />;
      case AppView.HOME:
      default:
        return (
          <div className="flex flex-col items-center justify-center min-h-[80vh] p-6 text-center space-y-8 max-w-4xl mx-auto">
            <div className="relative">
                <div className="absolute -top-10 -right-10 text-yellow-400 animate-bounce-slow">
                    <Star size={64} fill="currentColor" />
                </div>
                <div className="absolute -bottom-5 -left-10 text-blue-300 animate-bounce-slow" style={{ animationDelay: '1.5s' }}>
                    <Sparkles size={48} />
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 drop-shadow-sm pb-2">
                指數探險家
                </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-600 font-medium max-w-2xl leading-relaxed">
              歡迎來到數學魔法世界！<br/>
              在這裡，你可以親手操作「指數」這個強大的魔法工具，<br/>
              看看數字是如何瞬間變大的！
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl mt-8">
              <button onClick={() => setCurrentView(AppView.BASICS)} className="group bg-white p-6 rounded-3xl shadow-md hover:shadow-xl border-2 border-blue-100 hover:border-blue-400 transition-all text-left flex items-center gap-4">
                 <div className="bg-blue-100 p-4 rounded-2xl group-hover:scale-110 transition-transform">
                    <span className="text-3xl">🔢</span>
                 </div>
                 <div>
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600">從基礎開始</h3>
                    <p className="text-gray-500 text-sm">什麼是底數？什麼是指數？動手玩玩看！</p>
                 </div>
              </button>

              <button onClick={() => setCurrentView(AppView.RULES)} className="group bg-white p-6 rounded-3xl shadow-md hover:shadow-xl border-2 border-purple-100 hover:border-purple-400 transition-all text-left flex items-center gap-4">
                 <div className="bg-purple-100 p-4 rounded-2xl group-hover:scale-110 transition-transform">
                    <span className="text-3xl">➗</span>
                 </div>
                 <div>
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-purple-600">指數律實驗室</h3>
                    <p className="text-gray-500 text-sm">相乘、相除會發生什麼事？</p>
                 </div>
              </button>

              <button onClick={() => setCurrentView(AppView.GRAPH)} className="group bg-white p-6 rounded-3xl shadow-md hover:shadow-xl border-2 border-pink-100 hover:border-pink-400 transition-all text-left flex items-center gap-4">
                 <div className="bg-pink-100 p-4 rounded-2xl group-hover:scale-110 transition-transform">
                    <span className="text-3xl">📈</span>
                 </div>
                 <div>
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-pink-600">爆炸性成長</h3>
                    <p className="text-gray-500 text-sm">看看指數長得有多快！</p>
                 </div>
              </button>

               <button onClick={() => setCurrentView(AppView.AI_TUTOR)} className="group bg-white p-6 rounded-3xl shadow-md hover:shadow-xl border-2 border-orange-100 hover:border-orange-400 transition-all text-left flex items-center gap-4">
                 <div className="bg-orange-100 p-4 rounded-2xl group-hover:scale-110 transition-transform">
                    <span className="text-3xl">😺</span>
                 </div>
                 <div>
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-orange-600">數數貓家教</h3>
                    <p className="text-gray-500 text-sm">有問題就問 AI 貓咪老師！</p>
                 </div>
              </button>
            </div>

            <button 
              onClick={() => setCurrentView(AppView.BASICS)}
              className="mt-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xl font-bold py-4 px-12 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-3"
            >
               <Rocket className="animate-pulse" />
               開始探險
            </button>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#f0f9ff] font-sans text-slate-800">
      <NavBar currentView={currentView} setCurrentView={setCurrentView} />
      
      <main className="container mx-auto py-6 md:py-10 px-4">
        {renderView()}
      </main>
      
      <footer className="text-center p-6 text-gray-400 text-sm">
        <p>© 2024 指數探險家 - 快樂學習數學</p>
      </footer>
    </div>
  );
};

export default App;
