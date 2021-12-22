import React from "react";
import s from "./Conteiner.module.css";

export const Conteiner = ({ children }) => {
  return <div className={s.conteiner}>{children}</div>;
};
