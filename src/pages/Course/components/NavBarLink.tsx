import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { Lesson } from '../../../interfaces/Course';

function NavbarLink(props: { 
    courseSlug: string,
    lesson: Lesson, 
    navbarActive: boolean,
}) {
    function preventNavigationIfNavbarIsDeactive(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        if (!props.navbarActive) {
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
            <Link
                to={`/curso/${props.courseSlug}/${props.lesson.slug}`}
                onClick={preventNavigationIfNavbarIsDeactive}
                className={ styles.lesson_link}
                tabIndex={ props.navbarActive ? 0 : -1} 
            >
                <div className={styles.lesson_name_wrapper}>
                    <span className={styles.lesson_sequence}>{ props.lesson.sequence }</span>
                    <p className={styles.lesson_name}>{ props.lesson.name }</p>
                </div>
                <div className={styles.lesson_duration_wrapper}>
                    <p className={styles.lesson_duration}>{ props.lesson.duration }</p>
                    <span className={styles.lesson_watched_feedback} aria-label='vídeo assistido'></span>
                </div>
            </Link>
        </li>
    )
}

export default NavbarLink;