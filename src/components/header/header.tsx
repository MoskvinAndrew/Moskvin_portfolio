import React, {useState} from "react";
import style from "./header.module.css";

export const Header = React.memo(() => {
    let [menuToggle, setMenuToggle] = useState<boolean>(false);
    const onClickHandler = () =>{
        setMenuToggle(!menuToggle)
    }



    return (
        <div className={style.header__inner}>
            <h1 className={style.header__title}>portfolio</h1>
         <div className={style.dropDownContainer}>
            <div className={style.header__list_btn } onClick={onClickHandler}></div>
             {menuToggle && <div className={style.dropDownMenu}>
                 <ul className={style.dropDownUl}>
                     <li className={style.header__item_mobile}><a className={style.header__item_a} href='#about' onClick={onClickHandler}>about</a></li>
                     <li className={style.header__item_mobile}><a className={style.header__item_a} href='#services'onClick={onClickHandler}>services</a></li>
                     <li className={style.header__item_mobile}><a className={style.header__item_a} href='#portfolio'onClick={onClickHandler}>portfolio</a></li>
                     <li className={style.header__item_mobile}><a className={style.header__item_a} href='#cv'onClick={onClickHandler}>CV</a></li>
                    <li className={style.header__item_mobile}><a className={style.header__item_a} href='#contact'onClick={onClickHandler}>contacts</a></li>

                 </ul>
             </div>}
         </div>
            <ul className={style.header__list }>
                <li className={style.header__item}><a className={style.header__item_a} href='#about'>about</a></li>
                <li className={style.header__item}><a className={style.header__item_a} href='#services'>services</a></li>
                <li className={style.header__item}><a className={style.header__item_a} href='#portfolio'>portfolio</a></li>
                <li className={style.header__item}><a className={style.header__item_a} href='#cv'>CV</a></li>
                <li className={style.header__item}><a className={style.header__item_a} href='#contact'>contacts</a></li>

            </ul>

        </div>
    )

})