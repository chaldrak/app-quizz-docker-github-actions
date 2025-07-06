"use client";

import { useState, useEffect, useCallback } from "react";
import { questions, Question } from "@/data/questions";
import { TIME_LIMIT } from "@/constants";

interface QuizState {
  currentQuestionIndex: number;
  score: number;
  timeRemaining: number;
  isQuizActive: boolean;
  selectedAnswer: number | null;
  showResult: boolean;
  correctAnswers: number;
  wrongAnswers: number;
  answeredQuestions: number;
}

interface QuizResult {
  score: number;
  correctAnswers: number;
  wrongAnswers: number;
  totalQuestions: number;
  timeSpent: number;
}

export function useQuiz() {
  const [state, setState] = useState<QuizState>({
    currentQuestionIndex: 0,
    score: 0,
    timeRemaining: TIME_LIMIT,
    isQuizActive: false,
    selectedAnswer: null,
    showResult: false,
    correctAnswers: 0,
    wrongAnswers: 0,
    answeredQuestions: 0,
  });

  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);

  // Shuffle questions when quiz starts
  const shuffleQuestions = useCallback(() => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
  }, []);

  // Timer effect
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (state.isQuizActive && state.timeRemaining > 0) {
      interval = setInterval(() => {
        setState((prev) => ({
          ...prev,
          timeRemaining: prev.timeRemaining - 1,
        }));
      }, 1000);
    } else if (state.timeRemaining === 0 && state.isQuizActive) {
      endQuiz();
    }

    return () => clearInterval(interval);
  }, [state.isQuizActive, state.timeRemaining]);

  const startQuiz = useCallback(() => {
    shuffleQuestions();
    setState({
      currentQuestionIndex: 0,
      score: 0,
      timeRemaining: TIME_LIMIT,
      isQuizActive: true,
      selectedAnswer: null,
      showResult: false,
      correctAnswers: 0,
      wrongAnswers: 0,
      answeredQuestions: 0,
    });
  }, [shuffleQuestions]);

  const selectAnswer = useCallback(
    (answerIndex: number) => {
      if (state.selectedAnswer !== null) return;

      const currentQuestion = shuffledQuestions[state.currentQuestionIndex];
      const isCorrect = answerIndex === currentQuestion.correctAnswer;

      setState((prev) => ({
        ...prev,
        selectedAnswer: answerIndex,
        score: prev.score + (isCorrect ? 10 : -5),
        correctAnswers: prev.correctAnswers + (isCorrect ? 1 : 0),
        wrongAnswers: prev.wrongAnswers + (isCorrect ? 0 : 1),
        answeredQuestions: prev.answeredQuestions + 1,
      }));

      // Auto-advance to next question after showing result
      setTimeout(() => {
        if (state.currentQuestionIndex < shuffledQuestions.length - 1) {
          setState((prev) => ({
            ...prev,
            currentQuestionIndex: prev.currentQuestionIndex + 1,
            selectedAnswer: null,
          }));
        } else {
          endQuiz();
        }
      }, 1500);
    },
    [state.selectedAnswer, state.currentQuestionIndex, shuffledQuestions]
  );

  const endQuiz = useCallback(() => {
    setState((prev) => ({
      ...prev,
      isQuizActive: false,
      showResult: true,
    }));
  }, []);

  const resetQuiz = useCallback(() => {
    setState({
      currentQuestionIndex: 0,
      score: 0,
      timeRemaining: TIME_LIMIT,
      isQuizActive: false,
      selectedAnswer: null,
      showResult: false,
      correctAnswers: 0,
      wrongAnswers: 0,
      answeredQuestions: 0,
    });
    setShuffledQuestions([]);
  }, []);

  const currentQuestion = shuffledQuestions[state.currentQuestionIndex];

  const quizResult: QuizResult = {
    score: state.score,
    correctAnswers: state.correctAnswers,
    wrongAnswers: state.wrongAnswers,
    totalQuestions: state.answeredQuestions,
    timeSpent: TIME_LIMIT - state.timeRemaining,
  };

  return {
    ...state,
    currentQuestion,
    startQuiz,
    selectAnswer,
    endQuiz,
    resetQuiz,
    quizResult,
    totalQuestions: shuffledQuestions.length,
  };
}
