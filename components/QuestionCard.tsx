"use client";

import { Question } from '@/data/questions';
import { Check, X } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  selectedAnswer: number | null;
  onAnswerSelect: (answerIndex: number) => void;
  questionNumber: number;
  totalQuestions: number;
}

export default function QuestionCard({
  question,
  selectedAnswer,
  onAnswerSelect,
  questionNumber,
  totalQuestions,
}: QuestionCardProps) {
  const getOptionClassName = (optionIndex: number) => {
    const baseClassName = "w-full p-4 text-left rounded-lg border-2 transition-all duration-200 hover:shadow-md";
    
    if (selectedAnswer === null) {
      return `${baseClassName} border-gray-200 hover:border-blue-300 hover:bg-blue-50`;
    }
    
    if (optionIndex === question.correctAnswer) {
      return `${baseClassName} border-green-500 bg-green-100 text-green-800`;
    }
    
    if (optionIndex === selectedAnswer && selectedAnswer !== question.correctAnswer) {
      return `${baseClassName} border-red-500 bg-red-100 text-red-800`;
    }
    
    return `${baseClassName} border-gray-200 bg-gray-50 text-gray-500`;
  };

  const getOptionIcon = (optionIndex: number) => {
    if (selectedAnswer === null) return null;
    
    if (optionIndex === question.correctAnswer) {
      return <Check className="w-5 h-5 text-green-600" />;
    }
    
    if (optionIndex === selectedAnswer && selectedAnswer !== question.correctAnswer) {
      return <X className="w-5 h-5 text-red-600" />;
    }
    
    return null;
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6 space-y-6">
      {/* Question header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            {question.category}
          </span>
          <span className="text-sm text-gray-600">
            Question {questionNumber} / {totalQuestions}
          </span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
        />
      </div>

      {/* Question text */}
      <div className="text-xl font-semibold text-gray-800 leading-relaxed">
        {question.question}
      </div>

      {/* Answer options */}
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswerSelect(index)}
            disabled={selectedAnswer !== null}
            className={getOptionClassName(index)}
          >
            <div className="flex items-center justify-between">
              <span className="font-medium">{option}</span>
              {getOptionIcon(index)}
            </div>
          </button>
        ))}
      </div>

      {/* Feedback message */}
      {selectedAnswer !== null && (
        <div className="text-center py-4">
          {selectedAnswer === question.correctAnswer ? (
            <div className="text-green-600 font-semibold flex items-center justify-center space-x-2">
              <Check className="w-5 h-5" />
              <span>Correct ! +10 points</span>
            </div>
          ) : (
            <div className="text-red-600 font-semibold flex items-center justify-center space-x-2">
              <X className="w-5 h-5" />
              <span>Incorrect ! -5 points</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}