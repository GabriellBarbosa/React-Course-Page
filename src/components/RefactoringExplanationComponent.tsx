import styles from './RefactoringExplanationComponent.module.css';
import slideStyles from '../assets/css/Slide.module.css';
import CodeEditor from './CodeEditor';
import RefactoringExplanation from '../interfaces/RefactoringExplanation';

function RefactoringExplanationComponent(props: RefactoringExplanation) {
    return (
        <div>
            <h2 className={slideStyles.principleTitle}>{props.title}</h2>
            <p className={slideStyles.principleDescription}>{props.description} </p>
            <div className={slideStyles.principleCodeExamples}>
                <div className={styles.code_example}>
                    <p className={slideStyles.principleCodeDescription}>{props.codeBefore.description}</p>
                    <CodeEditor code={props.codeBefore.value} />
                </div>
                <div className={styles.code_example}>
                    <p className={slideStyles.principleCodeDescription}>{props.codeAfter.description}</p>
                    <CodeEditor code={props.codeAfter.value} />
                </div>
            </div>
        </div>
    )
}

export default RefactoringExplanationComponent;