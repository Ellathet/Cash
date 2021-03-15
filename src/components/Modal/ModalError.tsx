import { useContext } from "react";
import { AddTransactionContext } from "../../contexts/TransactionContext";
import styles  from "../../styles/components/Modal/AddModal.module.scss";


export function ModalError() {

    const { setErr } = useContext(AddTransactionContext)  

    return (
        <div className={`${styles.modal} ${styles.error}`}>
            <div className={styles.content}>
                <div>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                        <circle className={`${styles.path} ${styles.circle}`} fill="none" stroke="#fff" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1"/>
                        <line className={`${styles.path} ${styles.line}`} fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" x1="34.4" y1="37.9" x2="95.8" y2="92.3"/>
                        <line className={`${styles.path} ${styles.line}`} fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" x1="95.8" y1="38" x2="34.4" y2="92.2"/>
                    </svg>
                    <p>Para enviar uma transação complete <br/> todos os campos!</p>
                </div>
                <div>
                    <button className={styles.cancel} onClick={() => setErr(false)}>Tentar Novamente</button>
                </div>
            </div>
        </div>
    )
}