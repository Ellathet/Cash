
import { Menu } from '../components/Menu';
import '../styles/global.css';

import styles from '../styles/pages/Home.module.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.container}>
    <Menu/>
    <Component {...pageProps} />
    </div>
  )
}

export default MyApp
