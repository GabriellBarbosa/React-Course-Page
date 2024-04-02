import Header from '../components/Header';
import useApi from '../hooks/useApi';
import { AuthProvider } from '../context/AuthContext';
import { render, screen } from '@testing-library/react';

jest.mock('../hooks/useApi.tsx');
const mockUseApi = jest.mocked(useApi);

describe('Auth', () => {
    it('user logged', () => {
        mockUseApi.mockReturnValue({
            getUser: jest.fn(() => ({ username: 'Gabriel' }))
        });

        render(
            <AuthProvider>
                <Header />
            </AuthProvider>
        );

        const loginButton = screen.getByText('Gabriel');

        expect(loginButton).toBeTruthy();
    });

    it('user logged without name', () => {
        mockUseApi.mockReturnValue({
            getUser: jest.fn(() => ({ username: '' }))
        });

        render(
            <AuthProvider>
                <Header />
            </AuthProvider>
        );

        const loginButton = screen.getByText('Minha conta');

        expect(loginButton).toBeTruthy();
    });

    it('user logged without name', () => {
        mockUseApi.mockReturnValue({
            getUser: jest.fn(() => null)
        });

        render(
            <AuthProvider>
                <Header />
            </AuthProvider>
        );

        const loginButton = screen.getByText('Login');

        expect(loginButton).toBeTruthy();
    });
});
