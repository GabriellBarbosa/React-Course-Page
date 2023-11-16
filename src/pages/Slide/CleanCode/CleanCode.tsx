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
                    <h3 className={slideStyles.subtitle}>Habilidades Práticas do Agile Software<span>.</span></h3>
                </div>
            </section>

            <section className={slideStyles.wrapper}>
                <div className={slideStyles.container}>
                    <h1 className={slideStyles.regular_title}>Manifesto Ágil</h1>
                    <div className={styles.manifestoImg}>
                        <img src={agileManifesto} alt="Manifesto para Desenvolvimento Ágil de Software" />
                    </div>
                    <a 
                        className={`${slideStyles.externalLink} ${styles.externalLink}`} 
                        href="https://agilemanifesto.org/iso/ptbr/manifesto.html" 
                        target='_blank'
                    >
                        https://agilemanifesto.org/iso/ptbr/manifesto.html
                    </a>
                </div>
            </section>

            <section className={slideStyles.wrapper}>
                <div className={slideStyles.container}>
                    <h2 className={slideStyles.regular_title}>Agile Software</h2>
                    <h3 className={slideStyles.subtitle}>Práticas Técnicas<span>.</span></h3>
                    <ul className={`${slideStyles.list} ${styles.list}`}>
                        <li>Desenvolvimento Orientado a Testes.</li>
                        <li>Refatoração.</li>
                        <li>Design Simples.</li>
                    </ul>
                    <p className={`${slideStyles.infoSource} ${styles.infoSource}`}>Desenvolvimento Ágil Limpo: De Volta às Origens.</p>
                </div>
            </section>
        </div>
    )
}

export default CleanCode;