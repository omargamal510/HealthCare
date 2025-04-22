import { ArrowBigLeft } from "lucide-react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      className="flex flex-col gap-5 mt-20 items-center justify-center h-[90%]"
      role="alert"
      aria-label="Page not found"
    >
      <h2 className="text-9xl font-extrabold">404</h2>
      <p className="text-2xl font-bold">This page is not found</p>
      <Link
        className="flex gap-1 bg-primary-cyan text-white p-2 rounded-lg"
        to="/"
        aria-label="Return to home page"
      >
        Back Home <ArrowBigLeft aria-hidden="true" />
      </Link>
    </div>
  );
}

export default NotFound;
