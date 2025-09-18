// src/components/form/Step3.jsx
import React from "react";
import { useFormContext } from "react-hook-form";

export default function Step3({ onPrev }) {
  const { getValues } = useFormContext();
  const values = getValues();

  return (
    <div className="space-y-4">
      {/* ✅ Add consistent heading for test detection */}
      <h2>Step 3 of 3</h2>

      <p className="text-gray-700">Please review your details before submitting:</p>

      <ul className="bg-gray-100 p-4 rounded">
        <li><strong>Name:</strong> {values.firstName} {values.lastName}</li>
        <li><strong>Email:</strong> {values.email}</li>
        <li><strong>Address:</strong> {values.address}</li>
        <li><strong>City:</strong> {values.city}</li>
        <li><strong>ZIP:</strong> {values.zip}</li>
      </ul>

      <div className="flex justify-between mt-6">
        <button type="button" onClick={onPrev} className="px-4 py-2 bg-gray-300 rounded">
          Back
        </button>
        <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">
          Submit
        </button>
      </div>
    </div>
  );
}
