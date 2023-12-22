import slideStyles from '../../../../assets/css/Slide.module.css';
import useSlide from '../../../../hooks/useSlide';
import useScrollbar from '../../../../hooks/useScrollbar';
import React from 'react';
import PrincipleExplanationComponent from '../../../../components/PrincipleExplanationComponent';
import RefactoringExplanationComponent from '../../../../components/RefactoringExplanationComponent';

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
            title: 'Parâmetros Lógicos',
            description: 'Um parâmetro lógico, em muitos casos, é um bom sinal de que sua função está fazendo mais de uma coisa.',
            code: {
                description: <></>,
                value: ''
            },
        },
        {
            title: 'Nenhum Parâmetro',
            description: 'O melhor número de parâmetros é zero, assim a chamada da função fica muito simples.',
            code: {
                description: <></>,
                value: ''
            },
        },
        {
            title: 'Um Parâmetro (Mônade)',
            description: 'Depois de nenhum parâmetro, a melhor opção é um parâmetro. Ainda com um parâmetro, a função consegue manter a simplicidade.',
            code: {
                description: <></>,
                value: ''
            },
        },
        {
            title: 'Dois Parâmetros (Díade)',
            description: 'Há vários casos em que precisamos ter dois parâmetros, porém é importante que os dois parâmetros sejam parte do mesmo conceito.',
            code: {
                description: <></>,
                value: ''
            },
        },
        {
            title: 'Três Parâmetros (Tríade)',
            description: 'Testar todas as possibilidades de uma função com três parâmetros é difícil. Lembrar a ordem de cada parâmetro em uma função com três parâmetros também é difícil. Avalie bem se você pode reduzir a quantidade de parâmetros nesses casos.',
            code: {
                description: <></>,
                value: ''
            },
        },
        {
            title: 'Mais de três parâmetros',
            description: 'Se você tem uma função com mais de três parâmetros, então vale a pena você conhecer uma refatoração chamada "introduzir objetos de parâmetro".',
            code: {
                description: <></>,
                value: ''
            },
        },
        {
            title: 'Lista Como Parâmetro',
            description: 'Uma lista como parâmetro é considerada uma mônade, desde que os elementos da lista sejam tratados da mesma forma.',
            code: {
                description: <></>,
                value: ''
            },
        },
        {
            title: 'Parâmetros de Entrada',
            description: 'Por padrão, esperamos que um objeto seja de entrada. Recebemos um parâmetro, fazemos algo e retornamos algum valor.',
            code: {
                description: <></>,
                value: ''
            },
        },
        {
            title: 'Parâmetros de Saída',
            description: 'Parâmetros de saída é algo que devemos evitar, uma função que recebe um parâmetro, o altera e não retorna nada faz com que tenhamos de ler o código no mínimo duas vezes para entender o que está acontecendo.',
            code: {
                description: <></>,
                value: ''
            },
        },
    ];

    const refactoring = {
        title: 'Introduzir Objeto de Parâmetros',
        description: 'Elementos que possuem certa relação aparecem juntos em diversas partes do código. Agrupá-los em uma estrutura de dados é uma boa opção para manter esses elementos juntos e oferecê-los um contexto melhor.',
        codeBefore: {
            description: <></>,
            value: ""
        },
        codeAfter: {
            description: <></>,
            value: ""
        },
    }

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

export default _0301;