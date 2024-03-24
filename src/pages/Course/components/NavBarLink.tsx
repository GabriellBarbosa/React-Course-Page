import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import { Lesson } from '../../../interfaces/Course';

function NavbarLink(props: { 
    courseSlug: string,
    lesson: Lesson, 
    navbarActive: boolean,
    setNavbarActive: (navbarActive: boolean) => void;
}) {
    function deactiveNavbar(event: React.MouseEvent) {
        if (props.navbarActive) {
            props.setNavbarActive(false);
        } else {
            event.preventDefault();
        }
    }

    return (
        <li 
            data-testid='video' 
            style={{ order: props.lesson.sequence }} 
            className={styles.lesson_wrapper} 
            key={props.lesson.slug}
        >
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
                    <p className={styles.lesson_name}>
                        { props.lesson.name }
                    </p>
                </div>
                <div className={styles.lesson_duration_wrapper}>
                    <p className={styles.lesson_duration}>{ props.lesson.duration }</p>
                    <span className={styles.lesson_watched_feedback} aria-label='vídeo assistido'></span>
                </div>
            </NavLink>
        </li>
    )
}

export default NavbarLink;