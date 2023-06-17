import axios from "../api/axios";
import React, { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const res = await axios.post("/refresh", JSON.stringify({}), {
      headers: {
        Authorization: `Bearer ${setAuth}`,
      },
    });
    setAuth((prev) => {
      console.log(JSON.stringify(prev));
      console.log(res);
      return { ...prev, accessToken: res.data.accessToken };
    });
    return res.data.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
