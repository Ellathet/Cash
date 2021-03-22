import React, { useContext } from "react";

import styles  from "../../styles/components/Settings/Account.module.scss";
import { signIn, useSession, signOut } from 'next-auth/client'

export function Account() {

    const [ session, loading ] = useSession()

    return (
        <div className={styles.content}>
            {session && 
                <div className={`${styles.button} ${styles.buttonLogOff}`} onClick={()=> signOut()}> 
                    Sair da conta
                </div> 
            }
            {!session && 
                <div className={`${styles.button} ${styles.buttonLogIn}`} onClick={()=> signIn("google")}> 
                    Entrar na Conta
                </div> 
            }
        </div>

    )
}