import { VisibilityProvider } from '../contexts/VisibilityContext';
import '../styles/global.css';


function MyApp({ Component, pageProps}) {
  return (
    <>
    <VisibilityProvider>
      <Component {...pageProps} />
    </VisibilityProvider>
    </>
  )
}

export default MyApp


