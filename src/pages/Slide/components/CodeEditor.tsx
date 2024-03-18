import styles from './CodeEditor.module.css';
import CodeMirror from "@uiw/react-codemirror";
import CodeEditor from '../../../interfaces/CodeEditor';

import { darcula } from '@uiw/codemirror-theme-darcula';
import { javascript } from '@codemirror/lang-javascript';
import { MouseEvent } from 'react';

function CodeEditorComponent(props: CodeEditor) {

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
            <div className={styles.header}>
                {props.description && (
                    <p className={styles.codeDescription}>{props.description}</p>
                )}

                {props.showCopyButton && (
                    <button
                        title="Copiar código"
                        type="button"
                        data-testid="copyButton"
                        className={`${styles.copyButton}`}
                        onClick={copyCode}
                    ></button> 
                )}
            </div>

            <CodeMirror
                value={props.code}
                className={styles.codeEditor}
                maxHeight='37.5rem'
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

export default CodeEditorComponent;