import React, { createContext, ReactNode, useEffect, useState } from "react";
import { AddModal } from "../components/AddModal";
import Cookies from 'js-cookie'

interface TransactionData {
    name: string;
    date: string;
    type: boolean;
    value: number;
}
interface AddTransactionContextData {
    modalAdd: boolean;
    toggleModalAdd: () => void;
    AddTransaction: (transaction) => void;
    Transactions: any;
    setTransactions: any;
}


export const AddTransactionContext = createContext({} as AddTransactionContextData)

interface AddTransactionProviderProps {
    children: ReactNode;
    transactions: any;
}
export function AddTransactionProvider ({children,  ...rest}: AddTransactionProviderProps) {

    const [ modalAdd, setModalAdd ] = useState(false);

    const [ Transactions, setTransactions] = useState(rest.transactions ?? [])

    const toggleModalAdd = () => setModalAdd(!modalAdd); 

    const Format = {

        formatDate: (date) => {
            date = date.split("-")
    
            return `${date[2]}/${date[1]}/${date[0]}`
        },
    
        formatType: (type) => {
            if(type == "true") {
                return true
            }else if( type == "false") {
                return false
            }
        },
    
        formatValue: (value, type) => {
            value = Number(value) * 100
            value = type === false ? value * -1 : value
    
            return value
        },
    
        format: (transaction) => {
            const type = Format.formatType(transaction.type.value)
    
            return {
                name: transaction.name.value,
                date: Format.formatDate(transaction.date.value),
                type: type,
                value: Format.formatValue(transaction.value.value, type),
                auto: false
            } 
        },
    }

    useEffect(()=> {
        let stringify = JSON.stringify(Transactions) 
        Cookies.set('transactions', `${stringify}`)
    },[Transactions])

    async function AddTransaction (transaction) {
        transaction = Format.format(transaction)
        Transactions.push(transaction)
        setTransactions(Transactions)
        toggleModalAdd()
    }

    return (
        <AddTransactionContext.Provider value={{
            modalAdd,
            toggleModalAdd,
            AddTransaction,
            Transactions,
            setTransactions,
        }}>
            {children}
            { modalAdd && <AddModal/>}
        </AddTransactionContext.Provider>
    )
}