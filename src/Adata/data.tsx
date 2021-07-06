import React from "react";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {faCheck, faPaintBrush, faTrophy,faCog,faHome,faRetweet,faFlag} from "@fortawesome/free-solid-svg-icons";

export type allDataType = typeof allData;
export const allData = {
    top:{
        topTitle:"Moskvin Andrew",
        topDescriptionText:"Hi, my name Andrew and I am a Front-end developer ut lacinia in, elementum\n" +
            "                    id enim. Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo,\n" +
            "                    lacinia eget consectetur sed, convallis at tellus. Lorem ipsum dolor sit amet,\n" +
            "                    consecte"

    },
    services:{
        blockName:'services',
        blockText:'Lorem ipsum ligula molestie ultricies fringilla nostra.'
    },
    servicesItem: {

        itemTitle: ['Branding & Advertising', 'Branding & Advertising', 'Branding & Advertising'],
        itemText: ['Vestibulum ac diam sit amet quam vehicula' +
        ' elementum sed sit amet dui. Curabitur non nulla sit' +
        ' amet nisl tempus convallis quis ac lectus.']
    },
    statisticItem:{

        digit:[23934,56389,6789,2344],
        staticText:["Pizzas Eaten","Projects Complete","Coffee Consumed","Happy Clients"],
        order:[1,2,3,4]

    },
    portfolio:{
        blockName:'portfolio',
        blockText:' Lorem ipsum ligula molestie ultricies fringilla nostra .'
    },
}