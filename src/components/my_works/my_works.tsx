import React from "react";
import style from "./my_works.module.css";
import {Example} from "./example/example";
import todolist from './../../images/todolist.png';
import socialNetwork from './../../images/sNetwork.png';
import cards from './../../images/cards.png';
import carSharing from './../../images/carSharing.png';
import ansys from './../../images/ansys.png';







export const My_works = () => {
    return (
        <div className={style.myWorksInner}>
            <div className={style.leftPannel}>
            <Example
                    height={'350'}
                    picture={ansys}
                    title={'Ansys landing page mark up.'}

                />
            <Example
                height={'650'}
                picture={socialNetwork}
                title={'Social Network'}
            />

        </div>
            <div className={style.centralPannel}>
            <Example
                height={'650'}
                picture={cards}
                title={'Educational Cards Project'}
            />
                <Example
                    height={'350'}
                    picture={carSharing}
                    title={'Car Sharing landing page mark up.'}
                />
            </div>
            <div className={style.rightPannel}>
                <Example
                    height={'500'}
                    picture={todolist}
                    title={'todolist'}
                />
                <Example
                    height={'500'}
                    picture={todolist}
                    title={'gallery stacked'}
                />
            </div>




        </div>)
}