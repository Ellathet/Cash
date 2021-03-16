import React, { createContext, ReactNode, useEffect, useState } from "react";
import { AddModal } from "../components/Modal/AddModal";
interface AddTransactionContextData {
    modalAdd: boolean;
    toggleModalAdd: () => void;
    AddTransaction: (transaction) => void;
    Transactions: any;
    setTransactions: any;
    Err: boolean;
    setErr: (boolean) => void;
    Confirm: boolean;
    total: Number;
}


export const AddTransactionContext = createContext({} as AddTransactionContextData)

interface AddTransactionProviderProps {
    children: ReactNode;
    transactions: any;
}
export function AddTransactionProvider ({children,  ...rest}: AddTransactionProviderProps) {

    const [ modalAdd, setModalAdd ] = useState(false);

    const [ Transactions, setTransactions ] = useState([])
    const [ Err, setErr ] = useState(true)
    const [ Confirm, setConfirm ] = useState(false)
    const [ total, setTotal ] = useState(0)


    function toggleModalAdd () {
        setModalAdd(!modalAdd) 
        setErr(false)
        setConfirm(false)
    }

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



    function totalTransactions() {
        let total = 0;

        Transactions.map(transactions => {
                console.log(transactions.value)
                total += transactions.value/100
        })

        return total

    }

    useEffect(()=> {
        setTotal(totalTransactions())
    }, [Transactions, modalAdd, Confirm])


    const ConfirmFields = (transaction) => {
        if(transaction.name.value.trim() === "" || transaction.date.value.trim() === "" || transaction.value.value.trim() === ""){
            throw new Error("Por favor, preencha todos os campos")
        }
    } 

    async function AddTransaction (transaction) {
        try{
            ConfirmFields(transaction)
            transaction = Format.format(transaction)
            Transactions.push(transaction)
            setTransactions(Transactions)
            setErr(false)
            setConfirm(true)
            totalTransactions()
        } catch(error) {
            setErr(true)
        }

    }

    return (
        <AddTransactionContext.Provider value={{
            modalAdd,
            toggleModalAdd,
            AddTransaction,
            Transactions,
            setTransactions,
            Err,
            setErr,
            Confirm,
            total,
        }}>
            {children}
            { modalAdd && <AddModal/>}
        </AddTransactionContext.Provider>
    )
}