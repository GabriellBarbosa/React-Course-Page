import styles from './styles.module.css';
import slideStyles from '../../../../assets/css/Slide.module.css';

import useSlide from '../../../../hooks/useSlide';
import React from 'react';
import useScrollbar from '../../../../hooks/useScrollbar';


function _0102() {
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
                    <h2 className={slideStyles.regular_title}>Configuração</h2>
                    <ul className={`${slideStyles.list} ${styles.list}`}>
                        <li><a href="https://nodejs.org/en/" className={styles.externalLink} target="_blank">https://nodejs.org/en/</a></li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default _0102;