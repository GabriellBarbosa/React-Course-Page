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
                value={props.code}
                className={styles.codeEditor}
                height={'fit-content'}
                theme={darcula}
                extensions={[ javascript() ]}
                readOnly={true}
                editable={false}
                basicSetup={{
                    lineNumbers: false,
                    foldGutter: false,
                    highlightActiveLine: false
                }}
            />
        </div>
    )
}

export default CodeEditor;