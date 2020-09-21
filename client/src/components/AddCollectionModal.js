import React, { useState, useContext } from "react";
import ReactDom from "react-dom";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 1000,
};

export default function AddCollectionModal({ children, submit }) {
  const [openModal, setOpenModal] = useState(false);
  const handleClick = (val) => {
    setOpenModal(val);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpenModal(false);
    submit();
  };

  if (!openModal) {
    return (
      //   <button
      //     className="px-2 py-2 bg-orange-400 z-50 absolute"
      //     onClick={() => handleClick(true)}
      //   >
      //     <i className={`text-white ${icon}`}></i>
      //     Add Collection
      //   </button>

      <div className="flex">
        <button
          onClick={() => handleClick(true)}
          className=" flex items-center
                      focus:outline-none border rounded-full
                      py-2 px-6 leading-none border-blue-500
                      dark:border-blue-600 select-none  bg-blue-400 text-white  hover:bg-white hover:text-blue-400
                      dark-hover:text-gray-200 transition duration-300 ease-in-out"
        >
          <i className="far fa-plus-square mr-2"></i>
          Add Collection
        </button>
      </div>
    );
  } else {
    return ReactDom.createPortal(
      <>
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-400 opacity-75 z-50" />
        <div
          style={MODAL_STYLES}
          className="md:w-1/3 sm:w-full rounded-lg shadow-lg bg-white my-3"
        >
          <form onSubmit={handleSubmit}>
            {children}
            <div className="px-5 py-4 flex justify-end">
              <button type="submit" className="px-3 py-2 bg-blue-400">
                Submit
              </button>
              <button
                className="px-3 py-2 bg-red-400"
                onClick={() => handleClick(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </>,
      document.getElementById("modal-root")
    );
  }
}

AddCollectionModal.Icon = function Icon({ children }) {
  return children;
};

AddCollectionModal.Header = function Header({ children }) {
  return (
    <div className="flex justify-between border-b border-gray-100 px-5 py-4">
      <div>
        <span className="font-bold text-gray-700 text-lg">{children}</span>
      </div>
      <div></div>
    </div>
  );
};
AddCollectionModal.Body = function Body({ children }) {
  return <div className="px-10 py-5 text-gray-600">{children}</div>;
};
