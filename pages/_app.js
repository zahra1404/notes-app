
import 'semantic-ui-css/semantic.min.css'
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import css from '../css/style.css'
function MyApp({ Component, pageProps }) {
  return <Layout><Component {...pageProps} /></Layout>
}

export default MyApp
