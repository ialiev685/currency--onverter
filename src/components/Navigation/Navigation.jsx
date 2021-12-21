import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import s from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <div>
      <h1>Приложения для конвертации валют</h1>

      <nav className="navigation">
        <ul className={s.navigation__list}>
          <li className={s.navigation__item}>
            <NavLink to="/" className={s.navigation__link}>
              Конвертер
            </NavLink>
          </li>
          <li className={s.navigation__item}>
            <NavLink to="/courses" className={s.navigation__link}>
              Курсы валют
            </NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};
