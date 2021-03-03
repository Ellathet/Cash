import styles from '../styles/components/HeadMenu.module.css';

import Image from "next/image";
import { useContext, useState } from 'react';

import { VisibilityContext } from "../contexts/VisibilityContext"

export function HeaderMenu() {

    const { visibility, toggle } = useContext(VisibilityContext) 

    function VisibilityToggle( visibility ) {
        
        if(visibility === true){
            return{
                src: "/icons/eye.svg",
                alt: "Visualização Ativada",
                classStyle: styles.moneyBox,
            } 
        }else if(visibility === false){
            return{
                src:"/icons/closeEye.svg",
                alt: "Visualização Desativada",
                classStyle: styles.moneyBoxOff,
            }
        }
    }

    return (
        <div className={styles.HeadMenu}>
            <Image src="/icons/bell.svg" alt="Sino de Notificação" width="24" height="24"/>
            <Image src="/icons/plus.svg" alt="Adicionar" width="24" height="24"/>
            <div className={VisibilityToggle(visibility).classStyle}> 
                <span>R$100</span> 
            </div>
                <div className={styles.toggleBox}>
                    <Image src={VisibilityToggle(visibility).src} alt={VisibilityToggle(visibility).alt} width="24" height="24"  onClick={toggle}/>
                </div>
        </div>
    )
}