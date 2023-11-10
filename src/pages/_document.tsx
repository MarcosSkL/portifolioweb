import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt">
      <Head>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name='description' content='Desenvolvido por Marcos Bezerra' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel="icon" href="/SKL.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
