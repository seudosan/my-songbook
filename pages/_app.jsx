import '@/styles/global.css'
import { initAuth } from 'initAuth'

initAuth()

function MyApp ({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
