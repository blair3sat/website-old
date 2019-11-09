import React, { createRef } from "react";
import styled from "styled-components";
import { Button } from "../pages/index";
import * as THREE from "three";
import Link from "next/link";

const LandingContainer = styled.section`
	height: 100vh;
	position: relative;
	overflow: hidden;

	background-color: #222;
	background: #000000; /* fallback for old browsers */
	background: linear-gradient(
		45deg,
		#000000,
		#333333
	); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

	/* background: linear-gradient(45deg, #111 0%, #333 100%); */
	color: #eee;

	.content {
		/* text-align: center; */
		width: 50%;
		margin: auto;

		position: absolute;
		top: 4em;
		left: 0;
		right: 0;
		bottom: 60%;
	}

	.globe {
		position: absolute;

		top: 45%;
		left: 0px;
		right: 0px;

		bottom: 0px;

		pointer-events: none;
	}

	.title {
		font-family: "Montserrat", sans-serif;
		font-size: 4em;
		margin: 0px;
	}

	.desc {
		font-family: Arial, sans-serif;
		text-align: justify;
	}
`;

const StyledLandingLinkContainer = styled.span`
	position: absolute;
	width: 180px;

	left: ${p => p.left};
	bottom: ${p => p.bottom};
	top: ${p => p.top};
	right: ${p => p.right};
`;
const StyledLandingLink = styled.span`
	color: #fff;
	cursor: pointer;
	position: absolute;
	font-size: 1.2em;

	/* width: 180px; */
	text-indent: 2.25em;
	z-index: 1;

	:before {
		position: absolute;
		left: 0px;
		top: 50%;
		transform: translateY(-50%);
		text-indent: 8px;

		content: "🡒";
		font-size: inherit;
		z-index: 1;
	}

	:after {
		position: absolute;
		content: "";

		left: 0px;
		top: -5px;
		bottom: -5px;
		right: calc(100% - 34px);

		min-width: calc(1em + 5px);
		padding: 1px;
		box-sizing: border-box;

		transition: right 0.15s ease-out;
		border-radius: 1000em;
		background-color: #2ecc40;
		z-index: -1;
	}

	:hover {
		:after {
			right: -10px;
		}
	}
`;

const LandingLink = ({
	className,
	children,
	left,
	bottom,
	right,
	...props
}) => {
	return (
		<StyledLandingLinkContainer
			left={left}
			bottom={bottom}
			right={right}
			{...props}>
			<Link {...props}>
				<StyledLandingLink>{children}</StyledLandingLink>
			</Link>
		</StyledLandingLinkContainer>
	);
};
export const Landing = () => {
	return (
		<LandingContainer>
			<div className="content" ref={this.contentRef}>
				<h1 className="title">
					We are <br />
					Blair3sat
				</h1>
				<p className="desc">
					blair3sat an entirely student-run team at Montgomery Blair
					High School. We plan to submit a proposal for the 2019
					CubeSat Launch Initiative (CSLI) cycle, as part of NASA’s
					Educational Launch of NanoSatellites (ELaNa) program.
				</p>
				<div className="actions">
					<Button primary>Learn more</Button>
					<Button primary>Contact</Button>
				</div>
			</div>
			<div className="globe" ref={this.ref}></div>
			<LandingLink href="/" left="10%" bottom="10%">
				About us
			</LandingLink>
			<LandingLink href="/" left="20%" bottom="40%">
				Our Mission
			</LandingLink>
			<LandingLink href="/" right="10%" bottom="10%">
				Support us
			</LandingLink>
			<LandingLink href="/" right="20%" bottom="40%">
				Blog
			</LandingLink>
		</LandingContainer>
	);
};
