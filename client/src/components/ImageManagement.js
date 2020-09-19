import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Toast from "./Toast";

import {
  fetchImages,
  deleteImage,
  uploadImage,
} from "../store/actions/imageMngtAction";

const FileUpload = () => {
  const dispatch = useDispatch();
  const { images, percentage } = useSelector((state) => state.imageMngtReducer);

  const [file, setFile] = useState(null);
  const [filename, setFilename] = useState("");
  const [message, setMessage] = useState({ msg: "", type: "" });
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    dispatch(fetchImages());
  }, []);

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const handleDeleteImage = async (img_id) => {
    const success = () => {
      setMessage({ msg: "File deleted", type: "success" });
      setShowToast(true);
    };
    const fail = (err) => {
      setMessage({ msg: err.response.message, type: "danger" });
      setShowToast(true);
    };
    dispatch(deleteImage(img_id, success, fail));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const success = () => {
      setMessage({ msg: "File uploaded", type: "success" });
      setShowToast(true);
      setFilename("");
      setFile(null);
    };
    const fail = (msg) => {
      setMessage({
        msg: msg,
        type: "danger",
      });
      setShowToast(true);
      setFilename("");
      setFile(null);
    };

    dispatch(uploadImage(file, success, fail));
  };
  return (
    <>
      <div className="px-24 py-12 text-gray-700 dark:text-gray-500 transition duration-500 ease-in-out">
        <h2 className="text-4xl font-medium capitalize">Image Management</h2>
        <div className="mt-1 mb-4 flex items-center justify-between">
          <span className="text-sm">
            available image
            <strong>100</strong>
          </span>

          <div className="flex items-center select-none">
            <span className="hover:text-pink-500 cursor-pointer mr-3">
              <svg viewBox="0 0 512 512" className="h-5 w-5 fill-current">
                <path
                  d="M505 442.7L405.3
                        343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7
                        44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1
                        208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4
                        2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9
                        0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7
                        0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0
                        128 57.2 128 128 0 70.7-57.2 128-128 128z"
                ></path>
              </svg>
            </span>

            <input
              className="bg-transparent focus:outline-none"
              placeholder="Search Images"
            />
          </div>

          <div className="flex items-center select-none">
            <span>Filter</span>
            <button
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
            <button
              className="ml-2 bg-gray-400 dark:bg-gray-600
                dark:text-gray-400 rounded-full p-2 focus:outline-none
                hover:text-pink-500 hover:bg-pink-300 transition
                duration-500 ease-in-out"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path
                  d="M18 21l-4-4h3V7h-3l4-4 4 4h-3v10h3M2
                        19v-2h10v2M2 13v-2h7v2M2 7V5h4v2H2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="border dark:border-gray-700 transition duration-500 ease-in-out"></div>
        <div className="h-3 relative rounded-full overflow-hidden my-3">
          <div className="h-full bg-gray-200 absolute"></div>
          <div
            className="h-full bg-green-500 absolute"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <form onSubmit={onSubmit}>
          <div className="border border-dashed border-gray-500 relative hover:bg-gray-400 hover:text-gray-100 transition-all duration-500 ease-in-out">
            <input
              type="file"
              onChange={onChange}
              className="cursor-pointer relative block opacity-0 w-full h-full p-10 z-50"
            />
            <div className="text-center p-5 absolute top-0 right-0 left-0 m-auto">
              {filename ? (
                <h4>{filename}</h4>
              ) : (
                <>
                  <h4>
                    Drop image anywhere to upload
                    <br />
                    or
                  </h4>
                  <p className="">Select Image</p>
                </>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="btn w-full block py-3 bg-green-400  text-white hover:bg-green-500 py-3 hover:text-green-600"
          >
            Upload
          </button>
        </form>

        {/* test */}

        <div className="antialiased font-sans bg-gray-200">
          <div className="mx-auto px-24 sm:px-8">
            <div className="py-8">
              <div className="-mx-4 sm:-mx-8 py-4 overflow-x-auto">
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                  {images.length ? (
                    <table className="min-w-full leading-normal">
                      <thead>
                        <tr>
                          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Image
                          </th>
                          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Name
                          </th>
                          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Owner
                          </th>
                          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Role
                          </th>
                          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Created at
                          </th>
                          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Action
                          </th>
                          {/* <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Status
                        </th> */}
                        </tr>
                      </thead>
                      <tbody>
                        {images.map((img) => (
                          <tr key={img._id}>
                            <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
                              <div className="flex items-center">
                                <div className="flex-none w-10 h-10">
                                  <img
                                    className="w-full h-full rounded-full"
                                    src={img.file_path}
                                    alt=""
                                  />
                                </div>
                              </div>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {img.original_name}
                              </p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {img.user.username}
                              </p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {img.user.role}
                              </p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {new Date(img.createdAt).toDateString()}
                              </p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <button
                                className="btn py-1 px-2 bg-red-500 text-red-700 hover:bg-red-700 hover:text-red-900 rounded-lg"
                                onClick={() => handleDeleteImage(img._id)}
                              >
                                delete
                              </button>
                            </td>
                          </tr>
                        ))}

                        {/* <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Blake Bowman
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            Editor
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            Jan 01, 2020
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span
                              aria-hidden
                              className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                            ></span>
                            <span className="relative">Activo</span>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Dana Moore
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            Editor
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            Jan 10, 2020
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span className="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                            <span
                              aria-hidden
                              className="absolute inset-0 bg-orange-200 opacity-50 rounded-full"
                            ></span>
                            <span className="relative">Suspended</span>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Alonzo Cox
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            Admin
                          </p>
                        </td>
                        <td className="px-5 py-5 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            Jan 18, 2020
                          </p>
                        </td>
                        <td className="px-5 py-5 bg-white text-sm">
                          <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                            <span
                              aria-hidden
                              className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                            ></span>
                            <span className="relative">Inactive</span>
                          </span>
                        </td>
                      </tr> */}
                      </tbody>
                    </table>
                  ) : (
                    <h4 className="text-center py-3">No images available</h4>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toast
        showToast={showToast}
        message={message.msg}
        type={message.type}
        handler={setShowToast}
      />
    </>
  );
};

export default FileUpload;
