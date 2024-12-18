import slideStyles from '../../../assets/css/Slide.module.css'
import CodeEditor from './CodeEditor';
import PrincipleExplanation from '../../../interfaces/PrincipleExplanation';

function PrincipleExplanationComponent(props: PrincipleExplanation) {
    return (
        <>
            <h2 className={slideStyles.principleTitle}>{props.title}</h2>
            <p className={slideStyles.principleDescription}>{props.description}</p>
            <div className={slideStyles.principleCodeExamples}>
                <CodeEditor 
                    code={props.code.value} 
                    showCopyButton={props.code.showCopyButton}
                    description={props.code.description}
                />
            </div>
        </>
    )
}

export default PrincipleExplanationComponent;