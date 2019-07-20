import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Image from "../components/image"

const Sponsors = props => (
  <Layout location={props.location}>
    <SEO title="About" />
    <div class="container has-background-white">
      <div class="title">
        <p class="title is-2">About</p>
      </div>

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
    </div>
  </Layout>
)

export default Sponsors
