import slideStyles from '../../../../assets/css/Slide.module.css';
import styles from './styles.module.css';
import useSlide from '../../../../hooks/useSlide';
import useScrollbar from '../../../../hooks/useScrollbar';
import React from 'react';
import { example1,  example2 } from './Example';

import { default as logo } from '../../../../assets/BookInVideo.svg';
import { default as crossCuttingConcerns } from '../../../../assets/cross-cutting-concerns.png';

import PrincipleExplanationComponent from '../../components/PrincipleExplanationComponent';

function _0603() {
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
                    <h1 className={`${slideStyles.title} ${slideStyles.introTitle}`}>Sistemas</h1>
                    <h3 className={slideStyles.subtitle}>0603 Capítulo: Sistemas<span>.</span></h3>
                </div>
            </section>

            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <h2 className={slideStyles.regular_title}>Preocupações Transversais</h2>
                    <p className={slideStyles.subtitle}>Em inglês: Cross-Cutting Concerns<span>.</span></p>
                    <div className={styles.img_wrapper}>
                        <img src={crossCuttingConcerns} alt="segurança, desempenho, tratamento de exceções, caching, comunicação e logging" />
                    </div>
                </div>
            </section>

            <section 
                className={slideStyles.slide} 
                data-testid="slide" 
                ref={addSlide}
            >
                <div className={slideStyles.container}>
                    <PrincipleExplanationComponent
                        title="Mistura de Preocupações"
                        description="Essa função além da lógica do domínio também possui lógica de segurança, transação e log. Desse jeito a lógica do domínio fica ofuscada."
                        code={{
                            description: <>Em TypeScript:</>,
                            value: example1,
                        }}
                    />
                </div>
            </section>

            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <h2 className={slideStyles.grayTitle}>Paradigma</h2>
                    <p className={`${slideStyles.separatorBefore} ${styles.focusedTitle}`}>Programação Orientada a Aspectos</p>
                    <p className={styles.subtitle}>Ou Aspect-Oriented Programming(AOP):<br/>Ela nos ajuda a separar as preocupações.</p>
                </div>
            </section>

            <section
                className={slideStyles.slide} 
                data-testid="slide" 
                ref={addSlide}
            >
                <div className={slideStyles.container}>
                    <PrincipleExplanationComponent
                        title="Separando Preocupações"
                        description="As demais preocupações foram movidas para outras funções através dos decorators. Agora conseguimos focar na lógica do domínio."
                        code={{
                            description: <>Em TypeScript:</>,
                            value: example2,
                        }}
                    />
                </div>
            </section>
        </div>
    );
}

export default _0603;