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
            free: '',
            note: 'me envie um email falando o que você achou do curso'
        }
        mockUseApi.mockReturnValue({
            completeLesson: jest.fn(),
            getUser: jest.fn(() => Promise.resolve({ 
                activated: true,
                user: { username: 'Gabriel' }
            }))
        });
    })

    it('lesson note', () => {
        lesson = { ...lesson, note: 'Esse curso é legal' };

        render(<Lesson lesson={lesson} />);

        const noteElement = screen.getByTestId('note');
        expect(noteElement).toBeTruthy();
    });

    it('lesson without note', () => {
        lesson = { ...lesson, note: '' };
        render(<Lesson lesson={lesson} />);
        expect(() => screen.getByTestId('note')).toThrow();
    });

    it('display certificate button when there is no next lesson', () => {
        lesson = { ...lesson, next: '' };
        
        render(<Lesson lesson={lesson} />);

        const certificateBtn = screen.getByTestId('certificateBtn');
        expect(certificateBtn).toBeTruthy();
    });
});