import styles from '../styles/components/Menu.module.css';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

export function Menu() {

    const router = useRouter();
    console.log(router.pathname)

    const routerIdentify = (router) => {
        if()
    }


    return (
    <nav className={styles.menu}>
        <div className={styles.logo}>
            <Link href="/">
                <Image src="/logo.svg" height={60} width={60} alt="Logo"/>
            </Link>
        </div>

        <div className={styles.menuList}>
            <ul>
                <Link href="/">
                    <li>
                        <Image src="/home.svg" height={25} width={25} alt= "Inicio"/>
                    </li>
                </Link>
                
                <Link href="/auto">
                    <li>
                        <Image src="/auto.svg" height={25} width={25} alt= "Automático"/>
                    </li>
                </Link>
                    
                <Link href="/goals">
                    <li>
                        <Image src="/target.svg" height={25} width={25} alt= "Metas"/>
                    </li>
                </Link>
            </ul>    
        </div>
         </nav>
    )
}