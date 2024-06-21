import slideStyles from '../../../../assets/css/Slide.module.css';
import styles from './styles.module.css';
import useSlide from '../../../../hooks/useSlide';
import useScrollbar from '../../../../hooks/useScrollbar';
import React from 'react';

import { default as logo } from '../../../../assets/BookInVideo-black.svg';

function _0605() {
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
                    <h1 className={`${slideStyles.title} ${slideStyles.introTitle}`}>Projeto Simples</h1>
                    <h3 className={slideStyles.subtitle}>0605 Capítulo: Emergência<span>.</span></h3>
                </div>
            </section>

            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <h2 className={slideStyles.regular_title}>Projeto Simples</h2>
                    <h3 className={slideStyles.subtitle}>Regras de Kent Beck em ordem de relevância:</h3>
                    <ul className={`${slideStyles.list} ${styles.list}`}>
                        <li>Efetue todos os testes.</li>
                        <li>Sem repetição de código.</li>
                        <li>Expressar o propósito do programador.</li>
                        <li>Poucas classes e métodos.</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default _0605;