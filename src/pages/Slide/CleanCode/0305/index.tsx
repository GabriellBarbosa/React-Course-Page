import slideStyles from '../../../../assets/css/Slide.module.css';
import useSlide from '../../../../hooks/useSlide';
import useScrollbar from '../../../../hooks/useScrollbar';
import React from 'react';
import {
    example1,
    example1Resolved,
    example2,
    example2Resolved
} from './Example';

import { default as logo } from '../../../../assets/BookInVideo.svg';
import RefactoringExplanationComponent from '../../../../components/RefactoringExplanationComponent';

function _0303() {
    const { slideNumber, addSlide } = useSlide();
    const { hideScrollbar, showScrollbar } = useScrollbar();

    React.useEffect(() => {
        hideScrollbar();
        return () => showScrollbar();
    }, []);

    const refactorings = [
        {
            title: 'Evite Retornar Códigos de Erro',
            description: 'Retornar código de erro faz com que você tenha que fazer uma verificação sempre que a função é chamada.',
            codeBefore: {
                description: <>Todas as funções dentro de "<span className={slideStyles.hightlight}>deletePageAndAllReferences</span>" retornam um código de erro:</>,
                value: example2
            },
            codeAfter: {
                description: <>Agora essas funções lançam uma excessão no lugar do código de erro:</>,
                value: example2Resolved 
            },
        },
        {
            title: 'Extraia Blocos try catch',
            description: 'Blocos try catch devem estar sozinhos na função, pois o tratamento de erro já é considerado como uma coisa.',
            codeBefore: {
                description: <>Muito código dentro do bloco "<span className={slideStyles.hightlight}>try</span>":</>,
                value: example1
            },
            codeAfter: {
                description: <>Código do bloco "<span className={slideStyles.hightlight}>try</span>" extraído para uma função:</>,
                value: example1Resolved 
            },
        },
    ];

    return (
        <div 
            className={`${slideStyles.slidesWrapper}`} 
            data-testid="slidesWrapper" 
            data-slide-number={slideNumber}
        >
            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <span className={slideStyles.logo}><img src={logo} alt="BookInVideo" /></span>
                    <h1 className={`${slideStyles.title} ${slideStyles.introTitle}`}>Tratamento de Erro</h1>
                    <h3 className={slideStyles.subtitle}>0305 Capítulo: Funções<span>.</span></h3>
                </div>
            </section>

            {refactorings.map((refactoring) => {
                return (
                    <section 
                        className={slideStyles.slide} 
                        data-testid="slide" 
                        ref={addSlide}
                        key={refactoring.title}
                    >
                        <div className={slideStyles.container}>
                            <RefactoringExplanationComponent
                                title={refactoring.title}
                                description={refactoring.description}
                                codeBefore={{
                                    description: refactoring.codeBefore.description,
                                    value: refactoring.codeBefore.value,
                                }}
                                codeAfter={{
                                    description: refactoring.codeAfter.description,
                                    value: refactoring.codeAfter.value,
                                }}
                            />
                        </div>
                    </section>
                )
            })}
        </div>
    );
}

export default _0303;