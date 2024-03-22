import styles from './CourseComponent.module.css';
import React from "react";
import Navbar from './components/Navbar';
import Header from '../../components/Header';
import Loading from './components/Loading';
import SingleLesson from '../../interfaces/SingleLesson';
import Lesson from './components/Lesson';
import { Course } from '../../interfaces/Course';
import { useLocation, useParams } from "react-router-dom";

function CourseComponent() {
    const [course, setCourse] = React.useState<Course | null>(null);
    const [lesson, setLesson] = React.useState<SingleLesson | null>(null);

    const [courseLoading, setCourseLoading] = React.useState<boolean>(false);
    const [lessonLoading, setLessonLoading] = React.useState<boolean>(false);

    const urlParams = useParams();
    const location = useLocation();

    React.useEffect(() => {
        setLessonLoading(true);
        async function getLesson() {
            try {
                const response = await fetch(import.meta.env.VITE_API_ENDPOINT + `/curso/${urlParams.course}/${urlParams.lesson}`)
                if (response.ok) {
                    const json = await response.json();
                    setLesson(json);
                } else {
                    throw new Error();
                }
            } catch {
                setLesson(null);
            } finally {
                setLessonLoading(false);
            }
        }
        getLesson();
    }, [location]);
  
    React.useEffect(() => {
        setCourseLoading(true);
        async function getCourse() {
            try {
                const response = await fetch(import.meta.env.VITE_API_ENDPOINT + `/curso/${urlParams.course}`)
                if (response.ok) {
                    const json = await response.json();
                    setCourse(json);
                } else {
                    throw new Error();
                }
            }  catch {
                setCourse(null);
            } finally {
                setCourseLoading(false);
            }
        }
        getCourse();
    }, []);

    return (
        <>
            <div>
                <Header />
                {courseLoading ? (
                    <Loading />
                ) : (
                    course ? <Navbar course={course} />  : null 
                )}
            </div>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    {lessonLoading ? (
                        <Loading />
                    ) : (
                        lesson ? <Lesson lesson={lesson} /> : <p>Não encontrado.</p> 
                    )}
                </div>
            </div>
        </>
    );
}

export default CourseComponent;