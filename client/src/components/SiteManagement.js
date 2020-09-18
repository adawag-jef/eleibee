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
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path
                  d="M14 12v7.88c.04.3-.06.62-.29.83a.996.996 0
                        01-1.41 0l-2.01-2.01a.989.989 0
                        01-.29-.83V12h-.03L4.21 4.62a1 1 0
                        01.17-1.4c.19-.14.4-.22.62-.22h14c.22 0
                        .43.08.62.22a1 1 0 01.17 1.4L14.03 12H14z"
                ></path>
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
