import Document, { Head, Main, NextScript } from "next/document";
// Import styled components ServerStyleSheet
import styled, { createGlobalStyle, ServerStyleSheet } from "styled-components";
import Link from "next/link";

import { SupportButton } from "../components/Button";

const Global = createGlobalStyle`

body {
		margin: 0px;
			font-family: Arial,sans-serif;
			font-weight: light;
		h1, h2, h3, h4, h5, h6 {
			font-family: "Montserrat";
		}
	}
`

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
			<html>
				<Head>
					<title>My page</title>
					<link href="https://fonts.googleapis.com/css?family=Roboto|Montserrat:600|Raleway&display=swap" rel="stylesheet"></link>
					{this.props.styleTags}
				</Head>
				<body>
					<Global></Global>
					<Link href="/support">
						<SupportButton className="scale" background="#090" color="#fff">
							Support us
						</SupportButton>
					</Link>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
