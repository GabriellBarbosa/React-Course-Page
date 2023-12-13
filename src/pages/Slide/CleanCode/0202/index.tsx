import slideStyles from '../../../../assets/css/Slide.module.css';

import useSlide from '../../../../hooks/useSlide';
import React from 'react';
import useScrollbar from '../../../../hooks/useScrollbar';
import RefactoringExplanationComponent from '../../../../components/RefactoringExplanationComponent';

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
    example6Resolved
} from './Example';

import { default as logo } from '../../../../assets/BookInVideo.svg';

function _0202() {
    const { slideNumber, addSlide } = useSlide();
    const { hideScrollbar, showScrollbar } = useScrollbar();
    
    React.useEffect(() => {
        hideScrollbar();
        return () => showScrollbar();
    }, []);

    const refactoringReasons = [
        {
            title: 'Tamanho Relativo ao Escopo',
            description: 'Escopos maiores requerem nomes de variáveis mais explicativas, enquanto escopos menores podem ter nomes de variáveis menores. No caso das funções é o inverso.',
            codeBefore: {
                description: <>“<span className={slideStyles.hightlight}>i</span>” estava sendo usado em um escopo grande.</>,
                value: example1
            },
            codeAfter: {
                description: <>Então mudamos para “<span className={slideStyles.hightlight}>client</span>"</>,
                value: example1Resolved
            },
        },
        {
            title: 'Distinções Significativas',
            description: 'Duas coisas não podem ter o mesmo nome dentro do mesmo escopo. Deixe essa diferença clara.',
            codeBefore: {
                description: <>“<span className={slideStyles.hightlight}>j</span>” não tem expressividade.</>,
                value: example2
            },
            codeAfter: {
                description: <>Então mudamos para “<span className={slideStyles.hightlight}>enterprise</span>”.</>,
                value: example2Resolved
            },
        },
        {
            title: 'Adicione Contexto',
            description: 'Adicione contexto em nomes genéricos. Quando tivermos os contextos bem definidos podemos agrupar os elementos e remover contextos desnecessários.',
            codeBefore: {
                description: <>A variável “<span className={slideStyles.hightlight}>sum</span>” não informava o contexto.</>,
                value: example3
            },
            codeAfter: {
                description: <>Então mudamos para “<span className={slideStyles.hightlight}>sumOfRealties</span>”.</>,
                value: example3Resolved
            },
        },
        {
            title: 'Remova Contexto',
            description: 'Removendo os contextos desnecessários.',
            codeBefore: {
                description: <>A variável “<span className={slideStyles.hightlight}>sumOfRealties</span>” já estava dentro da função “<span className={slideStyles.hightlight}>getTotalOfRealties</span>”.</>,
                value: example4
            },
            codeAfter: {
                description: <>Então renomeamos a variável para “<span className={slideStyles.hightlight}>result</span>”.</>,
                value: example4Resolved
            },
        },
        {
            title: 'Revele o Propósito',
            description: 'Não deixe o propósito em comentários. Deixe-o nos nomes das classes, funções e variáveis.',
            codeBefore: {
                description: <>A condicional estava bem difícil de ler.</>,
                value: example5
            },
            codeAfter: {
                description: <>Dando pequenos passos conseguimos extraí-la para uma função com um nome mais descritivo.</>,
                value: example5Resolved
            },
        },
        {
            title: 'Evite Informações Erradas',
            description: 'Nomes errados desviam o propósito que você gostaria de revelar no código.',
            codeBefore: {
                description: <>Percebemos que o nome da função não dizia o que ela realmente fazia.</>,
                value: example6
            },
            codeAfter: {
                description: <>Então renomeamos a função para o nome correto.</>,
                value: example6Resolved
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
                    <h1 className={`${slideStyles.title} ${slideStyles.introTitle}`}>Motivos das Decisões</h1>
                    <h3 className={slideStyles.subtitle}>0202 Capítulo: Nomes<span>.</span></h3>
                </div>
            </section>

            {refactoringReasons.map((refactoring) => {
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
    )   
}

export default _0202;