import { createContext, useState } from "react";

const Context = createContext({
  page: 0,
});

export function ContextProvider({ children }) {
  let [page, setPage] = useState(1);

  return (
    <Context.Provider value={{ page, setPage }}>{children}</Context.Provider>
  );
}

export default Context;
