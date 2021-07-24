import React from 'react';
import style from './services.module.css'

type ServicesPropsType = {
    blockName:string;
    blockText:string
}
export const Services = React.memo((props:ServicesPropsType) => {
    return(
        <div className={style.services__inner}>
            <a id='services'>
              <h2 className={style.services__title}>{props.blockName}</h2>
              <p className={style.services__text}>
                  {props.blockText}
              </p>
            </a>
        </div>
    )
})