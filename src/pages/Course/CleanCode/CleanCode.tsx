import styles from './CleanCode.module.css';
import CourseNavBar from '../../../components/CourseNavBar';
import Header from '../../../components/Header';

function CleanCode() {
    
    return (
        <div className={styles.wrapper}>
            <CourseNavBar />
            <Header />
            <div className={`${styles.container} ${styles.video_section}`}>
                <span className={styles.video_number}>0102</span>
                <div className={styles.wrapper_title_slide}>
                    <h2 className={styles.video_name}>O que é código limpo</h2>
                    <a href="/slide/clean-code" className={styles.slide_link}>Slide</a>
                </div>

                <div className={styles.change_video_button_wrapper}>
                    <button className={styles.prev}>Anterior</button>
                    <button className={styles.next}>Próximo</button>
                </div>
            </div>
        </div>
    )
}

export default CleanCode;