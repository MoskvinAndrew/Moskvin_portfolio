import React from "react"
import style from"./item.module.css"


type itemPropsType = {
    icon: any
    itemTitle:string
    itemText:string
}

export const Item = React.memo((props:itemPropsType) => {
    return(
        <div className={style.item__inner}>
            <div className={style.item__logo}>
            <img src={props.icon}  style={{width:"46px"}}/>
           </div>
            <h2 className={style.item__title}>{props.itemTitle}</h2>
            <p className={style.item__text}>
                {props.itemText}
            </p>

       </div>
    )
})