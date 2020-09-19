import React from "react";

const SiteManagement = () => {
  return (
    <>
      <div className="px-24 py-12 text-gray-700 dark:text-gray-500 transition duration-500 ease-in-out">
        <h2 className="text-4xl font-medium capitalize">Site Management</h2>
        <div className="mt-1 mb-4 flex items-center justify-between">
          <div>
            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" className="text-gray-800 ml-1 w-5 h-5" />
              <span className="ml-2 text-sm font-semibold text-gray-700">
                Maintenance Mode
              </span>
            </label>
          </div>
          {/* </span> */}
          <div className="flex items-center select-none">
            <span>View Site</span>
            <button
              onClick={() => window.open("/")}
              className="ml-3 bg-gray-400 dark:bg-gray-600
                dark:text-gray-400 rounded-full p-2 focus:outline-none
                hover:text-pink-500 hover:bg-pink-300 transition
                duration-500 ease-in-out"
            >
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="border dark:border-gray-700 transition duration-500 ease-in-out"></div>
      </div>
    </>
  );
};

export default SiteManagement;
