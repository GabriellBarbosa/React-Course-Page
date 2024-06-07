import slideStyles from '../../../../assets/css/Slide.module.css';
import styles from './styles.module.css';
import useSlide from '../../../../hooks/useSlide';
import useScrollbar from '../../../../hooks/useScrollbar';
import React from 'react';

import { default as WithoutPackWrapper } from '../../../../assets/without-pack-wrapper.png';
import { default as WithPackWrapper } from '../../../../assets/with-pack-wrapper.png';

function _0601() {
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
                    <div className={styles.center}>
                        <img src={WithoutPackWrapper} alt="chamadas de uma função de um pacote externo em várias partes do nosso projeto" />
                    </div>
                </div>
            </section>

            <section className={slideStyles.slide} data-testid="slide" ref={addSlide}>
                <div className={slideStyles.container}>
                    <div className={styles.center}>
                        <img src={WithPackWrapper} alt="chamadas da função do pacote externo empacotadas por um wrapper" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default _0601;