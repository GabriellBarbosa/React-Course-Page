import styles from './styles.module.css';
import slideStyles from '../../../../assets/css/Slide.module.css';

import useSlide from '../../../../hooks/useSlide';
import React from 'react';
import useScrollbar from '../../../../hooks/useScrollbar';

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
import TopicComponent from '../../../../components/TopicSlide';

function _0202() {
    const { slideNumber, addSlide } = useSlide();
    const { hideScrollbar, showScrollbar } = useScrollbar();
    
    React.useEffect(() => {
        hideScrollbar();
        return () => showScrollbar();
    }, []);

    const topics = [
        {
            title: 'Tamanho Relativo ao Escopo',
            description: 'Escopos maiores requerem nomes de variáveis mais explicativas enquanto escopos menores podem ter nomes de variáveis menores. No caso das funções é o inverso.',
            codeBefore: {
                description: <>“<span className={styles.hightlight}>i</span>” estava sendo usado em um escopo grande.</>,
                value: example1
            },
            codeAfter: {
                description: <>Então mudamos para “<span className={styles.hightlight}>client</span></>,
                value: example1Resolved
            },
        },
        {
            title: 'Distinções Significativas',
            description: 'Variáveis de loop i, j. Ter essas variáveis em um escopo grande faz com que seja cansativo ter que lembrar o que essas variáveis são.',
            codeBefore: {
                description: <>E também “<span className={styles.hightlight}>j</span>” não fazia mais sentido para nós.</>,
                value: example2
            },
            codeAfter: {
                description: <>Então mudamos para “<span className={styles.hightlight}>enterprise</span>”.</>,
                value: example2Resolved
            },
        },
        {
            title: 'Adicione Contexto',
            description: 'Adicione contexto em nomes genéricos. Quando tivermos os contextos bem definidos podemos agrupar os elementos e remover contextos desnecessários.',
            codeBefore: {
                description: <>A variável “<span className={styles.hightlight}>sum</span>” não informava o contexto.</>,
                value: example3
            },
            codeAfter: {
                description: <>Então mudamos para “<span className={styles.hightlight}>sumOfRealties</span>”.</>,
                value: example3Resolved
            },
        },
        {
            title: 'Remova Contexto',
            description: 'Removendo os contextos desnecessários.',
            codeBefore: {
                description: <>A variável “<span className={styles.hightlight}>sumOfRealties</span>” já estava dentro da função “<span className={styles.hightlight}>getTotalOfRealties</span>”.</>,
                value: example4
            },
            codeAfter: {
                description: <>Então renomeamos a variável para “<span className={styles.hightlight}>result</span>”.</>,
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
                description: <>Dando pequenos passos conseguimos extraí-la para um função com um nome mais descritivo.</>,
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

            {topics.map((topic) => {
                return (
                    <section className={slideStyles.slide} data-testid="slide" ref={addSlide} key={topic.title}>
                        <div className={slideStyles.container}>
                            <TopicComponent 
                                title={topic.title}
                                description={topic.description}
                                codeBefore={{
                                    description: topic.codeBefore.description,
                                    value: topic.codeBefore.value
                                }}
                                codeAfter={{
                                    description: topic.codeAfter.description,
                                    value: topic.codeAfter.value
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