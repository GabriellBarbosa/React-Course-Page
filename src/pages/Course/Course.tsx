import React from "react";
import CourseNavBar from './components/CourseNavBar';
import Header from '../../components/Header';
import Loading from './components/Loading';
import { Course } from '../../interfaces/Course';

function CourseComponent() {
    const [courseContent, setCourseContent] = React.useState<Course | null>(null);
    const [courseNotFound, setCourseNotFound] = React.useState<boolean>(false);

    React.useEffect(() => {
        fetch('http://bookinvideo.local/wp-json/api/curso/codigo-limpo')
            .then(response => response.json())
            .then(json => setCourseContent(json))
            .catch(() => setCourseNotFound(true))
    }, []);

    return (
        <>
            <div>
                <Header />
                {courseNotFound ? (
                    <p>Curso não encontrado</p>
                ) : (
                    <div>{ courseContent ? <CourseNavBar data={courseContent} />  : <Loading /> }</div>
                )}
            </div>
        </>
    );
}

export default CourseComponent;