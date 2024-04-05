import styles from './Authenticate.module.css';
import SubscribeButton from '../../../components/SubscribeButton';

function Authenticate() {
    return (
        <div className={styles.authenticate}>
            <p>Para acessar o vídeo:</p>
            <a href="/conta">Login</a>
            <span>ou</span>
            <SubscribeButton text="Inscreva-se" className={styles.subscription} />
        </div>
    )
}

export default Authenticate;