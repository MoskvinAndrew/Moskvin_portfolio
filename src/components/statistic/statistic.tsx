import React from "react";
import style from "./statistic.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

type statisticItemPropsType = {
    icon: IconProp,
    digit:number,
    staticText:string,
    order:number
}

export const Statistic__item = (props:statisticItemPropsType) => {
    const colorIdent = (value:number) =>{
        if(value%2 == 0){
            return "#e5ae47"
        } else {
            return "#4ad1e5"

        }
    }
    const digitSeparator = (digit:number) => {
        let stringArray = digit.toString().split("")
            if (stringArray.length === 4){
                stringArray.splice(1, 0, ",");
            }else  if (stringArray.length === 5){
                stringArray.splice(2, 0, ",");
            }else  if (stringArray.length === 6) {
                stringArray.splice(3, 0, ",");
            }
            return  stringArray.join("")
        }


    return (
        <div>
             <div className={style.statistic__inner}>

                 <div className={style.statistic__logo} style={{color:`${colorIdent(props.order)}`}}>
                     <FontAwesomeIcon icon={props.icon}/>
                 </div>

                 <div className={style.statistic__digit}>
                     {digitSeparator(props.digit)}
                 </div>
                 <h2 className={style.statistic__text}>
                     {props.staticText}
                 </h2>

             </div>
       </div>)
}