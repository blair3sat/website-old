// import Document, { Html, Head, Main, NextScript } from 'next/document'

// class MyDocument extends Document {
//   static async getInitialProps(ctx) {
//     const initialProps = await Document.getInitialProps(ctx)
//     return { ...initialProps }
//   }

//   render() {
//     return (
//       <Html>
//         <Head />
//         <body>
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     )
//   }
// }

// export default MyDocument

import Document, { Html, Head, Main, NextScript } from "next/document";
import styled, { createGlobalStyle, ServerStyleSheet } from "styled-components";
import Link from "next/link";
import Nav from "../components/nav";

import { SupportButton } from "../components/Button";


export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans|Montserrat:600"
            rel="stylesheet"
          />
          {this.props.styleTags}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <body>
          <style>
            {`body {
              margin: 0px;
              font-family: Arial,sans-serif;
              font-weight: light;
              h1, h2, h3, h4, h5, h6 {
                font-family: "Montserrat";
              }
              overflow-x: hidden;
            }`}
          </style>
          <Main />
          {/* <Link href="/support">
            <SupportButton className="scale" background="#090" color="#fff">
              Support us
            </SupportButton>
          </Link> */}
          <NextScript />
        </body>
      </Html>
    );
  }
}
