import { useContext, useState } from 'react'
import styles from '../styles/components/Settings.module.scss'
import { SettingsContext } from "../contexts/SettingsContext";


export function Settings() {

    const { toggleSettingsModal } = useContext(SettingsContext) 
    const [ MenuTab , setMenuTab ] = useState("perfil")
    
    return (
        <>
        <div className={styles.overlay} >
            <svg xmlns="http://www.w3.org/2000/svg" width="34.892" height="34.908" viewBox="0 0 34.892 34.908" className={styles.close}>
                <path id="Caminho_17" data-name="Caminho 17" d="M46.223,41.313,34.748,29.838,46.223,18.363A3.48,3.48,0,1,0,41.3,13.442L29.827,24.917,18.352,13.442a3.329,3.329,0,0,0-4.921,0,3.362,3.362,0,0,0,0,4.921L24.906,29.838,13.431,41.313a3.364,3.364,0,0,0,0,4.921,3.457,3.457,0,0,0,4.921,0L29.827,34.759,41.3,46.234a3.5,3.5,0,0,0,4.921,0A3.457,3.457,0,0,0,46.223,41.313Z" transform="translate(-12.359 -12.354)" fill="#9d9ea1"/>
            </svg>

            <div className={styles.modal}>
                <div className={styles.content}>
                    <aside>
                        <button onClick={() => setMenuTab("perfil")} 
                        className={`${styles.buttonStyle} ${MenuTab === "perfil" ? styles.activatedTab: null}`}>Perfil</button>
                        <button onClick={() => setMenuTab("transactions")} 
                        className={`${styles.buttonStyle} ${MenuTab === "transactions" ? styles.activatedTab: null}`}>Transações</button>
                        <button onClick={() => setMenuTab("storage")} 
                        className={`${styles.buttonStyle} ${MenuTab === "storage" ? styles.activatedTab: null}`}>Armazenamento</button>
                    </aside>
                    <main>
                        {MenuTab === "perfil" ? (
                            <div>
                                <h2>Configurações de Perfil</h2>
                                <div className={styles.perfilContent}>
                                    <div className={styles.perfilOptions}>
                                        <input type="text"/>
                                        <select>
                                            <option value="CompletedGoalsContainer">Metas Completas</option>s
                                            <small>Esse é o nome que será exibido no perfil.</small>
                                            <option value="MouthTransactions"> Transações Mensais</option>
                                            <small>Essa conquista será exibida no seu perfil, selecione 
                                            <br/>a que você preferir.</small>
                                        </select>
                                    </div>
                                    <div>                                    
                                        <div className={styles.config}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 30.472 31.2">
                                            <path id="Icon_material-settings" data-name="Icon material-settings" d="M29.145,19.47a11.69,11.69,0,0,0,.1-1.47,11.69,11.69,0,0,0-.1-1.47l3.165-2.475a.757.757,0,0,0,.18-.96l-3-5.19a.754.754,0,0,0-.915-.33l-3.735,1.5a10.959,10.959,0,0,0-2.535-1.47l-.57-3.975A.731.731,0,0,0,21,3H15a.731.731,0,0,0-.735.63L13.7,7.605a11.524,11.524,0,0,0-2.535,1.47l-3.735-1.5a.732.732,0,0,0-.915.33l-3,5.19a.74.74,0,0,0,.18.96L6.855,16.53A11.9,11.9,0,0,0,6.75,18a11.9,11.9,0,0,0,.105,1.47L3.69,21.945a.757.757,0,0,0-.18.96l3,5.19a.754.754,0,0,0,.915.33l3.735-1.5a10.959,10.959,0,0,0,2.535,1.47l.57,3.975A.731.731,0,0,0,15,33h6a.731.731,0,0,0,.735-.63l.57-3.975a11.524,11.524,0,0,0,2.535-1.47l3.735,1.5a.732.732,0,0,0,.915-.33l3-5.19a.757.757,0,0,0-.18-.96L29.145,19.47ZM18,23.25A5.25,5.25,0,1,1,23.25,18,5.256,5.256,0,0,1,18,23.25Z" transform="translate(-2.758 -2.4)"  stroke="#f60" stroke-width="1.2"/>
                                        </svg>
                                        </div>
                                        <img className={styles.perfil} src="https://github.com/Ellathet.png" alt="thet"/>
                                    </div>    
                                    <div>
                                        Sair da conta
                                    </div>
                                </div>
                            </div>
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