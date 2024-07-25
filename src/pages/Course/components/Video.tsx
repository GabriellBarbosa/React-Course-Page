import styles from './Video.module.css';
import React from 'react';
import VideoPlayer from './VideoPlayer';
import SingleLesson from '../../../interfaces/SingleLesson';
import { CourseContentContext } from '../../../context/CourseContentContext';
import { useParams } from 'react-router-dom';

interface Props {
    lesson: SingleLesson;
    completeLesson: (endpoint: string) => Promise<boolean>;
}

function Video(props: Props) {
    const urlParams = useParams();
    const courseContentContext = React.useContext(CourseContentContext);
    const completeLessonEndpoint = `/curso/${urlParams.course}/${urlParams.lesson}`;

    async function completeLesson() {
        if (props.lesson.completed) return;

        const requestOk = await props.completeLesson(completeLessonEndpoint);
        if (requestOk)
            courseContentContext.completeLesson(props.lesson.slug);
    }

    return (
        <div className={styles.video}>
            <VideoPlayer src={props.lesson.video_src} onEnded={completeLesson} />
            <button
                className={styles.completeBtn}
                data-testid="completeBtn"
                onClick={completeLesson}
            >Completar aula</button>
        </div>
    )
}

export default Video;