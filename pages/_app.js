import { Oswald } from '@next/font/google'
import '../styles/globals.css'

const appFont = Oswald({ subsets: ['utf-8'], weight: '200' })

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        body {
          font-family: ${appFont.style.fontFamily}!important;
        }
      `}</style>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css" />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
