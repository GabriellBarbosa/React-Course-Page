import styles from './CourseNavBar.module.css';
import React from 'react';

function CourseNavBar() {
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
                <div className={styles.charpter}>
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