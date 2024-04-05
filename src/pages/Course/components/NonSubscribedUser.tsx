import styles from './NonSubscribedUser.module.css';
import SubscribeButton from '../../../components/SubscribeButton';

function NonSubscribedUser() {
    return (
        <div className={styles.nonSubscribedUser}>
            <p>Sua conta ainda não está ativa. Aguarde a aprovação ou assine.</p>
            <SubscribeButton text="Assinar" className={styles.subscription}>
                <button type="submit" name="add-to-cart" value={ (window as any).wp_data?.course }>Assinar</button>
            </SubscribeButton>
        </div>
    )
}

export default NonSubscribedUser;