import { useContext } from 'react';
import { AddTransactionContext } from '../../contexts/TransactionContext';
import styles from '../../styles/components/Badges.module.css';

export function TransactionsCount(){


    const { Transactions} = useContext(AddTransactionContext) 

    return (
        <div className={styles.completedGoalsContainer}>
            <span>
                <img src="/icons/star.svg" alt="Metas Completas"/>
                <span>Transações Feitas</span>
            </span>
            <span>{Transactions.length}</span>
        </div>
    )
}