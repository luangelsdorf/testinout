import Head from 'next/head';
import 'src/styles/styles.scss';
import '../../public/css/bootstrap.css';

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
