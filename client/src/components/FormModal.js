import React, { useState } from "react";
import ReactDom from "react-dom";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 1000,
};

export default function FormModal({ children, icon }) {
  const [openModal, setOpenModal] = useState(false);
  const handleClick = (val) => {
    setOpenModal(val);
  };

  if (!openModal) {
    return (
      <button
        className="px-2 py-2 bg-orange-400 z-50 absolute"
        onClick={() => handleClick(true)}
      >
        <i className={`text-white ${icon}`}></i>
      </button>
    );
  } else {
    return ReactDom.createPortal(
      <>
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-400 opacity-75 z-50" />
        <div
          style={MODAL_STYLES}
          className="md:w-1/3 sm:w-full rounded-lg shadow-lg bg-white my-3"
        >
          {children}

          <div className="px-5 py-4 flex justify-end">
            <button
              onClick={() => handleClick(false)}
              className="text-sm py-2 px-3 text-gray-500 hover:text-gray-600 transition duration-150"
            >
              Close
            </button>
          </div>
        </div>
      </>,
      document.getElementById("modal-root")
    );
  }
}

FormModal.Icon = function Icon({ children }) {
  return children;
};

FormModal.Header = function Header({ children }) {
  return (
    <div className="flex justify-between border-b border-gray-100 px-5 py-4">
      <div>
        <span className="font-bold text-gray-700 text-lg">{children}</span>
      </div>
      <div></div>
    </div>
  );
};
FormModal.Body = function Body({ children }) {
  return <div className="px-10 py-5 text-gray-600">{children}</div>;
};
