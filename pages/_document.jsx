import { Html, Head, Main, NextScript } from 'next/document'

export default function Document () {
  return (
    <Html>
      <Head>
        <link rel='manifest' href='/manifest.webmanifest' />
        <link
          href='https://fonts.googleapis.com/css2?family=Asap&display=optional'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Quicksand&display=optional'
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
