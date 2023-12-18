import slideStyles from '../../../../assets/css/Slide.module.css';
import useSlide from '../../../../hooks/useSlide';
import useScrollbar from '../../../../hooks/useScrollbar';
import PrincipleExplanationComponent from '../../../../components/PrincipleExplanationComponent';
import React from 'react';

import { default as logo } from '../../../../assets/BookInVideo.svg';

function _0301() {
    const { slideNumber, addSlide } = useSlide();
    const { hideScrollbar, showScrollbar } = useScrollbar();

    React.useEffect(() => {
        hideScrollbar();
        return () => showScrollbar();
    }, []);

    const principles = [
        {
            title: 'Uma Tarefa',
            description: 'Quando a função está fazendo apenas uma coisa, não é possível extrair outra a partir dela e o seu corpo está um nível de abstração abaixo do seu nome.',
            code: {
                description: <></>,
                value: ''
            },
        },
        {
            title: 'Extrair Função',
            description: 'Extrair um fragmento de código para sua própria função e dar um nome bem descritivo.',
            code: {
                description: <></>,
                value: ''
            },
        },
        {
            title: 'Um Nível de Abstração',
            description: 'O corpo da função deve estar um nível abaixo do nome da função.',
            code: {
                description: <></>,
                value: ''
            },
        },
        {
            title: 'Um Bom Nome',
            description: 'Funções pequenas que fazem uma apenas coisa só tem valor se tiverem um bom nome.',
            code: {
                description: <></>,
                value: ''
            },
        },
        {
            title: 'Regra Decrescente',
            description: 'Ler textos de cima para baixo é algo natural para nós. Nosso código deve seguir essa mesma regra.',
            code: {
                description: <></>,
                value: ''
            },
        },
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
                    <h1 className={`${slideStyles.title} ${slideStyles.introTitle}`}>Funções</h1>
                    <h3 className={slideStyles.subtitle}>0301 Capítulo: Funções<span>.</span></h3>
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
                                }}
                            />
                        </div>
                    </section>
                )
            })}
        </div>
    );
}

export default _0301;