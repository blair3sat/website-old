import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Nav from "../components/nav.js";

const sponsors = [
	{
		name: "Maryland Space Business Roundtable",
		tier: "Silver",
		image: "/msbr_orig-324c71370056ff1e6a0a34f3659dcafd.png",
		desc:
			"Thanks to MSBR we were able to purchase new electronics for development.",
		site: "http://www.mdspace.org/"
	},
	{
		name: "MBHS Magnet Foundation",
		tier: "Bronze",
		image: "/magnet-7a0f6626331d50517d6be2df2d051931.png",
		desc:
			"Thanks to the MBHS Magnet Foundation we could attend the 2019 SmallSat conference.",
		color: "#701",
		site: "https://mbhs.edu/departments/magnet/"
	},
	{
		name: "Overleaf",
		tier: "Steel",
		image: "/overleaf-9616755adf07d8ee303b89a18d9598ba.png",
		desc:
			"Thanks to MSBR we were able to purchase new electronics for development.",
		site: "https://www.overleaf.com/"
	},
	{
		name: "Nyrad",
		tier: "Steel",
		image: "/nyrad-306a2879821e4a3f36eae64972c2c670.png",
		desc:
			"Thanks to NYRAD, we have bolstered our CSLI application with letters of support and established connections within the aerospace community.",
		site: "https://nyradspace.com/"
	},
	{
		name: "Micro Aerospace Solultions",
		tier: "Support",
		image: "/MicroALogo.png",
		desc: 
			"Thanks to Micro Aerospace we were able to strengthen our CSLI application with letters of support, and have a greater understanding of the aerospace industry as a whole.",
		site: "https://www.micro-a.net/"
	}
];

const tierInfo = [
	[
		"gold",
		{
			color: "#dFb700",
			benefits: [
				"Lorem ipsum dolor",
				"Lorem ipsum dolor",
				"Lorem ipsum dolor",
				"Lorem ipsum dolor",
				"Lorem ipsum dolor",
				"Lorem ipsum dolor",
				"Lorem ipsum dolor"
			],
			price: 300
		}
	],
	[
		"silver",
		{
			color: "#EFC700",
			benefits: [],
			price: 300
		}
	],
	[
		"bronze",
		{
			color: "#EFC700",
			benefits: [],
			price: 300
		}
	],
	[
		"gold",
		{
			color: "#dFb700",
			benefits: [
				"Lorem ipsum dolor",
				"Lorem ipsum dolor",
				"Lorem ipsum dolor",
				"Lorem ipsum dolor",
				"Lorem ipsum dolor",
				"Lorem ipsum dolor",
				"Lorem ipsum dolor"
			],
			price: 300
		}
	],
	[
		"silver",
		{
			color: "#EFC700",
			benefits: [],
			price: 300
		}
	],
	[
		"bronze",
		{
			color: "#EFC700",
			benefits: [],
			price: 300
		}
	],
	[
		"gold",
		{
			color: "#dFb700",
			benefits: [
				"Lorem ipsum dolor",
				"Lorem ipsum dolor",
				"Lorem ipsum dolor",
				"Lorem ipsum dolor",
				"Lorem ipsum dolor",
				"Lorem ipsum dolor",
				"Lorem ipsum dolor"
			],
			price: 300
		}
	],
	[
		"silver",
		{
			color: "#EFC700",
			benefits: [],
			price: 300
		}
	],
];

const SupportContainer = styled.section`
	height: 100vh;
	margin-top: 4em;
	/* padding: 1em; */

	.section-title {
		font-size: 3em;
		margin: 1rem 2rem;
		text-align: center;
	}
	.sponsor-list {
		display: flex;
		padding: 0rem 1em;
		overflow: auto hidden;
		width: 100%;
		box-sizing: border-box;

		scroll-snap-type: x mandatory;

		& > *:first-child {
			margin-left: auto;
		}
		& > *:last-child {
			margin-right: auto;
		}

		::-webkit-scrollbar {
			display: none;
		}
	}
	.support-us-container {
		background-color: #f8f8f8;
		padding: 3em;
	}
	.support-us {
		width: 90%;
		margin: auto;

		display: flex;
		flex-wrap: wrap;
		justify-content: center;


		/* grid-template-columns: 1fr 1fr 1fr 1fr; */
	}
`;

