import React, { useContext } from "react";
import { UserContext } from "./user";

function AuthUser(props) {
  const { user } = useContext(UserContext);

  return <div>{user.username}</div>;
}

export default AuthUser;
