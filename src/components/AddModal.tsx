import Image from "next/image";
import { useContext } from "react";
import { AddTransactionContext } from "../contexts/AddTransactionContext";

import styles  from "../styles/components/AddModal.module.scss";

export function AddModal() {
      
    const { toggleModalAdd } = useContext(AddTransactionContext) 

    interface TransactionModel {
        name: string;
        date: Date;
        type: boolean;
        value: number;
    }

    const addTransaction = event => {
        event.preventDefault();

        const transaction: TransactionModel = {
            name: event.target.name.value,
            date: event.target.date.value,
            type: event.target.type.value,
            value: event.target.value.value,
        }
        console.log(transaction)

        return transaction
    }

    return (
        <div className={styles.overlay}>
            {/* Content */}
            <div className={styles.modal}>
                {/* Title */}
                <span className={styles.title}>
                    <Image src="/icons/transaction.svg" width="20" height="20"/>
                    <p>Nova Transação</p>
                </span>
                {/* Form */}
                <form onSubmit={addTransaction} className={styles.content}>
                    <label htmlFor="name" className={styles.srOnly}>Nome da Transação</label>
                    <input type="text" id="name" name="name" maxLength={11} placeholder="Nome da Transação"/>
                    {/* Date */}
                    <div className={styles.date}>
                        <label htmlFor="date" className={styles.srOnly}>Data da Transação</label>
                        <input type="date" id="date" name="date"/>

                        <label htmlFor="type" className={styles.srOnly}>Tipo da Transação</label>
                        <select name="type" id="" className={styles.TransactionType}>
                            <option value="true">Depósito</option>
                            <option value="false">Retirada</option>
                        </select> 
                    </div>
                    {/* Valor */}
                        <div className={styles.value}>
                            <label htmlFor="value" className={styles.srOnly}>Valor da Transação</label>
                            <span> R$ </span> <input type="number"placeholder="Valor" name="value"/>
                        </div>
                    {/* Buttons */}
                    <div className={styles.buttons}>
                        <button type="submit" onClick={toggleModalAdd}>Enviar</button>
                        <button onClick={toggleModalAdd}>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}