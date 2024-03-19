import styles from './Navbar.module.css';
import React from 'react';
import NavBarLink from './NavbarLink';
import { Course } from '../../../interfaces/Course';

function Navbar(props: { course: Course }) {
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
                data-testid="navbar"
                onClick={activeNavbar} 
                className={`${styles.navbar} ${navbarActive ? styles.active : ''}`} 
            >
                <div className={styles.header}>
                    <p className={styles.title}>{ props.course.name }</p>
                    <span 
                        data-testid="toggleActive"
                        onClick={toggleNavbarActive}
                        className={styles.toggle_navbar_btn} 
                        aria-label="mostrar ou esconder o menu" 
                    ></span>
                </div>

                <div className={styles.modules_wrapper}>
                    {props.course.modules.map((module) => {
                        return (
                            <div 
                                data-testid="module"
                                key={module.sequence} 
                                style={{ order: module.sequence }} 
                                className={styles.module} 
                            >
                                <h2 className={styles.title}>{ module.name }</h2>
                                <ul className={styles.lesson_list}>
                                    {module.lessons.map((lesson) => {
                                        return (
                                            <NavBarLink
                                                key={lesson.slug} 
                                                courseSlug={props.course.slug}
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

export default Navbar;