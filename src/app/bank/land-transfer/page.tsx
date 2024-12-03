'use client'

import { useState } from "react"
import { StepHeader } from "./step-header"
import { PartyDetailsForm } from "./party-details-form"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { LandTransferForm, PartyDetails } from "@/types/land-transfer"
import Image from "next/image"

const STEPS = [
  "Seller Details",
  "Buyer Details",
  "Land Details",
  "Officials",
  "Review"
]

const initialPartyDetails: PartyDetails = {
  name: "",
  idNumber: "",
  address: "",
  telephone: "",
  witnesses: [{ name: "", id: "" }]
}

export default function LandTransferFormPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<LandTransferForm>({
    seller: initialPartyDetails,
    buyer: initialPartyDetails,
    landDescription: "",
    priceInFigures: 0,
    priceInWords: "",
    acknowledgement: false,
    officials: {
      villageElder: { name: "", idNumber: "" },
      assistantChief: { name: "" },
      chief: { name: "" }
    }
  })

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <div className="min-h-screen bg-muted/10 p-4 md:p-8">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="text-center">
          <Image
            src="/placeholder.svg?height=100&width=100"
            alt="Republic of Kenya Coat of Arms"
            width={100}
            height={100}
            className="mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold">REPUBLIC OF KENYA</h1>
          <h2 className="text-xl">LAND SALE AGREEMENT</h2>
        </div>

        <StepHeader currentStep={currentStep} steps={STEPS} />

        <form onSubmit={handleSubmit} className="space-y-6">
          {currentStep === 0 && (
            <PartyDetailsForm
              type="seller"
              value={formData.seller}
              onChange={(seller) => setFormData({ ...formData, seller })}
            />
          )}

          {currentStep === 1 && (
            <PartyDetailsForm
              type="buyer"
              value={formData.buyer}
              onChange={(buyer) => setFormData({ ...formData, buyer })}
            />
          )}

          {currentStep === 2 && (
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="land-description">Description of Land</Label>
                    <Input
                      id="land-description"
                      value={formData.landDescription}
                      onChange={(e) =>
                        setFormData({ ...formData, landDescription: e.target.value })
                      }
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="price-figures">Price (in figures)</Label>
                    <Input
                      id="price-figures"
                      type="number"
                      value={formData.priceInFigures}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          priceInFigures: parseInt(e.target.value)
                        })
                      }
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="price-words">Price (in words)</Label>
                    <Input
                      id="price-words"
                      value={formData.priceInWords}
                      onChange={(e) =>
                        setFormData({ ...formData, priceInWords: e.target.value })
                      }
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {currentStep === 3 && (
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="grid gap-4">
                  <div className="space-y-4">
                    <h3 className="font-semibold">Village Elder</h3>
                    <div className="grid gap-2">
                      <Label htmlFor="village-elder-name">Name</Label>
                      <Input
                        id="village-elder-name"
                        value={formData.officials.villageElder.name}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            officials: {
                              ...formData.officials,
                              villageElder: {
                                ...formData.officials.villageElder,
                                name: e.target.value
                              }
                            }
                          })
                        }
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="village-elder-id">ID Number</Label>
                      <Input
                        id="village-elder-id"
                        value={formData.officials.villageElder.idNumber}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            officials: {
                              ...formData.officials,
                              villageElder: {
                                ...formData.officials.villageElder,
                                idNumber: e.target.value
                              }
                            }
                          })
                        }
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-semibold">Assistant Chief</h3>
                    <div className="grid gap-2">
                      <Label htmlFor="assistant-chief-name">Name</Label>
                      <Input
                        id="assistant-chief-name"
                        value={formData.officials.assistantChief.name}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            officials: {
                              ...formData.officials,
                              assistantChief: { name: e.target.value }
                            }
                          })
                        }
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-semibold">Chief</h3>
                    <div className="grid gap-2">
                      <Label htmlFor="chief-name">Name</Label>
                      <Input
                        id="chief-name"
                        value={formData.officials.chief.name}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            officials: {
                              ...formData.officials,
                              chief: { name: e.target.value }
                            }
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {currentStep === 4 && (
            <Card>
              <CardContent className="p-6 space-y-6">
                <h3 className="text-lg font-semibold">Review and Confirm</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="acknowledgement"
                      checked={formData.acknowledgement}
                      onCheckedChange={(checked) =>
                        setFormData({
                          ...formData,
                          acknowledgement: checked as boolean
                        })
                      }
                    />
                    <Label htmlFor="acknowledgement" className="text-sm">
                      I acknowledge that all the information provided is true and accurate. I understand that
                      subdivision and transfer is mandatory, and any party in breach of this agreement will
                      pay the aggrieved party the value of the foresaid property at the existing price plus
                      a penalty of 25% of the principal amount.
                    </Label>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="flex justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={handleBack}
              disabled={currentStep === 0}
            >
              Back
            </Button>
            {currentStep === STEPS.length - 1 ? (
              <Button type="submit" disabled={!formData.acknowledgement}>
                Submit
              </Button>
            ) : (
              <Button type="button" onClick={handleNext}>
                Next
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

