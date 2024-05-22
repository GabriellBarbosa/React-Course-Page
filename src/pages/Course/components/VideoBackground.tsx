import styles from "./VideoBackground.module.css";
import React from "react";

interface Props {
    children: React.ReactNode;
}

function VideoBackground(props: Props) {
    return <div className={styles.container}>{props.children}</div>
}

export default VideoBackground;