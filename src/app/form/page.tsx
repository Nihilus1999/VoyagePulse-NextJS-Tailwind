"use client";

import { useRouter } from "next/navigation";
import Step1VisitorInfo from "./components/step1VisitorInfo";
import Step2Experience from "./components/step2Experience";
import Step3Satisfaction from "./components/step3Satisfaction";
import {routes } from "@/routes/routes";

export default function FormPage({
  step,
  setStep,
}: {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}) {
  const router = useRouter();

  const handleNextStep = () => setStep((prev) => prev + 1);
  const handlePrevStep = () => setStep((prev) => Math.max(1, prev - 1));

  const handleFinalSubmit = (data: any) => {
    console.log("Datos finales del formulario:", data);
    router.push(routes.thank_you.path);
  };

  return (
    <>
      {step === 1 && <Step1VisitorInfo onNext={handleNextStep} />}
      {step === 2 && (
        <Step2Experience onNext={handleNextStep} onBack={handlePrevStep} />
      )}
      {step === 3 && (
        <Step3Satisfaction
          onSubmitFinal={handleFinalSubmit}
          onBack={handlePrevStep}
        />
      )}
    </>
  );
}
