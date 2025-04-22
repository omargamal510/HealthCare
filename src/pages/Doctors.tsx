import { useEffect, useState } from "react";
import DoctorCard from "../components/DoctorCard/DoctorCard.tsx";
import { doctorTypes } from "../types/doctors-types.ts";
import { SlidersHorizontal } from "lucide-react";
import DoctorFilter from "../components/DoctorFilter/DoctorFilter.tsx";
import DoctorBooking from "../components/DoctorBooking/DoctorBooking.tsx";
import Loading from "../components/Loading/Loading.tsx";

const API_LINK: string =
  "https://gist.githubusercontent.com/omargamal510/47c5c6c27c12e00ef04a5e284397b16b/raw/a74db00ad9dc733282ec47a384346afd66059084/gistfile1.txt";
const iconWidth: number = 20;

function Doctors() {
  const [doctors, setDoctors] = useState<doctorTypes[]>([]);
  const [bookingStatus, setBookingStatus] = useState<boolean>(false);
  const [doctorBookingData, setDoctorBookingData] = useState<doctorTypes>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);
  const [availFilter, setAvailFilter] = useState<string[]>([]);
  const [filterStatus, setFilterStatus] = useState<boolean>(false);

  useEffect(() => {
    const fetchDoctors = async (): Promise<void> => {
      try {
        const response: Response = await fetch(API_LINK);
        const data: doctorTypes[] = await response.json();
        setDoctors(data);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    };

    fetchDoctors();
  }, []);

  if (loading) return <Loading />;

  const allSelections: string[] = doctors.map((e) => e.specialty);
  const allSelectionsSet: string[] = Array.from(new Set(allSelections));

  // Filter doctors based on specialty and availability (dates)
  const filteredDoctors: doctorTypes[] = doctors.filter((doctor) => {
    const matchesSpecialty =
      selectedSpecialties.length === 0 ||
      selectedSpecialties.includes(doctor.specialty);

    const matchesAvailability =
      availFilter.length === 0 ||
      doctor.availableSlots.some((slot) => availFilter.includes(slot.date));

    return matchesSpecialty && matchesAvailability;
  });

  return (
    <div role="main" aria-label="Doctors page">
      <DoctorFilter
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
        allSelectionsSet={allSelectionsSet}
        selectedSpecialties={selectedSpecialties}
        setSelectedSpecialties={setSelectedSpecialties}
        availFilter={availFilter}
        setAvailFilter={setAvailFilter}
        doctors={doctors}
      />

      <div className="flex justify-between mb-10">
        <h2 className="text-3xl font-bold text-primary-cyan">All Doctors</h2>
        <div className="flex">
          <button
            onClick={() => setFilterStatus(true)}
            className="flex gap-1 cursor-pointer bg-white items-center justify-center px-5 shadow-lg text-primary-cyan font-semibold"
            aria-label="Open filter options"
          >
            <span>Filter</span>
            <SlidersHorizontal width={iconWidth} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full items-center justify-center"
        role="list"
        aria-label="List of doctors"
      >
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor: doctorTypes, i: number) => (
            <DoctorCard
              setDoctorBookingData={setDoctorBookingData}
              doctorBookingData={doctorBookingData}
              setBookingStatus={setBookingStatus}
              bookingStatus={bookingStatus}
              key={doctor.id || i}
              doctor={doctor}
            />
          ))
        ) : (
          <p aria-live="polite">No doctors match the selected filters.</p>
        )}
      </div>

      <DoctorBooking
        setDoctorBookingData={setDoctorBookingData}
        doctorBookingData={doctorBookingData}
        setBookingStatus={setBookingStatus}
        bookingStatus={bookingStatus}
      />
    </div>
  );
}

export default Doctors;
