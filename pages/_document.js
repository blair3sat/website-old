import Document, { Head, Main, NextScript } from "next/document";
// Import styled components ServerStyleSheet
import styled, { createGlobalStyle, ServerStyleSheet } from "styled-components";
import Link from "next/link";
import Nav from "../components/nav";

import { SupportButton } from "../components/Button";

const Global = createGlobalStyle`
	body {
			margin: 0px;
			font-family: Arial,sans-serif;
			font-weight: light;
			h1, h2, h3, h4, h5, h6 {
				font-family: "Montserrat";
			}
			overflow-x: hidden;
		}
`;

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
					{/* <title>Blair3sat</title> */}
					<link rel="icon" href="/favicon.ico" />
					<link
						href="https://fonts.googleapis.com/css?family=Open+Sans|Montserrat:600"
						rel="stylesheet"
					/>
					{this.props.styleTags}
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1"
					/>
				</Head>
				<body>
					<Global />
					<Link href="/support">
						<SupportButton
							className="scale"
							background="#090"
							color="#fff">
							Support us
						</SupportButton>
					</Link>
					{/* <Nav></Nav> */}
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
