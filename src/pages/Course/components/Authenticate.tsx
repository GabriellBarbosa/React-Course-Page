import styles from './Authenticate.module.css';
import SubscribeForm from '../../../components/SubscribeForm';

function Authenticate() {
    return (
        <div className={styles.authenticate}>
            <p>Para acessar o vídeo:</p>
            <a href="/conta">Login</a>
            <span>ou</span>
            <SubscribeForm>
                <button type="submit" name="add-to-cart" value={ (window as any).wp_data?.course }>Inscreva-se</button>
            </SubscribeForm>
        </div>
    )
}

export default Authenticate;