import styles from './styles.module.css';
import slideStyles from '../../../../assets/css/Slide.module.css';

import useSlide from '../../../../hooks/useSlide';
import React from 'react';
import useScrollbar from '../../../../hooks/useScrollbar';
import CodeEditor from '../../../../components/CodeEditor';
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
                    <h2 className={styles.title}>Tamanho Relativo ao Escopo</h2>
                    <p className={styles.text}>
                        Escopos maiores requerem nomes de variáveis mais explicativas enquanto 
                        escopos menores podem ter nomes de variáveis menores. No caso das 
                        funções é o inverso.
                    </p>
                    <div className={styles.code_examples_wrapper}>
                        <div className={styles.code_example}>
                            <p className={styles.code_description}>
                                “<span className={styles.code_hightlight}>i</span>” estava sendo usado em um escopo grande.
                            </p>
                            <CodeEditor code={example1} />
                        </div>
                        <div className={styles.code_example}>
                            <p className={styles.code_description}>
                                Então mudamos para “<span className={styles.code_hightlight}>client</span>”.
                            </p>
                            <CodeEditor code={example1Resolved} />
                        </div>
                    </div>
                </div>
            </section>
            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <h2 className={styles.title}>Distinções Significativas</h2>
                    <p className={styles.text}>
                        Variáveis de loop i, j. Ter essas variáveis em um escopo grande faz 
                        com que seja cansativo ter que lembrar o que essas variáveis são.
                    </p>
                    <div className={styles.code_examples_wrapper}>
                        <div className={styles.code_example}>
                            <p className={styles.code_description}>
                                E também “<span className={styles.code_hightlight}>j</span>” não fazia mais sentido para nós.
                            </p>
                            <CodeEditor code={example2} />
                        </div>
                        <div className={styles.code_example}>
                            <p className={styles.code_description}>
                                Então mudamos para “<span className={styles.code_hightlight}>enterprise</span>”.
                            </p>
                            <CodeEditor code={example2Resolved} />
                        </div>
                    </div>
                </div>
            </section>
            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <h2 className={styles.title}>Adicione Contexto</h2>
                    <p className={styles.text}>
                        Adicione contexto em nomes genéricos. Quando tivermos os contextos bem definidos 
                        podemos agrupar os elementos e remover contextos desnecessários.
                    </p>
                    <div className={styles.code_examples_wrapper}>
                        <div className={styles.code_example}>
                            <p className={styles.code_description}>
                                A variável “<span className={styles.code_hightlight}>sum</span>” não informava o contexto.
                            </p>
                            <CodeEditor code={example3} />
                        </div>
                        <div className={styles.code_example}>
                            <p className={styles.code_description}>
                                Então mudamos para “<span className={styles.code_hightlight}>sumOfRealties</span>”.
                            </p>
                            <CodeEditor code={example3Resolved} />
                        </div>
                    </div>
                </div>
            </section>
            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <h2 className={styles.title}>Remova Contexto</h2>
                    <p className={styles.text}>
                        Removendo os contextos desnecessários.
                    </p>
                    <div className={styles.code_examples_wrapper}>
                        <div className={styles.code_example}>
                            <p className={styles.code_description}>
                                A variável “<span className={styles.code_hightlight}>sumOfRealties</span>” já estava dentro da função “<span className={styles.code_hightlight}>getTotalOfRealties</span>”.
                            </p>
                            <CodeEditor code={example4} />
                        </div>
                        <div className={styles.code_example}>
                            <p className={styles.code_description}>
                                Então renomeamos a variável para “<span className={styles.code_hightlight}>result</span>”.
                            </p>
                            <CodeEditor code={example4Resolved} />
                        </div>
                    </div>
                </div>
            </section>
            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <h2 className={styles.title}>Revele o Propósito</h2>
                    <p className={styles.text}>
                        Não deixe o propósito em comentários. Deixe-o nos nomes das classes, funções e variáveis.
                    </p>
                    <div className={styles.code_examples_wrapper}>
                        <div className={styles.code_example}>
                            <p className={styles.code_description}>A condicional estava bem difícil de ler.</p>
                            <CodeEditor code={example5} />
                        </div>
                        <div className={styles.code_example}>
                            <p className={styles.code_description}>
                                Dando pequenos passos conseguimos extraí-la para um função com um nome mais descritivo.
                            </p>
                            <CodeEditor code={example5Resolved} />
                        </div>
                    </div>
                </div>
            </section>
            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <h2 className={styles.title}>Evite Informações Erradas</h2>
                    <p className={styles.text}>
                        Nomes errados desviam o propósito que você gostaria de revelar no código.
                    </p>
                    <div className={styles.code_examples_wrapper}>
                        <div className={styles.code_example}>
                            <p className={styles.code_description}>Percebemos que o nome da função não dizia o que ela realmente fazia.</p>
                            <CodeEditor code={example6} />
                        </div>
                        <div className={styles.code_example}>
                            <p className={styles.code_description}>
                                Então renomeamos a função para o nome correto.
                            </p>
                            <CodeEditor code={example6Resolved} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )   
}

export default _0202;