import slideStyles from '../../../../assets/css/Slide.module.css';
import styles from './styles.module.css';
import useSlide from '../../../../hooks/useSlide';
import useScrollbar from '../../../../hooks/useScrollbar';
import React from 'react';

import { default as logo } from '../../../../assets/BookInVideo.svg';

function _0610() {
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
                    <h1 className={`${slideStyles.title} ${slideStyles.introTitle}`}>Heurísticas</h1>
                    <h3 className={slideStyles.subtitle}>0610 Capítulo: Odores e Heurísticas<span>.</span></h3>
                </div>
            </section>

            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <h2 className={slideStyles.regular_title}>Geral</h2>
                    <ul className={`${slideStyles.list} ${styles.list}`}>
                        <li>Separação vertical.</li>
                        <li>Use variáveis descritivas.</li>
                        <li>Nomes de funções devem dizer o que elas fazem.</li>
                        <li>Entenda o algoritmo.</li>
                        <li>Torne dependências lógicas em físicas.</li>
                    </ul>
                </div>
            </section>

            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <h2 className={slideStyles.regular_title}>Geral</h2>
                    <ul className={`${slideStyles.list} ${styles.list}`}>
                        <li>Prefira polimorfismo a if/else ou switch/case.</li>
                        <li>Siga as convenções padrões.</li>
                        <li>Substitua números mágicos por constantes.</li>
                        <li>Seja preciso.</li>
                        <li>Estrutura acima de convenção.</li>
                    </ul>
                </div>
            </section>

            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <h2 className={slideStyles.regular_title}>Geral</h2>
                    <ul className={`${slideStyles.list} ${styles.list}`}>
                        <li>Encapsule as condicionais.</li>
                        <li>Evite condicionais negativas.</li>
                        <li>As funções devem fazer uma coisa só.</li>
                        <li>Acoplamentos temporais ocultos.</li>
                        <li>Não seja arbitrário.</li>
                    </ul>
                </div>
            </section>

            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <h2 className={slideStyles.regular_title}>Geral</h2>
                    <ul className={`${slideStyles.list} ${styles.list}`}>
                        <li>Encapsule as condições limites.</li>
                        <li>Funções devem descer apenas um nível de abstração.</li>
                        <li>Mantenha os dados configuráveis em níveis altos.</li>
                        <li>Evite a navegação transitiva.</li>
                    </ul>
                </div>
            </section>

            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <h2 className={slideStyles.regular_title}>Nomes</h2>
                    <ul className={`${slideStyles.list} ${styles.list}`}>
                        <li>Escolha nomes descritivos.</li>
                        <li>Escolha nomes no nível apropriado de abstração.</li>
                        <li>Use uma nomenclatura padrão onde for possível.</li>
                        <li>Nomes não ambíguos.</li>
                        <li>Use nomes longos para escopos grandes.</li>
                    </ul>
                </div>
            </section>

            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <h2 className={slideStyles.regular_title}>Nomes</h2>
                    <ul className={`${slideStyles.list} ${styles.list}`}>
                        <li>Evite codificações.</li>
                        <li>Nomes devem descrever os efeitos colaterais.</li>
                    </ul>
                </div>
            </section>

            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <h2 className={slideStyles.regular_title}>Testes</h2>
                    <ul className={`${slideStyles.list} ${styles.list}`}>
                        <li>Use uma ferramenta de cobertura.</li>
                        <li>Não pule testes triviais.</li>
                        <li>Um teste ignorado é uma questão sobre uma ambiguidade.</li>
                        <li>Teste as condições de limites.</li>
                        <li>Teste abundantemente bugs próximos.</li>
                    </ul>
                </div>
            </section>

            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <h2 className={slideStyles.regular_title}>Testes</h2>
                    <ul className={`${slideStyles.list} ${styles.list}`}>
                        <li>Padrões de falhas são reveladores.</li>
                        <li>Padrões de cobertura de testes podem ser relevadores.</li>
                        <li>Testes devem ser rápidos.</li>
                        <li>Testes devem ser fáceis de executar.</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default _0610;