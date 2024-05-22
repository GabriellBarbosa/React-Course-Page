import styles from './Authenticate.module.css';
import SubscribeButton from '../../../components/SubscribeButton';
import VideoBackground from './VideoBackground';

function Authenticate() {
    return (
        <VideoBackground>
            <div className={styles.wrapper}>
                <p>Para acessar o vídeo:</p>
                <a href="/conta">Login</a>
                <span>ou</span>
                <SubscribeButton text="Inscreva-se" className={styles.subscription} />
            </div>
        </VideoBackground>
    )
}

export default Authenticate;