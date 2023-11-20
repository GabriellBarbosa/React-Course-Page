import CleanCode from "../pages/Slide/CleanCode/CleanCode";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

jest.mock('react-router-dom', () => {
    const originalModule = jest.requireActual('react-router-dom');
    return {
        __esModule: true,
        ...originalModule,
        useParams: (() => ({ slideNumber: 'hello' }))
    }
});

describe('Slide string route param', () => {
    let slidesWrapper: HTMLElement;

    beforeAll(() => {
        window.scrollTo = jest.fn();
    });

    beforeEach(() => {
        render(<CleanCode />, {wrapper: BrowserRouter});
        slidesWrapper = screen.getByTestId('slidesWrapper');
    });

    it('set slideNumber to 1 if the url parameter is not a number', () => {
        expect(slidesWrapper.dataset.slideNumber).toBe('1');
    });
});