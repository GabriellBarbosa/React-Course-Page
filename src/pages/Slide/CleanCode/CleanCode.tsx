import styles from './CleanCode.module.css';
import appStyles from '../../../App.module.css';

import { default as logo } from '../../../assets/BookInVideo.svg';
import { default as agileManifesto } from '../../../assets/agile-manifesto.jpg';

function CleanCode() {
    return (
        <div className={styles.cleanCode}>
            <section className={styles.wrapper}>
                <div className={appStyles.container}>
                    <span className={styles.logo}><img src={logo} alt="BookInVideo" /></span>
                    <h1 className={styles.cleanCodeTitle}>Código Limpo</h1>
                    <p className={styles.subtitle}>Habilidades Práticas do Agile Software<span>.</span></p>
                </div>
            </section>

            <section className={styles.wrapper}>
                <div className={appStyles.container}>
                    <h1 className={styles.title}>Manifesto Ágil</h1>
                    <div className={styles.agileManifestoImg}>
                        <img src={agileManifesto} alt="Manifesto para Desenvolvimento Ágil de Software" />
                    </div>
                    <a className={styles.agileManifestoLink} href="https://agilemanifesto.org/iso/ptbr/manifesto.html" target='_blank'>https://agilemanifesto.org/iso/ptbr/manifesto.html</a>
                </div>
            </section>
        </div>
    )
}

export default CleanCode;