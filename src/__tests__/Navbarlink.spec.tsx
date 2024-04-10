import { MemoryRouter } from "react-router-dom";
import NavbarLink from "../pages/Course/components/NavbarLink";
import { render, screen } from "@testing-library/react";

describe('Navbarlink', () => {
    const lesson = {               
        "name": "Configuração",
        "slug": "0101-configuracao",
        "sequence": "0101",
        "duration": "06:55",
        "completed": true
    }

    it('watchedFeedback', () => {
        render(
            <MemoryRouter>
                <NavbarLink 
                    courseSlug="codigo-limpo"
                    lesson={lesson}
                    navbarActive={true}
                    setNavbarActive={() => {}}
                />
            </MemoryRouter>
        );

        const watchedFeedback = screen.getByTestId('watchedFeedback');

        expect(watchedFeedback.classList).toContain('watched');
    });
});