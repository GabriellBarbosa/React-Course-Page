import styles from './NonSubscribedAccount.module.css';
import SubscribeForm from '../../../components/SubscribeForm';

function NonSubscribedAccount() {
    return (
        <div className={styles.nonSubscribedAccount}>
            <p>Sua conta ainda não está ativa. Aguarde a aprovação ou assine.</p>
            <SubscribeForm>
                <button type="submit" name="add-to-cart" value={ (window as any).wp_data?.course }>Assinar</button>
            </SubscribeForm>
        </div>
    )
}

export default NonSubscribedAccount;