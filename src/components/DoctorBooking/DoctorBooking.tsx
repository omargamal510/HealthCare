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
function DoctorBooking({ doctorBookingData }: DoctorBookingProps) {
  const {
    name,
    description,
    specialty,
    image,

    location,
    availableSlots,
  } = doctorBookingData as doctorTypes;

  const [choosenDate, setChoosenDate] = useState<string>("");
  const [choosenTime, setChoosenTime] = useState<string>("");
  const [choosenIndex, setChoosenIndex] = useState<number>(0);
  // const [showMore, setShowMore] = useState<boolean>(false);

  // function handleSeeMore(): void {
  //   setShowMore(true);
  // }

  const { isPopupOpen } = usePopup();

  const datesFiltered: doctorSlot[] = availableSlots?.filter(
    (e) => !isDeprecatedDate(e.date)
  );

  // const sliceNum: number = showMore
  //   ? datesFiltered?.length
  //   : Math.ceil(datesFiltered?.length / 4);

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
        >
          <div className="flex flex-col items-center">
            <img
              src={image}
              className="w-36 rounded-full border border-primary-cyan"
            />
            <h3 className="text-primary-cyan border-b w-fit font-bold flex items-center justify-center gap-1 text-2xl">
              {/* <span>Dr</span> */}
              <span>{name}</span>
            </h3>

            <h4 className="text-lg ">{description}</h4>

            <p className="flex gap-1">
              <span>
                <BriefcaseMedical className="text-primary-cyan " width={20} />
              </span>
              <span>{specialty}</span>
            </p>

            <p className="flex gap-1">
              <span>
                <Map width={20} className="text-primary-cyan" />
              </span>
              <span>{location}</span>
            </p>
          </div>

          <div className="w-full flex flex-col items-center justify-center">
            <h3 className="border-t pt-5 mt-5 w-full text-center border-primary-cyan text-2xl font-bold text-primary-cyan flex items-center justify-center gap-1">
              <span>
                <Calendar />
              </span>
              <span>Available Dates</span>
            </h3>
            <ul>
              {datesFiltered?.map((e, i) => (
                <li
                  onClick={() => {
                    // setChoosenDate((prev) => [
                    //   ...prev,
                    //   { date: e.date, time: e.time },
                    // ]);
                    setChoosenDate(e.date);
                    setChoosenTime(e.time);
                    setChoosenIndex(i);
                  }}
                  className={` ${
                    choosenIndex === i &&
                    choosenDate !== "" &&
                    choosenTime !== ""
                      ? "bg-primary-cyan text-white"
                      : ""
                  } flex gap-2 hover:bg-primary-cyan hover:text-white transition-all duration-300 ease-in-out p-1 rounded-lg cursor-pointer`}
                >
                  <span>{defineTodayTomorrow(e.date)}</span>
                  <span>
                    <Minus />
                  </span>
                  <span>{e.time}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => alert("Booked !")}
              disabled={choosenDate === "" && choosenTime === ""}
              className={`bg-primary-cyan text-white p-2 rounded-lg mt-5 ${
                choosenDate === "" && choosenTime === "" ? "opacity-[.3]" : ""
              }`}
            >
              Book Now !
            </button>
            {choosenDate} {choosenTime}
          </div>
        </div>
      </PopupDiv>

      {/* <div
        className={`${
          bookingStatus ? "flex" : "hidden"
        } bg-primary-filter h-screen fixed inset-0 backdrop-blur-lg`}
      >
        {doctorBookingData.name}
        {doctorBookingData.description}
      </div> */}
    </>
  );
}

export default DoctorBooking;
