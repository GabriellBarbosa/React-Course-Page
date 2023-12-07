import styles from './styles.module.css';
import slideStyles from '../../../../assets/css/Slide.module.css';

import useSlide from '../../../../hooks/useSlide';
import React from 'react';
import useScrollbar from '../../../../hooks/useScrollbar';

import { default as logo } from '../../../../assets/BookInVideo.svg';

function _0201() {
    const { slideNumber, addSlide } = useSlide();
    const { hideScrollbar, showScrollbar } = useScrollbar();
    
    React.useEffect(() => {
        hideScrollbar();
        return () => showScrollbar();
    }, []);

    return (
        <div 
            className={`${slideStyles.slidesWrapper}`} 
            data-testid="slidesWrapper" 
            data-slide-number={slideNumber}
        >
            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <span className={styles.logo}><img src={logo} alt="BookInVideo" /></span>
                    <h1 className={`${slideStyles.title} ${slideStyles.introTitle}`}>Nomes Significativos</h1>
                    <h3 className={slideStyles.subtitle}>0201 Capítulo: Nomes<span>.</span></h3>
                </div>
            </section>
        </div>
    )   
}

export default _0201;