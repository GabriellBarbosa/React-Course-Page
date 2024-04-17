interface SingleLesson {
    name: string;
    sequence: string;
    video_src: string;
    completed: boolean;
    slug: string;
    prev: string;
    next: string;
    code: string;
    slide: string;
    note: string;
}

export default SingleLesson;