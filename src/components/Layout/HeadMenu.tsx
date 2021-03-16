import styles from '../../styles/components/HeadMenu.module.css';

import Image from "next/image";
import { useContext, useState } from 'react';

import { VisibilityContext } from "../../contexts/VisibilityContext"
import { AddTransactionContext } from '../../contexts/TransactionContext';

export function HeaderMenu() {

    const { toggleModalAdd, total } = useContext(AddTransactionContext) 
    const { visibility, toggle } = useContext(VisibilityContext) 

    function VisibilityToggle( visibility ) {
        
        if(visibility === true){

        let classStyle = total < 0 ? styles.moneyBoxNegative: styles.moneyBox

            return{
                src: "/icons/eye.svg",
                alt: "Visualização Ativada",
                classStyle: classStyle,
            } 
        }else if(visibility === false){
            return{
                src:"/icons/closeEye.svg",
                alt: "Visualização Desativada",
                classStyle: styles.moneyBoxOff,
            }
        }
    }

    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    })


    return (
        <div className={styles.HeadMenu}>
            <Image src="/icons/bell.svg" alt="Sino de Notificação" width="24" height="24"/>
            <Image src="/icons/plus.svg" alt="Adicionar" width="24" height="24"className={styles.add} onClick={toggleModalAdd}/>
            <div className={VisibilityToggle(visibility).classStyle}> 
                <span>{formatter.format(Number(total))}</span> 
            </div>
                <div className={styles.toggleBox}>
                    <Image src={VisibilityToggle(visibility).src} alt={VisibilityToggle(visibility).alt} width="24" height="24"  onClick={toggle}/>
                </div>
        </div>
    )
}