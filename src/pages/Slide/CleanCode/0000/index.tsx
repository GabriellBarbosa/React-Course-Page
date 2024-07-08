import styles from './styles.module.css';
import slideStyles from '../../../../assets/css/Slide.module.css';

import { default as logo } from '../../../../assets/BookInVideo-black.svg';

import useSlide from '../../../../hooks/useSlide';
import React from 'react';
import useScrollbar from '../../../../hooks/useScrollbar';

function _0000() {
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
            <section className={`${slideStyles.slide} ${styles.banner}`} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <span className={slideStyles.logo}><img src={logo} alt="BookInVideo" /></span>
                    <h1 className={`${slideStyles.title} ${slideStyles.introTitle}`}>Código Limpo</h1>
                    <h3 className={slideStyles.subtitle}>Habilidades Práticas do Agile Software<span>.</span></h3>
                </div>
            </section>

            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <h2 className={slideStyles.regular_title}>O curso</h2>
                    <h3 className={slideStyles.subtitle}>Baseado no livro Código Limpo de Robert C. Martin<span>.</span></h3>
                    <ul className={`${styles.list} ${styles.titleAndDescriptionList}`}>
                        <li>
                            <p className={styles.listItemTitle}>Esse curso é para iniciantes?</p>
                            <p className={styles.itemListDescription}>Não ensinarei a programar. Vou apresentar práticas para escrevermos códigos melhores.</p>
                        </li>
                        <li>
                            <p className={styles.listItemTitle}>Requisito</p>
                            <p className={styles.itemListDescription}>Saber uma linguagem que tenha orientação a objetos.</p>
                        </li>
                        <li>
                            <p className={styles.listItemTitle}>Linguagem do curso</p>
                            <p className={styles.itemListDescription}>JavaScript e TypeScript.</p>
                        </li>
                    </ul>
                </div>
            </section>

            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <h2 className={slideStyles.regular_title}>A grade</h2>
                    <ul className={`${styles.list} ${styles.titleAndDescriptionList}`}>
                        <li>
                            <p className={styles.listItemTitle}>Introdução</p>
                            <p className={styles.itemListDescription}>O que é código limpo e configuração do ambiente.</p>
                        </li>
                        <li>
                            <p className={styles.listItemTitle}>Nomes significativos</p>
                            <p className={styles.itemListDescription}>Regras para conseguirmos escolher bons nomes.</p>
                        </li>
                        <li>
                            <p className={styles.listItemTitle}>Funções</p>
                            <p className={styles.itemListDescription}>Responsabilidade única, princípio aberto/fechado, parâmetros e mais.</p>
                        </li>
                    </ul>
                </div>
            </section>

            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <h2 className={slideStyles.regular_title}>A grade</h2>
                    <ul className={`${styles.list} ${styles.titleAndDescriptionList}`}>
                        <li>
                            <p className={styles.listItemTitle}>Testes unitários</p>
                            <p className={styles.itemListDescription}>Uma introdução a testes unitários e a sua importância para um código limpo.</p>
                        </li>
                        <li>
                            <p className={styles.listItemTitle}>Classes</p>
                            <p className={styles.itemListDescription}>Responsabilidade única, princípio aberto/fechado, coesão, objetos e estruturas de dados e mais.</p>
                        </li>
                        <li>
                            <p className={styles.listItemTitle}>Mais Código Limpo</p>
                            <p className={styles.itemListDescription}>Limites, sistemas, emergência, tratamento de erro, comentários, formatação, odores e heurísticas.</p>
                        </li>
                    </ul>
                </div>
            </section>

            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <h2 className={slideStyles.grayTitle}>Capítulo não gravado</h2>
                    <p className={`
                        ${styles.smallSerifText} 
                        ${slideStyles.smallSerifText} 
                        ${slideStyles.separatorBefore}`
                    }>Concorrência.</p>
                </div>
            </section>

            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <h2 className={slideStyles.grayTitle}>Esse curso substitui o livro?</h2>
                    <p className={`
                        ${slideStyles.smallSerifText} 
                        ${slideStyles.separatorBefore}`
                    }>NÃO.</p>
                    <p className={`${slideStyles.infoSource} ${styles.infoSource}`}>
                        <a 
                            href="https://www.amazon.com.br/C%C3%B3digo-limpo-Robert-C-Martin/dp/8576082675"
                            className={slideStyles.externalLink} 
                            target="_blank"
                        >Livro na amazon.</a>
                    </p>
                </div>
            </section>
            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <h2 className={slideStyles.regular_title}>Professor</h2>
                    <ul className={`${styles.list}`}>
                        <li className={styles.aboutMe}>Gabriel Barbosa.</li>
                        <li className={styles.aboutMe}>Desenvolvedor.</li>
                        <li className={styles.aboutMe}>Formado em análise e desenvolvimento de sistemas.</li>
                        <li className={styles.aboutMe}>Fundador do BookInVideo.</li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default _0000;