// src/pages/FormPage.jsx
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import MultiStepForm from "../components/form/MultiStepForm";
import { formSchema } from "../schemas/formSchema";
import useFormPersist from "../hooks/useFormPersist";

export default function FormPage() {
  const methods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      city: "",
      zip: "",
    },
    mode: "onBlur",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Persist form data in localStorage
  useFormPersist("multiStepFormData", methods.watch, methods.setValue);

  const onSubmit = (data) => {
    console.log("✅ Form Submitted Successfully", data);
    localStorage.removeItem("multiStepFormData");
    setIsSubmitted(true);
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Multi-Step Form</h1>

      {isSubmitted ? (
        <div className="p-4 bg-green-100 text-green-700 rounded">
          🎉 Thank you! Your data has been submitted successfully.
        </div>
      ) : (
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <MultiStepForm />
          </form>
        </FormProvider>
      )}
    </div>
  );
}
