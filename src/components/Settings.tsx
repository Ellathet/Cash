import { useContext, useState } from 'react'
import styles from '../styles/components/Settings.module.scss'
import { SettingsContext } from "../contexts/SettingsContext";
import { Profile } from './Settings/Profile';
import { Account } from './Settings/Account';


export function Settings() {

    const { toggleSettingsModal } = useContext(SettingsContext) 
    const [ MenuTab , setMenuTab ] = useState("profile")


    return (
        <>
        <div className={styles.overlay} >
            <div className={styles.modal}>
                <div className={styles.content}>
                    <aside>
                        <button onClick={() => setMenuTab("profile")} 
                        className={`${styles.buttonStyle} ${MenuTab === "profile" ? styles.activatedTab: null}`}>Perfil</button>
                        <button onClick={() => setMenuTab("account")} 
                        className={`${styles.buttonStyle} ${MenuTab === "account" ? styles.activatedTab: null}`}>Conta</button>
                        <button onClick={() => setMenuTab("transactions")} 
                        className={`${styles.buttonStyle} ${MenuTab === "transactions" ? styles.activatedTab: null}`}>Transações</button>
                        <button onClick={() => setMenuTab("storage")} 
                        className={`${styles.buttonStyle} ${MenuTab === "storage" ? styles.activatedTab: null}`}>Armazenamento</button>
                        <button onClick={toggleSettingsModal} 
                        className={`${styles.buttonStyle}`}>Fechar Menu</button>
                    </aside>
                    <main>
                        {MenuTab === "profile" ? (
                            <Profile/>
                        ) : null}
                        {MenuTab === "account" ? (
                            <Account/>
                        ) : null}
                        {MenuTab === "transactions" ? (
                            <div>
                                <h2>Teste2</h2>
                            </div>
                        ) : null}
                        {MenuTab === "storage" ? (
                            <div>
                                <h1>Teste3</h1>
                            </div>
                        ): null}
                    </main>
                </div>
            </div>
        </div>
        </>
    )

}