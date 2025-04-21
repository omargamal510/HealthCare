export interface doctorTypes {
  id: string;
  description: string;
  name: string;
  specialty: string;
  image: string;
  rating: number;
  available: boolean;
  location: string;
  availableSlots: doctorSlot[];
}

export interface DoctorCardProp {
  doctor: doctorTypes;
  bookingStatus: boolean;
  setBookingStatus: React.Dispatch<React.SetStateAction<boolean>>;
  doctorBookingData: doctorTypes;
  setDoctorBookingData: React.Dispatch<React.SetStateAction<doctorTypes>>;
}

export interface doctorSlot {
  date: string;
  time: string;
}

export interface DoctorFilterProps {
  filterStatus: boolean;
  setFilterStatus: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedSpecialties: React.Dispatch<React.SetStateAction<string[]>>;
  setAvailFilter: React.Dispatch<React.SetStateAction<string[]>>;
  availFilter: string[];
  selectedSpecialties: string[];
  allSelectionsSet: string[];
  doctors: doctorTypes[];
}

export interface DoctorBookingProps {
  doctorBookingData: doctorTypes;
  setDoctorBookingData: React.Dispatch<React.SetStateAction<doctorTypes>>;
  bookingStatus: boolean;
  setBookingStatus: React.Dispatch<React.SetStateAction<boolean>>;
}
