import styles from './CodeExplanationComponent.module.css';
import CodeEditor from './CodeEditor';
import CodeExplanation from '../interfaces/CodeExplanation';

function CodeExplanationComponent(props: CodeExplanation) {
    return (
        <>
            <h2 className={styles.title}>{props.title}</h2>
            <p className={styles.text}>{props.description}</p>
            <div className={styles.code_example}>
                <p className={styles.code_description}>{props.code.description}</p>
                <CodeEditor code={props.code.value} />
            </div>
        </>
    )
}

export default CodeExplanationComponent;