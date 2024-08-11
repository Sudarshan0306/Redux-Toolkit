import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store";

const Login = () => {
  const auth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authActions.login());
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="enter username" />
        <input type="password" placeholder="enter password" />
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
