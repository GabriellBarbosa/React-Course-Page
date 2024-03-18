import CodeEditor from "../pages/Slide/components/CodeEditor";
import styles from "../components/CodeEditor.module.css";

import { fireEvent, render, screen } from '@testing-library/react';

describe('CodeEditor', () => {
    beforeEach(() => {
        render(<CodeEditor code={'console.log("hello world!")'} showCopyButton={true} />);

        Object.assign(navigator, {
          clipboard: { writeText: jest.fn() },
        });
    })

    it('add "copied" class on click', () => {
        const copyButton = screen.getByTestId('copyButton');
        fireEvent.click(copyButton);
        expect([...copyButton.classList]).toContain(styles.copied);
    });

    it('remove "copied" in 500ms after click', () => {
        jest.useFakeTimers();

        const copyButton = screen.getByTestId('copyButton');
        fireEvent.click(copyButton);

        jest.advanceTimersByTime(500);

        expect([...copyButton.classList]).not.toContain(styles.copied);
    });
});
