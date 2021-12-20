import React from "react";
import { Link, Outlet } from "react-router-dom";
import s from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <div>
      <h1>Конвертация валют</h1>

      <nav className="navigation">
        <ul className={s.navigation__list}>
          <li className={s.navigation__item}>
            <Link to="/" className={s.navigation__link}>
              Конвертер
            </Link>
          </li>
          <li className={s.navigation__item}>
            <Link to="/courses" className={s.navigation__link}>
              Курсы валют
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};
