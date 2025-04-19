import DoctorCard from "../components/DoctorCard/DoctorCard.tsx";

function Doctors() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 w-full items-center justify-center">
      <DoctorCard />
      <DoctorCard />
      <DoctorCard />
      <DoctorCard />
      <DoctorCard />

      <DoctorCard />
    </div>
  );
}

export default Doctors;
