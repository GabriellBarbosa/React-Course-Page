import styles from './CodeComparison.module.css';
import CodeEditorComponent from './CodeEditor';

interface Props {
    before: string;
    after: string;
    beforeTitle?: string;
    afterTitle?: string;
}

function CodeComparion(props: Props) {
    return (
        <div className={styles.wrapper}>
            <CodeEditorComponent
                description={
                    <>{ props.beforeTitle ? props.beforeTitle : 'Antes:' }</>
                }
                code={props.before}
            />
            <CodeEditorComponent
                description={
                <>{ props.afterTitle ? props.afterTitle : 'Depois:' }</>
            }
                code={props.after}
            />
        </div>
    )
}

export default CodeComparion;