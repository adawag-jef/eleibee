import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/actions/authActions";

const Login = ({ history }) => {
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.authReducer);

  const [user, setUser] = useState({ username: "", password: "" });

  const onChangeHandler = (evt) => {
    setUser({ ...user, [evt.target.name]: evt.target.value });
  };

  const onSubmitHandler = (evt) => {
    evt.preventDefault();
    dispatch(login(user, history));
  };

  return (
    <>
      <div className="w-full h-screen flex">
        <img
          src="https://images.unsplash.com/photo-1565287267132-e1461a7b7c78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          // src="https://images.unsplash.com/photo-1540569876033-6e5d046a1d77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          alt="background"
          className="object-cover object-center h-screen w-7/12"
        />
        <form
          onSubmit={onSubmitHandler}
          className="bg-white flex flex-col justify-center items-center w-5/12 shadow-lg"
        >
          <h1 className="text-3xl font-bold text-pink-500 mb-2">LOGIN</h1>
          <div className="w-1/2 text-center">
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={onChangeHandler}
              placeholder="username"
              autoComplete="off"
              className="shadow-md border w-full h-10 px-3 py-2 text-pink-500 focus:outline-none focus:border-pink-500 mb-3 rounded"
            />
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={onChangeHandler}
              placeholder="password"
              autoComplete="off"
              className="shadow-md border w-full h-10 px-3 py-2 text-pink-500 focus:outline-none focus:border-pink-500 mb-3 rounded"
            />
            <button className="bg-pink-500 hover:bg-pink-600 text-white px-3 py-1 rounded-full text-lg focus:outline-none shadow w-full">
              Sign In
            </button>
          </div>
          <div className="text-red-500 mt-6"> {authUser.error_msg}</div>
        </form>
      </div>
    </>
  );
};

export default Login;
