import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../store/actions/authActions";

const Register = ({ history }) => {
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.authReducer);

  const [user, setUser] = useState({
    username: "",
    password: "",
    role: "user",
  });

  const onChangeHandler = (evt) => {
    setUser({ ...user, [evt.target.name]: evt.target.value });
  };

  const onSubmitHandler = (evt) => {
    evt.preventDefault();
    dispatch(register(user, history));
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <h3>Register</h3>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={onChangeHandler}
        />
        <br />
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={onChangeHandler}
        />
        <button type="submit">Register</button>
      </form>
      {authUser.error_msg}
    </div>
  );
};

export default Register;
