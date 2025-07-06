"use client";

import { TIME_LIMIT } from "@/constants";
import { useEffect, useState } from "react";

interface TimerProps {
  timeRemaining: number;
  isActive: boolean;
}

export default function Timer({ timeRemaining, isActive }: TimerProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (timeRemaining / TIME_LIMIT) * circumference;

  const getTimerColor = () => {
    if (timeRemaining > TIME_LIMIT / 2) return "stroke-green-500";
    if (timeRemaining > 10) return "stroke-yellow-500";
    return "stroke-red-500";
  };

  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <svg width="100" height="100" className="transform -rotate-90">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            className="text-gray-200"
          />
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className={`transition-all duration-1000 ${getTimerColor()}`}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800">
              {timeRemaining}
            </div>
            <div className="text-xs text-gray-600">sec</div>
          </div>
        </div>
      </div>
    </div>
  );
}
