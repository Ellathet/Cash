import { useContext } from 'react';
import { AddTransactionContext } from '../contexts/TransactionContext';
import { TransactionsCount } from './BadgesModules/TransactionsCount';

export function Badges(){

    const { Transactions } = useContext(AddTransactionContext) 

    Transactions.length


    return (
        <TransactionsCount/>
    )
}