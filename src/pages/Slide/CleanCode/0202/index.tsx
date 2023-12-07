import styles from './styles.module.css';
import slideStyles from '../../../../assets/css/Slide.module.css';

import useSlide from '../../../../hooks/useSlide';
import React from 'react';
import useScrollbar from '../../../../hooks/useScrollbar';
import CodeEditor from '../../../../components/CodeEditor';
import { 
    example1, 
    example1Resolved 
} from './Example';

import { default as logo } from '../../../../assets/BookInVideo.svg';

function _0202() {
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
                    <h1 className={`${slideStyles.title} ${slideStyles.introTitle}`}>Motivos das Decisões</h1>
                    <h3 className={slideStyles.subtitle}>0202 Capítulo: Nomes<span>.</span></h3>
                </div>
            </section>
            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <h2 className={slideStyles.regular_title}>Tamanho Relativo ao Escopo</h2>
                    <p className={styles.text}>
                        Escopos maiores requerem nomes de variáveis mais explicativas enquanto 
                        escopos menores podem ter nomes de variáveis menores. No caso das 
                        funções é o inverso.
                    </p>
                    <CodeEditor code={example1} showCopyButton={false} />
                    <CodeEditor code={example1Resolved} showCopyButton={false} />
                </div>
            </section>
        </div>
    )   
}

export default _0202;