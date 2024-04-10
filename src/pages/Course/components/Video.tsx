import styles from './Video.module.css';
import { useParams } from 'react-router-dom';

interface Props {
    video_src: string;
    isCompleted: boolean;
    completeLesson: (endpoint: string) => Promise<boolean>;
}

function Video(props: Props) {
    const urlParams = useParams();

    async function completeLessonOnClick() {
        if (props.isCompleted) 
            return;
        else await props.completeLesson(
            `/curso/${urlParams.course}/${urlParams.lesson}`);
    }

    return (
        <>
            <div className={styles.video}>
                <button 
                    data-testid="completeBtn"
                    onClick={completeLessonOnClick}
                >Completar aula</button>
            </div>
        </>
    )
}

export default Video;