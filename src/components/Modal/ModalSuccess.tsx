import { useContext } from "react";
import { AddTransactionContext } from "../../contexts/TransactionContext";
import styles  from "../../styles/components/Modal/AddModal.module.scss";


export function ModalSuccess() {

    const { toggleModalAdd } = useContext(AddTransactionContext)  

    return (
        <div className={`${styles.success} ${styles.modal}`}>
            <div className={styles.content}>
                <div>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                        <circle className={`${styles.path} ${styles.circle}`} fill="none" stroke="#fff" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1"/>
                        <polyline className={`${styles.path} ${styles.check}`} fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
                    </svg>
                    <p>Sua transação foi criado com sucesso!</p>
                </div>
                <div>
                    <button className={`${styles.successButton} ${styles.cancel}`} onClick={toggleModalAdd}>Voltar a página</button>
                </div>
            </div>
        </div>
    )
}