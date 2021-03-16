import styles from '../styles/components/TransactionsHistory.module.css'

import Image from "next/image";

import { VisibilityContext } from "../contexts/VisibilityContext"
import { useContext } from 'react';
import { HistoryTable } from './HistoryTable';
import { AddTransactionContext } from '../contexts/TransactionContext';

export function TransactionsHistory() {

    const { visibility } = useContext(VisibilityContext) 
    const { Transactions, toggleModalAdd } = useContext(AddTransactionContext) 

    function tableHandler() {
        if(visibility && Transactions.length != 0) {
            return (
            <div className={styles.container}>
                <div className={styles.content}>
                    <div>
                    <span>
                        <Image src="/icons/history.svg" width="25" height="25" className={styles.historyIcon}/>
                        Histórico de Transações
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 15.415 26.96" className={styles.next}>
                        <path id="Icon_ionic-ios-arrow-forward" data-name="Icon ionic-ios-arrow-forward" d="M22.014,19.671,11.812,9.477a1.918,1.918,0,0,1,0-2.721,1.943,1.943,0,0,1,2.729,0L26.1,18.307a1.923,1.923,0,0,1,.056,2.657L14.549,32.594a1.927,1.927,0,0,1-2.729-2.721Z" transform="translate(-11.246 -6.196)" fill="#202020"/>
                    </svg>
                </div>
                    <HistoryTable/>
                </div>
            </div>
            )
        } else if (!visibility && Transactions.length !== 0) {
            return (
            <div className={styles.VisibilityOff}></div>
            )
        } else if (Transactions.length === 0) {
            return (
            <div className={`${styles.container} ${styles.nothing}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="250" height="250" viewBox="0 0 267.042 228.893">
                        <path id="Icon_material-history" data-name="Icon material-history" d="M154.1,4.5A114.456,114.456,0,0,0,39.649,118.947H1.5l49.466,49.466.89,1.78,51.374-51.247H65.081a89.441,89.441,0,1,1,26.2,62.819L73.22,199.822A114.417,114.417,0,1,0,154.1,4.5ZM141.379,68.081v63.582l54.426,32.3,9.156-15.387-44.507-26.45V68.081Z" transform="translate(-1.5 -4.5)" fill="#f60"/>
                    </svg>
                    <span>
                        <h2>Histórico</h2>
                        <p>Você ainda não tem históricos<br/>disponíveis.</p>
                    </span>
                    <div onClick={toggleModalAdd}>
                        Adicione uma transação
                    </div>
            </div>
            )
        }
    }

    return(
        <>
        {tableHandler()}
        </>
    ) 

}
