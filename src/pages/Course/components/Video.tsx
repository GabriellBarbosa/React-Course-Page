import React from 'react';
import SingleLesson from '../../../interfaces/SingleLesson';
import styles from './Video.module.css';
import { CourseContentContext } from '../../../context/CourseContentContext';
import { Course, Lesson } from '../../../interfaces/Course';
import { useParams } from 'react-router-dom';

interface Props {
    lesson: SingleLesson;
    completeLesson: (endpoint: string) => Promise<boolean>;
}

function Video(props: Props) {
    const urlParams = useParams();
    const courseContentContext = React.useContext(CourseContentContext);

    async function completeLesson() {
        if (props.lesson.completed) return;
        const requestOk = await props.completeLesson(
            `/curso/${urlParams.course}/${urlParams.lesson}`
        );
        if (requestOk && courseContentContext.course) {
            updateCourseWithCompletedLesson(courseContentContext.course);
        }
    }

    function updateCourseWithCompletedLesson(course: Course) {
        const courseCopy: Course = JSON.parse(JSON.stringify(course));
        const lesson = findLessonInCourse(courseCopy)
        if (lesson) {
            lesson.completed = true;
            courseContentContext.setCourse(courseCopy);
        }
    }

    function findLessonInCourse(course: Course): Lesson | null {
        let result: Lesson | null = null;
        course.modules.forEach(module => {
            module.lessons.forEach(lesson => {
                if (lesson.slug == props.lesson.slug)
                    result = lesson;
            });
        });
        return result;
    }

    return (
        <div className={styles.video}>
            <button 
                data-testid="completeBtn"
                onClick={completeLesson}
            >Completar aula</button>
        </div>
    )
}

export default Video;