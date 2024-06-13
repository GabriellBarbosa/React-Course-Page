import styles from './CodeComparison.module.css';
import CodeEditorComponent from './CodeEditor';

interface Props {
    before: string;
    after: string;
}

function CodeComparion(props: Props) {
    return (
        <div className={styles.wrapper}>
            <CodeEditorComponent
                description={<>Antes:</>}
                code={props.before}
            />
            <CodeEditorComponent
                description={<>Depois:</>}
                code={props.after}
            />
        </div>
    )
}

export default CodeComparion;