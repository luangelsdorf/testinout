import Head from 'next/head';
import 'src/styles/styles.scss';
import '../../public/css/bootstrap.css';
/* import 'src/styles/css/autonomy.css';
import 'src/styles/css/support.css';
import 'src/styles/css/tailor-made.css';
import 'src/styles/css/delivery.css'; */

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
