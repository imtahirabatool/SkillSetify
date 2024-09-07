"use client";

import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function PricingSection(){
  const { isSignedIn } = useUser();
  const router = useRouter();

  const handleSubmit = () => {
    if (isSignedIn) {
      router.push("/dashboard");
    } else {
      router.push("/sign-in");
    }
  };

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-8"
    style={{ backgroundColor: "#caebe1",
     }}>
      <Typography variant="h4" className="mb-5 text-center font-bold text-[#257860]">
        Choose Your Plan
      </Typography>
      <br />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Basic Plan */}
        <Card
          className="bg-[#257860] text-white shadow-lg text-center"
        >
          <CardContent>
            <Typography variant="h5" component="div" gutterBottom>
              Basic
            </Typography>
            <Typography variant="h6" className="my-4">
              Free
            </Typography>
            <ul className="list-none p-0 text-center mb-4">
              <li className="mb-2">Limited AI Integration</li>
              <li className="mb-2">Limited Data Storage</li>

            </ul>
            <Button
              variant="contained"
              color="primary"
              className="mt-4"
              onClick={handleSubmit}
              style={{ backgroundColor: "#caebe1",
                color: "#257860" }}
            >
              Get Started
            </Button>
          </CardContent>
        </Card>

        {/* Pro Plan */}
        <Card
          
          className="bg-[#257860] text-white text-center shadow-lg"
        >
          <CardContent>
            <Typography variant="h5" component="div" gutterBottom>
              Pro
            </Typography>
            <Typography variant="h6" className="my-4">
              $1.00/month
            </Typography>
            <ul className="list-none p-0 text-center mb-4">
              <li className="mb-2">Unlimited AI Integration</li>
              <li className="mb-2">Priority Support</li>
            </ul>
            <Button
              variant="contained"
              color="secondary"
              className="mt-4"
              onClick={handleSubmit}
              style={{ backgroundColor: "#caebe1",
              color: "#257860" }}
            >
              Upgrade to Pro
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};