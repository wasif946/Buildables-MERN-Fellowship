// src/components/form/Step2.jsx
import React from "react";
import { useFormContext } from "react-hook-form";

export default function Step2({ onPrev, onNext }) {
  const { register, handleSubmit, formState: { errors } } = useFormContext();

  return (
    <div className="space-y-4">
      {/* ✅ Add step heading for test match */}
      <h2>Step 2 of 3</h2>

      <label htmlFor="address">Address</label>
      <input id="address" {...register("address")} aria-invalid={!!errors.address} />
      {errors.address && <span role="alert">{errors.address.message}</span>}

      <label htmlFor="city">City</label>
      <input id="city" {...register("city")} aria-invalid={!!errors.city} />
      {errors.city && <span role="alert">{errors.city.message}</span>}

      <label htmlFor="zip">ZIP Code</label>
      <input id="zip" {...register("zip")} aria-invalid={!!errors.zip} />
      {errors.zip && <span role="alert">{errors.zip.message}</span>}

      <div className="flex justify-between mt-6">
        <button type="button" onClick={onPrev} className="px-4 py-2 bg-gray-300 rounded">
          Back
        </button>
        <button type="button" onClick={handleSubmit(onNext)} className="px-4 py-2 bg-blue-500 text-white rounded">
          Next
        </button>
      </div>
    </div>
  );
}
