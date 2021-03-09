import React, { createContext, ReactNode, useState } from "react";
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
}
export function AddTransactionProvider ({children,  ...rest}: AddTransactionProviderProps) {

    const [ modalAdd, setModalAdd ] = useState(false);

    const [ Transactions, setTransactions] = useState([])

    const toggleModalAdd = () => setModalAdd(!modalAdd); 

    function formatDate(date) {
        date = date.split("-")

        return `${date[2]}/${date[1]}/${date[0]}`
    }

    function formatType(type) {
        if(type == "true") {
            return true
        }else if( type == "false") {
            return false
        }
    }

    function formatValue(value, type){
        value = Number(value) * 100
        value = type === false ? value * -1 : value

        return value
    }

    function format (transaction) {
        const type = formatType(transaction.type.value)

        return {
            name: transaction.name.value,
            date: formatDate(transaction.date.value),
            type: type,
            value: formatValue(transaction.value.value, type),
            auto: false
        } 
    } 


    async function AddTransaction (transaction) {
        transaction = format(transaction)
        let arr = Transactions
        arr.push(transaction)
        setTransactions(arr)
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