import styles from './Navbar.module.css';
import styles2 from './NavbarLink.module.css';
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
        <NavLink
            to={`/curso/${props.courseSlug}/${props.lesson.slug}`}
            onClick={deactiveNavbar}
            tabIndex={props.navbarActive ? 0 : -1}
            className={({ isActive }) => (
                `${styles2.lesson_link} ${ isActive ? styles2.link_active : '' }`
            )}
        >
            <div className={styles2.lesson_name_wrapper}>
                <span className={styles2.lesson_sequence}>{ props.lesson.sequence }</span>
                <p className={styles2.lesson_name}>
                    { props.lesson.name }
                </p>
            </div>
            <div className={styles2.lesson_duration_wrapper}>
                <p className={styles2.lesson_duration}>{ props.lesson.duration }</p>
                <div className={styles2.watched_feedback}>
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