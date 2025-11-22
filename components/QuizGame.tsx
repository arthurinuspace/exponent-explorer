import React, { useState } from 'react';
import { QuizQuestion } from '../types';
import { CheckCircle, XCircle, Trophy, RefreshCw } from 'lucide-react';

const questions: QuizQuestion[] = [
  {
    id: 1,
    question: "2 的 3 次方 (2³) 等於多少？",
    options: ["6", "8", "5", "9"],
    correctIndex: 1,
    explanation: "2³ = 2 × 2 × 2 = 8。不是 2 × 3 喔！"
  },
  {
    id: 2,
    question: "根據指數律，2³ × 2² 等於多少？",
    options: ["2⁶", "2⁵", "4⁵", "4⁶"],
    correctIndex: 1,
    explanation: "底數相同相乘，指數相加。3 + 2 = 5，所以是 2⁵。"
  },
  {
    id: 3,
    question: "任何不是 0 的數字，它的 0 次方等於多少？",
    options: ["0", "1", "那個數字本身", "無限大"],
    correctIndex: 1,
    explanation: "這是規定也是數學邏輯喔！任何非零數的 0 次方都是 1。"
  },
  {
    id: 4,
    question: "(3²)³ 等於多少？",
    options: ["3⁵", "3⁶", "3⁸", "9⁵"],
    correctIndex: 1,
    explanation: "括號外的指數要相乘。2 × 3 = 6，所以是 3⁶。"
  },
  {
    id: 5,
    question: "5⁴ ÷ 5² 等於多少？",
    options: ["5²", "1²", "5⁸", "1"],
    correctIndex: 0,
    explanation: "相除時指數相減。4 - 2 = 2，所以是 5²。"
  }
];

const QuizGame: React.FC = () => {
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [showSummary, setShowSummary] = useState(false);

  const handleOptionClick = (index: number) => {
    if (selectedOption !== null) return; // Prevent multiple clicks

    setSelectedOption(index);
    const correct = index === questions[currentQIndex].correctIndex;
    setIsCorrect(correct);
    if (correct) setScore(score + 1);
  };

  const handleNext = () => {
    if (currentQIndex < questions.length - 1) {
      setCurrentQIndex(currentQIndex + 1);
      setSelectedOption(null);
      setIsCorrect(null);
    } else {
      setShowSummary(true);
    }
  };

  const resetGame = () => {
    setCurrentQIndex(0);
    setSelectedOption(null);
    setIsCorrect(null);
    setScore(0);
    setShowSummary(false);
  };

  if (showSummary) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <div className="bg-white rounded-3xl shadow-xl p-12 text-center border-4 border-yellow-200">
          <Trophy className="w-24 h-24 text-yellow-400 mx-auto mb-6 animate-bounce" />
          <h2 className="text-4xl font-bold text-gray-800 mb-4">挑戰完成！</h2>
          <p className="text-2xl text-gray-600 mb-8">
            你的得分是： <span className="text-blue-600 font-bold text-4xl">{score}</span> / {questions.length}
          </p>
          
          <div className="mb-8">
            {score === questions.length ? (
              <p className="text-green-600 font-bold text-xl">太強了！你是指數大師！🏆</p>
            ) : score > questions.length / 2 ? (
              <p className="text-blue-600 font-bold text-xl">做得很好！再接再厲！👍</p>
            ) : (
              <p className="text-orange-500 font-bold text-xl">沒關係，再去複習一下吧！💪</p>
            )}
          </div>

          <button 
            onClick={resetGame}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 flex items-center justify-center mx-auto gap-2"
          >
            <RefreshCw /> 再玩一次
          </button>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQIndex];

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-blue-100">
        <div className="bg-blue-100 p-4 flex justify-between items-center">
          <span className="font-bold text-blue-800">問題 {currentQIndex + 1} / {questions.length}</span>
          <span className="font-bold text-blue-600 bg-white px-3 py-1 rounded-full">得分: {score}</span>
        </div>
        
        <div className="p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">{currentQ.question}</h3>
          
          <div className="grid grid-cols-1 gap-4 mb-6">
            {currentQ.options.map((opt, index) => {
              let btnClass = "w-full p-4 text-xl font-bold rounded-xl border-2 transition-all ";
              if (selectedOption === null) {
                btnClass += "border-gray-200 bg-gray-50 hover:bg-blue-50 hover:border-blue-300 text-gray-700";
              } else {
                if (index === currentQ.correctIndex) {
                   btnClass += "border-green-500 bg-green-100 text-green-800";
                } else if (index === selectedOption) {
                   btnClass += "border-red-500 bg-red-100 text-red-800";
                } else {
                   btnClass += "border-gray-100 bg-gray-50 text-gray-300";
                }
              }

              return (
                <button
                  key={index}
                  onClick={() => handleOptionClick(index)}
                  disabled={selectedOption !== null}
                  className={btnClass}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {selectedOption !== null && (
            <div className={`rounded-xl p-4 mb-6 ${isCorrect ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
              <div className="flex items-center gap-2 mb-2 font-bold text-lg">
                {isCorrect ? <CheckCircle /> : <XCircle />}
                {isCorrect ? "答對了！" : "答錯囉！"}
              </div>
              <p>{currentQ.explanation}</p>
            </div>
          )}

          {selectedOption !== null && (
            <button 
              onClick={handleNext}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-xl transition-colors"
            >
              {currentQIndex < questions.length - 1 ? "下一題" : "看成績"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizGame;
