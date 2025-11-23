import { Checkout } from "@/components/Checkout/Checkout";
export default function CheckoutPage() {
  return (
    <div className="w-full">
        <h1 className="text-5xl font-extrabold text-amber-300 sm:text-6xl w-full text-center mb-10">
          Checkout
        </h1>        
        <Checkout />        
    </div>
  );
}