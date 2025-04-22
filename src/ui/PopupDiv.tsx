import { useEffect } from "react";
import { usePopup } from "../store/PopupContext.tsx";
import { PopupDivProps } from "../types/popup-div-types.ts";
import { X } from "lucide-react";

function PopupDiv({ children, title, icon }: PopupDivProps) {
  const { isPopupOpen, setIsPopupOpen } = usePopup();
  useEffect(() => {
    function keyPress(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setIsPopupOpen(false);
      }
    }
    window.addEventListener("keydown", keyPress);
    return () => window.removeEventListener("keydown", keyPress);
  }, [setIsPopupOpen]);
  return (
    <div
      onClick={() => setIsPopupOpen(false)}
      className={`bg-primary-filter overflow-y-scroll ${
        isPopupOpen ? "flex" : "hidden"
      } flex-col gap-10 pb-10 items-center z-20 backdrop-blur-lg h-screen fixed inset-0`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="text-white py-5 bg-primary-cyan w-full text-center flex items-center"
      >
        <h3 className="w-full text-2xl flex justify-center items-center gap-2">
          {icon}
          {title}
        </h3>
        <button
          onClick={() => setIsPopupOpen(false)}
          className="w-10 flex justify-center"
        >
          <X />
        </button>
      </div>
      {children}
    </div>
  );
}

export default PopupDiv;
