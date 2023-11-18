import CleanCode from "../pages/Slide/CleanCode/CleanCode";

import { render, screen, act } from '@testing-library/react';

describe('CleanCode', () => {
    beforeEach(() => {
        render(<CleanCode />);
    })

    it('increment slide index on keypress ArrowRight', () => {
        const slidesWrapper = screen.getByTestId('slidesWrapper');

        expect(slidesWrapper.dataset.slideIndex).toBe('1');

        act(() => dispatchKeydownEvent('ArrowRight'));
        act(() => dispatchKeydownEvent('ArrowRight'));

        expect(slidesWrapper.dataset.slideIndex).toBe('3');
    });

    it('decrement slide index on keypress ArrowLeft', () => {
        const slidesWrapper = screen.getByTestId('slidesWrapper');

        act(() => dispatchKeydownEvent('ArrowRight'));
        act(() => dispatchKeydownEvent('ArrowRight'));

        expect(slidesWrapper.dataset.slideIndex).toBe('3');

        act(() => dispatchKeydownEvent('ArrowLeft'));
        act(() => dispatchKeydownEvent('ArrowLeft'));

        expect(slidesWrapper.dataset.slideIndex).toBe('1');
    });

    function dispatchKeydownEvent(key: string) {
        const event = new KeyboardEvent('keydown', { key });
        window.dispatchEvent(event);
    }
});