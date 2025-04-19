import { useEffect, useState } from "react";
import DoctorCard from "../components/DoctorCard/DoctorCard.tsx";
import { doctorTypes } from "../types/doctors-types.ts";
import { SlidersHorizontal } from "lucide-react";
import DoctorFilter from "../components/DoctorFilter.tsx";

const API_LINK: string =
  "https://gist.githubusercontent.com/omargamal510/47c5c6c27c12e00ef04a5e284397b16b/raw/3ea9210708127aab4fd2d310bda942072b4cf438/gistfile1.txt";
// in real production this is an env. variable
const iconWidth: number = 20;

function Doctors() {
  const [doctors, setDoctors] = useState<doctorTypes[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);
  const [filterStatus, setFilterStatus] = useState<boolean>(true);

  useEffect(() => {
    // Define the fetch function
    const fetchDoctors = async (): Promise<void> => {
      try {
        const response: Response = await fetch(API_LINK);
        const data: doctorTypes[] = await response.json();
        setDoctors(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  // function filterChoice(e: React.ChangeEvent<HTMLSelectElement>) {
  //   const selected: string = e.target.value;
  //   if (selected === "Availability") {
  //     setSelectedFilter("Availability");
  //   } else if (selected === "Speciality") {
  //     setSelectedFilter("Speciality");
  //   }
  // }

  // const sortedDoctors: doctorTypes[] = [...doctors].sort((a, b) => {
  //   if (selectedFilted === "Speciality") {
  //     if (a.specialty < b.specialty) return -1;
  //     if (a.specialty > b.specialty) return 1;
  //   } else {
  //     if (a.available && !b.available) return -1;
  //     if (!a.available && b.available) return 1;
  //   }

  //   return 0;
  // });

  // function filterSpeciality(speciality: string): void {
  //   const filterDoctors = doctors.filter((e) =>
  //     allSelections.includes(e.specialty)
  //   );
  //   setDoctors(filterDoctors);
  // }

  if (loading) return <p>Loading...</p>;

  const allSelections: string[] = doctors.map((e) => e.specialty);
  const allSelectionsSet: string[] = Array.from(new Set(allSelections));

  // const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { value, checked } = e.target;

  //   setSelectedSpecialties((prev) =>
  //     checked ? [...prev, value] : prev.filter((item: string) => item !== value)
  //   );
  // };

  const filterSpeciality: doctorTypes[] = doctors.filter((doctor) =>
    selectedSpecialties.includes(doctor.specialty)
  );

  console.log(filterSpeciality);

  return (
    <div>
      <DoctorFilter
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
        allSelectionsSet={allSelectionsSet}
        selectedSpecialties={selectedSpecialties}
        setSelectedSpecialties={setSelectedSpecialties}
      />

      {/* <div>
        <h4>Selected:</h4>
        <pre>{JSON.stringify(selectedSpecialties, null, 2)}</pre>
      </div> */}

      <div className="flex justify-between mb-10">
        <h2 className="text-3xl font-bold text-primary-cyan">All Doctors</h2>
        {/* <div className="sorting flex items-center gap-2 ">
          <label>Filter by</label>
          <select
            onChange={(e) => filterChoice(e)}
            className="shadow-md rounded-md bg-white w-32"
          >
            <option>Availability</option>
            <option>Speciality</option>
          </select>
        </div> */}
        <div className="flex">
          <button
            onClick={() => setFilterStatus(true)}
            className="flex gap-1 cursor-pointer bg-white items-center justify-center px-5 shadow-lg text-primary-cyan font-semibold"
          >
            <span>Filter</span>
            <SlidersHorizontal width={iconWidth} />
          </button>
        </div>
      </div>

      <div></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 w-full items-center justify-center">
        {selectedSpecialties.length !== 0
          ? filterSpeciality.map((doctor: doctorTypes, i: number) => (
              <DoctorCard key={doctor.id || i} doctor={doctor} />
            ))
          : doctors.map((doctor: doctorTypes, i: number) => (
              <DoctorCard key={doctor.id || i} doctor={doctor} />
            ))}
      </div>
    </div>
  );
}

export default Doctors;
