import React from "react";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {faCheck, faPaintBrush, faTrophy,faCog,faHome,faRetweet,faFlag} from "@fortawesome/free-solid-svg-icons";

export type allDataType = typeof allData;
export const allData = {
    top:{
        topTitle:"Moskvin Andrew",
        topDescriptionText:"My name is Andrew, and I’m front-end developer." +
            " Now I’m searching for career and professional growth through deepening knowledge in front-end development." +
            " I know JavaScript, Typescript, HTML, CSS/SASS, React, Redux, Rest API," +
            " Unit tests, Storybook, npm/yarn, Material UI. In my free time I solve tasks on codewars.com." +
            " I able to work with large amount of information. Also, I can to work hard with tasks, herewith I be persistent." +
            " I like good teams with smart people, new challenges, and opportunities."

    },
    services:{
        blockName:'services',
        blockText:'The main technologies that I use'
    },
    servicesItem: {

        itemTitle: ['React', 'Redux', 'Typescript'],
        itemText: ['React Hooks,React pure component,Controlled components,React DOM',

            "React-Redux,Redux Toolkit,Thunks and Async Logic,Unit testing","Same as Javascript but better"]
    },
    statisticItem:{

        digit:[1067,6,789,438],
        staticText:["Сomponents Written","Projects Complete","Coffee Consumed","Days"],
        order:[1,2,3,4]

    },
    portfolio:{
        blockName:'portfolio',
        blockText:''
    },
}