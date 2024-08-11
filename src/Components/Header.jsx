import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store";

const Header = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(authActions.logout());
  };
  return (
    <>
      <div className="">
        <h2>Redux Toolkit</h2>
      </div>
      {isAuth && (
        <nav>
          <ul>
            <li className="">
              <h2>My Products</h2>
            </li>
            <li className="">
              <h2>My Sales</h2>
            </li>
            <li className="">
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Header;
