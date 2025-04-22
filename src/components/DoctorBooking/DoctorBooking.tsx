import {
  DoctorBookingProps,
  doctorSlot,
  doctorTypes,
} from "../../types/doctors-types.ts";
import PopupDiv from "../../ui/PopupDiv.tsx";
import { BriefcaseMedical, Calendar, Map, Minus, Pencil } from "lucide-react";
import {
  defineTodayTomorrow,
  isDeprecatedDate,
} from "../../utils/dateFormatter.ts";
import { useEffect, useState } from "react";
import { usePopup } from "../../store/PopupContext.tsx";
import { toast, ToastContainer } from "react-toastify";

function DoctorBooking({ doctorBookingData }: DoctorBookingProps) {
  const { name, description, specialty, image, location, availableSlots } =
    doctorBookingData as doctorTypes;

  const [choosenDate, setChoosenDate] = useState<string>("");
  const [choosenTime, setChoosenTime] = useState<string>("");
  const [choosenIndex, setChoosenIndex] = useState<number>(0);

  const { isPopupOpen, setIsPopupOpen } = usePopup();

  const datesFiltered: doctorSlot[] = availableSlots?.filter(
    (e) => !isDeprecatedDate(e.date)
  );

  const bookedAppointments: any = ["Street", "ssss"];
  const notify = () => toast("Successful booked");

  function booking() {
    const newBooking = {
      name,
      specialty,
      location,
      date: choosenDate,
      time: choosenTime,
    };

    const existingAppointments = JSON.parse(
      localStorage.getItem("appointments") || "[]"
    );
    existingAppointments.push(newBooking);

    localStorage.setItem("appointments", JSON.stringify(existingAppointments));
    setIsPopupOpen(false);

    notify();
  }

  useEffect(() => {
    if (!isPopupOpen) {
      setChoosenDate("");
      setChoosenTime("");
    }
  }, [isPopupOpen]);

  return (
    <>
      <PopupDiv title={"Book Appointment"} icon={<Pencil />}>
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-white w-[95%] md:w-[50%] px-20 shadow-2xl rounded-lg flex ga items-center flex-col py-10"
          role="dialog"
          aria-labelledby="popup-title"
        >
          <div className="flex flex-col items-center">
            <img
              alt={`Profile of Dr. ${name}`}
              src={image}
              className="w-36 b rounded-full border border-primary-cyan"
            />
            <h3
              id="popup-title"
              className="text-primary-cyan border-b w-fit font-bold flex items-center justify-center gap-1 text-2xl"
            >
              <span>{name}</span>
            </h3>

            <h4 className="text-lg">{description}</h4>

            <p className="flex gap-1">
              <span>
                <BriefcaseMedical
                  className="text-primary-cyan"
                  width={20}
                  aria-hidden="true"
                />
              </span>
              <span>{specialty}</span>
            </p>

            <p className="flex gap-1">
              <span>
                <Map
                  width={20}
                  className="text-primary-cyan"
                  aria-hidden="true"
                />
              </span>
              <span>{location}</span>
            </p>
          </div>

          <div className="w-full flex flex-col items-center justify-center">
            <h3 className="border-t pt-5 mt-5 w-full text-center border-primary-cyan text-2xl font-bold text-primary-cyan flex items-center justify-center gap-1">
              <span>
                <Calendar aria-hidden="true" />
              </span>
              <span>Available Dates</span>
            </h3>
            <ul role="listbox" aria-label="Available appointment slots">
              {datesFiltered?.map((e, i) => (
                <li
                  key={`${e.date}-${e.time}`}
                  onClick={() => {
                    setChoosenDate(e.date);
                    setChoosenTime(e.time);
                    setChoosenIndex(i);
                  }}
                  className={`${
                    choosenIndex === i &&
                    choosenDate !== "" &&
                    choosenTime !== ""
                      ? "bg-primary-cyan text-white"
                      : ""
                  } flex gap-2 hover:bg-primary-cyan hover:text-white transition-all duration-300 ease-in-out p-1 rounded-lg cursor-pointer`}
                  role="option"
                  aria-selected={choosenIndex === i}
                >
                  <span>{defineTodayTomorrow(e.date)}</span>
                  <span>
                    <Minus aria-hidden="true" />
                  </span>
                  <span>{e.time}</span>
                </li>
              ))}
            </ul>

            <p
              className="flex border-t-1 border-primary-cyan pt-3 mt-3 w-full text-center items-center justify-center gap-2"
              aria-live="polite"
            >
              {choosenDate !== "" && choosenTime !== "" && (
                <>
                  <span>Your appointment will be:</span>
                  <span className="flex">
                    {choosenDate} <Minus aria-hidden="true" /> {choosenTime}
                  </span>
                </>
              )}
            </p>

            <button
              onClick={() => booking()}
              disabled={choosenDate === "" && choosenTime === ""}
              className={`bg-primary-cyan text-white p-2 rounded-lg mt-5 ${
                choosenDate === "" && choosenTime === "" ? "opacity-[.3]" : ""
              }`}
              aria-disabled={choosenDate === "" && choosenTime === ""}
            >
              Book Now!
            </button>
          </div>
        </div>
      </PopupDiv>
      <ToastContainer />
    </>
  );
}

export default DoctorBooking;
