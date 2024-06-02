import SingleLesson from "../interfaces/SingleLesson";
import Video from "../pages/Course/components/Video";
import { CourseContentContext } from "../context/CourseContentContext";
import { Course } from "../interfaces/Course";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

describe('Complete lesson', () => {
    let mockedLesson: SingleLesson;
    let mockedCourse: Course;

    beforeEach(() => {
        mockedLesson = {
            name: 'Codigo limpo',
            sequence: '02',
            slug: '0102-codigo-limpo',
            video_src: 'https://player.vimeo.com/video/922895312?badge=0&autopause=0&player_id=0&app_id=58479',
            completed: false,
            prev: '',
            next: '0201-funcoes',
            code: '/code',
            slide: '/slide',
            free: '',
            note: ''
        }
        mockedCourse = {
            'name': 'Codigo limpo', 
            'slug': 'codigo-limpo',
            'modules': [
                {
                    'name': 'Introducao',
                    'sequence': '01',
                    'lessons': [
                        {
                            'name': 'Codigo limpo',
                            'slug': '0102-codigo-limpo',
                            'sequence': '02',
                            'duration': '15:05',
                            'free': '',
                            'completed': false
                        },
                    ]
                }
            ]
        }
    });

    it('completeLesson if its not completed', () => {
        mockedLesson = { ...mockedLesson, completed: false };
        const completeLesson = jest.fn();
        
        render(
            <Video 
                lesson={mockedLesson} 
                completeLesson={completeLesson} 
            />
        );
        const completeButton = screen.getByTestId('completeBtn');
        fireEvent.click(completeButton);

        expect(completeLesson).toHaveBeenCalled();
    });

    it('not completeLesson if its already completed', () => {
        mockedLesson = { ...mockedLesson, completed: true };
        const completeLesson = jest.fn();

        render(
            <Video 
                lesson={mockedLesson} 
                completeLesson={completeLesson} 
            />
        );
        const completeButton = screen.getByTestId('completeBtn');
        fireEvent.click(completeButton);

        expect(completeLesson).not.toHaveBeenCalled();
    });

    it('update course context after complete lesson', async () => {
        mockedLesson = { ...mockedLesson, completed: false };
        const completeLesson = jest.fn(() => Promise.resolve(true));
        const setCourseMock = jest.fn();

        render(
            <CourseContentContext.Provider 
                value={{ course: mockedCourse, setCourse: setCourseMock }}
            >
                <Video 
                    lesson={mockedLesson} 
                    completeLesson={completeLesson} 
                />
            </CourseContentContext.Provider>
        );
        const completeButton = screen.getByTestId('completeBtn');
        fireEvent.click(completeButton);

        await waitFor(() => expect(setCourseMock).toHaveBeenCalled());
    });
})