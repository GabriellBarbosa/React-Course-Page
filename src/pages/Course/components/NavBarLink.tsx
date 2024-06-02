import styles from './NavbarLink.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Lesson } from '../../../interfaces/Course';
import { AuthContext } from '../../../context/AuthContext';

function NavbarLink(props: {
    courseSlug: string,
    lesson: Lesson,
    navbarActive: boolean,
    setNavbarActive: (navbarActive: boolean) => void;
}) {
    const authContext = React.useContext(AuthContext);

    function deactiveNavbar(event: React.MouseEvent) {
        if (props.navbarActive) {
            props.setNavbarActive(false);
        } else {
            event.preventDefault();
        }
    }

    function shouldHideWatchedFeedbackElement() {
        return shouldShowFreeIcon();
    }

    function shouldShowFreeIcon() {
        return !!(props.lesson.free && !authContext.activated);
    }
    
    return (
        <NavLink
            to={`/curso/${props.courseSlug}/${props.lesson.slug}`}
            onClick={deactiveNavbar}
            tabIndex={props.navbarActive ? 0 : -1}
            className={({ isActive }) => (
                `${styles.lesson_link} ${ isActive ? styles.link_active : '' }`
            )}
        >
            <div className={styles.lesson_name_wrapper}>
                <span className={styles.lesson_sequence}>{ props.lesson.sequence }</span>
                <p className={styles.lesson_name}>{ props.lesson.name }</p>
            </div>
            <div className={styles.lesson_duration_wrapper}>
                <p className={styles.lesson_duration}>{ props.lesson.duration }</p>
                <span 
                    className={`${shouldShowFreeIcon() ? styles.active : styles.hidden} ${styles.freeIcon}`} 
                    data-testid="freeLessonIcon"
                >G</span>
                
                <div className={`${shouldHideWatchedFeedbackElement() ? styles.hidden : ''} ${styles.watched_feedback}`}>
                    <span 
                        className={`${props.lesson.completed ? styles.watched : ''}`} 
                        data-testid="watchedFeedback"
                    ></span>
                </div>
            </div>
        </NavLink>
    )
}

export default NavbarLink;