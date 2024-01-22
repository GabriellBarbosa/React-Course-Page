import slideStyles from '../../../../assets/css/Slide.module.css';
import styles from './styles.module.css';
import useSlide from '../../../../hooks/useSlide';
import useScrollbar from '../../../../hooks/useScrollbar';
import React from 'react';

import RefactoringExplanationComponent from '../../../../components/RefactoringExplanationComponent';
import PrincipleExplanationComponent from '../../../../components/PrincipleExplanationComponent';

import { default as logo } from '../../../../assets/BookInVideo.svg';

function _0404() {
    const { slideNumber, addSlide } = useSlide();
    const { hideScrollbar, showScrollbar } = useScrollbar();

    React.useEffect(() => {
        hideScrollbar();
        return () => showScrollbar();
    }, []);

    const principles = [
        {
            title: 'Uma verificação por teste?',
            description: 'O benefício dessa regra é que assim nossos testes falham por apenas um motivo, mas há casos em que precisamos de mais de uma verificação.',
            code: {
                description: <></>,
                value: ''
            },
        },
        {
            title: 'Um conceito por teste',
            description: 'Nossos testes podem ter mais de uma verificação, mas é importante que essas verificações estejam se referindo ao mesmo contexto.',
            code: {
                description: <></>,
                value: ''
            },
        },
        {
            title: 'Teste as condições limites',
            description: 'As condições limites merecem atenção, porque são lugares onde bugs podem se esconder.',
            code: {
                description: <></>,
                value: ''
            },
        },
    ]

    const refactoring = {
        title: 'Cálculos',
        description: 'Não deixe números de resultado de cálculos soltos nas verificações, faça o cálculo nos testes e verifique o resultado.',
        codeBefore: {
            description: <></>,
            value: ''
        },
        codeAfter: {
            description: <></>,
            value: ''
        }
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
                    <h1 className={`${slideStyles.title} ${slideStyles.introTitle}`}>Mais sobre testes</h1>
                    <h3 className={slideStyles.subtitle}>0404 Capítulo: Testes Unitários<span>.</span></h3>
                </div>
            </section>
            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <h3 className={slideStyles.grayTitle}>Teste Unitário</h3>
                    <p className={styles.smallSerifText}>Escrever o código de produção e depois o teste.</p>
                    <h3 className={slideStyles.grayTitle}>TDD</h3>
                    <p className={styles.smallSerifText}>Escrever primeiro o teste e depois o código de produção.</p>
                </div>
            </section>
            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <h3 className={slideStyles.grayTitle}>Testabilidade e Desacoplamento</h3>
                    <p className={styles.smallSerifText}>
                        Escrever primeiro o teste deixa naturalmente o código mais desacoplado e testável.
                    </p>
                </div>
            </section>
            {
                principles.map((principle) => (
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
                ))
            }

            <section 
                className={slideStyles.slide} 
                data-testid="slide" 
                ref={addSlide}
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

export default _0404;