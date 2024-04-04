import styles from './NonSubscribedAccount.module.css';
import BuyCourse from '../../../components/BuyCourse';

function NonSubscribedAccount() {
    return (
        <div className={styles.nonSubscribedAccount}>
            <p>Sua conta ainda não está ativa. Aguarde a aprovação ou assine.</p>
            <BuyCourse>
                <button type="submit" name="add-to-cart" value={ (window as any).wp_data?.course }>Assinar</button>
            </BuyCourse>
        </div>
    )
}

export default NonSubscribedAccount;