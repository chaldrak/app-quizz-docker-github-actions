"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Trophy, Target, Clock, RotateCcw, Home, Award } from "lucide-react";
import { TIME_LIMIT } from "@/constants";

export default function ResultsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const score = parseInt(searchParams.get("score") || "0");
  const correctAnswers = parseInt(searchParams.get("correct") || "0");
  const wrongAnswers = parseInt(searchParams.get("wrong") || "0");
  const totalQuestions = parseInt(searchParams.get("total") || "0");
  const timeSpent = parseInt(searchParams.get("timeSpent") || "0");

  const accuracy =
    totalQuestions > 0
      ? Math.round((correctAnswers / totalQuestions) * 100)
      : 0;
  const questionsPerSecond =
    timeSpent > 0 ? (totalQuestions / timeSpent).toFixed(1) : "0";

  const getPerformanceLevel = () => {
    if (accuracy >= 90)
      return {
        level: "Excellent",
        color: "text-green-600",
        bgColor: "bg-green-100",
      };
    if (accuracy >= 75)
      return {
        level: "Très bien",
        color: "text-blue-600",
        bgColor: "bg-blue-100",
      };
    if (accuracy >= 60)
      return {
        level: "Bien",
        color: "text-yellow-600",
        bgColor: "bg-yellow-100",
      };
    if (accuracy >= 40)
      return {
        level: "Passable",
        color: "text-orange-600",
        bgColor: "bg-orange-100",
      };
    return {
      level: "À améliorer",
      color: "text-red-600",
      bgColor: "bg-red-100",
    };
  };

  const performance = getPerformanceLevel();

  const handleRetakeQuiz = () => {
    router.push("/quiz");
  };

  const handleGoHome = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-6">
              <Trophy className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Quiz Terminé !
            </h1>
            <p className="text-xl text-gray-600">
              Voici vos résultats détaillés
            </p>
          </div>

          {/* Main Score Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="text-center mb-6">
              <div className="text-5xl font-bold text-blue-600 mb-2">
                {score} points
              </div>
              <div
                className={`inline-flex items-center px-4 py-2 rounded-full ${performance.bgColor}`}
              >
                <Award className={`w-5 h-5 mr-2 ${performance.color}`} />
                <span className={`font-semibold ${performance.color}`}>
                  {performance.level}
                </span>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3 mx-auto">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-gray-800">
                  {accuracy}%
                </div>
                <div className="text-sm text-gray-600">Précision</div>
              </div>

              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3 mx-auto">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                </div>
                <div className="text-2xl font-bold text-green-600">
                  {correctAnswers}
                </div>
                <div className="text-sm text-gray-600">Bonnes réponses</div>
              </div>

              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-3 mx-auto">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">✗</span>
                  </div>
                </div>
                <div className="text-2xl font-bold text-red-600">
                  {wrongAnswers}
                </div>
                <div className="text-sm text-gray-600">Erreurs</div>
              </div>

              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-3 mx-auto">
                  <Clock className="w-6 h-6 text-yellow-600" />
                </div>
                <div className="text-2xl font-bold text-gray-800">
                  {questionsPerSecond}
                </div>
                <div className="text-sm text-gray-600">Questions/sec</div>
              </div>
            </div>
          </div>

          {/* Detailed Analysis */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Analyse Détaillée
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-700 mb-3">
                  Performance
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Questions répondues</span>
                    <span className="font-semibold">{totalQuestions}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Temps utilisé</span>
                    <span className="font-semibold">
                      {timeSpent}s / {TIME_LIMIT}s
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Vitesse moyenne</span>
                    <span className="font-semibold">
                      {questionsPerSecond} q/s
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-700 mb-3">
                  Répartition des Points
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-green-600">Points gagnés</span>
                    <span className="font-semibold text-green-600">
                      +{correctAnswers * 10}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-red-600">Points perdus</span>
                    <span className="font-semibold text-red-600">
                      -{wrongAnswers * 5}
                    </span>
                  </div>
                  <div className="flex justify-between border-t pt-2">
                    <span className="text-gray-800 font-semibold">
                      Score final
                    </span>
                    <span className="font-bold text-blue-600">{score} pts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleRetakeQuiz}
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <RotateCcw className="w-5 h-5 mr-2" />
              Refaire le Quiz
            </button>
            <button
              onClick={handleGoHome}
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Home className="w-5 h-5 mr-2" />
              Retour à l&apos;accueil
            </button>
          </div>

          {/* Tips for improvement */}
          <div className="mt-8 bg-blue-50 rounded-xl p-6">
            <h3 className="font-semibold text-blue-800 mb-3">
              💡 Conseils pour améliorer votre score
            </h3>
            <ul className="space-y-2 text-blue-700">
              <li>
                • Révisez les concepts Docker : conteneurs, images, Dockerfile
              </li>
              <li>• Approfondissez GitHub Actions : workflows, jobs, steps</li>
              <li>
                • Étudiez les pratiques CI/CD : intégration continue,
                déploiement
              </li>
              <li>
                • Entraînez-vous régulièrement pour améliorer votre vitesse
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
