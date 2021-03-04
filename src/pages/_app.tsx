
import { AddModal } from '../components/AddModal';
import { HeaderMenu } from '../components/HeadMenu';
import { Menu } from '../components/Menu';
import { VisibilityProvider } from '../contexts/VisibilityContext';
import '../styles/global.css';


function MyApp({ Component, pageProps }) {
  return (
    <>
    <VisibilityProvider>
    <AddModal/>
      <aside>
          <Menu/>
        </aside>
        <main>
          <header>
          < HeaderMenu/>
          </header>
        </main>
      <Component {...pageProps} />
    </VisibilityProvider>
    </>
  )
}

export default MyApp
