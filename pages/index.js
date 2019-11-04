import React, { useRef, createRef } from "react";
import Head from "next/head";
import Nav from "../components/nav";

import styled, { createGlobalStyle } from "styled-components";
import { Landing } from "../components/Landing2.js";
import {SmallSat} from "../components/Smallsat";
import { AboutUs } from "../components/AboutUs";


const SupportContainer = styled.section`
	height: 100vh;

	.title {
		text-align: center;
		font-size: 3em;
	}

	.card-container {
	}
`;

const GlobalStyle = createGlobalStyle`
	body {
		margin: 0px;
			font-family: Arial,sans-serif;
			font-weight: light;
		h1, h2, h3, h4, h5, h6 {
			font-family: "Montserrat";
		}
	}
`;

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	overflow: auto;
`;

const Body = () => {
	return (
		<Container>
			<Nav></Nav>
			<Landing></Landing>
			<AboutUs></AboutUs>
			<hr/>
			<SmallSat></SmallSat>
		</Container>
	);
};
const Home = () => {
	return (
		<>
			<GlobalStyle></GlobalStyle>

			<Head>
				<title>Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Body></Body>
		</>
	);
};

export default Home;
