import { BriefcaseMedical, SlidersHorizontal, X } from "lucide-react";
import { DoctorFilterProps } from "../types/doctors-types.ts";
import { useEffect, useState } from "react";

function DoctorFilter({
  filterStatus,
  setFilterStatus,
  allSelectionsSet,
  selectedSpecialties,
  setSelectedSpecialties,
}: DoctorFilterProps) {
  console.log(allSelectionsSet);

  const [showMore, setShowMore] = useState<boolean>(false);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    setSelectedSpecialties((prev) =>
      checked ? [...prev, value] : prev.filter((item: string) => item !== value)
    );
  };

  useEffect(() => {
    function keyPress(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setFilterStatus(false);
      }
    }

    window.addEventListener("keydown", keyPress);

    return () => {
      window.removeEventListener("keydown", keyPress);
    };
  }, [filterStatus, setFilterStatus]);

  const showMoreNum: number = showMore
    ? allSelectionsSet.length
    : allSelectionsSet.length / 2;
  return (
    <>
      {filterStatus ? (
        <div
          onClick={() => setFilterStatus(false)}
          className={`bg-primary-filter overflow-y-scroll ${
            filterStatus ? "flex" : "hidden"
          } flex-col gap-10 items-center backdrop-blur-xs h-screen fixed inset-0`}
        >
          <div
            onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
              e.stopPropagation()
            }
            className="text-white py-5 bg-primary-cyan w-full text-center flex items-center"
          >
            <h3 className="w-full text-2xl flex justify-center items-center gap-2">
              <SlidersHorizontal /> Filters
            </h3>
            <button
              onClick={(): void => setFilterStatus(false)}
              className="w-10 flex justify-center"
            >
              <X />{" "}
            </button>
          </div>

          <div
            onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
              e.stopPropagation()
            }
            className="bg-white bo w-full md:w-[70%] rounded-lg shadow-2xl px-5 py-10"
          >
            <h3 className="pb-5 text-2xl border-b-1 border-primary-cyan flex gap-1 items-center">
              <BriefcaseMedical className="text-primary-cyan" />
              <span>Specialty</span>
            </h3>
            <div className="pt-5 grid grid-cols-1 md:grid-cols-2 w-full">
              <div className="border-b border-primary-gray py-2 flex gap-1">
                <input
                  onClick={() => setSelectedSpecialties([])}
                  type="checkbox"
                  checked={selectedSpecialties.length === 0}
                  // onChange={handleCheckboxChange}
                  // checked={selectedSpecialties.includes(e)}
                  // value={e}
                ></input>
                <label>All</label>
              </div>

              {allSelectionsSet.slice(0, showMoreNum).map((e) => (
                <div className="flex gap-1 border-b border-primary-gray py-2">
                  <input
                    className="checkbox accent-primary-cyan"
                    //   onClick={() => setSelectedSpecialties([])}
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    checked={selectedSpecialties.includes(e)}
                    value={e}
                  ></input>
                  <label>{e}</label>
                </div>
              ))}
            </div>

            <div className="w-full flex justify-center  mt-5">
              <button
                onClick={(): void => setShowMore((p: boolean) => !p)}
                className="border px-5 py-1 bg-primary-cyan text-white rounded-md "
              >
                See {showMore ? "Less" : "More"}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default DoctorFilter;
