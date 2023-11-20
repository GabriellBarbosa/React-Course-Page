import CleanCode from "../pages/Slide/CleanCode/CleanCode";
import dispatchKeydownEvent from "../utils/functions/dispatchKeydownEvent";
import { act, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

jest.mock('react-router-dom', () => {
    const originalModule = jest.requireActual('react-router-dom');
    return {
        __esModule: true,
        ...originalModule,
        useParams: (() => ({ slideNumber: '5' }))
    }
});

describe('Valid Slide Router', () => {
    let slidesWrapper: HTMLElement;
    let slides: HTMLElement[];

    beforeAll(() => {
        window.scrollTo = jest.fn();
    });

    beforeEach(() => {
        render(<CleanCode />, {wrapper: BrowserRouter});

        slidesWrapper = screen.getByTestId('slidesWrapper');
        slides = screen.getAllByTestId('slide');

        slides.forEach((slide, index) => {
            Object.defineProperty(slide, 'offsetTop', { value: index })
        });
    });

    it('get slideNumber from window location href', () => {
        expect(slidesWrapper.dataset.slideNumber).toBe('5');
    });

    it('change the sub route when slide number change', () => {

        slidesWrapper = screen.getByTestId('slidesWrapper');

        act(() => dispatchKeydownEvent('ArrowRight'));
        act(() => dispatchKeydownEvent('ArrowRight'));
        act(() => dispatchKeydownEvent('ArrowRight'));

        const hrefParts = window.location.href.split('/');
        const slideNumber = hrefParts[hrefParts.length - 1];
        expect(slideNumber).toBe(slidesWrapper.dataset.slideNumber);
    });
});