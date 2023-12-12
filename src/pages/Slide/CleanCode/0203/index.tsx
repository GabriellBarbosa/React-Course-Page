import slideStyles from '../../../../assets/css/Slide.module.css';
import useSlide from '../../../../hooks/useSlide';

import { default as logo } from '../../../../assets/BookInVideo.svg';

function _0203() {
    const { slideNumber, addSlide } = useSlide();

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
        </div>
    );
}

export default _0203;