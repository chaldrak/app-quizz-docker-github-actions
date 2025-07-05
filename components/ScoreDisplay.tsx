"use client";

interface ScoreDisplayProps {
  score: number;
  correctAnswers: number;
  wrongAnswers: number;
  className?: string;
}

export default function ScoreDisplay({ 
  score, 
  correctAnswers, 
  wrongAnswers, 
  className = "" 
}: ScoreDisplayProps) {
  return (
    <div className={`bg-white rounded-lg shadow-md p-4 ${className}`}>
      <div className="text-center space-y-2">
        <div className="text-2xl font-bold text-blue-600">
          {score} pts
        </div>
        <div className="flex justify-center space-x-4 text-sm">
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-green-600 font-medium">{correctAnswers}</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="text-red-600 font-medium">{wrongAnswers}</span>
          </div>
        </div>
      </div>
    </div>
  );
}