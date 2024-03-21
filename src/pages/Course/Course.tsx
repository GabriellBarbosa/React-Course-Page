import styles from './Course.module.css';
import React from "react";
import Navbar from './components/Navbar';
import Header from '../../components/Header';
import Loading from './components/Loading';
import { Course } from '../../interfaces/Course';
import { useLocation, useParams } from "react-router-dom";

interface Lesson {
    name: string;
    sequence: string;
    video_src: string;
}

function CourseComponent() {
    const [course, setCourse] = React.useState<Course | null>(null);
    const [lesson, setLesson] = React.useState<Lesson | null>(null);

    const [courseNotFound, setCourseNotFound] = React.useState<boolean>(false);

    const urlParams = useParams();
    const location = useLocation();

    React.useEffect(() => {
        fetch(import.meta.env.VITE_API_ENDPOINT + `/curso/${urlParams.course}/${urlParams.lesson}`)
            .then(response => response.json())
            .then(json => setLesson(json))
    }, [location]);
  
    React.useEffect(() => {
        fetch(import.meta.env.VITE_API_ENDPOINT + `/curso/${urlParams.course}`)
            .then(response => response.json())
            .then(json => setCourse(json))
            .catch(() => setCourseNotFound(true))
    }, []);

    return (
        <>
            <div>
                <Header />
                {courseNotFound ? (
                    <p>Curso não encontrado</p>
                ) : (
                    <>{ course ? <Navbar course={course} />  : <Loading /> }</>
                )}
            </div>
            <div className={styles.container}>
                <div className={styles.wrapper_title_slide}>
                    <h2 className={styles.title}>{`${lesson?.sequence} ${lesson?.name}`}</h2>
                    <div className={styles.video_buttons}>
                        <a 
                            href={``} 
                            className={`${styles.code_btn}`}
                            target="_blank"
                        >Código</a>
                        <a 
                            href={`/slide/${urlParams.course}/${urlParams.lesson}`}
                            className={`${styles.slide_btn}`}
                            target="_blank"
                        >Slide</a>

                    </div>
                </div>
                <div className={styles.video}>
                    <div style={{ padding: "56.25% 0 0 0", position: "relative"}}>
                        <iframe src={lesson?.video_src} allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }} title="0000-intro"></iframe>
                    </div>
                    <script src="https://player.vimeo.com/api/player.js"></script>
                </div>
            </div>
        </>
    );
}

export default CourseComponent;