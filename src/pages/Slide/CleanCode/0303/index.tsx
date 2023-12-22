import slideStyles from '../../../../assets/css/Slide.module.css';
import useSlide from '../../../../hooks/useSlide';
import useScrollbar from '../../../../hooks/useScrollbar';
import React from 'react';
import PrincipleExplanationComponent from '../../../../components/PrincipleExplanationComponent';
import RefactoringExplanationComponent from '../../../../components/RefactoringExplanationComponent';
import {
    example1, 
    example1Resolved,
    example2,
    example3,
    example4,
    example5,
    example6,
    example6Resolved,
    example7,
    example8,
    example9,
} from './Example';

import { default as logo } from '../../../../assets/BookInVideo.svg';

function _0301() {
    const { slideNumber, addSlide } = useSlide();
    const { hideScrollbar, showScrollbar } = useScrollbar();

    React.useEffect(() => {
        hideScrollbar();
        return () => showScrollbar();
    }, []);

    const principles = [
        {
            title: 'Nenhum Parâmetro',
            description: 'O melhor número de parâmetros é zero, assim a chamada da função fica muito simples.',
            code: {
                description: <></>,
                value: example2
            },
        },
        {
            title: 'Um Parâmetro (Mônade)',
            description: 'Depois de nenhum parâmetro, a melhor opção é um parâmetro. Ainda com um parâmetro, a função consegue manter a simplicidade.',
            code: {
                description: <></>,
                value: example3
            },
        },
        {
            title: 'Dois Parâmetros (Díade)',
            description: 'Há vários casos em que precisamos ter dois parâmetros, porém é importante que os dois parâmetros sejam parte do mesmo conceito.',
            code: {
                description: <></>,
                value: example4,
            },
        },
        {
            title: 'Três Parâmetros (Tríade)',
            description: 'Testar todas as possibilidades de uma função com três parâmetros é difícil. Avalie bem se você pode reduzir a quantidade de parâmetros nesses casos.',
            code: {
                description: <></>,
                value: example5
            },
        },
        {
            title: 'Mais de três parâmetros',
            description: 'Se você tem uma função com mais de três parâmetros, então vale a pena você conhecer uma refatoração chamada "introduzir objetos de parâmetro".',
            code: {
                description: <></>,
                value: example6
            },
        },
        {
            title: 'Lista Como Parâmetro',
            description: 'Uma lista como parâmetro pode ser considerada um parâmetro apenas, desde que os elementos da lista sejam tratados da mesma forma.',
            code: {
                description: <></>,
                value: example7
            },
        },
        {
            title: 'Parâmetros de Saída',
            description: 'Parâmetros de saída é algo que devemos evitar, uma função que recebe um parâmetro, o altera e não retorna nada faz com que tenhamos de ler o código no mínimo duas vezes para entender o que está acontecendo.',
            code: {
                description: <></>,
                value: example9
            },
        },
        {
            title: 'Parâmetros de Entrada',
            description: 'Por padrão, esperamos que um objeto seja de entrada. Recebemos um parâmetro, fazemos algo e retornamos algum valor.',
            code: {
                description: <></>,
                value: example8
            },
        },
    ];

    const refactorings = [
        {
            title: 'Introduzir Objeto de Parâmetros',
            description: 'Elementos que possuem certa relação aparecem juntos em diversas partes do código. Agrupá-los em uma estrutura de dados é uma boa opção para manter esses elementos juntos e oferecê-los um contexto melhor.',
            codeBefore: {
                description: <></>,
                value: example6
            },
            codeAfter: {
                description: <></>,
                value: example6Resolved
            },
        },
        {
            title: 'Parâmetros Lógicos',
            description: 'Um parâmetro lógico, em muitos casos, é um bom sinal de que sua função está fazendo mais de uma coisa.',
            codeBefore: {
                description: <></>,
                value: example1
            },
            codeAfter: {
                description: <></>,
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
                    <h1 className={`${slideStyles.title} ${slideStyles.introTitle}`}>Parâmetros</h1>
                    <h3 className={slideStyles.subtitle}>0303 Capítulo: Funções<span>.</span></h3>
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

export default _0301;