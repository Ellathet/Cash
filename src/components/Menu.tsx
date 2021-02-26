import styles from '../styles/components/Menu.module.css';

export function Menu() {
    return (
        <nav className={styles.main}>
            <div className={styles.button}>
                <img src="/home.svg" alt="Início"/>
                <span>Metas</span>
            </div>
            <div className={styles.button}>
                <img src="/debitcard.svg" alt="Débito Automático"/>
                <span>Automático</span>
            </div>
            <div className={styles.button}>
                <img src="/target.svg" alt="Metas"/>
                <span>Início</span>
            </div>
        </nav>
    )
}