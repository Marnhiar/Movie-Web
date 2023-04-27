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
      seatId: "",
      orderDate: ""
    }
  );
  function changeOrder(name, value) {
    let temp = order;
    order[name] = value;
    setOrder(temp);
  }
  const [login, setLogin] = useState(false);
  function changeLogin() {
    setLogin(!login);
  }

  return (
    <Context.Provider value={{ order, changeOrder, login, changeLogin }}>{children}</Context.Provider>
  );
}

export function useOrderContext() {
  return useContext(Context);
}