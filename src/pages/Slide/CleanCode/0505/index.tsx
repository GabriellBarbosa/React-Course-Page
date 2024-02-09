import slideStyles from '../../../../assets/css/Slide.module.css';
import styles from './styles.module.css';
import useSlide from '../../../../hooks/useSlide';
import useScrollbar from '../../../../hooks/useScrollbar';
import React from 'react';

import { default as Breaks } from './images/breaks.jpg';

function _0505() {
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
                    <h2 className={slideStyles.regular_title}>Híbridos</h2>
                    <h3 className={slideStyles.subtitle}>Meio objeto e meio estrutura de dados.</h3>
                    <ul className={`${slideStyles.list} ${styles.list} ${styles.listDecoration}`}>
                        <li>Expõe seus dados.</li>
                        <li>Expõe seus métodos.</li>
                    </ul>
                </div>
            </section>

            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <h2 className={slideStyles.regular_title}>Nosso Exemplo</h2>
                    <div className={styles.wheelDisc}>
                        <img src={Breaks} alt="" />
                    </div>
                </div>
            </section>

            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <h2 className={slideStyles.regular_title}>Lei de Demeter</h2>
                    <p className={slideStyles.subtitle}>Também conhecido como princípio do menor conhecimento.</p>
                    <ul className={`${slideStyles.list} ${styles.list} ${styles.demeter}`}>
                        <li>Cada unidade deve ter conhecimento limitado sobre outras unidades.</li>
                        <li>Cada unidade deve apenas conversar com seus amigos; não fale com estranhos.</li>
                        <li>Apenas fale com seus amigos imediatos.</li>
                    </ul>
                        <a 
                            className={`${slideStyles.infoSource} ${styles.infoSource}`} 
                            href="https://pt.wikipedia.org/wiki/Lei_de_Demeter" 
                            target="_blank"
                        >Artigo no Wikipedia.</a>
                </div>
            </section>
        </div>
    );
}

export default _0505;