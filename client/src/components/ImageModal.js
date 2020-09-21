import React, { useState } from "react";

import ReactDom from "react-dom";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 1000,
};

export default function FormModal({ file_path, children }) {
  const [openModal, setOpenModal] = useState(false);

  const handleClick = (val) => {
    setOpenModal(val);
  };

  if (!openModal) {
    return (
      <a
        className="block relative h-48 rounded overflow-hidden"
        onClick={() => {
          handleClick(true);
        }}
      >
        {children}
      </a>
    );
  } else {
    return ReactDom.createPortal(
      <>
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-400 opacity-75 z-50" />
        <div
          style={MODAL_STYLES}
          className="md:w-1/3 sm:w-full rounded-lg shadow-lg bg-white my-3 px-3 py-3"
        >
          <img
            src={file_path}
            alt="collection"
            className="object-cover object-center w-full h-full"
          />

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
