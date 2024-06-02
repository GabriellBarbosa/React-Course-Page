import styles from './NotActivated.module.css';
import SubscribeButton from '../../../components/SubscribeButton';
import VideoBackground from './VideoBackground';

function NotActivated() {
    return (
        <VideoBackground>
            <div className={styles.wrapper}>
                <p>Sua conta ainda não está ativa. Aguarde a aprovação ou assine.</p>
                <SubscribeButton text="Assinar" className={styles.subscription} />
            </div>
        </VideoBackground>
    )
}

export default NotActivated;