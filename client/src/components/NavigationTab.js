import React, { useState } from "react";

const NavigationTab = ({ tabs, history }) => {
  const [currentTab, setCurrentTab] = useState(history.location.pathname);

  const handleTabClick = (route) => {
    setCurrentTab(route);
    history.push(route);
  };
  return (
    <ul>
      {tabs.map((tab) => (
        <li
          key={tab.route}
          className={`pl-8 py-2 font-semibold text-gray-700 dark:text-gray-400
          hover:bg-pink-200 dark-hover:bg-pink-500 mb-2 
          transition duration-500 ease-in-out ${
            currentTab === tab.route ? "bg-pink-200 text-pink-600" : ""
          }`}
        >
          <button
            onClick={() => handleTabClick(tab.route)}
            className="focus:text-pink-500 dark-focus:text-pink-400
            focus:outline-none w-full transition duration-500 ease-in-out"
          >
            <span className="flex items-center">
              <i className={`${tab.icon}`}></i>
              <span className="ml-4 capitalize">{tab.title}</span>
            </span>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default NavigationTab;
