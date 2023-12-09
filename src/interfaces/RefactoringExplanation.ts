import { ReactElement } from "react";

interface RefactoringExplanation {
    title: string; 
    description: string;
    codeBefore: CodeExample;
    codeAfter: CodeExample;
}

interface CodeExample {
    description: ReactElement;
    value: string;
}

export default RefactoringExplanation;