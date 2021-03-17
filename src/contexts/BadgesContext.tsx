import Cookies from "js-cookie";
import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { AddTransactionContext } from "./TransactionContext";

interface BadgesContextData {
    transactionsTotal: Number;
}

export const BadgesContext = createContext({} as BadgesContextData)

interface BadgesProviderProps {
    children: ReactNode;
    storageTransactionsTotal: Number;
}

export function BadgesProvider ({children, ...rest}: BadgesProviderProps) {

    const { Transactions, toggleModalAdd } = useContext(AddTransactionContext) 

    const [ transactionsTotal, setTransactionsTotal] = useState(rest.storageTransactionsTotal)

  useEffect(()=> {
        setTransactionsTotal((Number(Transactions.length) - Number(transactionsTotal)) + Number(transactionsTotal))
        Cookies.set("storageTransactionsTotal", transactionsTotal.toString())
    }, [Transactions, transactionsTotal, toggleModalAdd]) 

    return (
        <BadgesContext.Provider value={{
            transactionsTotal
        }}>
            {children}
        </BadgesContext.Provider>
    )
}