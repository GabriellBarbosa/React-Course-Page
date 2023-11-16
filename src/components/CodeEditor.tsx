import styles from './CodeEditor.module.css';

import CodeMirror from "@uiw/react-codemirror";
import { darcula } from '@uiw/codemirror-theme-darcula';
import { javascript } from '@codemirror/lang-javascript';

function CodeEditor(props: { code: string }) {
    return (
        <CodeMirror
            height="21.25rem"
            className={styles.codeEditor}
            value={props.code}
            theme={darcula}
            extensions={[ javascript() ]}
        />
    )
}

export default CodeEditor;