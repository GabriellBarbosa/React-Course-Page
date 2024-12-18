import slideStyles from '../../../../assets/css/Slide.module.css';
import useSlide from '../../../../hooks/useSlide';
import useScrollbar from '../../../../hooks/useScrollbar';
import PrincipleExplanationComponent from '../../components/PrincipleExplanationComponent';
import RefactoringExplanationComponent from '../../components/RefactoringExplanationComponent';
import React from 'react';
import {
    example1,
    example1Resolved,
    example2,
    example3,
    example4
} from './Example';

import { default as logo } from '../../../../assets/BookInVideo.svg';

function _0302() {
    const { slideNumber, addSlide } = useSlide();
    const { hideScrollbar, showScrollbar } = useScrollbar();

    React.useEffect(() => {
        hideScrollbar();
        return () => showScrollbar();
    }, []);

    const refactoring = {
        title: 'Extrair Função',
        description: 'Extrair um fragmento de código para sua própria função e dar um nome bem descritivo.',
        codeBefore: {
            description: <>Antes da extração:</>,
            value: example1
        },
        codeAfter: {
            description: <>Depois da extração:</>,
            value: example1Resolved
        },
    }

    const principles = [
        {
            title: 'Funções Pequenas',
            description: 'Funções pequenas que fazem apenas uma coisa são mais fáceis de nomear do que uma função grande que faz diversas coisas.',
            code: {
                description: <>Exemplo de uma função pequena com um nome descritivo:</>,
                value: example3
            },
        },
        {
            title: 'Uma Tarefa',
            description: 'Quando a função está fazendo apenas uma coisa, não é possível extrair outra a partir dela e o seu corpo está um nível de abstração abaixo do seu nome.',
            code: {
                description: <>Exemplo de uma função que faz apenas uma tarefa:</>,
                value: example2
            },
        },
        {
            title: 'Um Nível de Abstração',
            description: 'O corpo da função deve estar um nível de abstração abaixo do seu nome.',
            code: {
                description: <>O corpo dessa função está um nível de abstração abaixo do seu nome.</>,
                value: example2
            },
        },
        {
            title: 'Regra Decrescente',
            description: 'Ler textos de cima para baixo é algo natural para nós. Nosso código deve seguir essa mesma regra.',
            code: {
                description: <>Exemplo de código seguindo a regra decrescente:</>,
                value: example4
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
                    <h1 className={`${slideStyles.title} ${slideStyles.introTitle}`}>Regras</h1>
                    <h3 className={slideStyles.subtitle}>0302 Capítulo: Funções<span>.</span></h3>
                </div>
            </section>

            {principles.map((principle) => {
                return (
                    <section 
                        className={slideStyles.slide} 
                        data-testid="slide" 
                        ref={addSlide}
                        key={principle.title}
                    >
                        <div className={slideStyles.container}>
                            <PrincipleExplanationComponent
                                title={principle.title}
                                description={principle.description}
                                code={{
                                    description: principle.code.description,
                                    value: principle.code.value,
                                }}
                            />
                        </div>
                    </section>
                )
            })}

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
        </div>
    );
}

export default _0302;