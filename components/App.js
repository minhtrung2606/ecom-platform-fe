import Head from 'next/head'
import React from 'react'
import AppFooter from './containers/AppFooter'
import AppHeader from './containers/AppHeader'
import AppNav from './containers/AppNav'

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
