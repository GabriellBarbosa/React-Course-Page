import CourseComponent from "../pages/Course/CourseComponent";

import { render, screen } from '@testing-library/react';

describe('CodeEditor without copy button', () => {

    it('should not render copy button', () => {
        render(<CourseComponent />);
        const copyButton = screen.queryByText('Copiar');
        expect(copyButton).toBeNull();
    });
});