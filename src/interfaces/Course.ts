interface Course {
    name: string;
    slug: string;
    modules: Module[];
}

interface Module {
    name: string;
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

export type { Course, Lesson };