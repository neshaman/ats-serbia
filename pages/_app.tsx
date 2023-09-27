import { AppProps } from 'next/app'
import 'styles/reset.css'
import 'styles/index.css'
import { ApolloProvider } from '@apollo/client/react'
import { client } from 'lib/apollo'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
