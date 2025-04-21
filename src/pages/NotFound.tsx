import { ArrowBigLeft } from "lucide-react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col gap-5 mt-20 items-center justify-center h-[90%]">
      <h2 className="text-9xl font-extrabold">404</h2>
      <p className="text-2xl font-bold">This page is not found</p>
      <Link
        className="flex gap-1 bg-primary-cyan text-white p-2 rounded-lg"
        to="/"
      >
        Back Home <ArrowBigLeft />
      </Link>
    </div>
  );
}

export default NotFound;
