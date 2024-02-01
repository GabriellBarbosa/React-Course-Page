import slideStyles from '../../../../assets/css/Slide.module.css';
import styles from './styles.module.css';
import useSlide from '../../../../hooks/useSlide';
import useScrollbar from '../../../../hooks/useScrollbar';
import React from 'react';

import { default as logo } from '../../../../assets/BookInVideo.svg';
import { default as OrderProcessor } from '../../../../assets/OrderProcessor.png';
import { default as OrderProcessorExtracted } from '../../../../assets/OrderProcessorExtracted.png';

function _0503() {
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
                    <h1 className={`${slideStyles.title} ${slideStyles.introTitle}`}>Coesão</h1>
                    <h3 className={slideStyles.subtitle}>0503 Capítulo: Classes<span>.</span></h3>
                </div>
            </section>

            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <h2 className={slideStyles.grayTitle}>O que é coesão?</h2>
                    <p className={`
                        ${styles.smallSerifText} 
                        ${slideStyles.smallSerifText} 
                        ${slideStyles.separatorBefore}`
                    }>Unidade lógica, coerência de um pensamento, de uma obra.</p>
                    <p className={`${slideStyles.infoSource} ${styles.infoSource}`}>
                        Definição do dicionário Oxford Languages.
                    </p>
                </div>
            </section>

            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <h2 className={slideStyles.regular_title}>Coesão da Classe</h2>
                    <h3 className={slideStyles.subtitle}>Como medir a coesão de uma classe<span>.</span></h3>
                    <ul className={`${styles.list} ${styles.cohesionList}`}>
                        <li>
                            <span className={`${styles.listItemTitle} ${styles.highCohesion}`}>Coesão alta.</span>
                            <span className={styles.itemListDescription}>Variáveis de instância sendo utilizadas pela maioria dos métodos.</span>
                        </li>
                        <li>
                            <span className={`${styles.listItemTitle} ${styles.lowCohesion}`}>Coesão baixa.</span>
                            <span className={styles.itemListDescription}>Apenas alguns métodos utilizam certas variáveis de instância.</span>
                        </li>
                    </ul>
                </div>
            </section>

            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div>
                    <h2 className={styles.refactoringTitle}>Aumentando a Coesão</h2>
                    <div className={styles.codeExamples}>
                        <div>
                            <p className={styles.codeDescription}><span className={slideStyles.hightlight}>Antes:</span> poucos métodos utilizando as variáveis de instância da classe.</p>
                            <div className={styles.imgWrapper}>
                                <img src={OrderProcessor} alt="Uma classe com poucos métodos utilizando as váriaveis de instância" />
                            </div>
                        </div>
                        <div>
                            <p className={styles.codeDescription}><span className={slideStyles.hightlight}>Depois:</span> extraímos as variáveis de instância junto aos métodos que as utilizam.</p>
                            <div className={styles.imgWrapper}>
                                <img src={OrderProcessorExtracted} alt="Duas classes com poucas váriaveis de instância e a maioria dos métodos estão utilizando essas variáveis" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <h2 className={slideStyles.regular_title}>Garantindo Classes Coesas</h2>
                    <ul className={`${slideStyles.list} ${styles.list}`}>
                        <li className={styles.checkIcon}>Poucas variáveis de instância.</li>
                        <li className={styles.checkIcon}>A maioria dos métodos utilizando as variáveis de instância.</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default _0503;