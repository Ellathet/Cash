import React, { createContext, ReactNode, useState } from "react";
import { Settings } from "../components/Settings";

interface SettingsContextData {
    SettingsModal: boolean;
    toggleSettingsModal: () => void;
}

export const SettingsContext = createContext({} as SettingsContextData)

interface SettingsProviderProps {
    children: ReactNode;
}
export function SettingsProvider ({children}: SettingsProviderProps) {

    const [ SettingsModal, setSettingsModal ] = useState(false);

    const toggleSettingsModal = () => setSettingsModal(!SettingsModal); 

    return (
        <SettingsContext.Provider value={{
            SettingsModal,
            toggleSettingsModal,
        }}>
            {children}
            { SettingsModal && <Settings/>}
        </SettingsContext.Provider>
    )
}