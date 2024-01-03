import slideStyles from '../../../../assets/css/Slide.module.css';
import useSlide from '../../../../hooks/useSlide';
import useScrollbar from '../../../../hooks/useScrollbar';
import PrincipleExplanationComponent from '../../../../components/PrincipleExplanationComponent';
import PrincipleExplanation from '../../../../interfaces/PrincipleExplanation';
import React from 'react';
import {
    example1,
    example2
} from './Example';

import { default as logo } from '../../../../assets/BookInVideo.svg';

function _0306() {
    const { slideNumber, addSlide } = useSlide();
    const { hideScrollbar, showScrollbar } = useScrollbar();

    React.useEffect(() => {
        hideScrollbar();
        return () => showScrollbar();
    }, []);

    const principles: PrincipleExplanation[] = [
        {
            title: 'O que significa?',
            description: 'Entidades de software devem ser abertas para extensão, mas fechadas para modificação.',
            code: {
                description: <>Exemplo de código que viola essa regra:</>,
                value: example1,
                showCopyButton: true
            },
        },
        {
            title: 'Substituir Condicional por Polimorfismo',
            description: 'Criamos uma classe para cada meio de pagamento. Agora, o método de calcular a taxa será oferecido por sua respectiva classe.',
            code: {
                description: <>Código refatorado:</>,
                value: example2,
                showCopyButton: true
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
                    <h1 className={`${slideStyles.title} ${slideStyles.introTitle}`}>open-closed principle</h1>
                    <h3 className={slideStyles.subtitle}>0306 Capítulo: Funções<span>.</span></h3>
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
                                    showCopyButton: principle.code.showCopyButton
                                }}
                            />
                        </div>
                    </section>
                )
            })}
        </div>
    );
}

export default _0306;