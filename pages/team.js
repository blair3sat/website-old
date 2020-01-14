import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import Nav from "../components/nav.js";
import { Button } from "../components/Button";

const members = Array(10).fill().map(() => ({
    img: "https://image.cnbcfm.com/api/v1/image/106069136-1565284193572gettyimages-1142580869.jpeg?v=1576531407&w=1400&h=950",
    name: "John Smith",
    team: "Programming",
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
}));

const TeamContainer = styled.div`
    .modal-bg {
        opacity: 0;
        pointer-events: none;

        position: fixed;
        left: 0px;
        right: 0px;
        top: 0px;
        bottom: 0px;

        transition: opacity 0.25s ease-in-out;

        .visible {
            opacity: 1;
            pointer-events: auto;
        }
    }
    
    .team-grid {
        display: flex;
    }
`;

const MemberContainer = styled.div`
    width: 10em;
    height: 10em;

    position: relative;

    overflow: hidden;

    .member-img {
        position: absolute;
        left: 0px;
        top: 0px;
        right: 0px;
        bottom: 0px;

        background-position: center;
        background-size: cover;
    }

    &.selected {
        position: fixed;
        left: 50%;
        top: 50%;
        overflow: auto;
        transform: translate(-50%, -50%);
    }
`;


const linear = a => a;
const animate = ({ update = () => { }, duration = 1000, timing = linear, done = () => { } }) => {
    const start = +new Date;
    let cancelled = false;
    requestAnimationFrame(function next() {
        const dt = new Date - start;
        if (cancelled || dt > time) return done();
        update(timing(dt / time));
        requestAnimationFrame(next)
    });
    return () => cancelled = true;
}

const diff = (a, b, t) => (b - a) * t;

const getData = c => c.getBoundingClientRect();
const diffData = (a, b, t) => 
    Object.fromEntries(
        a.entries.map(
            ([k, v]) => [k, diff(v, b[k], t)]));
const setData = (v, d) => {
    v.style.transform = `translate(${d.left}px, ${d.top}px);`;
}
const resetData = d => {
    d.style.transform = "";
}

const TeamMember = ({ onClick, isSelected, img, name, team, bio }) => {
    const ref = useRef();
    const [sel, setSel] = useState(isSelected);
    useEffect(() => {
        if (ref.current) {
            const {current} = ref;

            const d1 = getData(current);
            
            current.classList.toggle("selected", isSelected);
            
            const d2 = getData(current);

            current.classList.toggle("selected", !isSelected);

            const initialTransform = current.style.transform;

            animate({
                update: t => {
                    setData(diffData(d1, d2, t));
                },
                duration: 1000,
                done: () => {
                    resetData(current.current);
                    current.classList.toggle("selected", isSelected);
                }
            });
        }
    }, [isSelected, ref.current]);

    return <MemberContainer ref={ref}>
        <div onClick={onClick} className="member-img" style={{
            backgroundImage: `url(${img})`,
        }} />
        <h1 className="member-name">{name}</h1>
        <div className="member-role">
            <span className="team">Teams:</span>
            <span className="teams">{team}</span>
        </div>
        <p className="member-desc">{bio}</p>
    </MemberContainer>
};

export default () => {
    const [cur, setCur] = useState(null);
    return <TeamContainer>
        <h1 className="title">Our Team</h1>
        <hr />
        <div className="team-grid">
            {members.map((m, i) => <TeamMember onClick={() => {
                setCur(i)
            }} isSelected={cur === i} {...m} />)}
        </div>
        <div onClick={() => setCur(null)} className={`modal-bg ${cur === null ? "" : "visible"}`}></div>
    </TeamContainer>
}