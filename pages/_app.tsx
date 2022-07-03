import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { MdxComponentsProvider } from '../context/mdxContext'
import 'highlight.js/styles/github-dark.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MdxComponentsProvider>
      <Layout> 
        <Component {...pageProps} />
      </Layout>
    </MdxComponentsProvider>
  ) 
}

export default MyApp
