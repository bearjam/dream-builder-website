import Document, { Head, Html, Main, NextScript } from "next/document"
import { stringifyUrl } from "query-string"

const fontsUrl = stringifyUrl({
  url: "https://fonts.googleapis.com/css",
  query: {
    family: "Inter:300,400,700",
    display: "swap",
  },
})

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" type="image/png" href="/favicon.png" />
          <link href={fontsUrl} rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
