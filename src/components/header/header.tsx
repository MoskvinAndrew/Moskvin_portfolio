import React, {useState} from "react";
import style from "./header.module.css";

export const Header = React.memo(() => {
    let [menuToggle, setMenuToggle] = useState<boolean>(false);
    const onClickHandler = () =>{
        setMenuToggle(!menuToggle)
    }
    console.log(menuToggle)
    return (
        <div className={style.header__inner}>
            <h1 className={style.header__title}>portfolio</h1>
         <div className={style.dropDownContainer}>
            <div className={style.header__list_btn } onClick={onClickHandler}></div>
             {menuToggle && <div className={style.dropDownMenu}>
                 <ul className={style.dropDownUl}>
                     <li className={style.header__item}>about</li>
                     <li className={style.header__item}>services</li>
                     <li className={style.header__item}>portfolio</li>
                     <li className={style.header__item}>blog</li>
                     <li className={style.header__item}>contact</li>
                 </ul>
             </div>}
         </div>
            <ul className={style.header__list }>
                <li className={style.header__item}>about</li>
                <li className={style.header__item}>services</li>
                <li className={style.header__item}>portfolio</li>
                <li className={style.header__item}>blog</li>
                <li className={style.header__item}>contact</li>
            </ul>

        </div>
    )

})