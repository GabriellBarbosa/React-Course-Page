import CleanCode from "../pages/Slide/CleanCode/CleanCode";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

jest.mock('react-router-dom', () => {
    const originalModule = jest.requireActual('react-router-dom');
    return {
        __esModule: true,
        ...originalModule,
        useParams: (() => ({ slideNumber: '8' }))
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

    it('the url param number is out of range', () => {
        expect(slidesWrapper.dataset.slideNumber).toBe('1');
    });
});