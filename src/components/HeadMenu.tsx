import styles from '../styles/components/HeadMenu.module.css';

import Image from "next/image";
import { useState } from 'react';

export function HeaderMenu() {

    
    const [ visibility, setVisibility ] = useState(true)
    const toggle = () => setVisibility(!visibility);

    function VisibilityComfirm() {

        if(visibility === false) {
            
         return {
            src: "/closeEye.svg",
            alt: "Visualização Desativada",
            class: styles.moneyBoxOff,
    
            }
        }else {
            
            return {
            src: "/eye.svg",
            alt: "Visualização Ativada",
            class: styles.moneyBox,
    
        }    
    }

}

    return (
        <div className={styles.HeadMenu}>
            <Image src="/bell.svg" alt="Sino de Notificação" width="24" height="24"/>
            <Image src="/plus.svg" alt="Adicionar" width="24" height="24"/>
            <div className={VisibilityComfirm().class}> 
                <span>R$100</span> 
            </div>
                <Image src={VisibilityComfirm().src} alt={VisibilityComfirm().alt} width="24" height="24" onClick={toggle}/>
        </div>
    )
}