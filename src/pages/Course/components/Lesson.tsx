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
import NonSubscribedUser from './NonSubscribedUser';

interface Props {
    lesson: SingleLesson;
}

function Lesson(props: Props) {
    const urlParams = useParams();
    const authContext = React.useContext(AuthContext);
    const { completeLesson } = useApi();

    function displayVideoIfLoggedIn() {
        if (authContext.user) {
            return displayVideoIfUserIsSubscribed();
        } else {
            return <div data-testid="authenticate"><Authenticate /></div>
        }
    }

    function displayVideoIfUserIsSubscribed() {
        if (authContext.activated) {
            return (
                <Video lesson={props.lesson} completeLesson={completeLesson} />
            );
        } else {
            return <div data-testid="nonSubscriber"><NonSubscribedUser /></div>
        }
    }

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