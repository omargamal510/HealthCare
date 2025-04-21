import { createContext, useContext, useState, ReactNode } from "react";
import { PopupContextType } from "../types/popup-div-types.ts";

const PopupContext = createContext<PopupContextType | undefined>(undefined);

export const PopupProvider = ({ children }: { children: ReactNode }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <PopupContext.Provider value={{ isPopupOpen, setIsPopupOpen }}>
      {children}
    </PopupContext.Provider>
  );
};

// Custom hook (optional, makes consuming cleaner)
export const usePopup = () => {
  const context = useContext(PopupContext);
  if (!context) {
    throw new Error("usePopup must be used within a PopupProvider");
  }
  return context;
};
