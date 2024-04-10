import styles from './CourseComponent.module.css';
import React from "react";
import Header from '../../components/Header';
import Navbar from './components/Navbar';
import Lesson from './components/Lesson';
import Loading from './components/Loading';
import SingleLesson from '../../interfaces/SingleLesson';
import { fetchData } from '../../api/fetchData';
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
        getLesson()
            .then((lesson) => setLesson(lesson))
            .finally(() => setLessonLoading(false))
    }, [location]);
  
    React.useEffect(() => {
        setCourseLoading(true);
        getCourse()
            .then((course) => setCourse(course))
            .finally(() => setCourseLoading(false))
    }, []);

    function getCourse() {
        return fetchPromise(`/curso/${urlParams.course}`);
    }

    function getLesson() {
        return fetchPromise(`/curso/${urlParams.course}/${urlParams.lesson}`);
    }

    async function fetchPromise(endpoint: string) {
        try {
            return await fetchData(endpoint);
        } catch {
            return null;
        }
    }

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