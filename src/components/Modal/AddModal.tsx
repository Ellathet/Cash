import React, { useContext } from "react";
import { AddTransactionContext } from "../../contexts/TransactionContext";

import styles  from "../../styles/components/Modal/AddModal.module.scss";
import { ModalError } from "./ModalError";
import { ModalForm } from "./ModalForm";
import { ModalSuccess } from "./ModalSuccess";

export function AddModal() {
      
    const { Err, Confirm } = useContext(AddTransactionContext)  

    const modalController = () => {
        if( Err === true ) {
            return (
                <ModalError/>
            )
        } else if (Confirm === true) {
               return (
               <ModalSuccess/>
               )
        } else {
            return (
                <ModalForm/>
            )
        }
    }
    return (
        <div className={styles.overlay}>
            {modalController()}
        </div>
    )
}