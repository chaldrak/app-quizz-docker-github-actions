"use client";

import { useRouter } from "next/navigation";
import { Play, Brain, Clock, Trophy } from "lucide-react";
import { TIME_LIMIT } from "@/constants";

export default function Home() {
  const router = useRouter();

  const handleStartQuiz = () => {
    router.push("/quiz");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Section */}
          <div className="mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-6">
              <Brain className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Quiz <span className="text-blue-600">Docker & CI/CD</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Testez vos connaissances sur Docker, GitHub Actions et les
              pratiques CI/CD avec notre quiz chronométré de 100 questions.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {TIME_LIMIT} Secondes
              </h3>
              <p className="text-gray-600">
                Quiz chronométré avec timer visuel pour tester vos réflexes
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Brain className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                100 Questions
              </h3>
              <p className="text-gray-600">
                Questions variées sur Docker, GitHub Actions et CI/CD
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-200">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Trophy className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Score en Temps Réel
              </h3>
              <p className="text-gray-600">
                +10 points par bonne réponse, -5 points par erreur
              </p>
            </div>
          </div>

          {/* Quiz Rules */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Règles du Quiz
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Durée limitée
                    </h4>
                    <p className="text-gray-600">
                      Vous avez {TIME_LIMIT} secondes pour répondre au maximum
                      de questions
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Progression automatique
                    </h4>
                    <p className="text-gray-600">
                      Après chaque réponse, vous passez automatiquement à la
                      question suivante
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Système de points
                    </h4>
                    <p className="text-gray-600">
                      +10 points pour une bonne réponse, -5 points pour une
                      erreur
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Feedback immédiat
                    </h4>
                    <p className="text-gray-600">
                      Vous verrez immédiatement si votre réponse est correcte ou
                      non
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Start Button */}
          <div className="text-center">
            <button
              onClick={handleStartQuiz}
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Play className="w-5 h-5 mr-2" />
              Démarrer le Quiz
            </button>
            <p className="text-sm text-gray-500 mt-4">
              Prêt à tester vos connaissances ? Cliquez pour commencer !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
