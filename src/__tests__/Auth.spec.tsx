import Header from '../components/Header';
import useApi from '../hooks/useApi';
import { AuthProvider } from '../context/AuthContext';
import { render, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

jest.mock('../constants/enviroment.ts', () => ({
    VITE_API_URL: 'bookinvideo',
}));
jest.mock('../hooks/useApi.tsx');
const mockUseApi = jest.mocked(useApi);

describe('Auth', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    })

    it('user logged', async () => {
        mockUseApi.mockReturnValue({
            getUser: jest.fn(() => Promise.resolve({ user: { username: 'Gabriel' }}))
        });
        
        act(() => {
            render(
                <AuthProvider>
                    <Header />
                </AuthProvider>
            );
        });

        await waitFor(() => expect(screen.getByText('Gabriel')).toBeTruthy());
    });

    it('user logged without name', async () => {
        mockUseApi.mockReturnValue({
            getUser: jest.fn(() => Promise.resolve({ user: { username: '' }}))
        });

        act(() => {
            render(
                <AuthProvider>
                    <Header />
                </AuthProvider>
            );
        });

        await waitFor(() => expect(screen.getByText('Minha conta')).toBeTruthy());
    });

    it('user not logged', async () => {
        mockUseApi.mockReturnValue({
            getUser: jest.fn(() => Promise.resolve({ user: null }))
        });

        act(() => {
            render(
                <AuthProvider>
                    <Header />
                </AuthProvider>
            );
        });

        await waitFor(() => expect(screen.getByText('Login')).toBeTruthy());
    });
});
