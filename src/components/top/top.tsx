import React from "react";
import style from './top.module.css';
import avatar from './../../images/avatar.jpg'

type TopPropsTypes = {
    offSetY:number,
    topTitle:string,
    topText:string
}

export const Top = (props:TopPropsTypes) => {
    return (
        <div className={style.top__inner}
             style={{transform:`translateY(${-props.offSetY * 0.1}px)`}}>

            <div className={style.top__avatarWrapper}>
            <div className={style.top__avatar}>
                <img src={avatar} alt='avatar'/>
            </div>
            </div>

            <div className={style.top__name}>
                <h2>{props.topTitle}</h2>
            </div>

            <div className={style.top__text}>
                <p>
                    {props.topText}
                </p>
            </div>

        </div>
    )

}