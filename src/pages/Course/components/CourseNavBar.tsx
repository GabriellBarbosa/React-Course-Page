import styles from './CourseNavBar.module.css';
import Course from '../../../interfaces/Course';

import React from 'react';
import { Link } from 'react-router-dom';

function CourseNavBar(props: { data: Course }) {
    const [navbarActive, setNavbarActive] = React.useState(false);

    function toggleNavbarActive() {
        setNavbarActive(!navbarActive);
    }

    function activeNavbar() {
        if (!navbarActive) setNavbarActive(true);
    }

    function deactiveNavbar() {
        if (navbarActive) setNavbarActive(false);
    }

    function preventNavigationIfNavbarIsDeactive(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        if (!navbarActive) {
            event.preventDefault();
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

                <div className={styles.modules_wrapper}>
                    {props.data && props.data.content.map((item) => {
                        return (
                            <div style={{ order: item.sequence }} className={styles.module} key={item.module} data-testid='module'>
                                <h2 className={styles.title}>{item.module}</h2>
                                <ul className={styles.lesson_list}>
                                    {item.lessons.map((lesson) => {
                                        return (
                                            <li data-testid='video' style={{ order: lesson.sequence }} className={styles.lesson_wrapper} key={lesson.slug}>
                                                <Link 
                                                    to={lesson.slug} 
                                                    className={styles.lesson_link} 
                                                    tabIndex={ navbarActive ? 0 : -1} 
                                                    onClick={preventNavigationIfNavbarIsDeactive}
                                                >
                                                    <div className={styles.lesson_name_wrapper}>
                                                        <span className={styles.lesson_sequence}>{lesson.sequence}</span>
                                                        <p className={styles.lesson_name}>{lesson.name}</p>
                                                    </div>
                                                    <div className={styles.lesson_duration_wrapper}>
                                                        <p className={styles.lesson_duration}>{lesson.duration}</p>
                                                        <span className={styles.lesson_watched_feedback} aria-label='vídeo assistido'></span>
                                                    </div>
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default CourseNavBar;