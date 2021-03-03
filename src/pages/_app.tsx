
import { HeaderMenu } from '../components/HeadMenu';
import { Menu } from '../components/Menu';
import '../styles/global.css';

import styles from '../styles/pages/Home.module.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <aside>
        <Menu/>
      </aside>
      <main>
        <header>
          <HeaderMenu/>
        </header>
      </main>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
