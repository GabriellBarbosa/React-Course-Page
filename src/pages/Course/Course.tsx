import React from "react";
import Navbar from './components/Navbar';
import Header from '../../components/Header';
import Loading from './components/Loading';
import { Course } from '../../interfaces/Course';
import { useLocation } from "react-router-dom";

function CourseComponent() {
    const [course, setCourse] = React.useState<Course | null>(null);
    const [courseNotFound, setCourseNotFound] = React.useState<boolean>(false);
    const location = useLocation();

    React.useEffect(() => {
      console.log('Location changed');
    }, [location]);
  
    React.useEffect(() => {
        fetch(import.meta.env.VITE_API_ENDPOINT + '/api/curso/codigo-limpo')
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