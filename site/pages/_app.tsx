import '../styles/globals.css'
import 'remixicon/fonts/remixicon.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Tinder Copy</title>
      </Head>
      <Component {...pageProps} />

    </>
    )
}

export default MyApp
