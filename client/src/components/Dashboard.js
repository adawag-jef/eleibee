import React from "react";
import AdminLayout from "../containers/AdminLayout";

const Transactions = () => {
  return (
    <AdminLayout>
      <div
        className="px-24 py-12 text-gray-700 dark:text-gray-500 transition
    duration-500 ease-in-out"
      >
        <h2 className="text-4xl font-medium capitalize">Dashboard</h2>
        <div
          className="border dark:border-gray-700 transition duration-500
        ease-in-out"
        ></div>
        <div className="flex flex-col mt-2">
          <div className="flex flex-row mt-2"></div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Transactions;
