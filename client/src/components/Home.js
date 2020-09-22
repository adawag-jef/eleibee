import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCollection } from "../store/actions/collecitonAction";
import Modal from "react-modal";
Modal.setAppElement("#modal-root");

const Home = () => {
  const dispatch = useDispatch();
  const { collections } = useSelector((state) => state.collectionReducer);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  function openModal(image) {
    setCurrentImage(image);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  useEffect(() => {
    dispatch(fetchCollection());
  }, []);
  return (
    <>
      {/* <!-- component --> */}
      <div className="max-w-screen-xl mx-auto">
        {/* <!-- header --> */}
        <header className="flex items-center justify-between py-2 border-b">
          <a
            href="#"
            className="px-2 lg:px-0 uppercase font-bold text-purple-800"
          >
            LOGO
          </a>
          <ul className="inline-flex items-center">
            <li className="px-2 md:px-4">
              <Link
                to="/"
                className="text-purple-600 font-semibold hover:text-purple-500"
              >
                Home
              </Link>
            </li>
            <li className="px-2 md:px-4">
              <Link
                to="/about"
                className="text-gray-500 font-semibold hover:text-purple-500"
              >
                About
              </Link>
            </li>

            <li className="px-2 md:px-4">
              <Link
                to="/contact"
                className="text-gray-500 font-semibold hover:text-purple-500"
              >
                Contact
              </Link>
            </li>
            <li className="px-2 md:px-4 hidden md:block">
              <Link
                to="login"
                className="text-gray-500 font-semibold hover:text-purple-500"
              >
                Login
              </Link>
            </li>
            {/* <li className="px-2 md:px-4 hidden md:block">
              <a
                href=""
                className="text-gray-500 font-semibold hover:text-purple-500"
              >
                Register
              </a>
            </li> */}
          </ul>
        </header>
        {/* <!-- header ends here --> */}
        <main className="mt-10">
          <div className="block md:flex md:space-x-2 px-2 lg:p-0">
            <div
              className="mb-4 md:mb-0 w-full md:w-2/3 relative rounded inline-block"
              style={{ height: "24em" }}
            >
              <div
                className="absolute left-0 bottom-0 w-full h-full z-10"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
                }}
              ></div>

              {/* <button
                    className="absolute right-0 top-0 bg-orange-500 text-white hover:bg-orange-700 px-2 py-3 z-20 focus:outline-none"
                  >
                    <i className="fa-2x far fa-edit"></i>
                  </button> */}

              <img
                src={`uploads/catalyst_1600743397429.png`}
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

            <div
              className="w-full md:w-1/3 relative rounded"
              style={{ height: "24em" }}
            >
              <div
                className="absolute left-0 top-0 w-full h-full z-10"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
                }}
              ></div>
              <img
                src={`uploads/catalyst_1600743397429.png`}
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
            </div>
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
                    backgroundImage: "url('catalyst.png')",
                  }}
                  title="deit is very important"
                ></div>
                <div className="bg-white rounded px-4 flex flex-col justify-between leading-normal">
                  <div>
                    <div className="mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2">
                      Aliquam venenatis nisl id purus rhoncus, in efficitur sem
                      hendrerit.
                    </div>
                    <p className="text-gray-700 text-base">
                      Duis euismod est quis lacus elementum, eu laoreet dolor
                      consectetur. Pellentesque sed neque vel tellus lacinia
                      elementum. Proin consequat ullamcorper eleifend.
                    </p>
                  </div>
                </div>
              </a>

              <div className="rounded w-full lg:flex mb-10">
                <div
                  className="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75"
                  style={{
                    backgroundImage: "url('catalyst.png')",
                  }}
                  title="deit is very important"
                ></div>
                <div className="bg-white rounded px-4 flex flex-col justify-between leading-normal">
                  <div>
                    <div className="mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2">
                      Integer commodo, sapien ut vulputate viverra
                    </div>
                    <p className="text-gray-700 text-base">
                      Nam malesuada aliquet metus, ac commodo augue mollis sit
                      amet. Nam bibendum risus sit amet metus semper
                      consectetur. Proin consequat ullamcorper eleifend. Nam
                      bibendum risus sit amet metus semper consectetur.
                    </p>
                  </div>
                </div>
              </div>
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
                      <span className="text-gray-500 ml-auto">2 pieces</span>
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
                      <span className="text-gray-500 ml-auto">3 pieces</span>
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
                      <span className="text-gray-500 ml-auto">2 pieces</span>
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
                      <span className="text-gray-500 ml-auto">5 pieces</span>
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
                  Subscribe to our newsletter. We deliver the best health
                  related articles to your inbox
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
        {/* <!-- main ends here --> */}

        {/* collection */}
        <section className="text-gray-700 body-font">
          <div className="container px-5 py-24 mx-auto">
            <h2 className="font-semibold text-2xl">Collections</h2>
            {!collections.length && (
              <div className="alert mt-3 flex flex-row items-center bg-red-200 p-5 rounded border-b-2 border-red-300">
                <div className="alert-icon flex items-center bg-red-100 border-2 border-red-500 justify-center h-10 w-10 flex-shrink-0 rounded-full">
                  <span className="text-red-500">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      className="h-6 w-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div className="alert-content ml-4">
                  <div className="alert-title font-semibold text-lg text-red-800">
                    Ooppss.
                  </div>
                  <div className="alert-description text-sm text-red-600">
                    Seems like you don't have any collections yet, please add
                    one 😊
                  </div>
                </div>
              </div>
            )}
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 -m-4 mt-4">
              {collections.map((item) => (
                <div
                  key={item._id}
                  className="w-full mx-1 my-1 border-2 border-solid border-red-200 rounded-t-lg bg-gray-100 shadow-lg cursor-pointer relative"
                >
                  {/* <ImageModal file_path={item.image.file_path}>
                    <img
                      alt="catalyst"
                      className="object-cover object-center w-full h-full block transform hover:scale-110 transition-all duration-300"
                      src={item.image.file_path}
                    />
                  </ImageModal> */}
                  <div>
                    <a
                      className="block relative h-48 rounded overflow-hidden"
                      onClick={() => openModal(item.image.file_path)}
                    >
                      <img
                        alt="catalyst"
                        className="object-cover object-center w-full h-full block transform hover:scale-110 transition-all duration-300"
                        src={item.image.file_path}
                      />
                    </a>
                  </div>
                  <div className="mt-4 px-2 py-2">
                    {/* <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 text-center">
                      {item.created_by.username}
                    </h3> */}
                    <h2 className="text-gray-900 title-font text-lg font-medium text-center">
                      {item.image.original_name}
                    </h2>
                    <p className="mt-1 font-semibold text-center">
                      {item.price} php
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* collection end */}

        {/* <!-- footer --> */}
        <footer className="border-t mt-32 pt-12 pb-32 px-4 lg:px-0">
          <div className="flex">
            <div className="w-full md:w-1/3 lg:w-1/4">
              <h6 className="font-semibold text-gray-700 mb-4">Company</h6>
              <ul>
                <li>
                  <a href="" className="block text-gray-600 py-2">
                    Team
                  </a>
                </li>
                <li>
                  <a href="" className="block text-gray-600 py-2">
                    About us
                  </a>
                </li>
                <li>
                  <a href="" className="block text-gray-600 py-2">
                    Press
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-full md:w-1/3 lg:w-1/4">
              <h6 className="font-semibold text-gray-700 mb-4">Content</h6>
              <ul>
                <li>
                  <a href="" className="block text-gray-600 py-2">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="" className="block text-gray-600 py-2">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="" className="block text-gray-600 py-2">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="" className="block text-gray-600 py-2">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className="Modal"
        overlayClassName="Overlay"
      >
        <div className="w-full h-full">
          <img
            alt="catalyst"
            className="object-cover object-center border-b border-2 border-gray-600 rounded-md"
            width="500"
            src={currentImage}
          />

          <div className="px-5 pt-4 flex justify-center">
            <button
              onClick={closeModal}
              className="text-sm py-2 px-3 text-red-500 hover:text-red-600 transition duration-150 focus:outline-none"
            >
              <i className="fa-3x far fa-times-circle"></i>
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Home;
