import { fireEvent, render, screen } from '@testing-library/react';
import CourseNavBar from '../components/CourseNavBar';
import styles from '../components/CourseNavBar.module.css';

const courseContent = [
    {
        id: '01',
        title: 'Introdução',
        videos: [
            {
                id: '01',
                title: 'Introdução',
                slug: 'introducao',
                duration: '13:44',
                completed: false
            },
            {
                id: '02',
                title: 'Código Limpo',
                slug: 'codigo-limpo',
                duration: '19:54',
                completed: false
            },
        ]
    },
    {
        id: '02',
        title: 'Nomes',
        videos: [
            {
                id: '01',
                title: 'Nomes Significativos',
                slug: 'nomes-significativos',
                duration: '13:44',
                completed: false
            },
            {
                id: '02',
                title: 'Motivos das Decisões',
                slug: 'motivos-das-decisoes',
                duration: '19:54',
                completed: false
            },
        ]
    }
];

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

    it('should render all chapters from courseContent', () => {
        const element = render(<CourseNavBar data={courseContent} />);
        const chapters = element.getAllByTestId('charpter');
        expect(chapters.length).toBe(courseContent.length);
    });

    it('should contain all videos from all chapters', () => {
        const element = render(<CourseNavBar data={courseContent} />);
        const videos = element.getAllByTestId('video');
        const videosPerCharpter = courseContent.map((charpter) => charpter.videos.length);
        const totalVideos = videosPerCharpter.reduce((prev, cur) => prev + cur);
        expect(videos.length).toBe(totalVideos);
    });
})