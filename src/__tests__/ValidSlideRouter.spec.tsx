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
    const urlParam = '5';

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

    it('get slideNumber from url param when component mount', () => {
        expect(slidesWrapper.dataset.slideNumber).toBe(urlParam);
    });

    it('change the url param when slide number change', () => {
        slidesWrapper = screen.getByTestId('slidesWrapper');

        act(() => dispatchKeydownEvent('ArrowLeft'));
        act(() => dispatchKeydownEvent('ArrowLeft'));

        expect(getUrlParam()).toBe(slidesWrapper.dataset.slideNumber);
    });

    function getUrlParam() {
        const hrefParts = window.location.href.split('/');
        const urlParam = hrefParts[hrefParts.length - 1];
        return urlParam;
    }
});