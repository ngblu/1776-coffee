import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex-1 flex items-center justify-center bg-cream">
      <div className="text-center px-6 py-24">
        <h1 className="font-serif text-8xl text-amber/20 font-bold select-none">
          404
        </h1>
        <h2 className="font-serif text-3xl font-bold text-espresso mt-4 mb-4">
          Page Not Found
        </h2>
        <p className="text-espresso/50 text-lg mb-8 max-w-md mx-auto">
          Looks like this page has gone cold. Let us brew you a fresh start.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-8 py-3 bg-amber text-espresso font-semibold rounded-full hover:bg-amber/90 transition-colors shadow-lg shadow-amber/20"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
