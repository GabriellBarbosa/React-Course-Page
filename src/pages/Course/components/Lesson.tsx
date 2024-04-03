import styles from './Lesson.module.css';
import React from 'react';
import SingleLesson from '../../../interfaces/SingleLesson';
import { Link, useParams } from "react-router-dom";
import { AuthContext } from '../../../context/AuthContext';

function Lesson(props: { lesson: SingleLesson }) {
    const urlParams = useParams();
    const authContext = React.useContext(AuthContext);

    return (
        <div>
            <div className={styles.wrapper_title_slide}>
                <h2 className={styles.title}>{`${props.lesson.sequence} ${props.lesson.name}`}</h2>
                <div className={styles.video_buttons}>
                    {props.lesson.has_code && (
                        <a 
                            href={`https://github.com/bookinvideo/${urlParams.course}/${urlParams.lesson}`} 
                            className={`${styles.code_btn}`}
                            target="_blank"
                        >Código</a>
                    )}
                    {props.lesson.has_slide && (
                        <a 
                            href={`/slide/${urlParams.course}/${urlParams.lesson}`}
                            className={`${styles.slide_btn}`}
                            target="_blank"
                        >Slide</a>
                    )}
                </div>
            </div>
                <div className={styles.videoWrapper}>
                    {authContext.user ? (
                        <>
                            <div className={styles.video}>
                                <div style={{ padding: "56.25% 0 0 0", position: "relative"}}>
                                    <iframe src={props.lesson.video_src} allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }} title="0000-intro"></iframe>
                                </div>
                                <script src="https://player.vimeo.com/api/player.js"></script>
                            </div>
                            <div className={styles.change_video_buttons}>
                                {props.lesson.prev && (
                                    <Link to={`/curso/${urlParams.course}/${props.lesson.prev}`} className={styles.prev}>
                                        <span>Anterior</span>
                                    </Link>
                                )}
                                {props.lesson.next && (
                                    <Link to={`/curso/${urlParams.course}/${props.lesson.next}`} className={styles.next}>
                                        <span>Próximo</span>
                                    </Link>
                                )}
                            </div>
                        </>
                    ) : (
                        <div className={styles.authenticate} data-testid="authenticate">
                            <p>Para ter acesso:</p>
                            <a href="/conta">Login</a>
                            <span>ou</span>
                            <a href="">Inscreva-se</a>
                        </div>
                    )}
            </div>
        </div>
    )
}

export default Lesson;