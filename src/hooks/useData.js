import { useContext } from "react";
import ListDestinasi from "../store/Destinasi";

const useData = () => {
  return useContext(ListDestinasi);
};

export default useData;
