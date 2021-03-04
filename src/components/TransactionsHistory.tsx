import styles from '../styles/components/TransactionsHistory.module.css'

import React, { Component } from 'react';

import Image from "next/image";

import { VisibilityContext } from "../contexts/VisibilityContext"
import { useContext } from 'react';
import { HistoryTable } from './HistoryTable';

export function TransacionsHistory() {

    const { visibility } = useContext(VisibilityContext) 

    return(
        <>
            { visibility ?(
            <div className={styles.container}>
                <div className={styles.content}>
                    <div>
                    <span>
                        <Image src="/icons/history.svg" width="25" height="25" className={styles.historyIcon}/>
                        Historico de Transações
                    </span>
                    <select name="" id=""></select>
                    </div>
                        <HistoryTable/>
                    </div>
                </div>
            ) : (
                <div className={styles.VisibilityOff}>

                </div>
            )}
        </>
    ) 

}
