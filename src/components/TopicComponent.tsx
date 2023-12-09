import styles from './TopicComponent.module.css';
import CodeEditor from './CodeEditor';
import RefactoringExplanation from '../interfaces/RefactoringExplanation';

function TopicComponent(props: RefactoringExplanation) {
    return (
        <div>
            <h2 className={styles.title}>{props.title}</h2>
            <p className={styles.text}>{props.description} </p>
            <div className={styles.code_examples_wrapper}>
                <div className={styles.code_example}>
                    <p className={styles.code_description}>{props.codeBefore.description}</p>
                    <CodeEditor code={props.codeBefore.value} />
                </div>
                <div className={styles.code_example}>
                    <p className={styles.code_description}>{props.codeAfter.description}</p>
                    <CodeEditor code={props.codeAfter.value} />
                </div>
            </div>
        </div>
    )
}

export default TopicComponent;