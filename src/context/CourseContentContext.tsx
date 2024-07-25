import React from 'react';
import { Course } from '../interfaces/Course';

interface Props {
    courseContent: Course | null;
    setCourseContent: (course: Course) => void;
    completeLesson: (lessonSlug: string) => void;
}

const CourseContentContext = React.createContext<Props>({
    courseContent: null,
    setCourseContent: () => {},
    completeLesson: () => {},
});

function CourseContentProvider(props: { children: React.ReactNode }) {
    const [courseContent, setCourseContent] = React.useState<Course | null>(null);

    function completeLesson(lessonSlug: string) {
        const updatedContent = defineLessonAsCompleted(lessonSlug);
        setCourseContent(updatedContent);
    }

    function defineLessonAsCompleted(lessonSlug: string): Course | null {
        if (courseContent == null) return null;

        const courseCopy: Course = JSON.parse(JSON.stringify(courseContent));
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
            courseContent, 
            setCourseContent,
            completeLesson
        }}>
            { props.children }
        </CourseContentContext.Provider>
    )
}

export { CourseContentProvider, CourseContentContext };