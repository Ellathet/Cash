import React, { createContext, ReactNode, useState } from "react";

interface VisibilityContextData{
    toggle: ()=> void;
    visibility: boolean;

    modalAdd: boolean;
    toggleModalAdd: () => void;
}

export const VisibilityContext = createContext({} as VisibilityContextData)

interface VisibilityProviderProps {
    children: ReactNode;
}

export function VisibilityProvider ({children}: VisibilityProviderProps) {
    
    const [ visibility, setVisibility ] = useState(true);
    const [ modalAdd, setModalAdd ] = useState(false);

    const toggle = () => setVisibility(!visibility); 
    const toggleModalAdd = () => setModalAdd(!modalAdd); 

    return (
        <VisibilityContext.Provider value={{
            toggle,
            visibility,
            modalAdd,
            toggleModalAdd,
        }}>
            {children}
        </VisibilityContext.Provider>
    )
}