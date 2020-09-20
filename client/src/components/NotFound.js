import React from "react";
import { useSelector } from "react-redux";

const NotFound = ({ history }) => {
  const auth = useSelector((state) => state.authReducer);

  const handleBackToHome = () => {
    if (auth.isAuthenticated) {
      history.push("/dashboard");
    } else {
      history.push("/");
    }
  };
  return (
    <>
      <div className="h-screen w-screen bg-gray-100 flex items-center justify-center">
        <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
          <div className="max-w-md">
            <div className="text-5xl font-dark font-bold">404</div>
            <p className="text-2xl md:text-3xl font-light leading-normal">
              Sorry we couldn't find this page.{" "}
            </p>
            <p className="mb-8">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>

            <button
              onClick={handleBackToHome}
              className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-pink-400 active:bg-pink-500 hover:bg-pink-500"
            >
              back to homepage
            </button>
          </div>
          <div className="max-w-lg">
            <img src="undraw_empty.svg" alt="not found" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
