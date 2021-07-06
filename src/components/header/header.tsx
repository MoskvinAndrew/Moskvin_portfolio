import React from "react";
import style from "./header.module.css"

export const Header = () => {
    return (
        <div className={style.header__inner}>
            <h1 className={style.header__title}>portfolio</h1>
            <ul className={style.header__list}>
                <li className={style.header__item}>about</li>
                <li className={style.header__item}>services</li>
                <li className={style.header__item}>portfolio</li>
                <li className={style.header__item}>blog</li>
                <li className={style.header__item}>contact</li>
            </ul>

        </div>
    )

}