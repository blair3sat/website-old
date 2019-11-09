import React from "react";
import Head from "next/head";
import Nav from "../components/nav";

import styled from "styled-components";
import { Landing } from "../components/Landing2.js";
import { SmallSat } from "../components/Smallsat";
import { AboutUs } from "../components/AboutUs";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: auto;
`;

const Body = () => {
  return (
    <Container>
      <Nav />
      <Landing />
      <AboutUs />
      <hr />
      <SmallSat />
    </Container>
  );
};
const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Body />
    </>
  );
};

export default Home;
