import { StripeProvider } from "../providers/stripeProvider";

export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-start py-32 px-16 bg-black sm:items-start">
        <StripeProvider>{children}</StripeProvider>
      </main>
    </div>
  );
}
