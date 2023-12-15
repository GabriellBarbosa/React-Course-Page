import slideStyles from '../../../../assets/css/Slide.module.css';
import useSlide from '../../../../hooks/useSlide';
import useScrollbar from '../../../../hooks/useScrollbar';
import React from 'react';

import RefactoringExplanationComponent from '../../../../components/RefactoringExplanationComponent';
import PrincipleExplanationComponent from '../../../../components/PrincipleExplanationComponent';

import {
    example1,
    example1Resolved,
    example2,
    example2Resolved,
    example3,
    example3Resolved,
    example4,
    example4Resolved,
    example5,
    example5Resolved,
    example6,
    example6Resolved,
    example7,
    example7Resolved,
    example8,
    example9,
    exercise,
} from './Example';

import { default as logo } from '../../../../assets/BookInVideo.svg';
import CodeEditor from '../../../../components/CodeEditor';

function _0203() {
    const { slideNumber, addSlide } = useSlide();
    const { hideScrollbar, showScrollbar } = useScrollbar();

    React.useEffect(() => {
        hideScrollbar();
        return () => showScrollbar();
    }, []);

    const refactorings = [
        {
            title: 'Funções: Verbos',
            description: 'Funções realizam alguma tarefa, então a ação que ela realiza deve estar presente em seu nome.',
            codeBefore: {
                description: <>Sem Verbo:</>,
                value: example1
            },
            codeAfter: {
                description: <>Com Verbo:</>,
                value: example1Resolved
            },
        },
        {
            title: 'Classes: Substantivos',
            description: 'Classes são representações de objetos no mundo real. Ela deve ter um substantivo em seu nome para ficar claro o que representa.',
            codeBefore: {
                description: <>Nome ruim para uma classe(utilizando verbo):</>,
                value: example2,
            },
            codeAfter: {
                description: <>Bom nome para uma classe:</>,
                value: example2Resolved
            },
        },
        {
            title: 'Uma Palavra por Conceito',
            description: 'Escolha uma palavra por conceito e use-a consistentemente.',
            codeBefore: {
                description: <>Palavras diferente para o mesmo contexto:</>,
                value: example3
            },
            codeAfter: {
                description: <>Uso consistente de palavras para o mesmo contexto:</>,
                value: example3Resolved
            },
        },
        {
            title: 'Nomes Passíveis de Busca',
            description: 'Tente buscar "e" em algum projeto na sua IDE ou editor de código.',
            codeBefore: {
                description: <>Nome difícil de encontrar:</>,
                value: example4
            },
            codeAfter: {
                description: <>Nome fácil de encontrar:</>,
                value: example4Resolved
            },
        },
        {
            title: 'Interfaces e Implementações',
            description: 'Não enfeite as interfaces.',
            codeBefore: {
                description: <>Interface com prefixo:</>,
                value: example5
            },
            codeAfter: {
                description: <>Interface sem prefixo:</>,
                value: example5Resolved
            },
        },
        {
            title: 'Evite Números Mágicos',
            description: 'É difícil de entender o que números soltos no código significam e de achá-los quando precisamos alterá-los.',
            codeBefore: {
                description: <>Números soltos no cálculo do custo total de um produto:</>,
                value: example6
            },
            codeAfter: {
                description: <>Descrevendo o significado desses números usando variáveis:</>,
                value: example6Resolved
            },
        },
        {
            title: 'Evite Prefixos',
            description: 'Prefixos são no mínimo caracteres desnecessários ou um indício de que você deveria oferecer um contexto melhor para o código.',
            codeBefore: {
                description: <>Uso do prefixo "addr" para indicar que as variáveis estão relacionadas a um endereço:</>,
                value: example7
            },
            codeAfter: {
                description: <>Oferecendo um contexto melhor para as variáveis através da classe Address:</>,
                value: example7Resolved
            },
        },
    ];

    const codeExamples = [
        {
            title: 'Nomes do Domínio da Solução',
            description: 'São termos conhecidos por programadores que revelam como o problema é resolvido. Exemplo: Visitor, Delegate, Factory...',
            code: {
                description: <>Aqui estamos usando três <span className={slideStyles.hightlight}>Design Patterns</span>: Visitor, AbstractFactory e Delegation.</>,
                value: example8
            },
        },
        {
            title: 'Nomes do Domínio do Problema',
            description: 'São nomes relativo ao negócio. Exemplo: Order, Customer, Checkout...',
            code: {
                description: <>Aqui temos exemplos de classes com nome relativo ao negócio:</>,
                value: example9
            },
        }
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
                    <h1 className={`${slideStyles.title} ${slideStyles.introTitle}`}>Mais Regras</h1>
                    <h3 className={slideStyles.subtitle}>0203 Capítulo: Nomes<span>.</span></h3>
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

            {codeExamples.map((codeExample) => {
                return (
                    <section 
                        className={slideStyles.slide} 
                        data-testid="slide" 
                        ref={addSlide}
                        key={codeExample.title}
                    >
                        <div className={slideStyles.container}>
                            <PrincipleExplanationComponent
                                title={codeExample.title}
                                description={codeExample.description}
                                code={{
                                    description: codeExample.code.description,
                                    value: codeExample.code.value,
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
            >
                <div className={slideStyles.container}>
                    <h2 className={slideStyles.principleTitle}>Exercício</h2>
                    <p className={slideStyles.principleDescription}>
                        Esse código simula o jogo Pedra, Papel e Tesoura. 
                        Renomeie as partes do código que você achar que não está 
                        tão claro e faça alterações se você achar necessário para 
                        deixar o código mais legível.
                    </p>
                    <div className={slideStyles.principleCodeExamples}>
                        <CodeEditor code={exercise} showCopyButton={true} />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default _0203;