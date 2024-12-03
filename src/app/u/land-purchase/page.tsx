"use client";

import React, { useState } from "react";
import { TextField, Button, Box, Stepper, Step, StepLabel } from "@mui/material";

const steps = ["Land Details", "Buyer & Seller Details", "Customer Details"];

export default function LandPurchasePage() {
  const [formData, setFormData] = useState({
    propertyName: "",
    location: "",
    price: "",
    size: "",
    landId: "",
    buyerId: "",
    sellerId: "",
    customerName: "",
    customerDetails: "",
  });

  const [activeStep, setActiveStep] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1);
    } else {
      console.log("Form Submitted:", formData);
      alert("Land purchase details submitted successfully!");
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <div >
            <TextField
              label="Property Name"
              name="propertyName"
              value={formData.propertyName}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
            <TextField
              label="Location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
            <TextField
              label="Price (Ksh)"
              name="price"
              type="number"
              value={formData.price}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
            <TextField
              label="Size (Acres)"
              name="size"
              type="number"
              value={formData.size}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
            <TextField
              label="Land Identification Number"
              name="landId"
              value={formData.landId}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
        );
      case 1:
        return (
          <div>
            <TextField
              label="Buyer ID"
              name="buyerId"
              value={formData.buyerId}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
            <TextField
              label="Seller ID"
              name="sellerId"
              value={formData.sellerId}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
        );
      case 2:
        return (
          <div>
            <TextField
              label="Customer Name"
              name="customerName"
              value={formData.customerName}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
            <TextField
              label="Customer Details"
              name="customerDetails"
              value={formData.customerDetails}
              onChange={handleInputChange}
              multiline
              rows={4}
              fullWidth
              margin="normal"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Box className="max-w-3xl mx-auto p-6  shadow rounded-lg"
    style={{ backgroundColor: 'var(--land)' }} 
    >
      <h1 className="text-center mb-6 text-xl text-white font-bold">Land Purchase</h1>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel style={{
              color:'var(--text)'
            }} >{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box className="mt-8">
        {renderStepContent(activeStep)}
        <Box className="flex justify-between mt-8">
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            variant="outlined"
          >
            Back
          </Button>
          <Button onClick={handleNext} variant="contained" color="primary">
            {activeStep === steps.length - 1 ? "Submit" : "Next"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
