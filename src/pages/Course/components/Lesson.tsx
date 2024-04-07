import styles from './Lesson.module.css';
import React from 'react';
import SingleLesson from '../../../interfaces/SingleLesson';
import { useParams } from "react-router-dom";
import { AuthContext } from '../../../context/AuthContext';
import { Link } from 'react-router-dom';

import Loading from './Loading';
import Video from './Video';
import Authenticate from './Authenticate';
import NonSubscribedUser from './NonSubscribedUser';

function Lesson(props: { lesson: SingleLesson }) {
    const urlParams = useParams();
    const authContext = React.useContext(AuthContext);

    function displayVideoIfLoggedIn() {
        if (authContext.user) {
            return displayVideoIfAccountIsSubscribed();
        } else {
            return <div data-testid="authenticate"><Authenticate /></div>
        }
    }

    function displayVideoIfAccountIsSubscribed() {
        if (authContext.activated) {
            return <Video video_src={props.lesson.video_src} />
        } else {
            return <div data-testid="nonSubscriber"><NonSubscribedUser /></div>
        }
    }

    return (
        <div>
            <div className={styles.wrapper_title_slide}>
                <h2 className={styles.title}>{`${props.lesson.sequence} ${props.lesson.name}`}</h2>
                {authContext.user && (
                    <div className={styles.video_buttons}>
                        {props.lesson.has_code && (
                            <a 
                                href={`https://github.com/bookinvideo/${urlParams.course}/${urlParams.lesson}`} 
                                className={`${styles.code_btn}`}
                                target="_blank"
                                data-testid="codeBtn"
                            >Código</a>
                        )}
                        {props.lesson.has_slide && (
                            <a 
                                href={`/slide/${urlParams.course}/${urlParams.lesson}`}
                                className={`${styles.slide_btn}`}
                                target="_blank"
                                data-testid="slideBtn"
                            >Slide</a>
                        )}
                    </div>
                )}
            </div>
            <div className={styles.videoWrapper}>
                {authContext.loading ? (
                    <div className={styles.loadingWrapper}><Loading /></div>
                ) : displayVideoIfLoggedIn()}
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
        </div>
    )
}

export default Lesson;