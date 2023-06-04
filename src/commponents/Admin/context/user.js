import React, { createContext } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const user = {
    username: "kminchelle",
    password: "0lelplR",
  };

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export { UserContext, UserProvider };
