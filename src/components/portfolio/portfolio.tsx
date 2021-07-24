import React from "react";
import style from "./portfolio.module.css"

type portfolioPropsType = {
    offSetY:number,
    blockName:string,
    blockText:string
}

export const Portfolio = React.memo((props:portfolioPropsType) => {

    return(
        <div className={style.portfolio__inner} style={{transform:`translateY(-${props.offSetY * 0.1}px)`}} >
            <a id='portfolio'>
            <h2 className={style.portfolio__title}>
                {props.blockName}
            </h2>
            <p className={style.portfolio__text}>
                {props.blockText}
            </p>
            </a>
        </div>)
})