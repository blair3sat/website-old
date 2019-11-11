import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { Button } from "../components/Button";
import Nav from "../components/nav";
import { SmallSat } from "../components/Smallsat";

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
		top: 6em;
		left: 0;
		right: 0;
	}

	.globe {
		width: 100vw;
		position: absolute;

		left: 0px;
		right: 0px;
		bottom: 0px;

		transform: translateY(25%);

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

	.actions {
		margin: auto -1em;
	}
`;
const AboutUsContainer = styled.section`
	min-height: 100vh;
	padding: 5em 10%;

	.title {
		font-size: 3em;
		text-align: center;
	}

	.desc {
		width: 70%;
		margin: auto;
		color: rgba(0, 0, 0, 0, 75);
		font-size: 1.25em;
		line-height: 1.8;
		text-align: center;
	}
`;

export const Centered = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Home = () => {
	return (
		<>
			<Nav />
			<LandingContainer>
				<img className="globe" src="/earth-horizon.jpg"></img>
				<div className="content">
					<h1 className="title">
						We are <br />
						Blair4sat
					</h1>
					<p className="desc">
						An entirely student-run cubesat team at Montgomery Blair
						High School paving the way for other high school STEM
						teams.
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
			<AboutUsContainer>
				<h2 className="title">Who are we?</h2>
				<p className="desc">
					Blair3sat an entirely student-run cubesat team at Montgomery
					Blair High School. Our satellite will measure charge density
					and high energy particle emissions in the ionosphere,
					contributing to radio propagation models and space weather
					research.
				</p>
				<Centered>
					<Link href="/support">
						<Button
							className="scale"
							color="white"
							background="#090">
							Help us get to space
						</Button>
					</Link>
				</Centered>

				<br />
				<br />
				<br />
				<br />

				<h2 className="title">Our Mission</h2>
				<p className="desc">
					Our nanosatellite will measure the electron density of the
					ionosphere to map how radio frequency (RF) waves are
					affected. The importance of the ionosphere comes from its
					wide utilization in long-distance communications,
					specifically in over the horizon (OTH) radars. Gathering
					detailed information about the ionosphere helps account for
					its effects on RF signals, making communication cheaper and
					more reliable. Mapping the charge density of the ionosphere
					has been a longstanding scientific objective, and our team’s
					unique approach is designed to pave the way for future
					research.
				</p>

				<Centered>
					<Link href="/mission">
						<Button
							className="scale"
							color="white"
							background="#090">
							Learn more
						</Button>
					</Link>
				</Centered>
			</AboutUsContainer>
			<hr />
			<SmallSat />
		</>
	);
};

export default Home;
