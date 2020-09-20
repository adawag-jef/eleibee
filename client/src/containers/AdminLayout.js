import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import NavigationTab from "../components/NavigationTab";
import { logout } from "../store/actions/authActions";

const AdminLayout = ({ children }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogout = (e) => {
    dispatch(logout(history));
  };

  const tabs = [
    {
      title: "Dashboard",
      route: "/dashboard",
      icon: "fas fa-tachometer-alt",
    },
    {
      title: "Transactions",
      route: "/transactions",
      icon: "far fa-chart-bar",
    },
    {
      title: "User Management",
      route: "/user-management",
      icon: "fas fa-users-cog",
    },
    {
      title: "Image Management",
      route: "/image-management",
      icon: "far fa-images",
    },
    {
      title: "Site Management",
      route: "/site-management",
      icon: "fas fa-tasks",
    },
    {
      title: "My Profile",
      route: "/my-profile",
      icon: "far fa-user-circle",
    },
  ];

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

        {/* <li
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
                <i className="h-4 w-4 far fa-chart-bar"></i>
                <span className="ml-4 capitalize">Transactions</span>
              </span>
            </button>
          </li> */}

        {/* <li
            className="pl-8 py-2 font-semibold text-gray-700 dark:text-gray-400
				hover:bg-pink-200 dark-hover:bg-pink-500 mb-2 transition
				duration-500 ease-in-out"
          >
            <button
              className="focus:text-pink-500 dark-focus:text-pink-400
					focus:outline-none w-full transition duration-500 ease-in-out"
            >
              <span className="flex items-center">
                <i className="h-4 w-4  fas fa-users-cog"></i>
                <span className="ml-4 capitalize">User Management</span>
              </span>
            </button>
          </li> */}

        {/* <li
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
                <i className="far fa-images"></i>
                <span className="ml-4 capitalize">Image management</span>
              </span>
            </button>
          </li> */}

        {/* <li
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
                <i className="fas fa-tasks"></i>
                <span className="ml-4 capitalize">Site Management</span>
              </span>
            </button>
          </li> */}

        {/* <li
            className="pl-8 py-2 font-semibold text-gray-700 dark:text-gray-400
				hover:bg-pink-200 dark-hover:bg-pink-500 transition duration-500
				ease-in-out"
          >
            <button
              className="focus:text-pink-500 dark-focus:text-pink-400
					focus:outline-none w-full transition duration-500 ease-in-out"
            >
              <span className="flex items-center">
                <i className="far fa-user-circle"></i>
                <span className="ml-4 capitalize">My Profile</span>
              </span>
            </button>
          </li> */}
        <NavigationTab tabs={tabs} history={history} />
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
            <i className="fas fa-sign-out-alt"></i>
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

export default AdminLayout;
