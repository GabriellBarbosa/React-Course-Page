import slideStyles from '../../../../assets/css/Slide.module.css';
import styles from './styles.module.css';
import useSlide from '../../../../hooks/useSlide';
import useScrollbar from '../../../../hooks/useScrollbar';
import React from 'react';

import { default as logo } from '../../../../assets/BookInVideo.svg';

function _0307() {
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
                    <span className={slideStyles.logo}><img src={logo} alt="BookInVideo" /></span>
                    <h1 className={`${slideStyles.title} ${slideStyles.introTitle}`}>Exercicío</h1>
                    <h3 className={slideStyles.subtitle}>0307 Capítulo: Funções<span>.</span></h3>
                </div>
            </section>
            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <p className={styles.tip}>Não se faz código limpo de primeira.</p>
                    <p className={styles.tip}>Não vai ser perfeito, mas pode ser bom e agradável.</p>
                    <p className={styles.tip}>Limpar o código leva geralmente o mesmo tempo que você demorou para escrevê-lo.</p>
                </div>
            </section>
        </div>
    );
}

export default _0307;