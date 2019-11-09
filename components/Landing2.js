import React, { createRef } from "react";
import styled from "styled-components";
import { Button } from "./Button";
import * as THREE from "three";
import Link from "next/link";

const LandingContainer = styled.section`
	height: 100vh;
	position: relative;
	overflow: hidden;

	background: url("/space.jpg");
	background-position: top left;
	background-size: contain;

	color: #eee;

	.content {
		width: 60%;
		margin: auto;

		position: absolute;
		top: 4em;
		left: 0;
		right: 0;
		bottom: 60%;
	}

	.globe {
		width: 100vw;
		display: block;
		position: absolute;

		left: 0px;
		right: 0px;

		bottom: 0px;

		transform: translateY(25%);

		pointer-events: none;
		/* clip-path: polygon(0 66%, 0% 99%, 100% 100%, 100% 33%, 92% 33%, 87% 33%, 82% 33%, 78% 33%, 72% 34%, 65% 35%, 53% 38%, 29% 48%, 21% 52%, 15% 56%, 6% 63%); */
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

	.actions {
		margin: auto -1em;
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
			<img className="globe" src="/earth-horizon.jpg"></img>
			<div className="content">
				<h1 className="title">
					We are <br />
					Blair3sat
				</h1>
				<p className="desc">
					An entirely student-run cubesat team at Montgomery Blair
					High School paving the way for other high school STEM teams.
				</p>
				<div className="actions">
					<Link href="/support">
						<Button
							className="slide"
							background="rgba(0, 0, 0, 0)"
							color="white">
							Learn more
						</Button>
					</Link>{" "}
					<Link href="/support">
						<Button
							className="slide"
							background="rgba(0, 0, 0, 0)"
							color="white">
							Support
						</Button>
					</Link>
				</div>
			</div>
		</LandingContainer>
	);
};
