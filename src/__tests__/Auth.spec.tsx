import Header from '../components/Header';
import useApi from '../hooks/useApi';
import Lesson from '../pages/Course/components/Lesson';
import NavbarLink from '../pages/Course/components/NavBarLink';
import { AuthProvider } from '../context/AuthContext';
import { render, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../constants/enviroment.ts', () => ({
    VITE_API_URL: 'bookinvideo',
}));
jest.mock('../hooks/useApi.tsx');
const mockUseApi = jest.mocked(useApi);

jest.mock('../pages/Course/components/VideoPlayer.tsx', () => {
    const VideoPlayer = () => <div />;
    return VideoPlayer;
});
const LessonWithMockedPlayer = require('../pages/Course/components/Lesson').default;

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

        renderPaidLesson();

        await waitFor(() => expect(screen.getByTestId('authenticate')).toBeTruthy())
    });

    it('not activated user element', async () => {
        mockUseApi.mockReturnValue({
            completeLesson: jest.fn(),
            getUser: jest.fn(() => Promise.resolve({ 
                user: { username: 'Gabriel' },
                activated: false
            }))
        });

        renderPaidLesson();

        await waitFor(() => {
            expect(screen.getByTestId('notActivated')).toBeTruthy();
        });
    })

    it('free lesson to not activated user', async () => {
        mockUseApi.mockReturnValue({
            completeLesson: jest.fn(),
            getUser: jest.fn(() => Promise.resolve({ 
                user: { username: 'Gabriel' },
                activated: false
            }))
        });

        renderFreeLesson();

        await waitFor(() => {
            expect(screen.getByTestId('videoLesson')).toBeTruthy();
        });
    })

    it('free lesson to unlogged user', async () => {
        mockUseApi.mockReturnValue({
            completeLesson: jest.fn(),
            getUser: jest.fn(() => Promise.resolve({ 
                user: null,
                activated: false
            }))
        });

        renderFreeLesson();

        await waitFor(() => {
            expect(screen.getByTestId('videoLesson')).toBeTruthy();
        });
    })

    const paidLesson = {
        name: 'Codigo limpo',
        sequence: '02',
        slug: '0102-codigo-limpo',
        video_src: 'vimeo.com',
        completed: true,
        prev: '',
        next: '',
        code: '/code',
        slide: '/slide',
        free: '',
        note: ''
    }

    function renderPaidLesson() {
        act(() => (
            render(
                <AuthProvider>
                    <Lesson lesson={paidLesson} />
                </AuthProvider>
            )
        ));
    }

    function renderFreeLesson() {
        const freeLesson = {...paidLesson, free: 'true'};
        act(() => (
            render(
                <AuthProvider>
                    <LessonWithMockedPlayer lesson={freeLesson} />
                </AuthProvider>
            )
        ));
    }
})

describe('NavBarLink', () => {
    it('display free lesson icon', async () => {
        mockUseApi.mockReturnValue({
            completeLesson: jest.fn(),
            getUser: jest.fn(() => Promise.resolve({ 
                activated: false,
                user: null
            }))
        });

        renderNavBarLinkOfFreeLesson();

        await waitFor(() => {
            const freeLessonIcon = screen.getByTestId('freeLessonIcon')
            expect([...freeLessonIcon.classList]).toContain('active');
        })
    });

    it('hide free lesson icon when user is logged', async () => {
        mockUseApi.mockReturnValue({
            completeLesson: jest.fn(),
            getUser: jest.fn(() => Promise.resolve({ 
                activated: true,
                user: { username: 'Gabriel' }
            }))
        });

        renderNavBarLinkOfFreeLesson();

        await waitFor(() => {
            const freeLessonIcon = screen.getByTestId('freeLessonIcon')
            expect([...freeLessonIcon.classList]).toContain('hidden');
        })
    });

    it('show free lesson icon when user is not activated', async () => {
        mockUseApi.mockReturnValue({
            completeLesson: jest.fn(),
            getUser: jest.fn(() => Promise.resolve({ 
                activated: false,
                user: { username: 'Gabriel' }
            }))
        });

        renderNavBarLinkOfFreeLesson();

        await waitFor(() => {
            const freeLessonIcon = screen.getByTestId('freeLessonIcon')
            expect([...freeLessonIcon.classList]).toContain('active');
        })
    });

    it('hide free lesson icon when lesson is paid', async () => {
        mockUseApi.mockReturnValue({
            completeLesson: jest.fn(),
            getUser: jest.fn(() => Promise.resolve({ 
                activated: false,
                user: null
            }))
        });

        renderNavBarLinkOfPaidLesson();

        await waitFor(() => {
            const freeLessonIcon = screen.getByTestId('freeLessonIcon')
            const classList = [...freeLessonIcon.classList];
            expect(classList).toContain('hidden');
        })
    });

    const freeLesson = {               
        "name": "Configuração",
        "slug": "0101-configuracao",
        "sequence": "0101",
        "duration": "06:55",
        "free": "true",
        "completed": true
    }

    function renderNavBarLinkOfFreeLesson() {
        act(() => {
            render(
                <AuthProvider>
                    <MemoryRouter>
                        <NavbarLink 
                            courseSlug="codigo-limpo"
                            lesson={freeLesson}
                            navbarActive={true}
                            setNavbarActive={() => {}}
                        />
                    </MemoryRouter>
                </AuthProvider>
            );
        });
    }

    function renderNavBarLinkOfPaidLesson() {
        const paidLesson = {...freeLesson, free: ''};
        act(() => {
            render(
                <AuthProvider>
                    <MemoryRouter>
                        <NavbarLink 
                            courseSlug="codigo-limpo"
                            lesson={paidLesson}
                            navbarActive={true}
                            setNavbarActive={() => {}}
                        />
                    </MemoryRouter>
                </AuthProvider>
            );
        });
    }
})