import styles from './VideoPlayer.module.css';
import React from 'react';
import Vimeo from '@vimeo/player';

interface Props {
    src: string;
    onEnded: () => void;
}

function VideoPlayer(props: Props) {
    const iframeRef = React.useRef(null);

    React.useEffect(() => {
        if (iframeRef.current) {
            const player = new Vimeo(iframeRef.current);
            player.on('ended', props.onEnded);
        }
    }, []);

    return (
        <div className={styles.wrapper}>
            <iframe 
                ref={iframeRef} 
                src={props.src}
                className={styles.iframe}
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            />
            <script src="https://player.vimeo.com/api/player.js"></script>
        </div>
    )
}

export default VideoPlayer;