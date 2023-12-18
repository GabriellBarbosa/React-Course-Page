import slidesStyle from '../../../../assets/css/Slide.module.css';
import useSlide from '../../../../hooks/useSlide';

import { default as logo } from '../../../../assets/BookInVideo.svg';
import useScrollbar from '../../../../hooks/useScrollbar';
import React from 'react';

function _0301() {
    const { slideNumber, addSlide } = useSlide();
    const { hideScrollbar, showScrollbar } = useScrollbar();

    React.useEffect(() => {
        hideScrollbar();
        return () => showScrollbar();
    }, []);

    return (
        <div 
            className={`${slidesStyle.slidesWrapper}`} 
            data-testid="slidesWrapper" 
            data-slide-number={slideNumber}
        >
            <section className={slidesStyle.slide} data-testid="slide" ref={addSlide}>
                <div className={slidesStyle.container}>
                    <span className={slidesStyle.logo}><img src={logo} alt="BookInVideo" /></span>
                    <h1 className={`${slidesStyle.title} ${slidesStyle.introTitle}`}>Funções</h1>
                    <h3 className={slidesStyle.subtitle}>0301 Capítulo: Funções<span>.</span></h3>
                </div>
            </section>
        </div>
    );
}

export default _0301;