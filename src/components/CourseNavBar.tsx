import styles from './CourseNavBar.module.css';
import React from 'react';

interface Chapter {
    id: string;
    title: string;
    videos: Video[];
}

interface Video {
    id: string;
    title: string;
    slug: string;
    duration: string;
    completed: boolean;
}

function CourseNavBar(props: { data?: Chapter[] }) {
    const [navbarActive, setNavbarActive] = React.useState(false);

    function toggleNavbarActive() {
        setNavbarActive(!navbarActive);
    }

    function activeNavbar() {
        if (!navbarActive) {
            setNavbarActive(true);
        }
    }

    function deactiveNavbar() {
        if (navbarActive) {
            setNavbarActive(false);
        }
    }

    return (
        <>
            <div 
                data-testid="background" 
                className={`${styles.background} ${navbarActive ? styles.active : ''}`}
                onClick={deactiveNavbar} 
            ></div>
            <div 
                className={`${styles.navbar} ${navbarActive ? styles.active : ''}`} 
                data-testid="navbar"
                onClick={activeNavbar} 
            >
                <div className={styles.header}>
                    <h1 className={styles.title}>Código Limpo</h1>
                    <span 
                        className={styles.toggle_navbar_btn} 
                        aria-label="mostrar ou esconder o menu" 
                        data-testid="toggleActive"
                        onClick={toggleNavbarActive}
                    ></span>
                </div>

                {props.data && props.data.map((item) => {
                    return (
                        <div className={styles.chapter} key={item.id} data-testid='chapter'>
                            <h2 className={styles.title}>{`${item.id} ${item.title}`}</h2>
                            <ul className={styles.video_list}>
                                {item.videos.map((video) => {
                                    return (
                                        <li className={styles.video} data-testid='video' key={video.id}></li>
                                    );
                                })}
                            </ul>
                        </div>
                    )
                })}

                <div className={styles.chapter}>
                    <h2 className={styles.title}>01 Introdução</h2>
                    <ul className={styles.video_list}>
                        <li className={styles.video}>
                            <div className={styles.video_name_wrapper}>
                                <span className={styles.video_number}>0102</span>
                                <p className={styles.video_name}>O que é código limpo</p>
                            </div>
                            <div className={styles.video_duration_wrapper}>
                                <p className={styles.video_duration}>19:55</p>
                                <span className={styles.video_watched_feedback} aria-label='vídeo já assistido'></span>
                            </div>
                        </li>
                        <li className={styles.video}>
                            <div className={styles.video_name_wrapper}>
                                <span className={styles.video_number}>0102</span>
                                <p className={styles.video_name}>O que é código limpo</p>
                            </div>
                            <div className={styles.video_duration_wrapper}>
                                <p className={styles.video_duration}>19:55</p>
                                <span className={styles.video_watched_feedback} aria-label='vídeo já assistido'></span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default CourseNavBar;