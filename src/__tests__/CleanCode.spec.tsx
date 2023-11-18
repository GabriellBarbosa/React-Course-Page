import CleanCode from "../pages/Slide/CleanCode/CleanCode";

import { render, screen, waitFor } from '@testing-library/react';

describe('CleanCode', () => {
    beforeEach(() => {
        render(<CleanCode />);
    })

    it('increment slide index on keypress ArrowRight', async () => {
        const slidesWrapper = await screen.findByTestId('slidesWrapper');

        expect(slidesWrapper.dataset.slideIndex).toBe('1');

        dispatchKeydownEvent('ArrowRight');
        await waitFor(() => {
            expect(slidesWrapper.dataset.slideIndex).toBe('2');
        })

        dispatchKeydownEvent('ArrowRight');
        await waitFor(() => {
            expect(slidesWrapper.dataset.slideIndex).toBe('3');
        })

    });

    function dispatchKeydownEvent(key: string) {
        const event = new KeyboardEvent('keydown', { key });
        window.dispatchEvent(event);
    }
});