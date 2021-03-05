import React, { createContext, ReactNode, useState } from "react";
import { AddModal } from "../components/AddModal";

interface AddTransactionContextData {
    modalAdd: boolean;
    toggleModalAdd: () => void;
}


export const AddTransactionContext = createContext({} as AddTransactionContextData)

interface AddTransactionProviderProps {
    children: ReactNode;
}
export function AddTransactionProvider ({children}: AddTransactionProviderProps) {

    const [ modalAdd, setModalAdd ] = useState(false);
    const toggleModalAdd = () => setModalAdd(!modalAdd); 

    return (
        <AddTransactionContext.Provider value={{
            modalAdd,
            toggleModalAdd,
        }}>
            {children}
            { modalAdd && <AddModal/>}
        </AddTransactionContext.Provider>
    )
}