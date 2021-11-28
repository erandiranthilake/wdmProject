import React from "react";
import { useHistory } from "react-router-dom";

const Logout = () => {
  const history = new useHistory();
  localStorage.setItem("userRoles", JSON.stringify([]));
  history.replace("/");
  window.location.reload();
  return <React.Fragment>Logout successfully</React.Fragment>;
};

export default Logout;
