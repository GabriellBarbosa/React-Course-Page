import styles from './CleanCode.module.css';
import slideStyles from '../../../assets/css/Slide.module.css';

import { default as logo } from '../../../assets/BookInVideo.svg';
import { default as agileManifesto } from '../../../assets/agile-manifesto.jpg';
import { default as guitar } from '../../../assets/guitar.png';

import CodeEditor from '../../../components/CodeEditor';
import React from 'react';

function CleanCode() {
    const slidePages = React.useRef<Array<HTMLElement | null>>([]).current;
    const [slideIndex, setSlideIndex] = React.useState(1);

    React.useEffect(() => {
        window.addEventListener('keydown', changeSlideIndex);
        return () => {
            window.removeEventListener('keydown', changeSlideIndex);
        }
    }, [slideIndex]);

    React.useEffect(() => {
        const currentSlide = slidePages[slideIndex - 1];
        const top = currentSlide ? currentSlide.offsetTop : 0;
        window.scrollTo(0, top);
    }, [slideIndex])

    function changeSlideIndex(event: KeyboardEvent) {
        if (event.key == 'ArrowRight') {
            incrementSlideIndex();
        } else if (event.key == 'ArrowLeft') {
            decrementSlideIndex();
        }
    }

    function incrementSlideIndex() {
        if (slideIndex == slidePages.length) {
            setSlideIndex(1);
        } else {
            setSlideIndex(slideIndex + 1);
        }
    }

    function decrementSlideIndex() {
        if (slideIndex == 1) {
            setSlideIndex(slidePages.length);
        } else {
            setSlideIndex(slideIndex - 1);
        }
    }

    const addSlidePage = React.useCallback((element: HTMLElement | null) => {
        slidePages[slidePages.length] = element;
    }, []);

    return (
        <div 
            className={`${slideStyles.slide}`} 
            data-testid="slidesWrapper" 
            data-slide-index={slideIndex}
        >
            <section className={slideStyles.wrapper} data-testid="slidePage" ref={addSlidePage}>
                <div className={slideStyles.container}>
                    <span className={styles.logo}><img src={logo} alt="BookInVideo" /></span>
                    <h1 className={`${slideStyles.title} ${styles.introTitle}`}>Código Limpo</h1>
                    <h3 className={slideStyles.subtitle}>Habilidades Práticas do Agile Software<span>.</span></h3>
                </div>
            </section>

            <section className={slideStyles.wrapper} data-testid="slidePage" ref={addSlidePage}>
                <div className={slideStyles.container}>
                    <h1 className={slideStyles.regular_title}>Manifesto Ágil</h1>
                    <div className={styles.imageWrapper}>
                        <img src={agileManifesto} alt="Manifesto para Desenvolvimento Ágil de Software" />
                    </div>
                    <a 
                        className={`${slideStyles.externalLink} ${styles.externalLink}`} 
                        href="https://agilemanifesto.org/iso/ptbr/manifesto.html" 
                        target='_blank'
                    >
                        https://agilemanifesto.org/iso/ptbr/manifesto.html
                    </a>
                </div>
            </section>

            <section className={slideStyles.wrapper} data-testid="slidePage" ref={addSlidePage}>
                <div className={slideStyles.container}>
                    <h2 className={slideStyles.regular_title}>Agile Software</h2>
                    <h3 className={slideStyles.subtitle}>Práticas Técnicas<span>.</span></h3>
                    <ul className={`${slideStyles.list} ${styles.list}`}>
                        <li>Desenvolvimento Orientado a Testes.</li>
                        <li>Refatoração.</li>
                        <li>Design Simples.</li>
                    </ul>
                    <p className={`${slideStyles.infoSource} ${styles.infoSource}`}>Desenvolvimento Ágil Limpo: De Volta às Origens.</p>
                </div>
            </section>

            <section className={slideStyles.wrapper} data-testid="slidePage" ref={addSlidePage}>
                <div className={slideStyles.container}>
                    <h2 className={slideStyles.regular_title}>Código Confuso</h2>
                    <div className={styles.codeEditor}>
                        <CodeEditor code={'const foo = "bar";\nconst foo = "baar";'} />
                    </div>
                </div>
            </section>

            <section className={slideStyles.wrapper} data-testid="slidePage" ref={addSlidePage}>
                <div className={slideStyles.container}>
                    <h2 className={slideStyles.regular_title}>Código Melhorado</h2>
                    <div className={styles.codeEditor}>
                        <CodeEditor code={'const foo = "bar";\nconst foo = "baar";'} />
                    </div>
                </div>
            </section>

            <section className={slideStyles.wrapper} data-testid="slidePage" ref={addSlidePage}>
                <div className={slideStyles.container}>
                    <h2 className={slideStyles.regular_title}>Fundamentos</h2>
                    <h3 className={slideStyles.subtitle}>O que faz um código ser limpo<span>.</span></h3>
                    <ul className={`${slideStyles.list} ${styles.list}`}>
                        <li>Sem Duplicação.</li>
                        <li>Expressividade.</li>
                        <li>Uma Tarefa.</li>
                        <li>Abstrações Claras.</li>
                        <li>Testes.</li>
                    </ul>
                    <p className={`${slideStyles.infoSource} ${styles.infoSource}`}>Código Limpo, Capítulo 1.</p>
                </div>
            </section>

            <section className={slideStyles.wrapper} data-testid="slidePage" ref={addSlidePage}>
                <div className={slideStyles.container}>
                    <h2 className={slideStyles.regular_title}>Aprendizagem</h2>
                    <h3 className={slideStyles.subtitle}>É como aprender a tocar violão<span>.</span></h3>
                    <div className={styles.imageWrapper}>
                        <img src={guitar} alt="Um homem tocando violão" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CleanCode;