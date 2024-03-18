import slideStyles from '../../../../assets/css/Slide.module.css';
import styles from './styles.module.css';
import useSlide from '../../../../hooks/useSlide';
import useScrollbar from '../../../../hooks/useScrollbar';
import React from 'react';
import {
    example1,
    example1Resolved,
    example2,
    example3,
    example4,
    example4Resolved
} from './Example';

import RefactoringExplanationComponent from '../../components/RefactoringExplanationComponent';
import PrincipleExplanationComponent from '../../../../components/PrincipleExplanationComponent';

import { default as logo } from '../../../../assets/BookInVideo.svg';

function _0404() {
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
                    <h1 className={`${slideStyles.title} ${slideStyles.introTitle}`}>Mais sobre testes</h1>
                    <h3 className={slideStyles.subtitle}>0404 Capítulo: Testes Unitários<span>.</span></h3>
                </div>
            </section>
            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <h3 className={slideStyles.grayTitle}>Teste Unitário</h3>
                    <p className={`${slideStyles.smallSerifText} ${styles.smallSerifText}`}>Escrever o código de produção e depois o teste.</p>
                    <h3 className={slideStyles.grayTitle}>TDD</h3>
                    <p className={`${slideStyles.smallSerifText} ${styles.smallSerifText}`}>Escrever primeiro o teste e depois o código de produção.</p>
                </div>
            </section>
            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <h3 className={slideStyles.grayTitle}>Testabilidade e Desacoplamento</h3>
                    <p className={`${slideStyles.smallSerifText} ${styles.smallSerifText}`}>
                        Escrever primeiro o teste deixa naturalmente o código mais desacoplado e testável.
                    </p>
                </div>
            </section>
     
            <section 
                className={slideStyles.slide} 
                data-testid="slide" 
                ref={addSlide}
            >
                <div className={slideStyles.container}>
                    <PrincipleExplanationComponent
                        title='Uma verificação por teste?'
                        description='O benefício dessa regra é que assim nossos testes falham por apenas um motivo, mas há casos em que precisamos de mais de uma verificação.'
                        code={{
                            description: <></>,
                            value: example3,
                        }}
                    />
                </div>
            </section>

            <section 
                className={slideStyles.slide} 
                data-testid="slide" 
                ref={addSlide}
            >
                <div className={slideStyles.container}>
                    <RefactoringExplanationComponent
                        title='Um conceito por teste'
                        description='Nossos testes podem ter mais de uma verificação, mas é importante que essas verificações estejam se referindo ao mesmo conceito.'
                        codeBefore={{
                            description: <>Antes:</>,
                            value: example4,
                        }}
                        codeAfter={{
                            description: <>Depois:</>,
                            value: example4Resolved,
                        }}
                    />
                </div>
            </section>

            <section 
                className={slideStyles.slide} 
                data-testid="slide" 
                ref={addSlide}
            >
                <div className={slideStyles.container}>
                    <PrincipleExplanationComponent
                        title='Teste as condições limites'
                        description='As condições limites merecem atenção, pois são lugares onde os bugs podem se esconder.'
                        code={{
                            description: <></>,
                            value: example2,
                        }}
                    />
                </div>
            </section>

            <section 
                className={slideStyles.slide} 
                data-testid="slide" 
                ref={addSlide}
            >
                <div className={slideStyles.container}>
                    <RefactoringExplanationComponent
                        title='Cálculos'
                        description='Se for possível, deixe o cálculo diretamente no teste em vez de usar somente o resultado na verificação.'
                        codeBefore={{
                            description: <>Antes:</>,
                            value: example1,
                        }}
                        codeAfter={{
                            description: <>Depois:</>,
                            value: example1Resolved,
                        }}
                    />
                </div>
            </section>
        </div>
    );
}

export default _0404;