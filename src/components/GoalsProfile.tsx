import styles from '../styles/components/GoalsProfile.module.css';

import Image from 'next/image';
import Link from 'next/link';

export function GoalsProfile() {
  return (
    <div className={styles.container}>
      <Image src="/icons/target.svg"height="130" width="130"/>
      <span>Metas</span>
      <p>Comece a usar as metas, para começar <br/> adicione sua meta:</p>
      <Link href="/goals">
        <button>Clique Aqui</button>
      </Link>
    </div>
  );
}
