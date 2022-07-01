import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
    <Head>
      <meta name="viewport" content="viewport-fit=cover" />
      <link rel="shortcut icon" href="/circle.png" />
    </Head>
    <Component {...pageProps} />
  </>
  )
}

export default MyApp