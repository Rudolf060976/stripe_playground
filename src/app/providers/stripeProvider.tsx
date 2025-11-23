'use client';

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import React, { useEffect } from "react";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

export const StripeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [clientSecret, setClientSecret] = React.useState<string | undefined>(undefined);

  useEffect(() => {
    
    const serverCheckout = async () => {
      try {
        const response = await fetch('http://localhost:3000/stripe/checkout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        const data = await response.json();
        
        setClientSecret(data.clientSecret);
      } catch (error) {
        console.error("Error creating payment intent:", error);
      }
    };

    serverCheckout();

  }, [])
  


  const elementsOptions: StripeElementsOptions = {
    clientSecret,
    appearance: {
      theme: 'stripe',
    }
  }

  if (!clientSecret) {
    return <div>Loading...</div>;
  }

  return (   
        <Elements stripe={stripePromise} options={elementsOptions}>
            {children}
        </Elements>    
    
  );
}