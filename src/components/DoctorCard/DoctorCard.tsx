import {
  BriefcaseMedical,
  Check,
  ChevronLeft,
  ChevronRight,
  Map,
  X,
} from "lucide-react";
import {
  DoctorCardProp,
  doctorSlot,
  doctorTypes,
} from "../../types/doctors-types.ts";
import { useState } from "react";
import {
  defineTodayTomorrow,
  isDeprecatedDate,
} from "../../utils/dateFormatter.ts";
import { usePopup } from "../../store/PopupContext.tsx";

const iconWidth: number = 20;

function DoctorCard({ doctor, setDoctorBookingData }: DoctorCardProp) {
  const {
    name,
    description,
    rating,
    specialty,
    image,
    available,
    location,
    availableSlots,
  } = doctor as doctorTypes;

  const [dateSlice, setDateSlice] = useState<number>(3);
  const [dateSliceStart, setDateSliceStart] = useState<number>(0);

  const { setIsPopupOpen } = usePopup();

  const filteredAvailSlots: doctorSlot[] = availableSlots.filter(
    (e) => !isDeprecatedDate(e.date)
  );

  function dateSliceIncrease(): void {
    if (filteredAvailSlots.length > dateSlice) {
      setDateSlice((p) => p + 3);
      setDateSliceStart((p) => p + 3);
    }
  }

  function dateSliceDecrease(): void {
    if (dateSliceStart <= 0) {
      return;
    }
    setDateSlice((prev) => prev - 3);
    setDateSliceStart((prev) => prev - 3);
  }

  function handleBooking(): void {
    setDoctorBookingData(doctor);
    setIsPopupOpen(true);
  }

  return (
    <div
      className="min-h-[450px] hover:translate-y-2 transition-all duration-300 linear flex gap-5 shadow-2xl rounded-lg flex-col justify-center items-center p-5 bg-white"
      role="region"
      aria-label={`Doctor profile for ${name}`}
    >
      <div className="flex flex-col w-full items-center text-center h-full gap-5">
        <img
          className="rounded-full w-20 border-primary-cyan border"
          src={image}
          alt={`Profile of Dr. ${name}`}
        />

        <div className="card-desc w-full flex items-center flex-col gap-2">
          <section className="flex flex-col w-[80%] items-center gap-1 pb-3 mb-3 border-b-1 border-primary-gray">
            <h3 className="text-primary-cyan font-bold flex items-center gap-1 text-2xl">
              <span>{name}</span>
            </h3>

            <h4 className="text-lg">{description}</h4>

            <p className="flex font-semibold items-center justify-center gap-1">
              <img
                src="star.png"
                alt="Rating star"
                className="w-5"
                aria-hidden="true"
              />
              <span>{rating}</span>
            </p>
          </section>

          <p className="flex flex-col justify-center items-center">
            {available ? (
              <span className="flex gap-1">
                <Check
                  className="text-primary-cyan"
                  width={iconWidth}
                  aria-hidden="true"
                />
                Available
              </span>
            ) : (
              <span className="flex gap-1">
                <X
                  className="text-red-600"
                  width={iconWidth}
                  aria-hidden="true"
                />
                Not Available
              </span>
            )}

            <div
              className={`${available ? "flex" : "hidden"} gap-1`}
              role="navigation"
              aria-label="Available dates navigation"
            >
              <button
                onClick={() => dateSliceDecrease()}
                disabled={dateSliceStart <= 0}
                aria-label="Previous dates"
              >
                <ChevronLeft aria-hidden="true" />
              </button>
              {filteredAvailSlots.slice(dateSliceStart, dateSlice).map((e) => (
                <span
                  key={`${e.date}-${e.time}`}
                  className="bg-primary-cyan p-1 rounded-lg text-sm text-white"
                >
                  {defineTodayTomorrow(e.date)}
                </span>
              ))}
              <button
                onClick={() => dateSliceIncrease()}
                disabled={filteredAvailSlots.length <= dateSlice}
                aria-label="Next dates"
              >
                <ChevronRight aria-hidden="true" />
              </button>
            </div>
          </p>

          <p className="flex gap-1">
            <span>
              <BriefcaseMedical
                className="text-primary-cyan"
                width={iconWidth}
                aria-hidden="true"
              />
            </span>
            <span>{specialty}</span>
          </p>

          <p className="flex gap-1">
            <span>
              <Map
                width={iconWidth}
                className="text-primary-cyan"
                aria-hidden="true"
              />
            </span>
            <span>{location}</span>
          </p>
        </div>
      </div>

      <div className="w-full flex items-center justify-center">
        <button
          disabled={!available}
          onClick={() => handleBooking()}
          className={`${
            !available ? "opacity-40 cursor-none" : "cursor-pointer"
          } rounded-sm bg-primary-cyan p-2 text-white`}
          aria-disabled={!available}
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
}

export default DoctorCard;
