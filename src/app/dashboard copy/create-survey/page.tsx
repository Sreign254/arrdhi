'use client'

import { useState } from 'react'
import { Step1BasicInfo } from '@/components/step-1-basic-info'
import { Step2AddQuestions } from '@/components/step-2-add-questions'
import { Step3Review } from '@/components/step-3-review'
import { SurveyReport, SurveyQuestion } from '@/types/survey-report'
import { Card, CardContent } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"


export default function CreateSurveyPage() {
  const [step, setStep] = useState(1)
  const [surveyReport, setSurveyReport] = useState<SurveyReport>({
    title: '',
    description: '',
    questions: [],
  })
  const { toast } = useToast()

  const handleStep1Next = (title: string, description: string) => {
    setSurveyReport((prev) => ({ ...prev, title, description }))
    setStep(2)
  }

  const handleAddQuestion = (question: SurveyQuestion) => {
    setSurveyReport((prev) => ({
      ...prev,
      questions: [...prev.questions, question],
    }))
  }

  const handleStep2Next = () => {
    setStep(3)
  }

  const handleStep3Back = () => {
    setStep(2)
  }

  const handleSubmit = () => {
    // Here you would typically send the surveyReport to your backend
    console.log('Submitting survey report:', surveyReport)
    toast({
      title: "Survey Created",
      description: "Your survey has been successfully created!",
    })
    // Reset the form
    setSurveyReport({
      title: '',
      description: '',
      questions: [],
    })
    setStep(1)
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Create New Survey</h1>
      <Card>
        <CardContent className="pt-6">
          {step === 1 && (
            <Step1BasicInfo
              title={surveyReport.title}
              description={surveyReport.description}
              onNext={handleStep1Next}
            />
          )}
          {step === 2 && (
            <Step2AddQuestions
              questions={surveyReport.questions}
              onAddQuestion={handleAddQuestion}
              onNext={handleStep2Next}
            />
          )}
          {step === 3 && (
            <Step3Review
              surveyReport={surveyReport}
              onSubmit={handleSubmit}
              onBack={handleStep3Back}
            />
          )}
        </CardContent>
      </Card>
    </div>
  )
}

