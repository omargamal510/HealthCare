import { BriefcaseMedical, SlidersHorizontal, X } from "lucide-react";
import { DoctorFilterProps } from "../types/doctors-types.ts";
import { useEffect, useMemo, useState } from "react";

function DoctorFilter({
  filterStatus,
  setFilterStatus,
  allSelectionsSet,
  selectedSpecialties,
  setSelectedSpecialties,
  setAvailFilter,
  availFilter,
  doctors,
}: DoctorFilterProps) {
  const [showMore, setShowMore] = useState<boolean>(false);
  const [availShowMore, setAvailShowMore] = useState<boolean>(false);

  const availableDates = useMemo(() => {
    const allDates = doctors.flatMap((doctor) =>
      doctor.availableSlots.map((slot) => slot.date)
    );
    const uniqueDates = [...new Set(allDates)];
    return uniqueDates.sort();
  }, [doctors]);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setSelectedSpecialties((prev) =>
      checked ? [...prev, value] : prev.filter((item: string) => item !== value)
    );
  };

  const handleAvailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setAvailFilter((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  useEffect(() => {
    function keyPress(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setFilterStatus(false);
      }
    }
    window.addEventListener("keydown", keyPress);
    return () => window.removeEventListener("keydown", keyPress);
  }, [setFilterStatus]);

  const showMoreSpecialtyNum = showMore
    ? allSelectionsSet.length
    : Math.ceil(allSelectionsSet.length / 4);
  const showMoreAvailNum = availShowMore ? availableDates.length : 3;

  return (
    <>
      {filterStatus && (
        <div
          onClick={() => setFilterStatus(false)}
          className="bg-primary-filter overflow-y-scroll flex flex-col gap-10 items-center backdrop-blur-xs h-screen fixed inset-0"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="text-white py-5 bg-primary-cyan w-full text-center flex items-center"
          >
            <h3 className="w-full text-2xl flex justify-center items-center gap-2">
              <SlidersHorizontal /> Filters
            </h3>
            <button
              onClick={() => setFilterStatus(false)}
              className="w-10 flex justify-center"
            >
              <X />
            </button>
          </div>

          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full md:w-[70%] rounded-lg shadow-2xl px-5 py-10"
          >
            <h3 className="pb-5 text-2xl border-b border-primary-cyan flex gap-1 items-center">
              <BriefcaseMedical className="text-primary-cyan" />
              <span>Specialty</span>
            </h3>
            <div className="pt-5 grid grid-cols-1 md:grid-cols-2 w-full">
              <div className="border-b border-primary-gray py-2 flex gap-1">
                <input
                  type="checkbox"
                  checked={selectedSpecialties.length === 0}
                  onChange={() => setSelectedSpecialties([])}
                />
                <label>All</label>
              </div>
              {allSelectionsSet
                .slice(0, showMoreSpecialtyNum)
                .map((specialty) => (
                  <div
                    key={specialty}
                    className="flex gap-1 border-b border-primary-gray py-2"
                  >
                    <input
                      className="checkbox accent-primary-cyan"
                      type="checkbox"
                      onChange={handleCheckboxChange}
                      checked={selectedSpecialties.includes(specialty)}
                      value={specialty}
                    />
                    <label>{specialty}</label>
                  </div>
                ))}
            </div>
            <div className="w-full flex justify-center mt-5">
              <button
                onClick={() => setShowMore((prev) => !prev)}
                className="border px-5 py-1 bg-primary-cyan text-white rounded-md"
              >
                See {showMore ? "Less" : "More"}
              </button>
            </div>
          </div>

          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full md:w-[70%] rounded-lg shadow-2xl px-5 py-10"
          >
            <h3 className="pb-5 text-2xl border-b border-primary-cyan flex gap-1 items-center">
              <BriefcaseMedical className="text-primary-cyan" />
              <span>Availability</span>
            </h3>
            <div className="pt-5 grid grid-cols-1 md:grid-cols-2 w-full">
              <div className="border-b border-primary-gray py-2 flex gap-1">
                <input
                  type="checkbox"
                  checked={availFilter.length === 0}
                  onChange={() => setAvailFilter([])}
                />
                <label>All</label>
              </div>
              {availableDates.length > 0 ? (
                availableDates.slice(0, showMoreAvailNum).map((date) => (
                  <div
                    key={date}
                    className="flex gap-1 border-b border-primary-gray py-2"
                  >
                    <input
                      className="checkbox accent-primary-cyan"
                      type="checkbox"
                      onChange={handleAvailChange}
                      checked={availFilter.includes(date)}
                      value={date}
                    />
                    <label>{date}</label>
                  </div>
                ))
              ) : (
                <p>No available dates found.</p>
              )}
            </div>
            <div className="w-full flex justify-center mt-5">
              <button
                onClick={() => setAvailShowMore((prev) => !prev)}
                className="border px-5 py-1 bg-primary-cyan text-white rounded-md"
              >
                See {availShowMore ? "Less" : "More"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DoctorFilter;
