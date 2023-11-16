import styles from './CodeEditor.module.css';

import CodeMirror from "@uiw/react-codemirror";
import { darcula } from '@uiw/codemirror-theme-darcula';
import { javascript } from '@codemirror/lang-javascript';

function CodeEditor(props: { code: string }) {
    return (
        <div>
            <button className={styles.copyButton}>Copiar</button>
            <CodeMirror
                height="21.25rem"
                className={styles.codeEditor}
                value={props.code}
                theme={darcula}
                extensions={[ javascript() ]}
            />
        </div>
    )
}

export default CodeEditor;