import slideStyles from '../../../../assets/css/Slide.module.css';
import useSlide from '../../../../hooks/useSlide';
import RefactoringExplanationComponent from '../../../../components/RefactoringExplanationComponent';
import CodeExplanationComponent from '../../../../components/CodeExplanationComponent';
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
    example7,
} from './Example';

import { default as logo } from '../../../../assets/BookInVideo.svg';

function _0203() {
    const { slideNumber, addSlide } = useSlide();

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
            description: 'Classes são representações de objetos do mundo real. Deve ter um substantivo no nome da classe para mostrar o que ela representa.',
            codeBefore: {
                description: <>Sem substantivo direto:</>,
                value: example2,
            },
            codeAfter: {
                description: <>Com substantivo direto:</>,
                value: example2Resolved
            },
        },
        {
            title: 'Uma palavra por conceito.',
            description: 'Escolha uma palavra por conceito e use ela consistentemente.',
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
            title: 'Nomes passíveis de busca',
            description: 'Tente buscar "e" em um projeto na sua IDE/Editor',
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
    ];

    const codeExamples = [
        {
            title: 'Domínio da Solução',
            description: 'São termos conhecidos por programadores e que revelam como o problema é resolvido. Exemplo: Visitor, Delegate, Factory...',
            code: {
                description: <>Aqui estamos usando três <span className={slideStyles.hightlight}>Design Patterns</span>: Visitor, AbstractFactory e Delegation.</>,
                value: example6
            },
        },
        {
            title: 'Domínio do Problema',
            description: 'São nomes relativo ao negócio. Exemplo: Order, Customer, Checkout...',
            code: {
                description: <>Alguns exemplos de classes com nome relativo ao negócio</>,
                value: example7
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
                    <h1 className={`${slideStyles.title} ${slideStyles.introTitle}`}>Mais Recomendações</h1>
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
                            <CodeExplanationComponent
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
        </div>
    );
}

export default _0203;