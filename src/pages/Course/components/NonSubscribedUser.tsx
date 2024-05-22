import styles from './NonSubscribedUser.module.css';
import SubscribeButton from '../../../components/SubscribeButton';
import VideoBackground from './VideoBackground';

function NonSubscribedUser() {
    return (
        <VideoBackground>
            <div className={styles.wrapper}>
                <p>Sua conta ainda não está ativa. Aguarde a aprovação ou assine.</p>
                <SubscribeButton text="Assinar" className={styles.subscription} />
            </div>
        </VideoBackground>
    )
}

export default NonSubscribedUser;