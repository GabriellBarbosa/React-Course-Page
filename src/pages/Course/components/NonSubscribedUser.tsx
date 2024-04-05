import styles from './NonSubscribedUser.module.css';
import SubscribeButton from '../../../components/SubscribeButton';

function NonSubscribedUser() {
    return (
        <div className={styles.nonSubscribedUser}>
            <p>Sua conta ainda não está ativa. Aguarde a aprovação ou assine.</p>
            <SubscribeButton text="Assinar" className={styles.subscription} />
        </div>
    )
}

export default NonSubscribedUser;