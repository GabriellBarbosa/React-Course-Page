import styles from './Authenticate.module.css';
import BuyCourse from '../../../components/BuyCourse';

function Authenticate() {
    return (
        <div className={styles.authenticate}>
            <p>Para acessar o vídeo:</p>
            <a href="/conta">Login</a>
            <span>ou</span>
            <BuyCourse>
                <button type="submit" name="add-to-cart" value={ (window as any).wp_data?.course }>Inscreva-se</button>
            </BuyCourse>
        </div>
    )
}

export default Authenticate;