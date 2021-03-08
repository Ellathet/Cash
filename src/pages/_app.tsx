import { AddTransactionProvider } from '../contexts/AddTransactionContext';
import { VisibilityProvider } from '../contexts/VisibilityContext';
import '../styles/global.css';


function MyApp({ Component, pageProps}) {
  return (
    <>
    <VisibilityProvider>
      <AddTransactionProvider>
      <Component {...pageProps} />
      </AddTransactionProvider>
    </VisibilityProvider>
    </>
  )
}

export default MyApp


