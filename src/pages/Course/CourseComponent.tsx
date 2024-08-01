import styles from './CourseComponent.module.css';
import React from "react";
import Header from '../../components/Header';
import Navbar from './components/Navbar';
import Lesson from './components/Lesson';
import Loading from './components/Loading';
import SingleLesson from '../../interfaces/SingleLesson';
import { fetchData } from '../../api/fetchData';
import { useLocation, useParams } from "react-router-dom";
import { CourseContentContext } from '../../context/CourseContentContext';

function CourseComponent() {
    const courseContentContext = React.useContext(CourseContentContext);

    const [lesson, setLesson] = React.useState<SingleLesson | null>(null);
    const [courseLoading, setCourseLoading] = React.useState<boolean>(true);
    const [lessonLoading, setLessonLoading] = React.useState<boolean>(true);
    
    const urlParams = useParams();
    const location = useLocation();

    React.useEffect(() => {
        setLessonLoading(true);
        fetchPromise(`/curso/${urlParams.course}/${urlParams.lesson}`)
            .then((lesson) => setLesson(lesson))
            .finally(() => setLessonLoading(false))
    }, [location]);
  
    React.useEffect(() => {
        setCourseLoading(true);
        fetchPromise(`/curso/${urlParams.course}`)
            .then((course) => courseContentContext.setCourseContent(course))
            .finally(() => setCourseLoading(false))
    }, []);

    async function fetchPromise(endpoint: string) {
        try {
            return await fetchData(endpoint);
        } catch {
            return null;
        }
    }

    function displayLesson() {
        if (lesson) {
            return <Lesson lesson={lesson} />;
        }
        return <p>Não encontrado.</p>;
    }

    return (
        <>
            <div>
                <Header />
                {courseLoading ?  <Loading /> : <Navbar />}
            </div>

            <div className={styles.wrapper}>
                <div className={styles.container}>
                    {lessonLoading ?  <Loading /> : displayLesson()}
                </div>
            </div>
        </>
    );
}

export default CourseComponent;