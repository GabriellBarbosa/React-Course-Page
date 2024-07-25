import styles from './Navbar.module.css';
import React from 'react';
import NavBarLink from './NavBarLink';
import { Course } from '../../../interfaces/Course';
import { CourseContentContext } from '../../../context/CourseContentContext';

function Navbar() {
    const [navbarActive, setNavbarActive] = React.useState(true);
    const courseContentContext = React.useContext(CourseContentContext);

    function toggleNavbarActive() {
        setNavbarActive(!navbarActive);
    }

    function activeNavbar() {
        if (!navbarActive) setNavbarActive(true);
    }

    function deactiveNavbar() {
        if (navbarActive) setNavbarActive(false);
    }

    return !courseContentContext.courseContent ? null : (
        <>
            <div 
                data-testid="background" 
                className={`${styles.background} ${navbarActive ? styles.active : ''}`}
                onClick={deactiveNavbar} 
            />

            <div 
                data-testid="navbar"
                onClick={activeNavbar} 
                className={`${styles.navbar} ${navbarActive ? styles.active : ''}`} 
            >
                <div className={styles.header}>
                    <p className={styles.title}>{ courseContentContext.courseContent.name }</p>
                    <span 
                        data-testid="toggleActive"
                        onClick={toggleNavbarActive}
                        className={styles.toggle_navbar_btn} 
                        aria-label="mostrar ou esconder o menu" 
                    ></span>
                </div>

                <div className={styles.modules_wrapper}>
                    {courseContentContext.courseContent.modules.map((module) =>(
                        <div 
                            data-testid="module"
                            key={module.sequence} 
                            style={{ order: module.sequence }} 
                            className={styles.module} 
                        >
                            <h2 className={styles.title}>{ module.name }</h2>
                            <ul className={styles.lesson_list}>
                                {module.lessons.map((lesson) => (
                                    <li
                                        data-testid="video"
                                        key={lesson.slug}
                                        style={{ order: lesson.sequence }}
                                        className={styles.lesson_wrapper}
                                    >
                                        <NavBarLink
                                            courseSlug={(courseContentContext.courseContent as Course).slug}
                                            lesson={lesson}
                                            navbarActive={navbarActive}
                                            setNavbarActive={setNavbarActive}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Navbar;