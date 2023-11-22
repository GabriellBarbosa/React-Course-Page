import styles from './CodeEditor.module.css';
import CodeMirror from "@uiw/react-codemirror";
import { darcula } from '@uiw/codemirror-theme-darcula';
import { javascript } from '@codemirror/lang-javascript';
import { MouseEvent } from 'react';

function CodeEditor(props: { code: string }) {

    function copyCode(event: MouseEvent<HTMLElement>) {
        navigator.clipboard.writeText(props.code);
        copiedFeedback(event.currentTarget);
    }

    function copiedFeedback(copyButton: HTMLElement) {
        copyButton.classList.add(styles.copied);
        setTimeout(() => {
            copyButton.classList.remove(styles.copied);
        }, 500);
    }

    return (
        <div>
            <button
                title="Copiar o código"
                type="button"
                data-testid="copyButton"
                className={`${styles.copyButton}`}
                onClick={copyCode}
            >Copiar</button>
            <CodeMirror
                height={'fit-content'}
                className={styles.codeEditor}
                value={props.code}
                theme={darcula}
                extensions={[ javascript() ]}
            />
        </div>
    )
}

export default CodeEditor;