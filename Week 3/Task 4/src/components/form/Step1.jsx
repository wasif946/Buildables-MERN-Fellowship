// src/components/form/Step1.jsx
import React from "react";
import { useFormContext } from "react-hook-form";

export default function Step1({ onNext }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useFormContext();

  return (
    <div>
      <h2>Step 1 of 3</h2>

      {/* ✅ First Name */}
      <label htmlFor="firstName">First name</label>
      <input
        id="firstName"
        {...register("firstName", { required: "First name is required" })}
      />
      {errors.firstName && (
        <span role="alert">{errors.firstName.message}</span>
      )}

      {/* ✅ Last Name */}
      <label htmlFor="lastName">Last name</label>
      <input
        id="lastName"
        {...register("lastName", { required: "Last name is required" })}
      />
      {errors.lastName && <span role="alert">{errors.lastName.message}</span>}

      {/* ✅ Email */}
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Invalid email",
          },
        })}
      />
      {errors.email && <span role="alert">{errors.email.message}</span>}

      {/* ✅ Button wrapped in handleSubmit to trigger validation */}
      <button type="button" onClick={handleSubmit(onNext)}>
        Next
      </button>
    </div>
  );
}
