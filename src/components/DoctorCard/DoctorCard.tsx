import { BriefcaseMedical, Map, X } from "lucide-react";

const iconWidth: number = 20;

function DoctorCard() {
  return (
    <div className=" flex gap-5 mt-10 shadow-2xl rounded-lg flex-col p-5 bg-white">
      <div className="flex flex-col items-center text-center  h-full gap-5">
        <img
          className="rounded-full w-20 border-primary-cyan border"
          src="/vite.svg"
        />

        <div className="card-desc w-full flex items-center flex-col gap-2">
          <section className="flex flex-col w-[80%] items-center gap-1 pb-3 mb-3  border-b-1 border-primary-gray">
            <h3 className="text-primary-cyan  font-bold flex items-center gap-1 text-2xl">
              <span>Dr</span>
              <span>Omar Gamal</span>
            </h3>

            <h4 className="text-lg ">Heart health expert.</h4>
          </section>

          <p className="flex gap-1">
            <span>
              <BriefcaseMedical
                className="text-primary-cyan "
                width={iconWidth}
              />
            </span>
            <span>Dentist</span>
          </p>
          <p className="flex gap-1">
            <X className="text-primary-cyan" width={iconWidth} /> Available
          </p>
          <p className="flex gap-1">
            <span>
              <Map width={iconWidth} className="text-primary-cyan" />
            </span>
            <span>Haram Giza</span>
          </p>
        </div>
      </div>

      <div className="w-full flex items-center justify-center">
        <button
          className="rounded-sm
         bg-primary-cyan p-2 text-white cursor-pointer"
        >
          Book Appointment - {"22 Apr 2025 (03:00 PM - 08:00 PM)"}
        </button>
      </div>
    </div>
  );
}

export default DoctorCard;
