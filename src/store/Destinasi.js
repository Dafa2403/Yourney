import { createContext, useState } from "react";

const ListDestinasi = createContext({});

export const ListData = ({ children }) => {
  const [destinasi, setDestinasi] = useState({});
  return (
    <ListDestinasi.Provider value={{ destinasi, setDestinasi }}>
      {children}
    </ListDestinasi.Provider>
  );
};

export default ListDestinasi;
