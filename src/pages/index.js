import React from "react"
import { Link } from "gatsby"
import { Document, Page } from "react-pdf"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import "../sass/mystyles.scss"
import poster from "../pdfs/smallsatPoster.pdf"
import missionFlyer from "../pdfs/missionFlyer.pdf"
import opticalInstrumentFlyer from "../pdfs/opticalInstrumentFlyer.pdf"
import rfInstrumentFlyer from "../pdfs/rfInstrumentFlyer.pdf"
import spacecraftFlyer from "../pdfs/spacecraftFlyer.pdf"

// import logo from "../images/blair3sat-logo.png"

const IndexPage = props => (
  <Layout location={props.location}>
    <SEO title="Home" />
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> */}
    <div className="container has-background-white has-text-centered">
      <img
        src="/images/logo.png"
        alt="Example"
        width="300"
        style={{ marginBottom: "3rem" }}
      />
      <div className="description" style={{ marginBottom: "3rem" }}>
        <strong>blair3sat</strong> an entirely student-run team at{" "}
        <a href="https://mbhs.edu/">Montgomery Blair High School</a>. We plan to
        submit a proposal for the 2019 CubeSat Launch Initiative{" "}
        <a href="https://www.nasa.gov/content/about-cubesat-launch-initiative">
          (CSLI)
        </a>{" "}
        cycle, as part of NASA’s Educational Launch of NanoSatellites{" "}
        <a href="https://www.nasa.gov/content/about-elana">(ELaNa)</a> program.
        Our satellite will measure charge density and high energy particle
        emissions in the ionosphere, contributing to radio propagation models
        and space weather research. For more information about our mission,{" "}
        <Link to="/mission">click here</Link>.
      </div>

      <div className="notification">
        Help us get to space by donating to our{" "}
        <a href="https://www.gofundme.com/get-blair3sat-to-space">GoFundMe</a>!
        If you want more information about our mission or you are interested in
        sponsoring us, please contact us at contact@blair3sat.com.
      </div>
      <hr />
      <br />
      <div class="columns is-v-centered">
        <div class="column is-one-third" style={{ height: "20rem" }}>
          <p className="title is-2">Smallsat 2019</p>
          <div style={{ textAlign: "left" }}>
            blair3sat was lucky enough to present our instrument suite at the
            SmallSat2019 conference. For more information, check it out
            <a href="/pdfs/smallsatPoster.pdf"> here.</a>
          </div>
        </div>
        <div class="column is-two-thirds">
          <a href="/pdfs/smallsatPoster.pdf">
            <Document file={poster}>
              <Page width={600} pageNumber={1} />
            </Document>
          </a>
        </div>
      </div>
      <hr />
      <p className="title is-3">Also Check Out Our Flyers Here:</p>
      <div class="columns is-v-centered">
        <div class="column is-one-fourth" style={{ height: "20rem" }}>
          <a href="/pdfs/missionFlyer.pdf">
            <Document file={missionFlyer}>
              <Page width={200} pageNumber={1} />
            </Document>
          </a>
        </div>
        <div class="column is-one-fourt" style={{ height: "20rem" }}>
          <a href="/pdfs/spacecraftFlyer.pdf">
            <Document file={spacecraftFlyer}>
              <Page width={200} pageNumber={1} />
            </Document>
          </a>
        </div>
        <div class="column is-one-fourth" style={{ height: "20rem" }}>
          <a href="/pdfs/rfInstrumentFlyer.pdf">
            <Document file={rfInstrumentFlyer}>
              <Page width={200} pageNumber={1} />
            </Document>
          </a>
        </div>
        <div class="column is-one-fourth" style={{ height: "20rem" }}>
          <a href="/pdfs/opticalInstrumentFlyer.pdf">
            <Document file={opticalInstrumentFlyer}>
              <Page width={200} pageNumber={1} />
            </Document>
          </a>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
