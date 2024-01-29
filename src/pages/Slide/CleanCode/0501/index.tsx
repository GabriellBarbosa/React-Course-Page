import slideStyles from '../../../../assets/css/Slide.module.css';
import styles from './styles.module.css';
import useSlide from '../../../../hooks/useSlide';
import useScrollbar from '../../../../hooks/useScrollbar';
import React from 'react';
import { 
    example1,
    example1Resolved
} from './Example';

import RefactoringExplanationComponent from '../../../../components/RefactoringExplanationComponent';

import { default as logo } from '../../../../assets/BookInVideo.svg';

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
                        ${slideStyles.separatorBefore} 
                        ${styles.text} 
                        ${styles.italic} 
                    `}>Uma única responsabilidade.</p>
                </div>
            </section>

            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <h2 className={slideStyles.regular_title}>Classes Grandes</h2>
                    <h3 className={slideStyles.subtitle}>Desvantagens de uma classes grande<span>.</span></h3>
                    <ul className={`${slideStyles.list} ${styles.list}`}>
                        <li>Dificuldade para entender o seu papel.</li>
                        <li>Dificuldade para dar um nome significativo.</li>
                        <li>Dar manutenção.</li>
                        <li>Adicionar novas funcionalidades.</li>
                    </ul>
                </div>
            </section>

            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <h2 className={slideStyles.grayTitle}>O que fazer com as classes grandes?</h2>
                    <p className={`
                        ${styles.smallSerifText} 
                        ${slideStyles.smallSerifText} 
                        ${slideStyles.separatorBefore}`
                    }>
                        Uma classe grande pode ser decomposta em várias 
                        classes pequenas com apenas uma responsabilidade.
                    </p>
                </div>
            </section>

            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <RefactoringExplanationComponent
                        title='Quebrando a Classe'
                        description=''
                        codeBefore={{
                            description: <></>,
                            value: example1,
                        }}
                        codeAfter={{
                            description: <></>,
                            value: example1Resolved,
                        }}
                    />
                </div>
            </section>
        </div>
    );
}

export default _0501;