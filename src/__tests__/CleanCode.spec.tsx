import CleanCode from "../pages/Slide/CleanCode/CleanCode";
import styles from "../components/CodeEditor.module.css";

import { render, screen } from '@testing-library/react';

describe('CleanCode', () => {
    beforeEach(() => {
        render(<CleanCode />);
    })

    it('add active class when KEYDOWN right arrow', () => {
        const firstSection = screen.getByTestId('first-one');

        const event = new KeyboardEvent('keydown', {
            key: 'ArrowRight',
            code: 'ArrowRight',
            which: 39,
            keyCode: 39,
          });
        window.dispatchEvent(event)

        expect([...firstSection.classList]).toContain(styles.active);
    });
});