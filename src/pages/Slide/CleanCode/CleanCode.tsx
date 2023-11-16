import styles from './CleanCode.module.css';
import slideStyles from '../../../assets/css/Slide.module.css';

import { default as logo } from '../../../assets/BookInVideo.svg';
import { default as agileManifesto } from '../../../assets/agile-manifesto.jpg';

function CleanCode() {
    return (
        <div className={slideStyles.slide}>
            <section className={slideStyles.wrapper}>
                <div className={slideStyles.container}>
                    <span className={styles.logo}><img src={logo} alt="BookInVideo" /></span>
                    <h1 className={`${slideStyles.title} ${styles.introTitle}`}>Código Limpo</h1>
                    <p className={slideStyles.subtitle}>Habilidades Práticas do Agile Software<span>.</span></p>
                </div>
            </section>

            <section className={slideStyles.wrapper}>
                <div className={slideStyles.container}>
                    <h1 className={slideStyles.regular_title}>Manifesto Ágil</h1>
                    <div className={styles.manifestoImg}>
                        <img src={agileManifesto} alt="Manifesto para Desenvolvimento Ágil de Software" />
                    </div>
                    <a className={styles.manifestoLink} href="https://agilemanifesto.org/iso/ptbr/manifesto.html" target='_blank'>https://agilemanifesto.org/iso/ptbr/manifesto.html</a>
                </div>
            </section>
        </div>
    )
}

export default CleanCode;