import styles from './CodeComparison.module.css';
import React from 'react';
import CodeEditor from '../../../interfaces/CodeEditor';

interface Props {
    children: Array<React.ReactElement<CodeEditor>>;
}

function CodeComparion(props: Props) {
    return (
        <div className={styles.container}>
            {props.children}
        </div>
    )
}

export default CodeComparion;