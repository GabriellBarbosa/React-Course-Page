import Header from '../components/Header';
import useApi from '../hooks/useApi';
import Lesson from '../pages/Course/components/Lesson';
import { AuthProvider } from '../context/AuthContext';
import { render, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

jest.mock('../constants/enviroment.ts', () => ({
    VITE_API_URL: 'bookinvideo',
}));
jest.mock('../hooks/useApi.tsx');
const mockUseApi = jest.mocked(useApi);

describe('Header', () => {
    it('user logged', async () => {
        mockUseApi.mockReturnValue({
            completeLesson: jest.fn(),
            getUser: jest.fn(() => Promise.resolve({ 
                activated: true,
                user: { username: 'Gabriel' }
            }))
        });
        
        act(() => (
            render(
                <AuthProvider>
                    <Header />
                </AuthProvider>
            )
        ));

        await waitFor(() => expect(screen.getByText('Gabriel')).toBeTruthy());
    });

    it('user logged without name', async () => {
        mockUseApi.mockReturnValue({
            completeLesson: jest.fn(),
            getUser: jest.fn(() => Promise.resolve({ 
                activated: true,
                user: { username: '' }
            }))
        });

        act(() => (
            render(
                <AuthProvider>
                    <Header />
                </AuthProvider>
            )
        ));

        await waitFor(() => expect(screen.getByText('Minha conta')).toBeTruthy());
    });

    it('user not logged', async () => {
        mockUseApi.mockReturnValue({
            completeLesson: jest.fn(),
            getUser: jest.fn(() => Promise.resolve({ 
                activated: false, 
                user: null 
            }))
        });

        act(() => (
            render(
                <AuthProvider>
                    <Header />
                </AuthProvider>
            )
        ));

        await waitFor(() => expect(screen.getByText('Login')).toBeTruthy());
    });
});

describe('Lesson', () => {
    it('unlogged: show authenticate component', async () => {
        mockUseApi.mockReturnValue({
            completeLesson: jest.fn(),
            getUser: jest.fn(() => Promise.resolve({ 
                activated: false, 
                user: null 
            }))
        });

        renderLesson();

        await waitFor(() => expect(screen.getByTestId('authenticate')).toBeTruthy())
    });

    it('non subscriber element', async () => {
        mockUseApi.mockReturnValue({
            completeLesson: jest.fn(),
            getUser: jest.fn(() => Promise.resolve({ 
                user: { username: 'Gabriel' },
                activated: false
            }))
        });

        renderLesson();

        await waitFor(() => {
            expect(screen.getByTestId('nonSubscriber')).toBeTruthy();
        });
    })
})

function renderLesson() {
    const lesson = {
        name: 'codigo-limpo',
        sequence: '01',
        video_src: '',
        prev: '',
        next: '',
        has_code: 'true',
        has_slide: 'true',
    }

    act(() => (
        render(
            <AuthProvider>
                <Lesson lesson={lesson} />
            </AuthProvider>
        )
    ));
}