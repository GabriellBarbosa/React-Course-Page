import React from "react";
import Navbar from './components/Navbar';
import Header from '../../components/Header';
import Loading from './components/Loading';
import { Course } from '../../interfaces/Course';

function CourseComponent() {
    const [course, setCourse] = React.useState<Course | null>(null);
    const [courseNotFound, setCourseNotFound] = React.useState<boolean>(false);

    React.useEffect(() => {
        fetch('http://bookinvideo.local/wp-json/api/curso/codigo-limpo')
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
        </>
    );
}

export default CourseComponent;