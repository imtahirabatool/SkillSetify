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
    <section
  className="w-full px-4 py-8"
  style={{
    backgroundColor: "#21201d",
    paddingBottom: "100px",
    borderTop: "1px solid white",
  }}
>
  <Typography
    variant="h4"
    className="mb-5 text-center font-bold text-[#eef0f0]"
  >
    Choose Your Plan
  </Typography>
  <br />
  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mx-auto max-w-7xl px-4">
    {/* Basic Plan */}
    <Card
      className="bg-[#0d3328] text-white shadow-lg text-center"
      style={{
        backgroundImage:
          "url('https://cinepacks.store/cdn/shop/products/smoke_1600x.gif?v=1636659269')",
      }}
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
          style={{ backgroundColor: "#257860", color: "white" }}
        >
          Get Started
        </Button>
      </CardContent>
    </Card>

    {/* Pro Plan */}
    <Card
      className="bg-[#0d3328] text-white text-center shadow-lg"
      style={{
        backgroundImage:
          "url('https://cinepacks.store/cdn/shop/products/smoke_1600x.gif?v=1636659269')",
      }}
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
          style={{ backgroundColor: "#257860", color: "white" }}
        >
          Upgrade to Pro
        </Button>
      </CardContent>
    </Card>
  </div>
</section>
  );
};