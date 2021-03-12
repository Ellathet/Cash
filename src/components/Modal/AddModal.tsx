import Image from "next/image";
import { useContext } from "react";
import { AddTransactionContext } from "../../contexts/AddTransactionContext";

import styles  from "../styles/components/Modal/AddModal.module.scss";

export function AddModal() {
      
    const { toggleModalAdd, AddTransaction, Err, setErr, Confirm, setConfirm } = useContext(AddTransactionContext)  

    return (
        <div className={styles.overlay}>

        </div>
    )
}