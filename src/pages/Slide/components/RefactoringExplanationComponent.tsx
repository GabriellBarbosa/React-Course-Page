import styles from './RefactoringExplanationComponent.module.css';
import slideStyles from '../../../assets/css/Slide.module.css';
import CodeEditor from './CodeEditor';
import RefactoringExplanation from '../../../interfaces/RefactoringExplanation';

function RefactoringExplanationComponent(props: RefactoringExplanation) {
    return (
        <div>
            <h2 className={slideStyles.principleTitle}>{props.title}</h2>
            <p className={slideStyles.principleDescription}>{props.description} </p>
            <div className={slideStyles.principleCodeExamples}>
                <div className={styles.code_example}>
                    <CodeEditor 
                        code={props.codeBefore.value}
                        showCopyButton={props.codeBefore.showCopyButton}
                        description={props.codeBefore.description}
                    />
                </div>
                <div className={styles.code_example}>
                    <CodeEditor 
                        code={props.codeAfter.value} 
                        showCopyButton={props.codeAfter.showCopyButton}
                        description={props.codeAfter.description}
                    />
                </div>
            </div>
        </div>
    )
}

export default RefactoringExplanationComponent;