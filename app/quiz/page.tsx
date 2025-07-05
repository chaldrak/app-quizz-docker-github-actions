"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useQuiz } from '@/hooks/useQuiz';
import Timer from '@/components/Timer';
import QuestionCard from '@/components/QuestionCard';
import ScoreDisplay from '@/components/ScoreDisplay';

export default function QuizPage() {
  const router = useRouter();
  const {
    currentQuestion,
    selectedAnswer,
    isQuizActive,
    showResult,
    timeRemaining,
    score,
    correctAnswers,
    wrongAnswers,
    currentQuestionIndex,
    totalQuestions,
    startQuiz,
    selectAnswer,
    quizResult
  } = useQuiz();

  useEffect(() => {
    if (!isQuizActive && !showResult) {
      startQuiz();
    }
  }, [isQuizActive, showResult, startQuiz]);

  useEffect(() => {
    if (showResult) {
      router.push(`/results?score=${quizResult.score}&correct=${quizResult.correctAnswers}&wrong=${quizResult.wrongAnswers}&total=${quizResult.totalQuestions}&timeSpent=${quizResult.timeSpent}`);
    }
  }, [showResult, quizResult, router]);

  if (!isQuizActive || !currentQuestion) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement du quiz...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header with Timer and Score */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex justify-between items-center bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center space-x-6">
              <Timer timeRemaining={timeRemaining} isActive={isQuizActive} />
              <div className="text-center">
                <div className="text-sm text-gray-600">Temps restant</div>
                <div className="text-lg font-semibold text-gray-800">{timeRemaining}s</div>
              </div>
            </div>
            
            <ScoreDisplay 
              score={score}
              correctAnswers={correctAnswers}
              wrongAnswers={wrongAnswers}
              className="shadow-none"
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="max-w-4xl mx-auto">
          <QuestionCard
            question={currentQuestion}
            selectedAnswer={selectedAnswer}
            onAnswerSelect={selectAnswer}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={totalQuestions}
          />
        </div>

        {/* Footer */}
        <div className="max-w-4xl mx-auto mt-8 text-center">
          <p className="text-gray-600 text-sm">
            Répondez rapidement et précisément pour maximiser votre score !
          </p>
        </div>
      </div>
    </div>
  );
}