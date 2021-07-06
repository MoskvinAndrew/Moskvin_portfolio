import React from "react";
import style from "./my_works.module.css"
import {Example} from "./example/example";
import socialNetwork from './../../images/social-media.png'
import socialNetwork2 from './../../images/social-network-png-free.png'




export const My_works = () => {
    return (
        <div className={style.myWorksInner}>
            <div className={style.leftPannel}>
            <Example
                    height={'350'}
                    picture={socialNetwork2}
                    title={'gallery stacked'}

                />
            <Example
                height={'650'}
                picture={socialNetwork2}
                title={'gallery stacked'}
            />

        </div>
            <div className={style.centralPannel}>
            <Example
                height={'650'}
                picture={socialNetwork}
                title={'gallery stacked'}
            />
                <Example
                    height={'350'}
                    picture={socialNetwork}
                    title={'gallery stacked'}
                />
            </div>
            <div className={style.rightPannel}>
                <Example
                    height={'500'}
                    picture={socialNetwork}
                    title={'gallery stacked'}
                />
                <Example
                    height={'500'}
                    picture={socialNetwork}
                    title={'gallery stacked'}
                />
            </div>




        </div>)
}