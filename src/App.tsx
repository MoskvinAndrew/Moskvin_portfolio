import React, {useEffect, useState} from 'react';
import './App.css';
import {Header} from "./components/header/header";
import {Top} from "./components/top/top";
import {Services} from "./components/services/services";
import {Item} from "./components/services/service_item/item";
import {faCheck, faPaintBrush, faTrophy,faCog,faHome,faRetweet,faFlag} from "@fortawesome/free-solid-svg-icons";
import {Statistic__item} from "./components/statistic/statistic";
import {Portfolio} from "./components/portfolio/portfolio";
import {My_works} from "./components/my_works/my_works";
import {allData} from './Adata/data'


function App() {

    const [offsetY, setoffsetY] = useState<number>(0);

    const handleScroll = () => {
        setoffsetY(window.pageYOffset);
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    }, []);

    return (
        <div className="App">
            <Header/>

            <div className="top">
                <Top
                    offSetY={offsetY}
                      topTitle={allData.top.topTitle}
                      topText={allData.top.topDescriptionText}
                />
            </div>
            <Services
                blockName={allData.services.blockName}
                blockText={allData.services.blockText}
            />
            <div className='services__background'>
                <div className='services__items'>
                    <Item icon={faPaintBrush}
                          itemTitle={allData.servicesItem.itemTitle[0]}
                          itemText={allData.servicesItem.itemText[0]}
                    />
                    <Item icon={faTrophy}
                          itemTitle={allData.servicesItem.itemTitle[1]}
                          itemText={allData.servicesItem.itemText[0]}
                    />
                    <Item icon={faCheck}
                          itemTitle={allData.servicesItem.itemTitle[2]}
                          itemText={allData.servicesItem.itemText[0]}
                    />
                </div>
            </div>
            <div className= 'statistic'>
                <Statistic__item  icon={faCog}
                                  staticText={allData.statisticItem.staticText[0]}
                                  digit={allData.statisticItem.digit[0]}
                                  order={allData.statisticItem.order[0]} />
                <Statistic__item icon={faHome}
                                 staticText={allData.statisticItem.staticText[1]}
                                 digit={allData.statisticItem.digit[1]}
                                 order={allData.statisticItem.order[1]} />
                <Statistic__item icon={faRetweet}
                                 staticText={allData.statisticItem.staticText[2]}
                                 digit={allData.statisticItem.digit[2]}
                                 order={allData.statisticItem.order[2]} />
                <Statistic__item icon={faFlag}
                                 staticText={allData.statisticItem.staticText[3]}
                                 digit={allData.statisticItem.digit[3]}
                                 order={allData.statisticItem.order[3]} />
            </div>

            <section className='portfolio' >
                <Portfolio offSetY={offsetY}
                           blockName={allData.portfolio.blockName}
                           blockText={allData.portfolio.blockText}
                />
            </section>
            <section className='examples'>
                <My_works/>

            </section>

        </div>
    );
}

export default App;

