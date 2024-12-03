"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Link from "next/link"

export default function RegistrationSteps() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    companyName: "",
    registrationNumber: "",
    country: "",
    kraPin: "",
    physicalAddress: "",
    postalAddress: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCountryChange = (value: string) => {
    setFormData((prev) => ({ ...prev, country: value }))
  }

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 4))
  }

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  return (
    <div className="min-h-screen bg-background-50 py-8">
      <div className="container mx-auto max-w-3xl">
        <Card className="p-6">
          <div className="mb-8 text-center">
            <h1 className="mb-2 text-2xl font-bold">Company Registration</h1>
            <div className="mx-auto mb-8 flex max-w-2xl justify-between">
              {[1, 2, 3, 4].map((step) => (
                <div
                  key={step}
                  className="flex items-center"
                >
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full ${
                      step === currentStep
                        ? "bg-primary text-primary-foreground"
                        : step < currentStep
                        ? "bg-primary/80 text-primary-foreground"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {step}
                  </div>
                  <div
                    className={`ml-2 hidden text-sm sm:block ${
                      step === currentStep ? "text-primary" : "text-gray-500"
                    }`}
                  >
                    {step === 1 && "Registration Details"}
                    {step === 2 && "Phone Verification"}
                    {step === 3 && "Email Verification"}
                    {step === 4 && "Set Password"}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {currentStep === 1 && (
            <div className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <Input
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">
                  Registration Number <span className="text-red-500">*</span>
                </label>
                <Input
                  name="registrationNumber"
                  value={formData.registrationNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">
                  Country of Incorporation <span className="text-red-500">*</span>
                </label>
                <Select onValueChange={handleCountryChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="kenya">Kenya</SelectItem>
                    <SelectItem value="uganda">Uganda</SelectItem>
                    <SelectItem value="tanzania">Tanzania</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">KRA PIN</label>
                <Input
                  name="kraPin"
                  value={formData.kraPin}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">
                  Physical Address
                </label>
                <Input
                  name="physicalAddress"
                  value={formData.physicalAddress}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">
                  Postal Address
                </label>
                <Input
                  name="postalAddress"
                  value={formData.postalAddress}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-4">
              <div className="text-center">
                <h2 className="mb-4 text-xl font-semibold">
                  Phone Number Verification
                </h2>
                <p className="mb-4 text-gray-600">
                  Please enter your phone number to receive a verification code
                </p>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">
                  Phone Number
                </label>
                <Input
                  name="phoneNumber"
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="+254 XXX XXX XXX"
                />
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-4">
              <div className="text-center">
                <h2 className="mb-4 text-xl font-semibold">Email Verification</h2>
                <p className="mb-4 text-gray-600">
                  Please enter your email address to receive a verification code
                </p>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">
                  Email Address
                </label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="company@example.com"
                />
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-4">
              <div className="text-center">
                <h2 className="mb-4 text-xl font-semibold">Set Password</h2>
                <p className="mb-4 text-gray-600">
                  Create a secure password for your account
                </p>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Password</label>
                <Input
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">
                  Confirm Password
                </label>
                <Input
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          )}

          <div className="mt-6 flex justify-between">
            {currentStep > 1 ? (
              <Button variant="outline" onClick={handleBack}>
                Back
              </Button>
            ) : (
              <Link href="/">
                <Button variant="outline">Back to Home</Button>
              </Link>
            )}
            <div className="space-x-2">
              <Link
                href="/login"
                className="text-sm text-gray-600 hover:text-primary"
              >
                Already have an account? Log in here
              </Link>
              <Button onClick={handleNext}>
                {currentStep === 4 ? "Submit" : "Next"}
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

