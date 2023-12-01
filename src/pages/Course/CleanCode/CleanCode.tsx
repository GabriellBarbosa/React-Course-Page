import styles from './CleanCode.module.css';
import CourseNavBar from '../../../components/CourseNavBar';
import Header from '../../../components/Header';

function CleanCode() {
    
    return (
        <div className={styles.wrapper}>
            <CourseNavBar />
            <Header />
        </div>
    )
}

export default CleanCode;