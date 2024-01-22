import slideStyles from '../../../../assets/css/Slide.module.css';
import styles from './styles.module.css';
import useSlide from '../../../../hooks/useSlide';
import useScrollbar from '../../../../hooks/useScrollbar';
import React from 'react';

import { default as logo } from '../../../../assets/BookInVideo.svg';

function _0401() {
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
                    <h1 className={`${slideStyles.title} ${slideStyles.introTitle}`}>Testes Unitários</h1>
                    <h3 className={slideStyles.subtitle}>0401 Capítulo: Testes Unitários<span>.</span></h3>
                </div>
            </section>
            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <h2 className={slideStyles.grayTitle}>Principal Motivação</h2>
                    <p className={`${slideStyles.separatorBefore} ${styles.cite}`}>Coragem para limpar o código.</p>
                    <p className={`${slideStyles.infoSource} ${styles.infoSource}`}>Desenvolvimento Ágil Limpo, Capítulo 5.</p>
                </div>
            </section>
            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <h2 className={slideStyles.grayTitle}>Três Regras do TDD</h2>
                    <ul className={styles.rulesList}>
                        <li>Não escrever o código de produção antes de ter escrito um teste que esteja falhando.</li>
                        <li className={`${slideStyles.separatorBefore} ${slideStyles.separatorAfter}`}>
                            Não escrever mais código que o suficiente para os testes passarem.
                        </li>
                        <li>Não escrever mais testes que o suficiente para identificar a falha.</li>
                    </ul>
                    <p className={`${slideStyles.infoSource} ${styles.infoSource}`}>Código Limpo, Capítulo 9.</p>
                </div>
            </section>
        </div>
    );
}

export default _0401;