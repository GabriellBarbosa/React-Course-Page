import styles from './Video.module.css';

function Video(props: { video_src: string }) {
    return (
        <>
            <div className={styles.video}>
                <div style={{ padding: "56.25% 0 0 0", position: "relative"}}>
                    <iframe src={props.video_src} allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }} title="0000-intro"></iframe>
                </div>
                <script src="https://player.vimeo.com/api/player.js"></script>
            </div>
        </>
    )
}

export default Video;