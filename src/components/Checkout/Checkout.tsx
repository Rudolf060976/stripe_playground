'use client';

import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React from "react";

export const Checkout = () => {

  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  const stripe = useStripe();
  const elements = useElements();

  const handleOnSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: 'http://localhost:3001/checkout/success',
      },
    });

    if (error) {
      setErrorMessage(error.message || "An unexpected error occurred.");
    } else {
      setErrorMessage(null);
    }
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <PaymentElement />
      <div className="flex justify-center items-center pt-8">
        <button disabled={!stripe || !elements} type="submit" className="cursor-pointer mt-4 px-6 py-2 w-28 bg-amber-500 text-black font-semibold rounded-md hover:bg-amber-200 disabled:opacity-50 disabled:cursor-not-allowed">Pay</button>
      </div>
      
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
}
