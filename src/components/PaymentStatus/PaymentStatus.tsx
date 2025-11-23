'use client';

import { useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";

type Props = {
    clientSecret: string;
};

const PaymentStatus = ({ clientSecret }: Props) => {

  const [message, setMessage] = useState<string | null>(null);

  const stripe = useStripe();


  useEffect(() => {
    if (!stripe) {
      return;
    }

    const checkPaymentStatus = async () => {
      const { paymentIntent } = await stripe.retrievePaymentIntent(clientSecret);

      switch (paymentIntent?.status) {
        case "succeeded":
          console.log("Success! Payment received.");
          setMessage("Success! Payment received.");
          break;
        case "processing":
          console.log("Payment is processing.");
          setMessage("Payment is processing.");
          break;
        case "requires_payment_method":
          console.log("Payment failed. Please try another payment method.");
          setMessage("Payment failed. Please try another payment method.");
          break;
        default:
          console.log("Something went wrong.");
            setMessage("Something went wrong.");
          break;
      }
    };

    checkPaymentStatus();
  }, [stripe, clientSecret]);
  

  return (
    <div className="text-emerald-600 font-bold text-3xl flex justify-center items-center">
        <div>
            {message ? message : "Loading payment status..."}
        </div>
        
    </div>
  );
}

export default PaymentStatus;