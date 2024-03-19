import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Course } from '../interfaces/Course';

import Navbar from '../pages/Course/components/Navbar';
import styles from '../components/Navbar.module.css';

const course: Course = {
    "course": "Código limpo",
    "slug": "codigo-limpo",
    "content": [
        {
            "module": "01 Introdução",
            "sequence": "01",
            "lessons": [
                {
                    "name": "Código limpo",
                    "slug": "0102-codigo-limpo",
                    "sequence": "0102",
                    "video_src": "https://player.vimeo.com/video/922895312?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
                    "duration": "15:56"
                },
                {
                    "name": "Configuração",
                    "slug": "0101-configuracao",
                    "sequence": "0101",
                    "video_src": "https://player.vimeo.com/video/922895312?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
                    "duration": "06:55"
                }
            ]
        }
    ]
}

describe('Navbar', () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <Navbar course={course} />
            </BrowserRouter>
        );

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

    it('should render all modules from course', () => {
        const modules = screen.getAllByTestId('module');
        expect(modules.length).toBe(course.content.length);
    });

    it('should contain all videos from all modules', () => {
        const videos = screen.getAllByTestId('video');
        const videosPermodule = course.content.map((module) => module.lessons.length);
        const totalVideos = videosPermodule.reduce((prev, cur) => prev + cur);
        expect(videos.length).toBe(totalVideos);
    });
})