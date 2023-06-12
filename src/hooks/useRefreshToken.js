import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const res = await axios.get("http://127.0.0.1:8080/refresh", {
      withCredentials: true,
    });
    setAuth((prev) => {
      console.log(JSON.stringify(prev));
      console.log(res.data.access);
      return { ...prev, access: res.data.access };
    });
    return res.data.access;
  };
  return refresh;
};

export default useRefreshToken;
