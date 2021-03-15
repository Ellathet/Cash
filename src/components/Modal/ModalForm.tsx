import Image from "next/image";
import { useContext } from "react";
import { AddTransactionContext } from "../../contexts/AddTransactionContext";
import styles  from "../../styles/components/Modal/AddModal.module.scss";


export function ModalForm() {

    const { toggleModalAdd, AddTransaction } = useContext(AddTransactionContext)  

    const addTransaction = event => {
        event.preventDefault(); 
        AddTransaction(event.target)
    }

    return (
        <div className={styles.modal}>
                <span className={styles.title}>
                    <Image src="/icons/transaction.svg" width="20" height="20"/>
                     <p>Nova Transação</p>
                </span>
                <form onSubmit={addTransaction} className={styles.content}>
                    <label htmlFor="name" className={styles.srOnly}>Nome da Transação</label>
                    <input type="text" id="name" name="name" maxLength={11} placeholder="Nome da Transação"/>
                    {/* Date */}
                    <div className={styles.date}>
                        <label htmlFor="date" className={styles.srOnly}>Data da Transação</label>
                        <input type="date" id="date" name="date" min='2010-01-01' max='2030-12-31'/>

                        <label htmlFor="type" className={styles.srOnly}>Tipo da Transação</label>
                        <select name="type" id="" className={styles.TransactionType}>
                            <option value="true">Depósito</option>
                            <option value="false">Retirada</option>
                        </select> 
                    </div>
                    {/* Valor */}
                        <div className={styles.value}>
                            <label htmlFor="value" className={styles.srOnly}>Valor da Transação</label>
                            <span> R$ </span> <input type="number"placeholder="Valor" name="value" step="0.01" min="0.01"/>
                        </div>
                    {/* Buttons */}
                    <div className={styles.buttons}>
                        <button>Enviar</button>
                        <button onClick={toggleModalAdd}>Cancelar</button>
                    </div>
                </form>
                </div>
    )
}