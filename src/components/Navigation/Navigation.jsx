import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import { Conteiner } from "../Conteiner";

export const Navigation = () => {
  return (
    <div className={s.wrapper}>
      <Conteiner>
        <nav className={s.navigation}>
          <ul className={s.navigation__list}>
            <li className={s.navigation__item}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? `${s.navigation__link} ${s.active}`
                    : s.navigation__link
                }
              >
                Конвертер
              </NavLink>
            </li>
            <li className={s.navigation__item}>
              <NavLink
                to="/courses"
                className={({ isActive }) =>
                  isActive
                    ? `${s.navigation__link} ${s.active}`
                    : s.navigation__link
                }
              >
                Курсы валют
              </NavLink>
            </li>
          </ul>
        </nav>
      </Conteiner>
    </div>
  );
};
