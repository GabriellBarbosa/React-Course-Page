import slideStyles from '../../../../assets/css/Slide.module.css';
import styles from './styles.module.css';
import useSlide from '../../../../hooks/useSlide';
import useScrollbar from '../../../../hooks/useScrollbar';
import React from 'react';

function _0504() {
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
                    <h2 className={slideStyles.regular_title}>Objeto e Estrutura de Dados</h2>
                    <h3 className={slideStyles.subtitle}>Diferença entre objeto e estrutura de dados.</h3>
                    <ul className={`${styles.list} ${styles.titleAndDescriptionList}`}>
                        <li>
                            <p className={`${styles.listItemTitle} ${styles.obj}`}>Objeto.</p>
                            <p className={styles.itemListDescription}>Oculta seus dados e expõe seus métodos.</p>
                        </li>
                        <li>
                            <p className={`${styles.listItemTitle} ${styles.dataStructure}`}>Estrutura de dados.</p>
                            <p className={styles.itemListDescription}>Expõe seus dados e não possui métodos significativos.</p>
                        </li>
                    </ul>
                </div>
            </section>

            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <h2 className={slideStyles.regular_title}>Vantagens de Cada Um</h2>
                    <ul className={`${styles.list} ${styles.titleAndDescriptionList}`}>
                        <li>
                            <p className={`${styles.listItemTitle} ${styles.obj}`}>Objetos.</p>
                            <p className={styles.itemListDescription}>Facilitam a adição de <span className={styles.italic}>novos tipos</span> sem ter que alterar as funções existentes.</p>
                        </li>
                        <li>
                            <p className={`${styles.listItemTitle} ${styles.dataStructure}`}>Estrutura de dados.</p>
                            <p className={styles.itemListDescription}>Facilitam a adição de <span className={styles.italic}>novas funções</span> sem ter que alterar as estruturas existentes.</p>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default _0504;