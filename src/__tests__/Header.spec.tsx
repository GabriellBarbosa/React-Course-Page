import Header from '../components/Header';
import styles from '../components/Header.module.css';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Header', () => {
    beforeEach(() => {
        render(<Header />);
    });

    it('active mobile menu on button click', () => {
        const menuButton = screen.getByTestId('mobile_menu_button');
        const menu = screen.getByTestId('header_menu');

        expect([...menu.classList]).not.toContain(styles.active);

        fireEvent.click(menuButton);

        expect([...menu.classList]).toContain(styles.active);
    });

    it('deactive mobile menu on button click', () => {
        const menuButton = screen.getByTestId('mobile_menu_button');
        const menu = screen.getByTestId('header_menu');

        fireEvent.click(menuButton);

        expect([...menu.classList]).toContain(styles.active);

        fireEvent.click(menuButton);

        expect([...menu.classList]).not.toContain(styles.active);
    });

    it('deactive mobile menu on outside click', () => {
        const menuButton = screen.getByTestId('mobile_menu_button');
        const menu = screen.getByTestId('header_menu');
        const outsideElement = screen.getByTestId('header');   

        fireEvent.click(menuButton);
        expect([...menu.classList]).toContain(styles.active);

        fireEvent.click(outsideElement);
        expect([...menu.classList]).not.toContain(styles.active);
    });
});