import { ReactElement } from "react";

interface CodeExample {
    description: ReactElement;
    value: string;
    showCopyButton?: boolean;
}

export default CodeExample;