import styles from './CourseNavBar.module.css';
import Course from '../interfaces/Course';

import React from 'react';
import { Link } from 'react-router-dom';

function CourseNavBar(props: { data: Course }) {
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
                    <p className={styles.title}>{props.data.course}</p>
                    <span 
                        className={styles.toggle_navbar_btn} 
                        aria-label="mostrar ou esconder o menu" 
                        data-testid="toggleActive"
                        onClick={toggleNavbarActive}
                    ></span>
                </div>
                {props.data && props.data.content.map((item) => {
                    return (
                        <div className={styles.module} key={item.module} data-testid='module'>
                            <h2 className={styles.title}>{item.module}</h2>
                            <ul className={styles.video_list}>
                                {item.lessons.map((lesson) => {
                                    return (
                                            <li className={styles.video} data-testid='video' key={lesson.slug}>
                                                <Link to={lesson.slug}>
                                                    <div className={styles.video_name_wrapper}>
                                                        <span className={styles.video_number}>{lesson.sequence}</span>
                                                        <p className={styles.video_name}>{lesson.name}</p>
                                                    </div>
                                                </Link>
                                                <div className={styles.video_duration_wrapper}>
                                                    <p className={styles.video_duration}>{lesson.duration}</p>
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