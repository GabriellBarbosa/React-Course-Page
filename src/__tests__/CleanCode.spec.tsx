import CleanCode from "../pages/Slide/CleanCode/CleanCode";
import { render, screen, act } from '@testing-library/react';


describe('CleanCode', () => {
    let slidesWrapper: HTMLElement;
    let slidePages: HTMLElement[];
    window.scrollTo = jest.fn();

    afterEach(() => {
        jest.resetAllMocks();
    })

    afterAll(() => {
        jest.clearAllMocks();
    })

    beforeEach(() => {
        render(<CleanCode />);

        slidesWrapper = screen.getByTestId('slidesWrapper');
        slidePages = screen.getAllByTestId('slidePage');

        slidePages.forEach((slide, index) => {
            Object.defineProperty(slide, 'offsetTop', { value: index })
        })
    })

    it('increment slide number on keypress ArrowRight', () => {
        expect(slidesWrapper.dataset.slideNumber).toBe('1');

        act(() => dispatchKeydownEvent('ArrowRight'));
        act(() => dispatchKeydownEvent('ArrowRight'));

        expect(slidesWrapper.dataset.slideNumber).toBe('3');
    });

    it('decrement slide number on keypress ArrowLeft', () => {
        act(() => dispatchKeydownEvent('ArrowRight'));
        act(() => dispatchKeydownEvent('ArrowRight'));

        expect(slidesWrapper.dataset.slideNumber).toBe('3');

        act(() => dispatchKeydownEvent('ArrowLeft'));
        act(() => dispatchKeydownEvent('ArrowLeft'));

        expect(slidesWrapper.dataset.slideNumber).toBe('1');
    });

    it('return to 1 if the increment would exceed the number of slides', () => {
        act(() => dispatchKeydownEvent('ArrowRight'));
        act(() => dispatchKeydownEvent('ArrowRight'));
        act(() => dispatchKeydownEvent('ArrowRight'));
        act(() => dispatchKeydownEvent('ArrowRight'));
        act(() => dispatchKeydownEvent('ArrowRight'));
        act(() => dispatchKeydownEvent('ArrowRight'));
        act(() => dispatchKeydownEvent('ArrowRight'));

        expect(slidesWrapper.dataset.slideNumber).toBe('1');
    });

    it('go to the last index if the decrement would be less than 1', () => {
        act(() => dispatchKeydownEvent('ArrowRight'));
        act(() => dispatchKeydownEvent('ArrowRight'));

        expect(slidesWrapper.dataset.slideNumber).toBe('3');

        act(() => dispatchKeydownEvent('ArrowLeft'));
        act(() => dispatchKeydownEvent('ArrowLeft'));
        act(() => dispatchKeydownEvent('ArrowLeft'));

        expect(slidesWrapper.dataset.slideNumber).toBe(slidePages.length.toString());
    });

    it('scroll to respective section when slide number change', () => {
        expect(window.scrollY).toBe(0);

        act(() => dispatchKeydownEvent('ArrowRight'));
        
        expect(window.scrollTo).toHaveBeenCalledWith(0, slidePages[1].offsetTop);

        act(() => dispatchKeydownEvent('ArrowRight'));

        expect(window.scrollTo).toHaveBeenCalledWith(0, slidePages[2].offsetTop);

        act(() => dispatchKeydownEvent('ArrowLeft'));

        expect(window.scrollTo).toHaveBeenCalledWith(0, slidePages[1].offsetTop);
    })


    function dispatchKeydownEvent(key: string) {
        const event = new KeyboardEvent('keydown', { key });
        window.dispatchEvent(event);
    }
});