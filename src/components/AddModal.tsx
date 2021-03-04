import Image from "next/image";

import styles  from "../styles/components/AddModal.module.css";

export function AddModal() {
      

    return (
        <div className={styles.overlay}>
            <div>
                <span>
                  <Image src="/icons/transaction.svg" width="20" height="20"/>
                  <p>Nova Transação</p>
                </span>  
                    <form action="" className={styles.form}>
                    <input type="text" id="name" maxLength={11} placeholder="Nome da Transação"/>
                    <div className={styles.date}>
                        <input type="date"/>
                        <div>
                                <select name="" id="" className={styles.TransactionType}>
                                <option value="true">Depósito</option>
                                <option value="false">Retirada</option>
                            </select> 
                        </div>

                    </div>
                <span>
                    R$ <input type="number"placeholder="Valor"/>
                </span>
                <div className={styles.Buttons}>
                    <button>Enviar</button>
                    <button>Cancelar</button>
                </div>
            </form>
            </div>
        </div>
    )
}