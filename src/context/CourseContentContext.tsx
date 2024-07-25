import React from 'react';
import { Course } from '../interfaces/Course';

interface Props {
    course: Course | null;
    setCourse: (course: Course) => void;
    completeLesson: (lessonSlug: string) => void;
}

const CourseContentContext = React.createContext<Props>({
    course: null,
    setCourse: () => {},
    completeLesson: () => {},
});

function CourseContentProvider(props: { children: React.ReactNode }) {
    const [course, setCourse] = React.useState<Course | null>(null);

    function completeLesson(lessonSlug: string) {
        const updatedCourse = defineLessonAsCompleted(lessonSlug);
        setCourse(updatedCourse);
    }

    function defineLessonAsCompleted(lessonSlug: string): Course | null {
        if (course == null) return null;

        const courseCopy: Course = JSON.parse(JSON.stringify(course));
        courseCopy.modules.forEach(module => {
            module.lessons.forEach(lesson => {
                if (lesson.slug == lessonSlug)
                    lesson.completed = true;
            });
        });
        return courseCopy;
    }

    return (
        <CourseContentContext.Provider value={{ 
            course, 
            setCourse,
            completeLesson
        }}>
            { props.children }
        </CourseContentContext.Provider>
    )
}

export { CourseContentProvider, CourseContentContext };