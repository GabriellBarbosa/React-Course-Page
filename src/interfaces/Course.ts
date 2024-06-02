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
    duration: string;
    completed: boolean;
    free: string;
}

export type { Course, Lesson };