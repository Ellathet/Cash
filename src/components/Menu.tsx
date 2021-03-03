import styles from '../styles/components/Menu.module.css';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from "next/router"

export function Menu() {

    const router = useRouter()

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
                        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 29.25 27">
                            <path 
                            id="Icon_ionic-md-home" 
                            data-name="Icon ionic-md-home" 
                            d="M14.625,31.5v-9h6.75v9h6.862V18h4.388L18,4.5,3.375,18H7.762V31.5Z" 
                            transform="translate(-3.375 -4.5)" 
                            fill={router.pathname === "/" ? "#f60" : "#4b4e5c" }
                            />
                        </svg>
                    </li>
                </Link>
                
                <Link href="/auto">
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16.546 36.649">
                            <path id="Icon_weather-lightning" 
                            data-name="Icon weather-lightning" 
                            d="M57.381,43.741h.806L73.779,20.832a.68.68,0,0,0,.119-.6c-.06-.149-.239-.209-.508-.209H67.118L73.629,7.988q.538-.9-.538-.9H64.908a.963.963,0,0,0-.9.568L57.8,24.028a.644.644,0,0,0,.03.627.665.665,0,0,0,.568.209H64.49Z" 
                            transform="translate(-57.381 -7.092)" 
                            fill={router.pathname === "/auto" ? "#f60" : "#4b4e5c" }
                            />
                        </svg>
                    </li>
                </Link>
                    
                <Link href="/goals">
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 26.817 26.817">
                            <path id="target" 
                            d="M25.975,8.734a13.408,13.408,0,1,1-4.2-5.8l2.5-2.5A1.489,1.489,0,0,1,26.375,2.54l-7.7,7.7h0l-4.212,4.212a1.489,1.489,0,0,1-2.106-2.106l2.98-2.98a4.469,4.469,0,1,0,2.453,4.92,1.489,1.489,0,1,1,2.92.588,7.443,7.443,0,1,1-3.192-7.688L19.65,5.053a10.416,10.416,0,1,0,3.533,4.716,1.489,1.489,0,1,1,2.793-1.035Z" 
                            fill={router.pathname === "/goals" ? "#f60" : "#4b4e5c" }
                            />
                    </svg>
                    </li>
                </Link>
            </ul>    
        </div>
         </nav>
    )
}