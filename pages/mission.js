import React from "react";
import styled from "styled-components";
import { Converter } from "showdown";
import MissionContent, * as asdf from "../static/mission.mdx";
import Nav from "../components/nav";

console.log(asdf);

const MissionContainer = styled.section`
  display: grid;
  grid-template-areas:
    "top top"
    "sidebar content";
  grid-template-rows: 30vh min-content;
  grid-template-columns: 25% auto;

  .content {
    grid-area: content;

    width: 80%;
    font-size: 1.5vw;
    line-height: 1.4;
    padding: 1em;
  }

  .header {
    grid-area: top;
    background: url("/static/earth-horizon.jpg");
    background-size: cover;
    background-position-y: center;

    color: #fff;
    position: relative;
    .title {
      position: absolute;
      bottom: 0;
      left: 0;
      margin: 3rem;
      font-size: 10vw;

      @media screen and (min-width: 1200px) {
        & {
          font-size: 4rem;
        }
      }
    }
  }

  .sidebar {
    grid-area: sidebar;

    .toc {
      position: sticky;
      top: 3em;
    }
  }
`;
const Mission = () => {
  return (
    <>
      <Nav />

      <MissionContainer>
        <div className="header">
          <h1 className="title">Our Mission</h1>
        </div>
        <div className="sidebar">
          <div className="toc" />
        </div>
        <div className="content">
          <MissionContent />
        </div>
      </MissionContainer>
    </>
  );
};
export default Mission;
