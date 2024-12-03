'use client'

import { useState } from "react"
import { Progress } from "@/components/ui/progress"
import { PhoneVerificationForm } from "./phone-verification-form"
import { PasswordSetupForm } from "./password-setup-form"
import { IDVerificationForm } from "./id-verification-form"
import { EmailVerificationForm } from "./email-verification-form"


const steps = [
  { id: 1, name: "ID verification" },
  { id: 2, name: "Phone number verification" },
  { id: 3, name: "Email verification" },
  { id: 4, name: "Set your Password" },
]

export default function RegisterPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const progress = (currentStep / steps.length) * 100

  return (
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[450px]">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
        <p className="text-sm text-muted-foreground">
          Follow the steps below to create your account
        </p>
      </div>
      
      <Progress value={progress} className="w-full" />
      
      <div className="flex justify-center space-x-2">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`flex h-8 w-8 items-center justify-center rounded-full border ${
              currentStep >= step.id ? 'bg-primary text-primary-foreground' : 'border-gray-300'
            }`}
          >
            {step.id}
          </div>
        ))}
      </div>

      <div className="mt-8">
        {currentStep === 1 && (
          <IDVerificationForm onNext={() => setCurrentStep(2)} />
        )}
        {currentStep === 2 && (
          <PhoneVerificationForm 
            onNext={() => setCurrentStep(3)}
            onBack={() => setCurrentStep(1)}
          />
        )}
        {currentStep === 3 && (
          <EmailVerificationForm
            onNext={() => setCurrentStep(4)}
            onBack={() => setCurrentStep(2)}
          />
        )}
        {currentStep === 4 && (
          <PasswordSetupForm
            onBack={() => setCurrentStep(3)}
          />
        )}
      </div>
    </div>
  )
}

