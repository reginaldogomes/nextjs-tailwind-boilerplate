import Layout from 'components/Layouts/Layout'
import type { AppProps } from 'next/app'
import '../styles/tailwind.css'

function App({ Component, pageProps }: AppProps) {
    return (
        <Layout title="testetetetetetetetetetetete">
            <Component {...pageProps} />
        </Layout>
    )
}

export default App
