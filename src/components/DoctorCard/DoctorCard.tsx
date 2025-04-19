import { BriefcaseMedical, Check, Map, X } from "lucide-react";
import { DoctorCardProp } from "../../types/doctors-types.ts";

const iconWidth: number = 20;

function DoctorCard({ doctor }: DoctorCardProp) {
  const {
    name,
    description,
    specialty,
    image,
    available,
    location,
    // availableSlots,
  } = doctor;

  return (
    <div className=" flex gap-5 shadow-2xl rounded-lg flex-col p-5 bg-white">
      <div className="flex flex-col items-center text-center  h-full gap-5">
        <img
          className="rounded-full w-20 border-primary-cyan border"
          src={image}
        />

        <div className="card-desc w-full flex items-center flex-col gap-2">
          <section className="flex flex-col w-[80%] items-center gap-1 pb-3 mb-3  border-b-1 border-primary-gray">
            <h3 className="text-primary-cyan  font-bold flex items-center gap-1 text-2xl">
              {/* <span>Dr</span> */}
              <span>{name}</span>
            </h3>

            <h4 className="text-lg ">{description}</h4>
          </section>

          <p className="flex gap-1">
            <span>
              <BriefcaseMedical
                className="text-primary-cyan "
                width={iconWidth}
              />
            </span>
            <span>{specialty}</span>
          </p>
          <p className="">
            {available ? (
              <span className="flex gap-1">
                <Check className="text-primary-cyan" width={iconWidth} />{" "}
                Available
              </span>
            ) : (
              <span className="flex gap-1">
                <X className="text-red-600" width={iconWidth} /> Not Available
              </span>
            )}
          </p>
          <p className="flex gap-1">
            <span>
              <Map width={iconWidth} className="text-primary-cyan" />
            </span>
            <span>{location}</span>
          </p>
        </div>
      </div>

      <div className="w-full flex items-center justify-center">
        <button
          className="rounded-sm
         bg-primary-cyan p-2 text-white cursor-pointer"
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
}

export default DoctorCard;
