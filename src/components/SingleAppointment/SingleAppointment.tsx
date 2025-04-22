import { BadgeX, CalendarClock, Map, Minus, X } from "lucide-react";
import { Link } from "react-router-dom";
import {
  defineTodayTomorrow,
  isDeprecatedDate,
} from "../../utils/dateFormatter.ts";

function SingleAppointment() {
  const appointments = JSON.parse(localStorage.getItem("appointments") || "[]");

  return (
    <>
      {appointments.length > 0 ? (
        <div
          className="flex flex-col gap-5"
          role="list"
          aria-label="Appointments"
        >
          {appointments.map((appointment, index: number) => (
            <div
              key={index}
              className="rounded-lg bg-white shadow-2xl"
              role="listitem"
            >
              <div className="flex bg-primary-cyan p-2 rounded-t-lg text-white font-bold justify-between">
                <h2 className="text-2xl">{appointment.name}</h2>
                <p className="text-lg">{appointment.specialty}</p>
              </div>
              <div className="flex flex-col justify-around gap-2 p-2 text-lg font-semibold h-[120px]">
                {isDeprecatedDate(appointment.date) && (
                  <h3
                    className="flex items-center"
                    aria-label="Appointment passed"
                  >
                    <span>Passed</span>
                    <span>
                      <X className="text-red-500" aria-hidden="true" />
                    </span>
                  </h3>
                )}
                <p className="flex gap-1 items-center">
                  <span>
                    <CalendarClock aria-hidden="true" />
                  </span>
                  <span>{defineTodayTomorrow(appointment.date)}</span>
                  <Minus aria-hidden="true" />
                  <span>{appointment.time}</span>
                </p>
                <p className="flex gap-1 items-center">
                  <span>
                    <Map aria-hidden="true" />
                  </span>
                  <span>{appointment.location}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div
          className="text-center flex flex-col -mt-20 items-center justify-center gap-5 h-screen"
          aria-live="polite"
        >
          <h2 className="flex gap-1 text-3xl font-bold items-center">
            You have no appointments yet
            <BadgeX className="text-red-500" aria-hidden="true" />
          </h2>
          <Link
            className="bg-primary-cyan font-semibold w-fit text-white p-2"
            to={"/doctors"}
            aria-label="Book an appointment"
          >
            Book Appointment now
          </Link>
        </div>
      )}
    </>
  );
}

export default SingleAppointment;
