import styles from './CleanCode.module.css';
import CourseNavBar from '../../../components/CourseNavBar';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

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

                <div className={styles.video_player}>
                    <iframe 
                        src="https://player.vimeo.com/video/890014305?badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479" 
                        allow="autoplay; fullscreen; picture-in-picture" 
                        className={styles.iframe} title="Sequência 01_1"></iframe>
                </div>
                <script src="https://player.vimeo.com/api/player.js"></script>

                <div className={styles.change_video_button_wrapper}>
                    <button className={styles.prev}>Anterior</button>
                    <button className={styles.next}>Próximo</button>
                </div>
            </div>

            <div className={styles.footer_wrapper}>
                <Footer />
            </div>
        </div>
    )
}

export default CleanCode;