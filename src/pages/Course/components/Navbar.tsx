import styles from './Navbar.module.css';
import React from 'react';
import NavBarLink from './NavbarLink';

import { Course } from '../../../interfaces/Course';

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
                            <div 
                                data-testid='module'
                                key={item.module} 
                                style={{ order: item.sequence }} 
                                className={styles.module} 
                            >
                                <h2 className={styles.title}>{ item.module }</h2>
                                <ul className={styles.lesson_list}>
                                    {item.lessons.map((lesson) => {
                                        return (
                                            <NavBarLink 
                                                courseSlug={props.data.slug}
                                                lesson={lesson}
                                                navbarActive={navbarActive}
                                            />
                                        );
                                    })}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default CourseNavBar;