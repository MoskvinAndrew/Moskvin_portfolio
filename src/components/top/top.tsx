import React from "react";
import style from './top.module.css';
import avatar from './../../images/avatar.jpg'

type TopPropsTypes = {
    offSetY:number,
    topTitle:string,
    topText:string
}

export const Top = React.memo((props:TopPropsTypes) => {
    return (
        <div className={style.top__inner}

             style={{transform:`translateY(${-props.offSetY * 0.1}px)`}}>
            <a id='about'>
            <div className={style.top__avatarWrapper}>
            <div className={style.top__avatar}>
                <img src={avatar} alt='avatar'/>
            </div>
            </div>

            <div className={style.top__name}>
                <h1>{props.topTitle}</h1>
            </div>

            <div className={style.top__text}>
                <p>
                    {props.topText}
                </p>
            </div>
</a>
        </div>
    )

})