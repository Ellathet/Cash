import styles from '../styles/components/Menu.module.css';

import Link from 'next/link';
import Image from 'next/image';

export function Menu() {
    return (
        <aside>
            <nav className={styles.menu}>
                <Link href="/">
                    <Image src="/logo.svg" height={60} width={60} alt="Logo" className={styles.logo}/>
                </Link>
                    <ul className={styles.menuList}>
                        <li>
                            <Link href="/">
                                <Image src="/home.svg" height={25} width={25} alt= "Inicio"/>
                            </Link>
                        </li>
                        <li>
                            <Link href="/auto">
                                <Image src="/auto.svg" height={25} width={25} alt= "Automático"/>
                            </Link>
                        </li>
                        <li>
                            <Link href="/goals">
                                <Image src="/target.svg" height={25} width={25} alt= "Metas"/>
                            </Link>
                        </li>
                    </ul>    
            </nav>
        </aside>
    )
}