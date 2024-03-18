import CodeEditor from "../pages/Slide/components/CodeEditor";

import { render, screen } from '@testing-library/react';

describe('CodeEditor without copy button', () => {

    it('should not render copy button', () => {
        render(<CodeEditor code={'console.log("hello world!")'} />);
        const copyButton = screen.queryByText('Copiar');
        expect(copyButton).toBeNull();
    });
});