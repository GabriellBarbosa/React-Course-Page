import React from 'react';
import { Course } from '../interfaces/Course';

interface Props {
    course: Course | null;
    setCourse: (course: Course) => void;
}

const CourseContentContext = React.createContext<Props>({
    course: null,
    setCourse: () => {}
});

function CourseContentProvider(props: { children: React.ReactNode }) {
    const [course, setCourse] = React.useState<Course | null>(null);

    return (
        <CourseContentContext.Provider value={{ course, setCourse }}>
            { props.children }
        </CourseContentContext.Provider>
    )
}

export { CourseContentProvider, CourseContentContext };