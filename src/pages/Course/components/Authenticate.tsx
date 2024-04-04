import styles from './Authenticate.module.css';

function Authenticate() {
    return (
        <div className={styles.authenticate}>
            <p>Para acessar o vídeo:</p>
            <a href="/conta">Login</a>
            <span>ou</span>
            <a href="">Inscreva-se</a>
        </div>
    )
}

export default Authenticate;