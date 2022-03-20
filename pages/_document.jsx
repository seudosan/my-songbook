import { Html, Head, Main, NextScript } from 'next/document'

export default function Document () {
  return (
    <Html>
      <Head>
        <link rel='manifest' href='/manifest.webmanifest' />
        <link
          href='https://fonts.googleapis.com/css2?family=Asap:wght@400;500;600&family=Quicksand:wght@400;500;600&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
