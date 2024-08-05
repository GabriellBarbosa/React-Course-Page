import slideStyles from '../../../../assets/css/Slide.module.css';
import styles from './styles.module.css';
import useSlide from '../../../../hooks/useSlide';
import useScrollbar from '../../../../hooks/useScrollbar';
import React from 'react';
import PrincipleExplanationComponent from '../../components/PrincipleExplanationComponent';
import {
    example1,
    example1Resolved,
    example2,
    example2WithVerification,
    example2WithException,
    example2Resolved,
    example3
} from './Example';
import { default as logo } from '../../../../assets/BookInVideo.svg';
import CodeComparion from '../../components/CodeComparison';

function _0606() {
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
                    <h1 className={`${slideStyles.title} ${slideStyles.introTitle}`}>Tratamento de Erro</h1>
                    <h3 className={slideStyles.subtitle}>0606 Capítulo: Tratamento de Erro<span>.</span></h3>
                </div>
            </section>
            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <PrincipleExplanationComponent 
                        title="Evite Retornar Códigos de Erro"
                        description="As verificações de códigos de erro obscurecem a lógica principal."
                        code={{
                            description: <></>,
                            value: example1,
                        }}
                    />
                </div>
            </section>
            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div>
                    <h2 className={styles.comparisonTitle}>Lançar Erro em vez de retornar Código de Erro.</h2>
                    <CodeComparion 
                        before={example1}
                        after={example1Resolved}
                    />
                </div>
            </section>
            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <h2 className={slideStyles.grayTitle}>Avise quando der errado</h2>
                    <p className={`${slideStyles.separatorBefore} ${slideStyles.cite}`}>Não esconda erros, evite longos períodos de depuração.</p>
                </div>
            </section>
            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <PrincipleExplanationComponent 
                        title="Não retorne null"
                        description="Ao esquecer de verificar por null e tentar acessar algo do objeto, receberemos um erro em tempo de execução."
                        code={{
                            description: <></>,
                            value: example2,
                        }}
                    />
                </div>
            </section>
            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <PrincipleExplanationComponent 
                        title="Resolvido?"
                        description="Colocando uma verificação de null, estamos tratando somente o efeito colateral da doença, deveriamos tratar a causa raiz: Não Retornar Null."
                        code={{
                            description: <></>,
                            value: example2WithVerification,
                        }}
                    />
                </div>
            </section>
            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <PrincipleExplanationComponent 
                        title="Lançar um erro"
                        description="Se uma função não consegue fazer o que o nome dela diz, lance um erro."
                        code={{
                            description: <></>,
                            value: example2WithException,
                        }}
                    />
                </div>
            </section>
            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <PrincipleExplanationComponent 
                        title="Special Case Pattern"
                        description="Uma subclasse que oferece comportamentos para casos especiais."
                        code={{
                            description: <></>,
                            value: example2Resolved,
                        }}
                    />
                </div>
            </section>
            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <PrincipleExplanationComponent 
                        title="Sem o Special Case Pattern"
                        description="Sem o Special Case a lógica de aplicar o cupom de desconto mínimo ficaria com o chamador."
                        code={{
                            description: <></>,
                            value: example3,
                        }}
                    />
                </div>
            </section>
        </div>
    );
}

export default _0606;