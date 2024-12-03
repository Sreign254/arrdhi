'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress'; // Add this component for the progress bar
import { useToast } from "@/hooks/use-toast"

import { Toaster } from "@/components/ui/toaster";
export function SellLandForm() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ['Seller Information', 'Plot Details', 'Price Details', 'Review & Submit'];

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1);
      toast({ title: `Step ${activeStep + 2}: ${steps[activeStep + 1]}` });
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prev) => prev - 1);
      toast({ title: `Back to Step ${activeStep}: ${steps[activeStep - 1]}` });
    }
  };

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="sellerName">Full Name</Label>
              <Input id="sellerName" placeholder="Enter your full name" required />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="sellerPhone">Phone Number</Label>
              <Input id="sellerPhone" placeholder="Enter your phone number" type="tel" required />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="sellerID">ID Number</Label>
              <Input id="sellerID" placeholder="Enter your ID number" required />
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
              <Label htmlFor="plotLocation">Plot Location</Label>
              <Input id="plotLocation" placeholder="Enter the location of the plot" required />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="plotSize">Plot Size</Label>
              <Input id="plotSize" placeholder="Enter the size of the plot" required />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="plotID">Plot Identification Number</Label>
              <Input id="plotID" placeholder="Enter the plot ID number" required />
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="price">Selling Price</Label>
              <Input id="price" placeholder="Enter the price for the plot" type="number" required />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="negotiable">Negotiable (Yes/No)</Label>
              <Input id="negotiable" placeholder="Is the price negotiable?" required />
            </div>
          </>
        );
      case 3:
        return (
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-4">Review Your Information</h2>
            <p>Please review all the details you've entered before submitting the form.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Card className="max-w-lg mx-auto p-4">
        <CardHeader>
          <CardTitle>Sell Land</CardTitle>
          <CardDescription>Fill out the form to list your land for sale.</CardDescription>
        </CardHeader>
        <Progress value={((activeStep + 1) / steps.length) * 100} className="mb-4" />
        <CardContent>
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
            {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
          </Button>
        </CardFooter>
      </Card>
      <Toaster />
    </>
  );
}
