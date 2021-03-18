import { VisibilityProvider } from '../contexts/VisibilityContext';
import '../styles/global.css';
import { Provider } from 'next-auth/client'


function MyApp({ Component, pageProps}) {
  return (
    <>
    <Provider session={pageProps.session}>
    <VisibilityProvider>
      <Component {...pageProps} />
    </VisibilityProvider>
    </Provider>
    </>
  )
}

export default MyApp


