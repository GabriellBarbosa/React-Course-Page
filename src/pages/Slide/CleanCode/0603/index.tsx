import slideStyles from '../../../../assets/css/Slide.module.css';
import styles from './styles.module.css';
import useSlide from '../../../../hooks/useSlide';
import useScrollbar from '../../../../hooks/useScrollbar';
import React from 'react';
import {
    example1,
    example2
} from './Example';

import { default as logo } from '../../../../assets/BookInVideo-black.svg';
import PrincipleExplanationComponent from '../../components/PrincipleExplanationComponent';
import CodeEditorComponent from '../../components/CodeEditor';
import CodeComparison from '../../components/CodeComparison';

function _0603() {
    const { slideNumber, addSlide } = useSlide();
    const { hideScrollbar, showScrollbar } = useScrollbar();

    React.useEffect(() => {
        hideScrollbar();
        return () => showScrollbar();
    }, []);

    const singleExamples = [
        {
            title: 'Misturando Preocupações',
            description: 'Essa função além da lógica do domínio também possui lógica de segurança, transação e log. Desse jeito a lógica do domínio fica ofuscada.',
            code: {
                description: <>Em TypeScript:</>,
                value: example1
            },
        },
        {
            title: 'Separando Preocupações',
            description: 'As preocupações secundárias foram movidas para outras funções através dos decorators. Agora conseguimos focar na lógica do domínio.',
            code: {
                description: <>Em TypeScript:</>,
                value: example2
            },
        },
    ]

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

            {singleExamples.map((example) => (
                <section 
                    className={slideStyles.slide} 
                    data-testid="slide" 
                    ref={addSlide}
                    key={example.title}
                >
                    <div className={slideStyles.container}>
                        <PrincipleExplanationComponent
                            title={example.title}
                            description={example.description}
                            code={{
                                description: example.code.description,
                                value: example.code.value,
                            }}
                        />
                    </div>
                </section>
            ))}

            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={styles.horizontalCodeComparison}>
                    <div>
                        <CodeComparison> 
                            <CodeEditorComponent 
                                code={singleExamples[0].code.value} 
                                description={<>Antes:</>}
                            />
                            <CodeEditorComponent 
                                code={singleExamples[1].code.value} 
                                description={<>Depois:</>}
                            />
                        </CodeComparison>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default _0603;