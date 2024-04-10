import styles from './Video.module.css';
import { useParams } from 'react-router-dom';

interface Props {
    video_src: string;
    completeLesson: (endpoint: string) => void;
}

function Video(props: Props) {
    const urlParams = useParams();

    return (
        <>
            <div className={styles.video}>
                <button 
                    data-testid="completeBtn"
                    onClick={() => props.completeLesson(`/curso/${urlParams.course}/${urlParams.lesson}`)}
                >Completar aula</button>
                {/* <div style={{ padding: "56.25% 0 0 0", position: "relative"}}>
                    <video 
                        src={props.video_src} 
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
                        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }} 
                        title="0000-intro"
                        data-testid="iframe"
                        onEnded={props.completeLesson}
                    ></video>
                </div>
                <script src="https://player.vimeo.com/api/player.js"></script> */}
            </div>
        </>
    )
}

export default Video;