interface Course {
    course: string;
    content: Content[];
}

interface Content {
    module: string;
    sequence: string;
    lessons: Lesson[];
}

interface Lesson {
    name: string;
    slug: string;
    sequence: string;
    video_src: string;
    duration: string;
}

export default Course;