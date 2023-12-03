import { fireEvent, render, screen } from '@testing-library/react';
import CourseNavBar from '../components/CourseNavBar';
import styles from '../components/CourseNavBar.module.css';

describe('CourseNavBar', () => {
    beforeEach(() => {
        render(<CourseNavBar />);

        Object.assign(navigator, {
          clipboard: { writeText: jest.fn() },
        });
    });

    it('active navbar on button click', () => {
        const navbar = screen.getByTestId('navbar');
        const navbarButton = screen.getByTestId('toggleActive');

        expect([...navbar.classList]).not.toContain(styles.active);

        fireEvent.click(navbarButton);

        expect([...navbar.classList]).toContain(styles.active);
    });

    it('deactive navbar on button click', () => {
        const navbar = screen.getByTestId('navbar');
        const navbarButton = screen.getByTestId('toggleActive');

        fireEvent.click(navbarButton);

        expect([...navbar.classList]).toContain(styles.active);

        fireEvent.click(navbarButton);

        expect([...navbar.classList]).not.toContain(styles.active);
    });

    it('deactive navbar on background click', () => {
        const navbar = screen.getByTestId('navbar');
        const navbarButton = screen.getByTestId('toggleActive');
        const background = screen.getByTestId('background');

        fireEvent.click(navbarButton);
        expect([...navbar.classList]).toContain(styles.active);

        fireEvent.click(background);
        expect([...navbar.classList]).not.toContain(styles.active);
    });

    it('active navbar on click when it is deactive', () => {
        const navbar = screen.getByTestId('navbar');

        fireEvent.click(navbar);
        expect([...navbar.classList]).toContain(styles.active);
    });
})