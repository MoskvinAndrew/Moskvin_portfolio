import React, {useEffect, useMemo, useState} from 'react';
import './App.css';
import {Header} from "./components/header/header";
import {Top} from "./components/top/top";
import {Services} from "./components/services/services";
import {Item} from "./components/services/service_item/item";
import {faCheck, faPaintBrush, faTrophy,faCog,faHome,faRetweet,faFlag} from "@fortawesome/free-solid-svg-icons";
import react from "./images/react-brands.svg"
import redux from "./images/redux.png"
import typescript from "./images/TS.png"
import {Statistic__item} from "./components/statistic/statistic";
import {Portfolio} from "./components/portfolio/portfolio";
import {My_works} from "./components/my_works/my_works";
import {allData} from './Adata/data'
import {ContactForm} from "./components/form/contactForm";
import {Footer} from "./components/footer/footer";
import throttle from 'lodash.throttle';



function App() {

    const [offsetY, setoffsetY] = useState<number>(0);
    const [displayWidth, setDisplayWidth] = useState<number>(0);


    const resizeHandler = () => {
        setDisplayWidth((window.innerWidth));
    }
    const handleScroll = () => {
        setoffsetY(window.pageYOffset);
    }


    const throttledResizeHandler = useMemo(
        () => throttle(resizeHandler, 1000)
        , []);
    const throttledEventHandler = useMemo(
        () => throttle(handleScroll, 200)
        , []);
    useEffect(() => {
        window.addEventListener('scroll', throttledEventHandler);
        window.addEventListener('resize', throttledResizeHandler);

        return () => (window.removeEventListener('scroll', throttledEventHandler),
        window.removeEventListener('resize', throttledResizeHandler))

    }, []);

    return (
        <div className="App">
            <section>
                <Header/>
            </section>
            <section className="top">
                <Top
                    offSetY={offsetY}
                      topTitle={allData.top.topTitle}
                      topText={allData.top.topDescriptionText}
                />
            </section>
            <section>
                <Services
                blockName={allData.services.blockName}
                blockText={allData.services.blockText}
            /></section>
            <section className='services__background'>
                <div className='services__items'>
                    <Item icon={react}
                          itemTitle={allData.servicesItem.itemTitle[0]}
                          itemText={allData.servicesItem.itemText[0]}
                    />
                    <Item icon={redux}
                          itemTitle={allData.servicesItem.itemTitle[1]}
                          itemText={allData.servicesItem.itemText[1]}
                    />
                    <Item icon={typescript}
                          itemTitle={allData.servicesItem.itemTitle[2]}
                          itemText={allData.servicesItem.itemText[2]}
                    />
                </div>
            </section>
            <section className= 'statistic'>
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
            </section>
            <section className='portfolio' >
                <Portfolio offSetY={offsetY}
                           blockName={allData.portfolio.blockName}
                           blockText={allData.portfolio.blockText}
                />
            </section>
            <section className='examples'>
                <My_works displayWidth={displayWidth}/>
            </section>
            <section>
                <ContactForm/>
            </section>
            <section className='footer'>
                <Footer/>
            </section>

        </div>
    );
}

export default App;

