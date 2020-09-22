import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import AdminLayout from "../containers/AdminLayout";
import FormModal from "./FormModal";
import Toast from "./Toast";

import { fetchImages } from "../store/actions/imageMngtAction";
import {
  fetchCollection,
  postCollection,
  removeCollection,
  editCollection,
  updateCollection,
} from "../store/actions/collecitonAction";
// import AddCollectionModal from "./AddCollectionModal";
import Modal from "react-modal";
Modal.setAppElement("#modal-root");

const SiteManagement = ({ history }) => {
  const [isAddCollectionModalOpen, setIsAddCollectionModalOpen] = useState(
    false
  );
  const dispatch = useDispatch();
  const { images } = useSelector((state) => state.imageMngtReducer);
  const { collections, currentCollection } = useSelector(
    (state) => state.collectionReducer
  );

  const options = images.map((img) => ({
    value: img,
    label: img.original_name,
  }));

  const [newCollection, setNewCollection] = useState({ image_id: "" });
  const [price, setPrice] = useState(0);
  const [message, setMessage] = useState({ msg: "", type: "" });
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    dispatch(fetchImages());
    dispatch(fetchCollection());
  }, []);

  const submitCollection = (e) => {
    e.preventDefault();
    console.log("submitting", newCollection);
    const body = { image_id: newCollection.image_id, price: price };
    dispatch(
      postCollection(
        body,
        (res) => {
          console.log(res.message.msgBody);
          setMessage({
            msg: res.message.msgBody,
            type: "success",
          });
          setShowToast(true);
          setNewCollection({ image_id: "" });
          setPrice(0);
          setIsAddCollectionModalOpen(false);
        },
        (err) => {
          console.log(err.response.data.message.msgBody);
          setMessage({
            msg: err.response.data.message.msgBody,
            type: "danger",
          });
          setShowToast(true);
          setIsAddCollectionModalOpen(false);
        }
      )
    );
  };

  const deleteCollection = (id) => {
    const success = (res) => {
      console.log(res);
      setMessage({
        msg: res.message.msgBody,
        type: "success",
      });
      setShowToast(true);
    };
    const fail = (err) => {
      console.log(err);
      setMessage({
        msg: err.response.data.message.msgBody,
        type: "danger",
      });
      setShowToast(true);
    };
    dispatch(removeCollection(id, success, fail));
  };

  const updateCurrentCollection = () => {
    const success = (res) => {
      console.log(res);
      setMessage({
        msg: res.message.msgBody,
        type: "success",
      });
      setShowToast(true);
    };
    const fail = (err) => {
      console.log(err);
      setMessage({
        msg: err.response.data.message.msgBody,
        type: "danger",
      });
      setShowToast(true);
    };
    dispatch(updateCollection(currentCollection, success, fail));
  };
  return (
    <AdminLayout>
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
                >
                  <div
                    className="absolute left-0 bottom-0 w-full h-full z-10"
                    style={{
                      backgroundImage:
                        "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
                    }}
                  >
                    <FormModal icon={"fa-2x far fa-edit"}>
                      <FormModal.Header>this is header</FormModal.Header>
                      <FormModal.Body>This is a body</FormModal.Body>
                    </FormModal>
                  </div>

                  {/* <button
                    className="absolute right-0 top-0 bg-orange-500 text-white hover:bg-orange-700 px-2 py-3 z-20 focus:outline-none"
                  >
                    <i className="fa-2x far fa-edit"></i>
                  </button> */}

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
                  >
                    <FormModal icon={"fa-2x far fa-edit"}>
                      <FormModal.Header>this is header</FormModal.Header>
                      <FormModal.Body>This is a body</FormModal.Body>
                    </FormModal>
                  </div>
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
                          Aliquam venenatis nisl id purus rhoncus, in efficitur
                          sem hendrerit.
                        </div>
                        <p className="text-gray-700 text-base">
                          Duis euismod est quis lacus elementum, eu laoreet
                          dolor consectetur. Pellentesque sed neque vel tellus
                          lacinia elementum. Proin consequat ullamcorper
                          eleifend.
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
                          Nam malesuada aliquet metus, ac commodo augue mollis
                          sit amet. Nam bibendum risus sit amet metus semper
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
            <section className="text-gray-700 body-font">
              <div className="container px-5 py-24 mx-auto">
                <div className="flex">
                  <button
                    onClick={() => setIsAddCollectionModalOpen(true)}
                    className=" flex items-center
                      focus:outline-none border rounded-full
                      py-2 px-6 leading-none border-blue-500
                      dark:border-blue-600 select-none  bg-blue-400 text-white  hover:bg-white hover:text-blue-400
                      dark-hover:text-gray-200 transition duration-300 ease-in-out"
                  >
                    <i className="far fa-plus-square mr-2"></i>
                    Add Collection
                  </button>
                </div>
                {/* <AddCollectionModal submit={submitCollection}>
                  <AddCollectionModal.Header>
                    Add Collection
                  </AddCollectionModal.Header>
                  <AddCollectionModal.Body>
                    <div className="flex justify-between">
                      <label htmlFor="select" className="mr-4">
                        Image:
                      </label>
                      <Select
                        className="flex-grow"
                        value={newCollection.value}
                        onChange={(e) => {
                          setNewCollection({
                            ...newCollection,
                            image_id: e.value._id,
                          });
                        }}
                        options={options}
                      />
                    </div>
                    <div className="flex mt-2">
                      <label htmlFor="" className="mr-8">
                        Price
                      </label>
                      <input
                        className="shadow-xs border border-gray-400 w-full h-10 px-3 py-2 text-blue-500 focus:outline-none focus:border-blue-700 focus:border-4 mb-3 rounded"
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                      />
                    </div>
                  </AddCollectionModal.Body>
                </AddCollectionModal> */}
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
                        Seems like you don't have any collections yet, please
                        add one 😊
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
                      <FormModal
                        icon={"far fa-edit"}
                        editCollection={editCollection}
                        collection={item}
                        submit={updateCurrentCollection}
                      >
                        <FormModal.Header>this is header</FormModal.Header>
                        <FormModal.Body>
                          <Select
                            value={currentCollection.value}
                            onChange={(e) => {
                              dispatch(
                                editCollection({
                                  ...currentCollection,
                                  image: e.value,
                                })
                              );
                            }}
                            options={options}
                          />
                          <input
                            className="shadow-md border w-full h-10 px-3 py-2 text-blue-500 focus:outline-none focus:border-blue-500 mb-3 rounded"
                            type="number"
                            value={currentCollection.price}
                            onChange={(e) =>
                              dispatch(
                                editCollection({
                                  ...currentCollection,
                                  price: e.target.value,
                                })
                              )
                            }
                          />
                        </FormModal.Body>
                      </FormModal>
                      <button
                        onClick={() => deleteCollection(item._id)}
                        className="absolute top-0 right-0 px-3 py-2 bg-red-600 z-20"
                      >
                        <i className="text-white fas fa-trash"></i>
                      </button>
                      <a className="block relative h-48 rounded overflow-hidden">
                        <img
                          alt="catalyst"
                          className="object-cover object-center w-full h-full block transform hover:scale-110 transition-all duration-300"
                          src={item.image.file_path}
                        />
                      </a>
                      <div className="mt-4 px-2 py-2">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 text-center">
                          {item.created_by.username}
                        </h3>
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
          </div>
        </div>
      </div>
      <Toast
        showToast={showToast}
        message={message.msg}
        type={message.type}
        onCloseRequest={() => setShowToast(false)}
      />
      <Modal
        isOpen={isAddCollectionModalOpen}
        onRequestClose={() => setIsAddCollectionModalOpen(false)}
        contentLabel="Image Modal"
        className="Modal"
        overlayClassName="Overlay"
      >
        <form onSubmit={submitCollection}>
          <div className="flex justify-between">
            <label htmlFor="select" className="mr-4">
              Image:
            </label>
            <Select
              className="flex-grow"
              value={newCollection.value}
              onChange={(e) => {
                setNewCollection({
                  ...newCollection,
                  image_id: e.value._id,
                });
              }}
              options={options}
            />
          </div>
          <div className="flex mt-2">
            <label htmlFor="" className="mr-8">
              Price
            </label>
            <input
              className="shadow-xs border border-gray-400 w-full h-10 px-3 py-2 text-blue-500 focus:outline-none focus:border-blue-700 focus:border-4 mb-3 rounded"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="px-5 py-4 flex justify-end">
            <button type="submit" className="px-3 py-2 bg-blue-400">
              Submit
            </button>
            <button
              className="px-3 py-2 bg-red-400"
              onClick={() => setIsAddCollectionModalOpen(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </AdminLayout>
  );
};

export default SiteManagement;
