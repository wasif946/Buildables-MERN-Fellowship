import React, { useState, useEffect } from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Zod schemas for each step
const step1Schema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address').min(1, 'Email is required'),
});

const step2Schema = z.object({
  address1: z.string().min(1, 'Address Line 1 is required'),
  address2: z.string(),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(1, 'State is required'),
  zip: z.string().regex(/^\d{5}(?:[-\s]\d{4})?$/, 'Invalid zip code').min(1, 'Zip code is required'),
});

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  address1: '',
  address2: '',
  city: '',
  state: '',
  zip: '',
};
const FORM_KEY = "multi-step-form";
const STEPS = 3;

// Component for Step 1
const Step1 = ({ onNext }) => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-800">Contact Information</h2>
      <p className="text-sm text-gray-500">
        Please fill out your personal details to proceed.
      </p>
      
      <div className="flex flex-col">
        <label htmlFor="firstName" className="font-medium text-gray-700 mb-1">First name</label>
        <input
          id="firstName"
          {...register('firstName')}
          className={`p-3 border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200`}
          aria-invalid={errors.firstName ? "true" : "false"}
          aria-describedby={errors.firstName ? "firstName-error" : undefined}
        />
        {errors.firstName && <span role="alert" id="firstName-error" className="text-red-500 text-sm mt-1">{errors.firstName.message}</span>}
      </div>

      <div className="flex flex-col">
        <label htmlFor="lastName" className="font-medium text-gray-700 mb-1">Last name</label>
        <input
          id="lastName"
          {...register('lastName')}
          className={`p-3 border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200`}
          aria-invalid={errors.lastName ? "true" : "false"}
          aria-describedby={errors.lastName ? "lastName-error" : undefined}
        />
        {errors.lastName && <span role="alert" id="lastName-error" className="text-red-500 text-sm mt-1">{errors.lastName.message}</span>}
      </div>

      <div className="flex flex-col">
        <label htmlFor="email" className="font-medium text-gray-700 mb-1">Email</label>
        <input
          id="email"
          type="email"
          {...register('email')}
          className={`p-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200`}
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && <span role="alert" id="email-error" className="text-red-500 text-sm mt-1">{errors.email.message}</span>}
      </div>

      <div className="flex justify-end pt-4">
        <button
          type="button"
          onClick={onNext}
          className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
        >
          Next
        </button>
      </div>
    </div>
  );
};

// Component for Step 2
const Step2 = ({ onNext, onPrev }) => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-800">Address Information</h2>
      <p className="text-sm text-gray-500">
        Tell us where we can reach you.
      </p>
      
      <div className="flex flex-col">
        <label htmlFor="address1" className="font-medium text-gray-700 mb-1">Address Line 1</label>
        <input
          id="address1"
          {...register('address1')}
          className={`p-3 border ${errors.address1 ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200`}
          aria-invalid={errors.address1 ? "true" : "false"}
          aria-describedby={errors.address1 ? "address1-error" : undefined}
        />
        {errors.address1 && <span role="alert" id="address1-error" className="text-red-500 text-sm mt-1">{errors.address1.message}</span>}
      </div>
      <div className="flex flex-col">
        <label htmlFor="address2" className="font-medium text-gray-700 mb-1">Address Line 2</label>
        <input
          id="address2"
          {...register('address2')}
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="city" className="font-medium text-gray-700 mb-1">City</label>
        <input
          id="city"
          {...register('city')}
          className={`p-3 border ${errors.city ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200`}
          aria-invalid={errors.city ? "true" : "false"}
          aria-describedby={errors.city ? "city-error" : undefined}
        />
        {errors.city && <span role="alert" id="city-error" className="text-red-500 text-sm mt-1">{errors.city.message}</span>}
      </div>
      <div className="flex flex-col">
        <label htmlFor="state" className="font-medium text-gray-700 mb-1">State</label>
        <input
          id="state"
          {...register('state')}
          className={`p-3 border ${errors.state ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200`}
          aria-invalid={errors.state ? "true" : "false"}
          aria-describedby={errors.state ? "state-error" : undefined}
        />
        {errors.state && <span role="alert" id="state-error" className="text-red-500 text-sm mt-1">{errors.state.message}</span>}
      </div>
      <div className="flex flex-col">
        <label htmlFor="zip" className="font-medium text-gray-700 mb-1">Zip Code</label>
        <input
          id="zip"
          {...register('zip')}
          className={`p-3 border ${errors.zip ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200`}
          aria-invalid={errors.zip ? "true" : "false"}
          aria-describedby={errors.zip ? "zip-error" : undefined}
        />
        {errors.zip && <span role="alert" id="zip-error" className="text-red-500 text-sm mt-1">{errors.zip.message}</span>}
      </div>

      <div className="flex justify-between pt-4">
        <button
          type="button"
          onClick={onPrev}
          className="px-8 py-3 bg-gray-300 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-400 transition duration-200"
        >
          Back
        </button>
        <button
          type="button"
          onClick={onNext}
          className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
        >
          Next
        </button>
      </div>
    </div>
  );
};

