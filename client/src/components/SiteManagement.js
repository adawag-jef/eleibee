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

        <div className="flex justify-center mt-2">
          <div className="container">
            <main className="mt-10">
              <div className="block md:flex md:space-x-2 px-2 lg:p-0">
                <div
                  className="mb-4 md:mb-0 w-full md:w-2/3 relative rounded inline-block"
                  style={{ height: "24em" }}
                  href="./blog.html"
                >
                  <div
                    className="absolute left-0 bottom-0 w-full h-full z-10"
                    style={{
                      backgroundImage:
                        "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
                    }}
                  ></div>
                  <button className="absolute right-0 top-0 bg-opacity-50 bg-orange-400 text-white hover:bg-orange-500 px-2 py-3 z-20 focus:outline-none transition-all duration-300 ease-in-out">
                    <i className="fa-2x far fa-edit"></i>
                  </button>
                  <img
                    src={`uploads/ball_1600510261991.png`}
                    className="absolute left-0 top-0 w-full h-full rounded z-0 object-cover"
                  />
                  <div className="p-4 absolute bottom-0 left-0 z-20">
                    <span className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">
                      Featured
                    </span>
                    <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
                      Pellentesque a consectetur velit, ac molestie ipsum.
                    </h2>
                  </div>
                </div>

                <a
                  className="w-full md:w-1/3 relative rounded"
                  style={{ height: "24em" }}
                  href="./blog.html"
                >
                  <div
                    className="absolute left-0 top-0 w-full h-full z-10"
                    style={{
                      backgroundImage:
                        "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
                    }}
                  ></div>
                  <img
                    src={`uploads/catalyst_1600425522427.png`}
                    className="absolute left-0 top-0 w-full h-full rounded z-0 object-cover"
                  />
                  <div className="p-4 absolute bottom-0 left-0 z-20">
                    <span className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">
                      Top Seller
                    </span>
                    <h2 className="text-3xl font-semibold text-gray-100 leading-tight">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </h2>
                  </div>
                </a>
              </div>

              <div className="block lg:flex lg:space-x-2 px-2 lg:p-0 mt-10 mb-10">
                {/* <!-- post cards --> */}
                <div className="w-full lg:w-2/3">
                  <a
                    className="block rounded w-full lg:flex mb-10"
                    href="./blog-single-1.html"
                  >
                    <div
                      className="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75"
                      style={{
                        backgroundImage:
                          "url(uploads/catalyst_1600425522427.png)",
                      }}
                      title="deit is very important"
                    ></div>
                    <div className="bg-white rounded px-4 flex flex-col justify-between leading-normal">
                      <div>
                        <div className="mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2">
                          Aliquam venenatis nisl id purus rhoncus, in efficitur
                          sem hendrerit.
                        </div>
                        <p className="text-gray-700 text-base">
                          Duis euismod est quis lacus elementum, eu laoreet
                          dolor consectetur. Pellentesque sed neque vel tellus
                        </p>
                      </div>
                    </div>
                  </a>
                </div>

                {/* <!-- right sidebar --> */}
                <div className="w-full lg:w-1/3 px-3">
                  {/* <!-- topics --> */}
                  <div className="mb-4">
                    <h5 className="font-bold text-lg uppercase text-gray-700 px-1 mb-2">
                      New Cards
                    </h5>
                    <ul>
                      <li className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
                        <a
                          href="#"
                          className="flex items-center text-gray-600 cursor-pointer"
                        >
                          <span className="inline-block h-4 w-4 bg-green-300 mr-3"></span>
                          Card 1
                          <span className="text-gray-500 ml-auto">
                            2 pieces
                          </span>
                          <i className="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
                        </a>
                      </li>
                      <li className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
                        <a
                          href="#"
                          className="flex items-center text-gray-600 cursor-pointer"
                        >
                          <span className="inline-block h-4 w-4 bg-indigo-300 mr-3"></span>
                          Card 2
                          <span className="text-gray-500 ml-auto">
                            3 pieces
                          </span>
                          <i className="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
                        </a>
                      </li>
                      <li className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
                        <a
                          href="#"
                          className="flex items-center text-gray-600 cursor-pointer"
                        >
                          <span className="inline-block h-4 w-4 bg-yellow-300 mr-3"></span>
                          Card 3
                          <span className="text-gray-500 ml-auto">
                            2 pieces
                          </span>
                          <i className="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
                        </a>
                      </li>
                      <li className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
                        <a
                          href="#"
                          className="flex items-center text-gray-600 cursor-pointer"
                        >
                          <span className="inline-block h-4 w-4 bg-blue-300 mr-3"></span>
                          Card 4
                          <span className="text-gray-500 ml-auto">
                            5 pieces
                          </span>
                          <i className="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* <!-- divider --> */}
                  <div className="border border-dotted"></div>

                  {/* <!-- subscribe --> */}
                  <div className="p-1 mt-4 mb-4">
                    <h5 className="font-bold text-lg uppercase text-gray-700 mb-2">
                      Subscribe
                    </h5>
                    <p className="text-gray-600">
                      Subscribe to our newsletter. For new updates
                    </p>
                    <input
                      placeholder="your email address"
                      className="text-gray-700 bg-gray-100 rounded-t hover:outline-none p-2 w-full mt-4 border"
                    />
                    <button className="px-4 py-2 bg-indigo-600 text-gray-200 rounded-b w-full capitalize tracking-wide">
                      Subscribe
                    </button>
                  </div>

                  {/* <!-- divider --> */}
                  <div className="border border-dotted"></div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default SiteManagement;
