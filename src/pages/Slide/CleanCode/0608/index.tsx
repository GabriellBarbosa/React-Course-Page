import slideStyles from '../../../../assets/css/Slide.module.css';
import styles from './styles.module.css';
import useSlide from '../../../../hooks/useSlide';
import useScrollbar from '../../../../hooks/useScrollbar';
import React from 'react';
import CodeComparion from '../../components/CodeComparison';
import PrincipleExplanationComponent from '../../components/PrincipleExplanationComponent';
import {
    example1,
    example1Resolved,
    example2,
    example2Resolved,
    example3,
    example4
} from './Example';

import { default as logo } from '../../../../assets/BookInVideo.svg';

function _0608() {
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
                    <h1 className={`${slideStyles.title} ${slideStyles.introTitle}`}>Formatação</h1>
                    <h3 className={slideStyles.subtitle}>0608 Capítulo: Formatação<span>.</span></h3>
                </div>
            </section>

            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <h2 className={slideStyles.grayTitle}>Formatação Vertical</h2>
                    <p className={`${slideStyles.separatorBefore} ${slideStyles.cite}`}>Pule linha para separar os conceitos.</p>
                </div>
            </section>

            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <CodeComparion
                    before={example1}
                    after={example1Resolved}
                    beforeTitle="Sem separação vertical:"
                    afterTitle="Com separação vertical:"
                />
            </section>

            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div>
                    <h2 className={styles.comparisonTitle}>Função com mais de um Conceito</h2>
                    <CodeComparion 
                        before={example2}
                        after={example2Resolved}
                    />
                </div>
            </section>

            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <PrincipleExplanationComponent
                        title="Outra Função com mais de um Conceito"
                        description="Essa função está lidando com dois conceitos: definir 0 e 1 como não primos e também definir os múltiplos como não primos."
                        code={{
                            description: <></>,
                            value: example3,
                        }}
                    />
                </div>
            </section>

            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <PrincipleExplanationComponent
                        title="Metáfora do Jornal"
                        description="Em cima ficam as informações de nível mais alto, conforme você desce os detalhes vão surgindo."
                        code={{
                            description: <></>,
                            value: example4,
                        }}
                    />
                </div>
            </section>

            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <h2 className={slideStyles.regular_title}>Formatação Horizontal</h2>
                    <ul className={`${slideStyles.list} ${styles.list}`}>
                        <li>Indente certo.</li>
                        <li>Funções com poucos níveis de indentação.</li>
                        <li>Dê preferência as linhas curtas.</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default _0608;