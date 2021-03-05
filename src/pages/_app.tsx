
import { AddModal } from '../components/AddModal';
import { HeaderMenu } from '../components/HeadMenu';
import { Menu } from '../components/Menu';
import { AddTransactionProvider } from '../contexts/AddTransactionContext';
import { VisibilityProvider } from '../contexts/VisibilityContext';
import '../styles/global.css';


function MyApp({ Component, pageProps }) {
  return (
    <>
    <VisibilityProvider>
      <AddTransactionProvider>
      <aside>
          <Menu/>
        </aside>
        <main>
          <header>
          < HeaderMenu/>
          </header>
        </main>
      <Component {...pageProps} />
      </AddTransactionProvider>
    </VisibilityProvider>
    </>
  )
}

export default MyApp
