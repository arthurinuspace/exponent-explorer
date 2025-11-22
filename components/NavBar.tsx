import React from 'react';
import { AppView } from '../types';
import { Home, Calculator, GitMerge, TrendingUp, Gamepad2, MessageCircle } from 'lucide-react';

interface NavBarProps {
  currentView: AppView;
  setCurrentView: (view: AppView) => void;
}

const NavBar: React.FC<NavBarProps> = ({ currentView, setCurrentView }) => {
  const navItems = [
    { view: AppView.HOME, label: '首頁', icon: Home },
    { view: AppView.BASICS, label: '基礎觀念', icon: Calculator },
    { view: AppView.RULES, label: '指數律', icon: GitMerge },
    { view: AppView.GRAPH, label: '生長圖表', icon: TrendingUp },
    { view: AppView.QUIZ, label: '挑戰遊戲', icon: Gamepad2 },
    { view: AppView.AI_TUTOR, label: '數數貓家教', icon: MessageCircle },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between md:justify-center overflow-x-auto">
          <div className="flex space-x-2 md:space-x-8 py-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentView === item.view;
              return (
                <button
                  key={item.view}
                  onClick={() => setCurrentView(item.view)}
                  className={`flex flex-col md:flex-row items-center px-3 py-2 rounded-xl transition-all duration-200 whitespace-nowrap
                    ${isActive 
                      ? 'bg-blue-100 text-blue-600 font-bold scale-105' 
                      : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
                    }`}
                >
                  <Icon className={`w-6 h-6 md:mr-2 ${isActive ? 'text-blue-600' : 'text-gray-400'}`} />
                  <span className="text-xs md:text-base mt-1 md:mt-0">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
