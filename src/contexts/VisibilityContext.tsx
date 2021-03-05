import React, { createContext, ReactNode, useState } from "react";

interface VisibilityContextData{
    toggle: ()=> void;
    visibility: boolean;
}

export const VisibilityContext = createContext({} as VisibilityContextData)

interface VisibilityProviderProps {
    children: ReactNode;
}

export function VisibilityProvider ({children}: VisibilityProviderProps) {
    
    const [ visibility, setVisibility ] = useState(true);

    const toggle = () => setVisibility(!visibility); 


    return (
        <VisibilityContext.Provider value={{
            toggle,
            visibility,
        }}>
            {children}
        </VisibilityContext.Provider>
    )
}