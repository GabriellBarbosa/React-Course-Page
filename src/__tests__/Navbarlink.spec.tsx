import { MemoryRouter } from "react-router-dom";
import NavBarLink from "../pages/Course/components/NavBarLink";
import { render, screen } from "@testing-library/react";

describe('Navbarlink', () => {
    const lesson = {               
        "name": "Configuração",
        "slug": "0101-configuracao",
        "sequence": "0101",
        "duration": "06:55",
        "free": "",
        "completed": true
    }

    it('watchedFeedback', () => {
        render(
            <MemoryRouter>
                <NavBarLink 
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