const SponsorCard = styled.div`
	flex: 0 0 18em;
	margin: 1em;
	border: 1.15px solid rgba(0, 0, 0, 0.15);
	border-radius: 5px;

	display: flex;
	flex-direction: column;

	color: rgba(0, 0, 0, 0.75);

	transition: box-shadow 0.25s ease-in-out, border 0.25s ease-in-out,
		transform 0.25s ease-in-out;
	cursor: pointer;

	scroll-snap-align: start;

	:hover {
		box-shadow: 0px 2px 8px -2px rgba(0, 0, 0, 0.3);
		border: 1.15px solid rgba(0, 0, 0, 0.1);
		transform: scale(1.01);
	}

	.card-content {
		padding: 1.5em;
		background-color: #fff;
		display: flex;
		flex-direction: column;
		flex-grow: 1;
	}

	.top-row {
	}

	.name {
		font-size: 1.1em;
		color: rgba(0, 0, 0, 0.95);
		font-weight: 600;
	}

	.desc {
		flex-grow: 1;
		padding-top: 1.5em;
	}

	.visit {
		justify-self: flex-end;
		padding: 1.5em;
		/* padding-top: 1em;/ */
	}
`;
const SponsorLogo = styled.div`
	min-height: 10em;
	padding: 1em;
	/* background-color: ${p => p.color}; */
	position: relative;

	.logo {
		left: 1em;
		top: 1em;
		right: 1em;
		bottom: 1em;

		position: absolute;

		background: url(${p => p.src});
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
	}
`;
const Sponsor = ({ sponsor: { name, tier, image, desc, color = "#fff", site } }) => {
	return (
		<SponsorCard>
			<SponsorLogo color={color} src={image}>
				<div className="logo"></div>
			</SponsorLogo>
			<div className="card-content">
				<div className="top-row">
					<div className="name">{name}</div>
					<div className="tier">{tier}</div>
				</div>
				<div className="desc">{desc}</div>
			</div>
			{<div>
				<a href = {site}>Visit Site</a>
			</div>}
		</SponsorCard>
	);
};

const TierCard = styled.div`
	flex: 0 0 12em;

	text-align: center;
	background-color: #fff;
	padding: 2em;
	border: 1px solid rgba(0, 0, 0, 0.1);
	height: 20em;
	transition: box-shadow 0.25s ease-in-out, border 0.25s ease-in-out,
		transform 0.25s ease-in-out;
	cursor: pointer;

	:hover {
		box-shadow: 0px 2px 8px -2px rgba(0, 0, 0, 0.3);
		border: 1.15px solid rgba(0, 0, 0, 0.1);
		transform: scale(1.01);
	}

	.name,
	.price {
		/* padding: 1rem; */
		/* border-bottom: 1px solid #ddd; */
		text-transform: capitalize;
		font-size: 1.2em;
	}

	.price {
		font-size: 3em;
	}

	.benefits {
		text-align: center;
		list-style-type: none;
		padding: 0px;
		li {
			&::before {
				background-image: url("/checkmark.png");
				background-size: contain;
				background-position: center;
				display: inline-block;
				width: 1em;
				height: 1em;
				content: "";
				transform: translateX(-1em);
			}

			/* background: url("checkmark.png") no-repeat left center;
			background-size: contain; */
			margin: 5px;
		}
	}
`;

const Benefit = ({ b }) => <li>{b}</li>;
const Tier = ({ name, tier: { color, benefits, price } }) => {
	return (
		<TierCard>
			<div className="name">{name}</div>
			<div className="price">{price}</div>
			<ul className="benefits">
				{benefits.map(b => (
					<Benefit b={b}></Benefit>
				))}
			</ul>
		</TierCard>
	);
};

export default () => {
	return (
		<>
			{/* <Nav></Nav> */}
			<SupportContainer>
				<h1 className="section-title">Our sponsors</h1>
				<div className="sponsor-list">
					{sponsors.map(s => (
						<Sponsor sponsor={s} />
					))}
				</div>
				<div className="support-us-container">
					<h1 className="section-title">Sponsor us</h1>
					<div id="#support" className="support-us">
						{tierInfo.map(([name, tier]) => (
							<Tier name={name} tier={tier} />
						))}
					</div>
				</div>
			</SupportContainer>
		</>
	);
};
