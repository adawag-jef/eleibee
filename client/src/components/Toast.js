import React, { useEffect } from "react";
import Transition from "./Transition";

const Toast = ({ showToast, message, type, handler }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      handler(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [showToast]);

  const bgColor = (type) => {
    switch (type) {
      case "success":
        return "bg-green-500 ";
        break;
      case "info":
        return "bg-blue-300 ";
        break;
      case "warning":
        return "bg-orange-400 ";
        break;
      case "danger":
        return "bg-red-400 ";
        break;
      default:
        return "bg-blue-500 ";
        break;
    }
  };
  return (
    <Transition
      show={showToast}
      enter="transition-all duration-500"
      enterFrom="-mr-64 opacity-100"
      enterTo="mr-4"
      leave="transition-all duration-500 opacity-0"
      leaveFrom="mr-4"
      leaveTo="-mr-64"
    >
      <div className="alert-toast fixed bottom-0 right-0 m-8 w-5/6 md:w-full max-w-sm">
        <label
          onClick={() => handler(false)}
          className={`close cursor-pointer flex items-start justify-between w-full p-2 h-24 rounded shadow-lg text-white  ${bgColor(
            type
          )}`}
          title="close"
        >
          {message}
          <svg
            className="fill-current text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
          </svg>
        </label>
      </div>
    </Transition>
  );
};

export default Toast;
