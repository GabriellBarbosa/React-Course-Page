import CodeEditor from "../components/CodeEditor";
import { render } from '@testing-library/react';

describe('jesting test', () => {
    render(<CodeEditor code={'console.log()'} />)
    it('true', () => {
        expect(true).toBe(true);
    })
});