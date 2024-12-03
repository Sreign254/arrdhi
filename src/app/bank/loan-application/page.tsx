'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import PersonalInfoForm from './personal-info-form'
import LandDetailsForm from './land-details-form'
import LoanDetailsForm from './loan-details-form'
import ReviewForm from './review-form'


export default function LoanApplication() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    personalInfo: {},
    loanDetails: {},
    landDetails: {}
  })

  const updateFormData = (stepData: object, step: string) => {
    setFormData(prevData => ({
      ...prevData,
      [step]: stepData
    }))
  }

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  const renderStep = () => {
    switch(step) {
      case 1:
        return <PersonalInfoForm data={formData.personalInfo} updateData={(data) => updateFormData(data, 'personalInfo')} />
      case 2:
        return <LoanDetailsForm data={formData.loanDetails} updateData={(data) => updateFormData(data, 'loanDetails')} />
      case 3:
        return <LandDetailsForm data={formData.landDetails} updateData={(data) => updateFormData(data, 'landDetails')} />
      case 4:
        return <ReviewForm data={formData} />
      default:
        return null
    }
  }

  const handleSubmit = () => {
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    // Reset form or navigate to a success page
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Loan Application - Step {step} of 4</CardTitle>
      </CardHeader>
      <CardContent>
        {renderStep()}
      </CardContent>
      <CardFooter className="flex justify-between">
        {step > 1 && (
          <Button onClick={prevStep} variant="outline">
            Previous
          </Button>
        )}
        {step < 4 ? (
          <Button onClick={nextStep}>
            Next
          </Button>
        ) : (
          <Button onClick={handleSubmit}>
            Submit Application
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

