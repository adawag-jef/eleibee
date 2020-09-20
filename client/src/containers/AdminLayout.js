import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "../store/actions/authActions";

const AdminPage = ({ children }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogout = (e) => {
    dispatch(logout(history));
    // history.push("/login");
  };

  return (
    <div className="h-screen flex">
      <nav
        className="w-56 bg-white dark:bg-gray-800 select-none overflow-y-auto
		transition duration-500 ease-in-out"
      >
        <div className="flex flex-col items-center ">
          <h1
            className="text-6xl font-light text-pink-600 dark:text-pink-400 mt-0
				transition duration-500 ease-in-out"
          >
            Eleibee
          </h1>

          <img
            className="h-16 w-16 rounded-full object-cover mt-4"
            src="/catalyst.png"
            alt="mickey mouse Profile"
          />
          <span
            className="mt-2 mb-6 dark:text-gray-200 transition
				duration-500 ease-in-out"
          >
            @spare_bee
          </span>
        </div>

        <ul>
          <li
            className="pl-8 py-2 font-semibold text-gray-700 dark:text-gray-400
				hover:bg-pink-200 dark-hover:bg-pink-500 mb-2 transition
				duration-500 ease-in-out"
          >
            <button
              onClick={() => history.push("/dashboard")}
              className="focus:text-pink-500 dark-focus:text-pink-400
					focus:outline-none w-full transition duration-500 ease-in-out"
            >
              <span className="flex items-center">
                {/* <svg className="h-4 w-4 fill-current" viewBox="0 0 576 512">
                  <path
                    d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5
								21.5 48 48.1 48h479.8c26.6 0 48.1-21.5
								48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1
								80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6
								6-6zm467.8 352H54.1c-3.3
								0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192
								332v40c0 6.6-5.4 12-12 12h-72c-6.6
								0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12
								5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6
								0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0
								12 5.4 12 12z"
                  ></path>
                </svg> */}
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
                <span className="ml-4 capitalize">Dashboard</span>
              </span>
            </button>
          </li>

          <li
            className="pl-8 py-2 font-semibold dark:text-pink-400
				hover:bg-pink-200 mb-2 transition
				duration-500 ease-in-out"
          >
            <button
              onClick={() => history.push("/transactions")}
              className="focus:text-pink-500 dark-focus:text-pink-400
					focus:outline-none w-full transition duration-500 ease-in-out"
            >
              <span className="flex items-center">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M15 5v4h-4v4H7v4H3v3h7v-4h4v-4h4V8h4V5h-7z"></path>
                </svg>

                <span className="ml-4 capitalize">Transactions</span>
              </span>
            </button>
          </li>
          {/* <li
            className="pl-8 py-2 font-semibold text-pink-500 dark:text-pink-400
				border-l-2 border-pink-500 hover:bg-pink-200 mb-2 transition
				duration-500 ease-in-out"
          >
            <button
              className="focus:text-pink-500 dark-focus:text-pink-400
					focus:outline-none w-full transition duration-500 ease-in-out"
            >
              <span className="flex items-center">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M15 5v4h-4v4H7v4H3v3h7v-4h4v-4h4V8h4V5h-7z"></path>
                </svg>

                <span className="ml-4 capitalize">Transactions</span>
              </span>
            </button>
          </li> */}

          <li
            className="pl-8 py-2 font-semibold text-gray-700 dark:text-gray-400
				hover:bg-pink-200 dark-hover:bg-pink-500 mb-2 transition
				duration-500 ease-in-out"
          >
            <button
              className="focus:text-pink-500 dark-focus:text-pink-400
					focus:outline-none w-full transition duration-500 ease-in-out"
            >
              <span className="flex items-center">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path
                    d="M16 9c6 0 6 4 6
								4v2h-6v-2s0-1.69-1.15-3.2c-.17-.23-.38-.45-.6-.66C14.77
								9.06 15.34 9 16 9m-8 2c3.5 0 3.94 1.56 4
								2H4c.06-.44.5-2 4-2m0-2c-6 0-6 4-6
								4v2h12v-2s0-4-6-4m1 8v2h6v-2l3 3-3 3v-2H9v2l-3-3
								3-3M8 3c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1
								.45-1 1-1m0-2C6.34 1 5 2.34 5 4s1.34 3 3 3 3-1.34
								3-3-1.34-3-3-3m8 0c-1.66 0-3 1.34-3 3s1.34 3 3 3
								3-1.34 3-3-1.34-3-3-3z"
                  ></path>
                </svg>
                <span className="ml-4 capitalize">User Management</span>
              </span>
            </button>
          </li>

          <li
            className="pl-8 py-2 font-semibold text-gray-700 dark:text-gray-400
				hover:bg-pink-200 dark-hover:bg-pink-500 mb-2 transition
				duration-500 ease-in-out"
          >
            <button
              onClick={() => history.push("/image-management")}
              className="focus:text-pink-500 dark-focus:text-pink-400
					focus:outline-none w-full transition duration-500 ease-in-out"
            >
              <span className="flex items-center">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  {/* <path
                    d="M21 8V6H7v2h14m0 8v-5H7v5h14m0-12a2 2 0 012
								2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V6c0-1.11.89-2
								2-2h14M3 20h15v2H3a2 2 0 01-2-2V9h2v11z"
                  ></path> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </svg>
                <span className="ml-4 capitalize">Image management</span>
              </span>
            </button>
          </li>

          <li
            className="pl-8 py-2 font-semibold text-gray-700 dark:text-gray-400
				hover:bg-pink-200 dark-hover:bg-pink-500 mb-2 transition
				duration-500 ease-in-out"
          >
            <button
              onClick={() => history.push("/site-management")}
              className="focus:text-pink-500 dark-focus:text-pink-400
					focus:outline-none w-full transition duration-500 ease-in-out"
            >
              <span className="flex items-center">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                  />
                </svg>
                <span className="ml-4 capitalize">Site Management</span>
              </span>
            </button>
          </li>

          <li
            className="pl-8 py-2 font-semibold text-gray-700 dark:text-gray-400
				hover:bg-pink-200 dark-hover:bg-pink-500 transition duration-500
				ease-in-out"
          >
            <button
              className="focus:text-pink-500 dark-focus:text-pink-400
					focus:outline-none w-full transition duration-500 ease-in-out"
            >
              <span className="flex items-center">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 496 512">
                  <path
                    d="M248 104c-53 0-96 43-96 96s43 96 96 96 96-43
								96-96-43-96-96-96zm0 144c-26.5
								0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5
								48-48 48zm0-240C111 8 0 119 0 256s111 248 248 248
								248-111 248-248S385 8 248 8zm0 448c-49.7
								0-95.1-18.3-130.1-48.4 14.9-23 40.4-38.6
								69.6-39.5 20.8 6.4 40.6 9.6 60.5 9.6s39.7-3.1
								60.5-9.6c29.2 1 54.7 16.5 69.6 39.5-35 30.1-80.4
								48.4-130.1
								48.4zm162.7-84.1c-24.4-31.4-62.1-51.9-105.1-51.9-10.2
								0-26 9.6-57.6 9.6-31.5 0-47.4-9.6-57.6-9.6-42.9
								0-80.6 20.5-105.1 51.9C61.9 339.2 48 299.2 48
								256c0-110.3 89.7-200 200-200s200 89.7 200 200c0
								43.2-13.9 83.2-37.3 115.9z"
                  ></path>
                </svg>
                <span className="ml-4 capitalize">My Profile</span>
              </span>
            </button>
          </li>
        </ul>
        <div className="flex items-center mt-56">
          <button
            onClick={handleLogout}
            className="mx-auto
                    flex items-center
										focus:outline-none border rounded-full
										py-2 px-6 leading-none border-blue-500
										dark:border-blue-600 select-none
                    bg-blue-400 text-white
                    hover:bg-white hover:text-blue-400
										dark-hover:text-gray-200 transition duration-300 ease-in-out"
          >
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-4 w-4 mr-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            Logout
          </button>
        </div>
      </nav>

      <main
        className="flex-1 bg-gray-200 dark:bg-gray-900 overflow-y-auto transition
		duration-500 ease-in-out"
      >
        {children}
      </main>
    </div>
  );
};

export default AdminPage;
