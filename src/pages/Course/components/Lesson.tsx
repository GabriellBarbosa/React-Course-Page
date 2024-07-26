import styles from './Lesson.module.css';
import React from 'react';
import SingleLesson from '../../../interfaces/SingleLesson';
import useApi from '../../../hooks/useApi';
import { useParams } from "react-router-dom";
import { AuthContext } from '../../../context/AuthContext';
import { Link } from 'react-router-dom';

import Loading from './Loading';
import Video from './Video';
import Authenticate from './Authenticate';
import NotActivated from './NotActivated';

interface Props {
    lesson: SingleLesson;
}

function Lesson(props: Props) {
    const urlParams = useParams();
    const authContext = React.useContext(AuthContext);
    const { completeLesson } = useApi();

    function displayVideoLesson() {
        if (canAcessVideoLesson()) {
            return (
                <div data-testid="videoLesson">
                    <Video lesson={props.lesson} completeLesson={completeLesson} />
                </div>
            )
        } else if (isNotActivated()) {
            return (
                <div data-testid="notActivated">
                    <NotActivated />
                </div>
            )
        } else {
            return (
                <div data-testid="authenticate">
                    <Authenticate />
                </div>
            )
        }
    }

    function canAcessVideoLesson() {
        return authContext.activated || props.lesson.free == 'true';
    }

    function isNotActivated() {
        return authContext.user && !authContext.activated;
    }

    return (
        <div>
            <div className={styles.wrapper_title_slide}>
                <h2 className={styles.title}>{`${props.lesson.sequence} ${props.lesson.name}`}</h2>
                <div className={styles.video_buttons}>
                    {props.lesson.code && (
                        <a 
                            href={props.lesson.code} 
                            className={`${styles.code_btn}`}
                            target="_blank"
                            data-testid="codeBtn"
                        >Código</a>
                    )}
                    {props.lesson.slide && (
                        <a 
                            href={props.lesson.slide}
                            className={`${styles.slide_btn}`}
                            target="_blank"
                            data-testid="slideBtn"
                        >Slide</a>
                    )}
                </div>
            </div>
            <div className={styles.videoWrapper}>
                {authContext.loading ? (
                    <div className={styles.loadingWrapper}><Loading /></div>
                ) : (
                    displayVideoLesson()
                )}
            </div>
            <div className={styles.change_video_buttons}>
                {props.lesson.prev && (
                    <Link to={`/curso/${urlParams.course}/${props.lesson.prev}`} className={styles.prev}>
                        <span>Anterior</span>
                    </Link>
                )}
                {props.lesson.next ? (
                    <Link to={`/curso/${urlParams.course}/${props.lesson.next}`} className={styles.next}>
                        <span>Próximo</span>
                    </Link>
                ) : (
                    <a href="/conta" className={`${styles.certificate} ${styles.next}`} data-testid="certificateBtn">
                        Certificado
                    </a>
                )}
            </div>
            {props.lesson.note && (
                <p data-testid="note" className={styles.note}>{ props.lesson.note }</p>
            )}
        </div>
    )
}

export default Lesson;