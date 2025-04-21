import { ReactNode } from "react";

export interface PopupDivProps {
  children: ReactNode;
  title: string;
  icon: ReactNode;
}
export interface PopupContextType {
  isPopupOpen: boolean;
  setIsPopupOpen: (value: boolean) => void;
}
