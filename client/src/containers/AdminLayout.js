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
      <nav className="w-56 bg-white dark:bg-gray-800 select-none overflow-y-auto transition duration-500 ease-in-out">
        <div className="flex flex-col items-center ">
          <h1 className="text-6xl font-light text-pink-600 dark:text-pink-400 mt-0 transition duration-500 ease-in-out">
            Eleibee
          </h1>

          <img
            className="h-16 w-16 rounded-full object-cover mt-4"
            src="/catalyst.png"
            alt="mickey mouse Profile"
          />
          <span className="mt-2 mb-6 dark:text-gray-200 transition duration-500 ease-in-out">
            @spare_bee
          </span>
        </div>

        <NavigationTab tabs={tabs} />

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

      <main className="flex-1 bg-gray-200 dark:bg-gray-900 overflow-y-auto transition duration-500 ease-in-out">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
