import React from 'react';
import { Course } from '../interfaces/Course';

interface Props {
    courseContent: Course | null;
    setCourseContent: (course: Course) => void;
}

const CourseContentContext = React.createContext<Props>({
    courseContent: null,
    setCourseContent: () => {},
});

function CourseContentProvider(props: { children: React.ReactNode }) {
    const [courseContent, setCourseContent] = React.useState<Course | null>(null);

    return (
        <CourseContentContext.Provider value={{ 
            courseContent, 
            setCourseContent,
        }}>
            { props.children }
        </CourseContentContext.Provider>
    )
}

export { CourseContentProvider, CourseContentContext };