import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Nav from "../components/nav.js";
import { Button } from "../components/Button";
import { Flipper, Flipped } from "react-flip-toolkit";

const members = Array(10)
	.fill()
	.map(() => ({
		img:
			"https://image.cnbcfm.com/api/v1/image/106069136-1565284193572gettyimages-1142580869.jpeg?v=1576531407&w=1400&h=950",
		name: "John Smith",
		team: "Programming",
		bio:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
	}));

const TeamContainer = styled.div`
    .title {
        text-align: center;
    }
	.modal-bg {
		background-color: #000;
		opacity: 0;
		pointer-events: none;

		position: fixed;
		left: 0px;
		right: 0px;
		top: 0px;
		bottom: 0px;

		transition: opacity 0.25s ease-in-out;
		z-index: 2;

		&.visible {
			opacity: 0.25;
			pointer-events: auto;
		}
	}

	.team-grid {
		display: flex;
		flex-wrap: wrap;
		margin: auto;
		/* width: 90%; */
	}

	.placeholder {
		min-width: 20%;
		min-height: 20vw;
		max-width: 20%;
		max-height: 20vw;
	}
`;

const MemberContainer = styled.div`
	width: 100%;
	height: 100%;

	position: relative;

	overflow: hidden;

	transition: z-index 0.5s step-end;
	z-index: 1;

	background-color: #fff;

	&.selected {
		width: unset;
		height: unset;
		max-width: 40%;
		max-height: 90%;

		position: fixed;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		overflow: auto;

		transition: z-index 0.5s step-start;
		z-index: 3;

        padding: 1em;


		.member-img {
			width: 5em;
			height: 5em;

			margin: 1em auto;

			border-radius: 500em;
		}
	}

	.member-img {
		width: 100%;
		height: 100%;
		margin: auto;

		background-position: center;
		background-size: cover;
	}

	.bg {
		position: fixed;
		left: 0px;
		right: 0px;
		top: 0px;
		bottom: 0px;

		background-color: #000;
		opacity: 0.25;
	}

	.member-name {
		text-align: center;
	}

    .member-desc{
    }
`;

const TeamMember = ({ onClick, isSelected, id, img, name, team, bio }) => {
	return (
		<div className="placeholder">
			<Flipped flipId={`card-${id}`}>
				<MemberContainer className={isSelected ? "selected" : ""}>
					<Flipped flipId={`img-${id}`}>
						<div
							onClick={onClick}
							className="member-img"
							style={{
								backgroundImage: `url(${img})`
							}}
						/>
					</Flipped>

					<h1 className="member-name">{name}</h1>
					<div className="member-role">
						<span className="team">Teams:</span>
						<span className="teams">{team}</span>
					</div>
					<p className="member-desc">{bio}</p>
				</MemberContainer>
			</Flipped>
		</div>
	);
};

export default () => {
	const [cur, setCur] = useState(null);
	return (
		<TeamContainer>
            <Nav></Nav>
			<h1 className="title">Our Team</h1>
			<hr />
			<Flipper flipKey={cur}>
				<div className="team-grid">
					{members.map((m, i) => (
						<TeamMember
							id={i}
							onClick={() => setCur(i)}
							isSelected={cur === i}
							{...m}
						/>
					))}
				</div>
			</Flipper>
			<div
				onClick={() => setCur(null)}
				className={`modal-bg ${cur === null ? "" : "visible"}`}
			/>
		</TeamContainer>
	);
};
