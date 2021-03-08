import { useContext } from 'react';
import styles from '../styles/components/Profile.module.css';
import { SettingsContext } from "../contexts/SettingsContext";


export function Profile(){

    const { toggleSettingsModal } = useContext(SettingsContext) 

    return (
        <div className={styles.profileContainer}>
                <div className={styles.config}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 30.472 31.2" onClick={toggleSettingsModal}>
                    <path id="Icon_material-settings" data-name="Icon material-settings" d="M29.145,19.47a11.69,11.69,0,0,0,.1-1.47,11.69,11.69,0,0,0-.1-1.47l3.165-2.475a.757.757,0,0,0,.18-.96l-3-5.19a.754.754,0,0,0-.915-.33l-3.735,1.5a10.959,10.959,0,0,0-2.535-1.47l-.57-3.975A.731.731,0,0,0,21,3H15a.731.731,0,0,0-.735.63L13.7,7.605a11.524,11.524,0,0,0-2.535,1.47l-3.735-1.5a.732.732,0,0,0-.915.33l-3,5.19a.74.74,0,0,0,.18.96L6.855,16.53A11.9,11.9,0,0,0,6.75,18a11.9,11.9,0,0,0,.105,1.47L3.69,21.945a.757.757,0,0,0-.18.96l3,5.19a.754.754,0,0,0,.915.33l3.735-1.5a10.959,10.959,0,0,0,2.535,1.47l.57,3.975A.731.731,0,0,0,15,33h6a.731.731,0,0,0,.735-.63l.57-3.975a11.524,11.524,0,0,0,2.535-1.47l3.735,1.5a.732.732,0,0,0,.915-.33l3-5.19a.757.757,0,0,0-.18-.96L29.145,19.47ZM18,23.25A5.25,5.25,0,1,1,23.25,18,5.256,5.256,0,0,1,18,23.25Z" transform="translate(-2.758 -2.4)"  stroke="#f60" stroke-width="1.2"/>
                    </svg>
                </div>
                <img className={styles.perfil} src="https://github.com/Ellathet.png" alt="Foto de Perfil"/>
                <div>
                <strong>Thet</strong>
            </div>
        </div>
    )
}