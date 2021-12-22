import React from "react";
import { Converter } from "../components/Converter";
import s from "./HomePage.module.css";

export const HomePage = () => {
  return (
    <div className={s.homePage}>
      <h2 className={s.homePage__title}>Конвертер</h2>
      <Converter />
    </div>
  );
};
