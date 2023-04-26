"use client";

import { createContext, useContext, useState } from "react";

const Context = createContext();

export function OrderProvider({ children }) {
  const [order, setOrder] = useState(
    {
      movieId: "",
      theaterId: "",
      date: "",
      time: "",
      seatId: ""
    }
  );
  function changeOrder(name, value) {
    let temp = order;
    order[name] = value;
    setOrder(temp);
  }

  return (
    <Context.Provider value={{ order, changeOrder }}>{children}</Context.Provider>
  );
}

export function useOrderContext() {
  return useContext(Context);
}