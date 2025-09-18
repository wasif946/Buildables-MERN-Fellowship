// src/components/form/ProgressBar.jsx
import React from "react";

export default function ProgressBar({ step, totalSteps }) {
  const percentage = Math.round((step / totalSteps) * 100);

  return (
    <div className="w-full my-4">
      <div className="h-2 bg-gray-200 rounded-full">
        <div
          className="h-2 bg-blue-500 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <p className="text-sm text-gray-600 mt-2 text-right">
        Step {step} of {totalSteps}
      </p>
    </div>
  );
}
