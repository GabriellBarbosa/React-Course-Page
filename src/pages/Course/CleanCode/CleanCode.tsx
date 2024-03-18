import styles from './CleanCode.module.css';
import React from 'react';

import CourseNavBar from '../components/CourseNavBar';
import Header from '../../../components/Header';
import Course from '../../../interfaces/Course';

function CleanCode() {
    const [courseContent, setCourseContent] = React.useState<Course | null>(null);

    React.useEffect(() => {
        fetch('http://bookinvideo.local/wp-json/api/curso/codigo-limpo')
            .then(response => response.json())
            .then(json => setCourseContent(json))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className={styles.wrapper}>
            <Header />
            { courseContent ? <CourseNavBar data={courseContent} />  : `courseContent` }
        </div>
    )
}

export default CleanCode;