import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { whoAmI } from "../../actions/usersAction";

// TODO: Leave it to your imagination
function Protected({ children }) {

  const { whoAmIResult } = useSelector((state) => state.UsersReducer)
  const dispatch = useDispatch();

  console.log(whoAmIResult.Role);

  useEffect(() => {
    dispatch(whoAmI())
    console.log( dispatch(whoAmI()))
  }, [dispatch]);
  const token = localStorage.getItem("token");

  if (!token) return <Navigate to="/login" />;

  return children;
}

export default Protected;
