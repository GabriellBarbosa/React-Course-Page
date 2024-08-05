import slideStyles from '../../../../assets/css/Slide.module.css';
import styles from './styles.module.css';
import useSlide from '../../../../hooks/useSlide';
import useScrollbar from '../../../../hooks/useScrollbar';
import React from 'react';

import { default as logo } from '../../../../assets/BookInVideo.svg';

function _0609() {
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
                    <h1 className={`${slideStyles.title} ${slideStyles.introTitle}`}>Odores</h1>
                    <h3 className={slideStyles.subtitle}>0609 Capítulo: Odores e Heurísticas<span>.</span></h3>
                </div>
            </section>

            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <h2 className={slideStyles.regular_title}>Comentários</h2>
                    <ul className={`${slideStyles.list} ${styles.list}`}>
                        <li>Informações inapropriadas.</li>
                        <li>Obsoleto.</li>
                        <li>Redundante.</li>
                        <li>Mal escrito.</li>
                        <li>Código como comentário.</li>
                    </ul>
                </div>
            </section>

            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <h2 className={slideStyles.regular_title}>Funções</h2>
                    <ul className={`${slideStyles.list} ${styles.list}`}>
                        <li>Parâmetros em excesso.</li>
                        <li>Parâmetros de saída.</li>
                        <li>Parâmetros lógicos.</li>
                        <li>Função morta.</li>
                    </ul>
                </div>
            </section>

            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <h2 className={slideStyles.regular_title}>Geral</h2>
                    <ul className={`${slideStyles.list} ${styles.list}`}>
                        <li>Múltiplas linguagens em um arquivo-fonte.</li>
                        <li>Comportamento óbvio não implementado.</li>
                        <li>Comportamento incorreto nos limites.</li>
                        <li>Seguranças anuladas.</li>
                        <li>Duplicação.</li>
                    </ul>
                </div>
            </section>

            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <h2 className={slideStyles.regular_title}>Geral</h2>
                    <ul className={`${slideStyles.list} ${styles.list}`}>
                        <li>Código no nível errado de abstração.</li>
                        <li>As classes base dependem de suas subclasses.</li>
                        <li>Informações excessivas.</li>
                        <li>Código morto.</li>
                        <li>Inconsistência.</li>
                    </ul>
                </div>
            </section>

            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <h2 className={slideStyles.regular_title}>Geral</h2>
                    <ul className={`${slideStyles.list} ${styles.list}`}>
                        <li>Entulho.</li>
                        <li>Acoplamento artificial.</li>
                        <li>Inveja de recursos.</li>
                        <li>Parâmetros seletores.</li>
                        <li>Propósito obscuro.</li>
                    </ul>
                </div>
            </section>

            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <h2 className={slideStyles.regular_title}>Geral</h2>
                    <ul className={`${slideStyles.list} ${styles.list}`}>
                        <li>Responsabilidade mal posicionada.</li>
                        <li>Método estático inadequado.</li>
                    </ul>
                </div>
            </section>

            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <h2 className={slideStyles.regular_title}>Testes</h2>
                    <ul className={`${slideStyles.list} ${styles.list}`}>
                        <li>Testes insuficientes.</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default _0609;