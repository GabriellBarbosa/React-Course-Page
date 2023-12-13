import CodeExample from "./CodeExample";

interface RefactoringExplanation {
    title: string; 
    description: string;
    codeBefore: CodeExample;
    codeAfter: CodeExample;
}

export default RefactoringExplanation;