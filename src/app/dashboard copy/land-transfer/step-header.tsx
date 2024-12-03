import { Check } from 'lucide-react'

interface StepHeaderProps {
  currentStep: number;
  steps: string[];
}

export function StepHeader({ currentStep, steps }: StepHeaderProps) {
  return (
    <div className="w-full py-4">
      <div className="mx-auto max-w-3xl">
        <div className="relative">
          {/* Progress bar */}
          <div className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-muted">
            <div
              className="h-full bg-primary transition-all duration-500"
              style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
            />
          </div>
          {/* Steps */}
          <div className="relative flex justify-between">
            {steps.map((step, index) => (
              <div key={step} className="flex flex-col items-center">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full border-2 ${
                    index <= currentStep
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-muted bg-background"
                  }`}
                >
                  {index < currentStep ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>
                <span className="mt-2 text-sm">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

