import React from "react"
import style from"./item.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {IconProp} from "@fortawesome/fontawesome-svg-core";

type itemPropsType = {
    icon: IconProp
    itemTitle:string
    itemText:string
}

export const Item = (props:itemPropsType) => {
    return(
        <div className={style.item__inner}>
            <div className={style.item__logo}>
            <FontAwesomeIcon icon={props.icon}/>
           </div>
            <h2 className={style.item__title}>{props.itemTitle}</h2>
            <p className={style.item__text}>
                {props.itemText}
            </p>

       </div>
    )
}