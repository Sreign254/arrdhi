'use client';

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast"

import { Toaster } from "@/components/ui/toaster";

export function BuyLandForm() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ["User Information", "Buyer Information", "Plot Details", "Review & Submit"];
  const progressPercentage = (activeStep / (steps.length - 1)) * 100;

  const { toast } = useToast();

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1);
    } else {
      toast({
        title: "Form Submitted",
        description: "Your land purchase form has been successfully submitted.",
      });
    }
  };

  const handleBack = () => {
    if (activeStep > 0) setActiveStep((prev) => prev - 1);
  };

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="userName">Full Name</Label>
              <Input id="userName" placeholder="Enter your full name" required />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input id="phoneNumber" placeholder="Enter your phone number" type="tel" required />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="idNumber">ID Number</Label>
              <Input id="idNumber" placeholder="Enter your ID number" required />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" placeholder="Enter your email address" type="email" required />
            </div>
          </>
        );
      case 1:
        return (
          <>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="buyerPhone">Buyer Phone Number</Label>
              <Input id="buyerPhone" placeholder="Enter buyer's phone number" type="tel" required />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="buyerEmail">Buyer Email</Label>
              <Input id="buyerEmail" placeholder="Enter buyer's email address" type="email" required />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="buyerID">Buyer ID Number</Label>
              <Input id="buyerID" placeholder="Enter buyer's ID number" required />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="bankDetails">Bank Details</Label>
              <Input id="bankDetails" placeholder="Enter bank account details" required />
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="plotLocation">Plot Location</Label>
              <Input id="plotLocation" placeholder="Enter the location of the plot" required />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="plotID">Plot Identification Number</Label>
              <Input id="plotID" placeholder="Enter the plot ID number" required />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="plotSize">Plot Size</Label>
              <Input id="plotSize" placeholder="Enter the size of the plot" required />
            </div>
          </>
        );
      case 3:
        return (
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-4">Review Your Information</h2>
            <p>Please review the information you have entered before submitting.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Card className="max-w-lg mx-auto p-4">
      <CardHeader>
        <CardTitle>Buy Land</CardTitle>
        <CardDescription>Complete the form to purchase land.</CardDescription>
      </CardHeader>
      <CardContent>
        <Progress value={progressPercentage} className="mb-4" />
        <form>
          <div className="grid w-full gap-4">
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold">{steps[activeStep]}</h3>
              {renderStepContent(activeStep)}
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          disabled={activeStep === 0}
          variant="outline"
          onClick={handleBack}
        >
          Back
        </Button>
        <Button onClick={handleNext}>
          {activeStep === steps.length - 1 ? "Submit" : "Next"}
        </Button>
      </CardFooter>
      <Toaster />
    </Card>
  );
}
