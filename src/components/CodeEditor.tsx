import styles from './CodeEditor.module.css';

import CodeMirror from "@uiw/react-codemirror";
import { darcula } from '@uiw/codemirror-theme-darcula';
import { javascript } from '@codemirror/lang-javascript';

function CodeEditor(props: { code: string }) {

    function clickFeedback(event: React.MouseEvent<HTMLElement>) {
        const copyButton = event.currentTarget;
        copyButton.classList.add(styles.copied);
        setTimeout(() => {
            copyButton.classList.remove(styles.copied);
        }, 500);
    }

    return (
        <div>
            <button
                data-testid="copyButton"
                className={`${styles.copyButton}`}
                onClick={clickFeedback}
            >Copiar</button>
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