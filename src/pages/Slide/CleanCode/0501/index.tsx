import slideStyles from '../../../../assets/css/Slide.module.css';
import styles from './styles.module.css';
import useSlide from '../../../../hooks/useSlide';
import useScrollbar from '../../../../hooks/useScrollbar';
import React from 'react';
import { 
    example1,
    example1Resolved
} from './Example';

import CodeEditorComponent from '../../../../components/CodeEditor';

import { default as logo } from '../../../../assets/BookInVideo.svg';
import { default as organizedTools } from '../../../../assets/unorganized-tools.jpg';
import { default as unorganizedTools } from '../../../../assets/organized-tools.jpg';

function _0501() {
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
                    <h1 className={`${slideStyles.title} ${slideStyles.introTitle}`}>Classes</h1>
                    <h3 className={slideStyles.subtitle}>0501 Capítulo: Classes<span>.</span></h3>
                </div>
            </section>

            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <p 
                        className={`
                            ${styles.text} 
                            ${slideStyles.separatorBefore} 
                            ${slideStyles.separatorAfter}`
                        }
                    >Pequenas.</p>
                </div>
            </section>

            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <h2 className={slideStyles.grayTitle}>O que é uma classe pequena?</h2>
                    <p className={`
                        ${slideStyles.smallSerifText} 
                        ${slideStyles.separatorBefore}`
                    }>É uma classe com uma única responsabilidade e apenas um motivo para ser alterada.</p>
                </div>
            </section>

            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <h2 className={slideStyles.regular_title}>Classes Grandes</h2>
                    <h3 className={slideStyles.subtitle}>Problemas das classes grandes<span>.</span></h3>
                    <ul className={`${slideStyles.list} ${styles.list}`}>
                        <li>Dificuldade para entender o seu papel.</li>
                        <li>Dar um nome significativo.</li>
                        <li>Dar manutenção.</li>
                        <li>Adicionar novas funcionalidades.</li>
                    </ul>
                </div>
            </section>

            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <h2 className={slideStyles.grayTitle}>O que fazer com as classes grandes?</h2>
                    <p className={`
                        ${slideStyles.smallSerifText} 
                        ${slideStyles.separatorBefore}`
                    }>
                        Uma classe grande pode ser dividida em várias 
                        classes pequenas com apenas uma responsabilidade.
                    </p>
                </div>
            </section>

            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div>
                    <h2 className={styles.refactoringTitle}>Dividindo uma Classe Grande</h2>
                    <div className={styles.codeExamples}>
                        <CodeEditorComponent 
                            code={example1} 
                            description={
                                <><span className={slideStyles.hightlight}>Antes:</span> uma classe com diversas responsabilidades.</>
                            } 
                        />
                        <CodeEditorComponent 
                            code={example1Resolved} 
                            description={
                                <><span className={slideStyles.hightlight}>Depois:</span> responsabilidades movidas para novas classes.</>
                            } 
                        />
                    </div>
                </div>
            </section>

            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <h2 className={styles.whiteTitle}>Vou ter muitas classes pequenas?</h2>
                    <p className={`
                        ${slideStyles.smallSerifText}
                        ${styles.smallSerifText} 
                        ${slideStyles.separatorBefore}`
                    }>Sim.</p>
                </div>
            </section>

            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div>
                    <h2 className={styles.refactoringTitle}>Há Duas Opções</h2>
                    <div className={styles.codeExamples}>
                        <div>
                            <p className={styles.optionDescription}>Poucas classes grandes.</p>
                            <div className={styles.imgWrapper}>
                                <img src={organizedTools} alt="ferramentas desorganizadas" />
                            </div>
                        </div>
                        <div>
                            <p className={styles.optionDescription}>Muitas classes pequenas.</p>
                            <div className={styles.imgWrapper}>
                                <img src={unorganizedTools} alt="ferramentas organizadas em gavetas" />
                            </div>
                        </div>
                    </div>
                    <p className={`${slideStyles.infoSource} ${styles.infoSource}`}>
                        Imagens retiradas do <a className={styles.link} href="https://unsplash.com/pt-br" target='_blank'>unsplash</a>.
                    </p>
                </div>
            </section>
        </div>
    );
}

export default _0501;