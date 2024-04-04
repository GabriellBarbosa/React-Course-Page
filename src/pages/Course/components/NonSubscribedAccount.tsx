import styles from './NonSubscribedAccount.module.css';

function NonSubscribedAccount() {
    return (
        <div className={styles.nonSubscribedAccount}>
            <p>Sua conta ainda não está ativa. Aguarde a aprovação ou assine.</p>
            <a href="">Assinar</a>
        </div>
    )
}

export default NonSubscribedAccount;