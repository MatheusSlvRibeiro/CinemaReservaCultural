import React, { createContext, useState, useContext, useEffect } from "react";
import Cookies from "js-cookie";

const CidadeContext = createContext();

export const CidadeProvider = ({ children }) => {
  const [cidade, setCidade] = useState(Cookies.get("cidade") || "saoPaulo");

  useEffect(() => {
    Cookies.set("cidade", cidade, { expires: 7, path: "/" });
  }, [cidade]);

  return (
    <CidadeContext.Provider value={{ cidade, setCidade }}>
      {children}
    </CidadeContext.Provider>
  );
};

export const useCidade = () => {
  const context = useContext(CidadeContext);
  if (!context) {
    throw new Error("useCidade deve ser usado dentro de um CidadeProvider");
  }
  return context;
};
