import CleanCode from "../pages/Slide/CleanCode/0102/CleanCode";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe('HideScrollbar', () => {
    let bodyElement: HTMLElement;

    beforeEach(() => {
        bodyElement = document.createElement('body');
        document.querySelector = jest.fn(() => bodyElement);
        window.scrollTo = jest.fn();
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    afterAll(() => {
        jest.clearAllMocks();
    });

    it('add hide_scrollbar class when the component render', () => {
        expect(bodyElement.classList).not.toContain('hide_scrollbar');

        render(<CleanCode />, {wrapper: BrowserRouter});

        expect(bodyElement.classList).toContain('hide_scrollbar');
    });

    it('remove hide_scrollbar class after component destroy', () => {
        const component = render(<CleanCode />, {wrapper: BrowserRouter});

        expect(bodyElement.classList).toContain('hide_scrollbar');

        component.unmount();

        expect(bodyElement.classList).not.toContain('hide_scrollbar');
    })
});