import { LoaderCircle } from "lucide-react";

function Loading() {
  return (
    <div
      className="h-screen bg-white fixed flex items-center justify-center inset-0 z-40"
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <div>
        <LoaderCircle
          className="loading text-primary-cyan"
          size={100}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

export default Loading;
