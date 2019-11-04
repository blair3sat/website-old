import React from "react";
import styled from "styled-components";
import { Converter } from "showdown";
import MissionContent from "../static/mission.mdx";
import Nav from "../components/nav";

// console.log(tableOfContents);

const MissionContainer = styled.section`
  margin-top: 3rem;

  display: grid;
  grid-template-areas:
    "top top"
    "sidebar content";
  grid-template-rows: 20% min-content;
  grid-template-columns: 20% auto;

  .content {
    grid-area: content;
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
        <div className="sidebar" />
        <div className="content">
          <MissionContent />
        </div>
      </MissionContainer>
    </>
  );
};
export default Mission;
