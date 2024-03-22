import styles from './Lesson.module.css';
import SingleLesson from '../../../interfaces/SingleLesson';
import { Link, useParams } from "react-router-dom";

function Lesson(props: { lesson: SingleLesson }) {
    const urlParams = useParams();

    return (
        <div>
            <div className={styles.wrapper_title_slide}>
                <h2 className={styles.title}>{`${props.lesson.sequence} ${props.lesson.name}`}</h2>
                <div className={styles.video_buttons}>
                    <a 
                        href={``} 
                        className={`${styles.code_btn}`}
                        target="_blank"
                    >Código</a>
                    <a 
                        href={`/slide/${urlParams.course}/${urlParams.lesson}`}
                        className={`${styles.slide_btn}`}
                        target="_blank"
                    >Slide</a>

                </div>
            </div>
            <div className={styles.video}>
                <div style={{ padding: "56.25% 0 0 0", position: "relative"}}>
                    <iframe src={props.lesson.video_src} allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }} title="0000-intro"></iframe>
                </div>
                <script src="https://player.vimeo.com/api/player.js"></script>
            </div>
            <div className={styles.change_video_buttons}>
                <Link to="" className={styles.prev}><span>Anterior</span></Link>
                <Link to="" className={styles.next}><span>Próximo</span></Link>
            </div>
        </div>
    )
}

export default Lesson;