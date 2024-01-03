import { ReactElement } from "react";

interface CodeEditor {
    code: string;
    showCopyButton?: boolean;
    description?: ReactElement;
}

export default CodeEditor;