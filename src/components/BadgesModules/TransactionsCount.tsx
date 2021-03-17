import { useContext } from 'react';
import { BadgesContext } from '../../contexts/BadgesContext';
import styles from '../../styles/components/Badges.module.css';

export function TransactionsCount(){


    const { transactionsTotal } = useContext(BadgesContext) 

    return (
        <div className={styles.completedGoalsContainer}>
            <span>
                <img src="/icons/star.svg" alt="Metas Completas"/>
                <span>Transações Feitas</span>
            </span>
            <span>{transactionsTotal}</span>
        </div>
    )
}