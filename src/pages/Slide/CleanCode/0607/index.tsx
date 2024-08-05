import slideStyles from '../../../../assets/css/Slide.module.css';
import styles from './styles.module.css';
import useSlide from '../../../../hooks/useSlide';
import useScrollbar from '../../../../hooks/useScrollbar';
import React from 'react';
import { default as logo } from '../../../../assets/BookInVideo.svg';

function _0607() {
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
                    <h1 className={`${slideStyles.title} ${slideStyles.introTitle}`}>Comentários</h1>
                    <h3 className={slideStyles.subtitle}>0607 Capítulo: Comentários<span>.</span></h3>
                </div>
            </section>

            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <h2 className={slideStyles.regular_title}>Evite Comentários</h2>
                    <h3 className={slideStyles.subtitle}>Essas três coisas eliminam grande parte da necessidade de escrever comentários<span>.</span></h3>
                    <ul className={`${slideStyles.list} ${styles.list}`}>
                        <li>Bons Nomes de Variáveis.</li>
                        <li>Funções com Bons Nomes.</li>
                        <li>Classes Coesas.</li>
                    </ul>
                </div>
            </section>

            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <h2 className={slideStyles.grayTitle}>Quando escrever um comentário?</h2>
                    <p className={`${slideStyles.separatorBefore} ${slideStyles.cite}`}>Quando você fracassar em se expressar no código.</p>
                </div>
            </section>

            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <h2 className={slideStyles.regular_title}>Comentários Bons</h2>
                    <ul className={`${slideStyles.list} ${styles.list}`}>
                        <li>Documentação de API.</li>
                        <li>Comentários de Licença e Copyright.</li>
                    </ul>
                </div>
            </section>

            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <h2 className={slideStyles.regular_title}>Comentários Ruins</h2>
                    <ul className={`${slideStyles.list} ${styles.list}`}>
                        <li>Histórico de Mudança.</li>
                        <li>Código Comentado.</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default _0607;