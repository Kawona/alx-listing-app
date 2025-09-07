import type { AppProps } from 'next/app'
import '../styles/globals.css'   // make sure this path matches your styles folder

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}