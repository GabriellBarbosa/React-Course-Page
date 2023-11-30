import styles from './CourseNavBar.module.css';

function CourseNavBar() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <h1 className={styles.title}>Código Limpo</h1>
                <span aria-label="mostrar ou esconder o menu"></span>
            </div>
            <div className={styles.charpter}>
                <h2 className={styles.title}>01 Introdução</h2>
                <ul>
                    <li className={styles.video}>
                        <div className={styles.video_name_wrapper}>
                            <span className={styles.video_number}>0102</span>
                            <p className={styles.video_name}>O que é código limpo</p>
                        </div>
                        <div className={styles.video_duration_wrapper}>
                            <p className={styles.video_duration}>19:55</p>
                            <span aria-label='vídeo já assistido'></span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default CourseNavBar;