// Component for Step 3
const Step3 = ({ onPrev }) => {
  const { getValues, handleSubmit } = useFormContext();
  const data = getValues();

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-800">Review and Submit</h2>
      <p className="text-sm text-gray-500">
        Please review your information before submitting.
      </p>
      
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 space-y-3">
        <h3 className="font-bold text-lg text-gray-800">Your Information</h3>
        <p className="text-gray-700"><strong>First Name:</strong> {data.firstName}</p>
        <p className="text-gray-700"><strong>Last Name:</strong> {data.lastName}</p>
        <p className="text-gray-700"><strong>Email:</strong> {data.email}</p>
        <p className="text-gray-700"><strong>Address:</strong> {data.address1} {data.address2 && `, ${data.address2}`}</p>
        <p className="text-gray-700"><strong>City:</strong> {data.city}</p>
        <p className="text-gray-700"><strong>State:</strong> {data.state}</p>
        <p className="text-gray-700"><strong>Zip:</strong> {data.zip}</p>
      </div>

      <div className="flex justify-between pt-4">
        <button
          type="button"
          onClick={onPrev}
          className="px-8 py-3 bg-gray-300 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-400 transition duration-200"
        >
          Back
        </button>
        <button
          type="submit"
          className="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-200"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

// Main Form Component
export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const methods = useForm({
    mode: "onBlur",
    resolver: zodResolver(step === 1 ? step1Schema : step2Schema),
    defaultValues: JSON.parse(localStorage.getItem(FORM_KEY) || '{}') || initialValues,
  });

  const { handleSubmit, watch, trigger, formState: { errors }, setFocus, reset } = methods;

  useEffect(() => {
    const subscription = watch((values) => {
      localStorage.setItem(FORM_KEY, JSON.stringify(values));
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const handleNext = async () => {
    const isValid = await trigger();
    if (isValid) {
      setStep((prev) => Math.min(prev + 1, 3));
    } else {
      const firstErrorField = Object.keys(errors)[0];
      if (firstErrorField) {
        setFocus(firstErrorField);
      }
    }
  };

  const handlePrev = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleFinalSubmit = (data) => {
    setShowModal(true);
    localStorage.removeItem(FORM_KEY);
    console.log("Form successfully submitted:", data);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    reset(initialValues);
    setStep(1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1 onNext={handleNext} />;
      case 2:
        return <Step2 onNext={handleNext} onPrev={handlePrev} />;
      case 3:
        return <Step3 onPrev={handlePrev} />;
      default:
        return <p>Something went wrong!</p>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white shadow-xl rounded-xl p-8">
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                Step {step} of {STEPS}
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
            <div
              style={{ width: `${(step / STEPS) * 100}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500 transition-all duration-500"
            ></div>
          </div>
        </div>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(step === 3 ? handleFinalSubmit : handleNext)}>
            {renderStep()}
          </form>
        </FormProvider>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-2xl text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Success!</h2>
            <p className="text-gray-600 mb-4">Form successfully submitted.</p>
            <button
              onClick={handleCloseModal}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
