import '../styles/globals.css'
import { Oswald } from '@next/font/google'

const appFont = Oswald({})

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
