import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-start py-32 px-16 bg-black sm:items-start">
        <h1 className="text-5xl font-extrabold text-amber-300 w-full text-center sm:text-6xl">Stripe Payment</h1>
        <div className="w-full flex justify-center pt-14">
          <Link href="/checkout" className="cursor-pointer text-2xl text-amber-500 hover:text-amber-100">Checkout</Link>
        </div>
      </main>
    </div>
  );
}
