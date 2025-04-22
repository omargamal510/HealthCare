import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center overflow-hidden justify-between gap-5 h-[70vh]">
      <div className="w-full text-center items-center flex flex-col gap-5">
        <h2 className="text-3xl font-bold">
          Providing Quality{" "}
          <span className="text-primary-cyan">Healthcare</span> for a <br />
          <span className="text-primary-cyan">Brighter </span>
          and <span className="text-primary-cyan">Healthy</span> Future
        </h2>
        <p>
          At our hospital, we are dedicated to providing exceptional medical
          care to our patients and their families. <br /> Our experienced team
          of medical professionals, <br /> cutting-edge technology, and
          compassionate approach make us a leader in the healthcare industry
        </p>

        <Link
          to="/doctors"
          className="bg-primary-cyan flex items-center justify-center gap-2 p-2 rounded-lg text-white w-fit"
        >
          <Calendar />
          <span> Book your appointments</span>
        </Link>
      </div>
      <div className="">
        <img src="/doctor.png" alt="doctor" className="w-[400px]" />
      </div>
    </div>
  );
}

export default Home;
