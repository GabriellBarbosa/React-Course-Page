interface SingleLesson {
    name: string;
    sequence: string;
    video_src: string;
    completed: boolean;
    slug: string;
    prev?: string;
    next?: string;
    has_code?: string;
    has_slide?: string;
}

export default SingleLesson;