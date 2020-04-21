import React from 'react'
import '../styles/index.css'
import { StaticKitProvider } from '@statickit/react'

function MyApp({ Component, pageProps }) {
  return (
    <StaticKitProvider site="688f31a56ac5">
      <Component {...pageProps} />
    </StaticKitProvider>
  )
}

export default MyApp
