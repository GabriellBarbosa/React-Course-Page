import slideStyles from '../../../../assets/css/Slide.module.css';
import useSlide from '../../../../hooks/useSlide';
import useScrollbar from '../../../../hooks/useScrollbar';
import React from 'react';
import PrincipleExplanationComponent from '../../components/PrincipleExplanationComponent';
import RefactoringExplanationComponent from '../../components/RefactoringExplanationComponent';
import { 
    example1, 
    example2,
    example2Resolved
} from './Example';

import { default as logo } from '../../../../assets/BookInVideo.svg';

function _0304() {
    const { slideNumber, addSlide } = useSlide();
    const { hideScrollbar, showScrollbar } = useScrollbar();

    React.useEffect(() => {
        hideScrollbar();
        return () => showScrollbar();
    }, []);

    const principle = {
        title: 'Efeitos Colaterais',
        description: 'Efeito colateral é um comportamento inesperado que ocorre quando chamamos uma função.',
        code: {
            description: <>Exemplo de função com um efeito colateral:</>,
            value: example1
        },
    }

    const refactoring = {
        title: 'Comando e Consulta',
        description: 'Comando:  Quando mudamos o estado do nosso programa. Consulta: Quando retornamos algum valor. Uma função não deve fazer as duas coisas.',
        codeBefore: {
            description: <>A função está atribuindo um valor à variável "<span className={slideStyles.hightlight}>_client</span>" e retornando o mesmo valor:</>,
            value: example2
        },
        codeAfter: {
            description: <>Comportamento de consulta e comando separado em funções distintas:</>,
            value: example2Resolved
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
                    <h1 className={`${slideStyles.title} ${slideStyles.introTitle}`}>Evite Surpresas</h1>
                    <h3 className={slideStyles.subtitle}>0304 Capítulo: Funções<span>.</span></h3>
                </div>
            </section>

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

export default _0304;