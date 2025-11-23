import PaymentStatus from "@/components/PaymentStatus/PaymentStatus";
import { PageContext } from "@/types/pageContext";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = PageContext<unknown, {
  payment_intent: string;
  payment_intent_client_secret: string;
}>;

export default async function SuccessPage({ searchParams }: PageProps) {

 const { payment_intent, payment_intent_client_secret } = await searchParams;

 if (!payment_intent && !payment_intent_client_secret) {
    notFound();
 }

  return (
    <div>
        <h1 className="text-5xl font-extrabold text-amber-300 sm:text-6xl mb-8">
          Success Page
        </h1>
        <PaymentStatus clientSecret={payment_intent_client_secret} />
        <div className="w-full flex justify-center pt-14">
          <Link href="/" className="cursor-pointer text-2xl text-amber-500 hover:text-amber-100">Pay again</Link>
        </div>
    </div>
  );
}