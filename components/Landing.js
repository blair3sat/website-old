import React, { createRef } from "react";
import styled from "styled-components";
import { Button } from "../pages/index";
import * as THREE from "three";
import Link from "next/link";

const NoisySphereGeometry = (
	noise = 0.1,
	radius,
	segments,
	thetaStart,
	thetaLength
) => {
	const res = new THREE.SphereGeometry(
		radius,
		segments,
		thetaStart,
		thetaLength
	);

	/*
	for (let i in res.vertices) {
		res.vertices[i] = res.vertices[i].multiplyScalar(
			1 + (Math.random() - 0.5) * noise
		);
	}
	for (let i in res.faces) {
		res.faces[i].color.setRGB(
			...(Math.random() > 0.5 ? [0, 255, 0] : [0, 0, 255])
		);
	}
	// /*/
    res.vertices.forEach(v => {
        v.x += THREE.Math.randFloatSpread(noise);
        v.y += THREE.Math.randFloatSpread(noise);
        v.z += THREE.Math.randFloatSpread(noise);
        v.divideScalar(v.length()/radius);
    });
    res.faces.forEach(face => {
        face.color.setHex(Math.random() > 0.6 ? 0x005000 : 0x00005b)
    })
    // */
	res.computeFaceNormals();

	return res;
};

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

const LandingLink = ({ className, children, left, bottom, right, ...props }) => {
	return (
		<StyledLandingLinkContainer left={left} bottom={bottom} right={right} {...props}>
			<Link {...props}>
				<StyledLandingLink>{children}</StyledLandingLink>
			</Link>
		</StyledLandingLinkContainer>
	);
};

const textureURL = "/static/earth.png";
export class Landing extends React.Component {
	constructor(props) {
		super(props);
		this.ref = createRef();
		this.contentRef = createRef();
	}

	componentDidMount() {
		const { topRef } = this.props;
		console.log(topRef);
		if (topRef.current)
			topRef.addEventListener("scroll", ({ target }) => {
				if (this.contentRef.current)
					this.contentRef.current.style.transform = `translateY(${target.scrollTop /
						2}px)`;
			});

		const { width, height } = this.ref.current.getBoundingClientRect();

		this.renderer = new THREE.WebGLRenderer({ alpha: true });
		this.scene = new THREE.Scene();
		this.camera = new THREE.PerspectiveCamera(
			50,
			width / height,
			0.1,
			1000
		);

		this.scene.add(new THREE.AmbientLight(0x606060));
		this.camera.lookAt(new THREE.Vector3(0, 0, 1));

		if (this.ref.current)
			this.ref.current.appendChild(this.renderer.domElement);

		const texture = textureURL
			? THREE.ImageUtils.loadTexture(textureURL, {}, () => {
					this.renderer.render(this.scene, this.camera);
			  })
			: undefined;

		// this.earth = new THREE.Mesh(
		// 	new THREE.SphereGeometry(1, 31, 31),
		// 	new THREE.MeshBasicMaterial({
		// 		color: 0x333333,
		// 		map: texture
		// 	})
		// );
		this.globe = new THREE.Mesh(
			NoisySphereGeometry(0.1, 1, 31, 31),
			new THREE.MeshBasicMaterial({
				// /*
				// color: 0x333333,

				/*/
				color: 0xffffff,
				wireframe: true,
                // */

                map: texture,

                // vertexColors: THREE.FaceColors,

				polygonOffset: true,
				polygonOffsetFactor: 1, // positive value pushes polygon further away
				polygonOffsetUnits: 1
			})
		);

		this.globe.add(
			new THREE.LineSegments(
				new THREE.EdgesGeometry(this.globe.geometry),
				new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 2 })
			)
		);
		// this.earth.position.set(0, -0.8, 1.25);
		this.globe.position.set(0, -0.8, 1.25);
		// this.scene.add(this.earth);
		this.scene.add(this.globe);

		this.updateRenderer();
		this.updateGlobe();

		window.addEventListener("resize", () => this.updateRenderer(), {
			passive: true
		});
	}
	updateGlobe() {
		requestAnimationFrame(() => this.updateGlobe());
		this.globe.rotation.y += 0.001;
		// this.earth.rotation.y += 0.001;
		this.renderGlobe();
	}
	updateRenderer() {
		const canvas = this.renderer.domElement;
		canvas.width = canvas.height = "";
		if (!this.renderer) return;
		if (this.ref.current) {
			const { width, height } = this.ref.current.getBoundingClientRect();
			this.renderer.setSize(width, height);
		}
		this.renderGlobe();
	}
	renderGlobe() {
		if (!this.renderer) return;
		this.renderer.render(this.scene, this.camera);
	}
	render() {
		this.renderGlobe();
		return (
			<LandingContainer>
				<div className="content" ref={this.contentRef}>
					<h1 className="title">
						We are <br />
						Blair3sat
					</h1>
					<p className="desc">
						blair3sat an entirely student-run team at Montgomery
						Blair High School. We plan to submit a proposal for the
						2019 CubeSat Launch Initiative (CSLI) cycle, as part of
						NASA’s Educational Launch of NanoSatellites (ELaNa)
						program.
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
	}
}
