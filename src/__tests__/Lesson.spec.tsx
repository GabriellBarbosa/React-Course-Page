import Lesson from "../pages/Course/components/Lesson";
import useApi from "../hooks/useApi";
import SingleLesson from "../interfaces/SingleLesson";
import { render, screen } from "@testing-library/react";

jest.mock('../constants/enviroment.ts', () => ({
    VITE_API_URL: 'bookinvideo',
}));
jest.mock('../hooks/useApi.tsx');
const mockUseApi = jest.mocked(useApi);

describe('Lesson', () => {
    let lesson: SingleLesson;

    beforeEach(() => {
        lesson = {
            name: 'Codigo limpo',
            sequence: '02',
            slug: '0102-codigo-limpo',
            video_src: '',
            completed: true,
            prev: '',
            next: '',
            code: '/code',
            slide: '/slide',
            note: 'me envie um email falando o que você achou do curso'
        }
    })

    it('lesson note', () => {
        mockUseApi.mockReturnValue({
            completeLesson: jest.fn(),
            getUser: jest.fn(() => Promise.resolve({ 
                activated: true,
                user: { username: 'Gabriel' }
            }))
        });

        render(
            <Lesson lesson={lesson} />
        );

        const noteElement = screen.getByTestId('note');
        expect(noteElement).toBeTruthy();
    });

    it('lesson without note', () => {
        mockUseApi.mockReturnValue({
            completeLesson: jest.fn(),
            getUser: jest.fn(() => Promise.resolve({ 
                activated: true,
                user: { username: 'Gabriel' }
            }))
        });
        lesson = { ...lesson, note: '' };

        render(
            <Lesson lesson={lesson} />
        );

        expect(() => screen.getByTestId('note')).toThrow();
    });
});