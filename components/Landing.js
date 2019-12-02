import React, { createRef } from "react";
import styled, { keyframes } from "styled-components";
import { Button } from "../pages/index";
import * as THREE from "three";
import Link from "next/link";

// const LandingContainer = styled.section`
// 	height: 100vh;
// 	position: relative;
// 	overflow: hidden;

// 	background-color: #222;
// 	background: #000000; /* fallback for old browsers */
// 	background: linear-gradient(
// 		45deg,
// 		#000000,
// 		#333333
// 	); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

// 	/* background: linear-gradient(45deg, #111 0%, #333 100%); */
// 	color: #eee;

// 	.content {
// 		/* text-align: center; */
// 		width: 50%;
// 		margin: auto;

// 		position: absolute;
// 		top: 4em;
// 		left: 0;
// 		right: 0;
// 		bottom: 60%;
// 	}

// 	.globe {
// 		position: absolute;

// 		top: 45%;
// 		left: 0px;
// 		right: 0px;

// 		bottom: 0px;

// 		pointer-events: none;
// 	}

// 	.title {
// 		font-family: "Montserrat", sans-serif;
// 		font-size: 4em;
// 		margin: 0px;
// 	}

// 	.desc {
// 		font-family: Arial, sans-serif;
// 		text-align: justify;
// 	}
// `;

const fadeInUp = keyframes`

	from {
		transform: translate3d(0,40px,0)
	}

	to {
		transform: translate3d(0,0,0);
		opacity: 1
	}
`;

export const LandingContainer = styled.section`
	height: 100vh;
	position: relative;
	overflow: hidden;

	background: #000;
	color: #eee;

	.globe {
		width: 55vw;
		position: absolute;

		left: 50%;
		right: 0px;
		bottom: 45%;

		transform: scaleY(-1) translateX(-50%);

		pointer-events: none;
	}

	.content {
		width: 60%;
		margin: auto;

		text-align: center;

		position: absolute;
		bottom: 12em;
		left: 0;
		right: 0;


	}

	.animated {
		opacity: 0;
		animation: ${fadeInUp};
		animation-duration: 1s;
		animation-fill-mode: both;
	}

	.title {
		text-align: inherit;
		font-family: "Montserrat", sans-serif;
		font-size: 4em;
		margin: 0px;

		animation-delay: 0s;
	}

	.desc {
		font-family: Arial, sans-serif;
		text-align: justify;
		animation-delay: 0.15s;
	}

	.actions {
		margin: auto -1em;
		animation-delay: 0.3s;
	}
`;