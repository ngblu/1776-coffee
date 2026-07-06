import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex-1 flex items-center justify-center bg-deep">
      <div className="text-center px-6 py-24">
        <h1 className="text-blue/20 font-serif text-8xl font-bold select-none">
          404
        </h1>
        <h2 className="font-serif text-3xl font-bold text-white mt-4 mb-4">
          Page Not Found
        </h2>
        <p className="text-white/50 text-lg mb-8 max-w-md mx-auto">
          Looks like this page has gone cold. Let us brew you a fresh start.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-8 py-3 bg-blue text-white font-semibold rounded-full hover:bg-blue-dark transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
