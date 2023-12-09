import styles from './CourseNavBar.module.css';
import Chapter from '../interfaces/Chapter';
import React from 'react';

function CourseNavBar(props: { data: Chapter[] }) {
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
                                        <li className={styles.video} data-testid='video' key={video.id}>
                                            <div className={styles.video_name_wrapper}>
                                                <span className={styles.video_number}>{`${item.id + video.id}`}</span>
                                                <p className={styles.video_name}>{video.title}</p>
                                            </div>
                                            <div className={styles.video_duration_wrapper}>
                                                <p className={styles.video_duration}>{video.duration}</p>
                                                <span className={styles.video_watched_feedback} aria-label='vídeo já assistido'></span>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default CourseNavBar;