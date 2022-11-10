import Head from 'next/head'
import React from 'react'

import AppFooter from './AppFooter'
import AppHeader from './AppHeader'
import AppNav from './AppNav'

const App = ({ children }) => (
  <React.Fragment>
    <Head>
      <title>Queen Flowers</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <AppHeader />
    <AppNav />
    {children}
    <AppFooter />
  </React.Fragment>
)

export default App
