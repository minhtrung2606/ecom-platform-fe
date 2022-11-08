import { Oswald } from '@next/font/google'
import '../styles/globals.css'

const appFont = Oswald({ subsets: ['utf-8'] })

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        body {
          font-family: ${appFont.style.fontFamily}!important;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
