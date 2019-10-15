import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import msbr from "../images/msbr_orig.png"
import magnet from "../images/magnet.png"
import overleaf from "../images/overleaf.png"

const Sponsors = props => (
  <Layout location={props.location}>
    <SEO title="Sponsors" />
    <div className="container has-background-white">
      <div className="title">
        <p className="title is-2">Sponsors</p>
      </div>
      <br />
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <article className="tile is-child notification is-warning">
            <div className="content">
              <p className="title">Maryland Space Business Roundtable</p>
              <p className="subtitle">Silver</p>
              <figure className="image">
                <img alt="" src={msbr} />
              </figure>
              <div className="content">
                Thanks to MSBR we were able to purchase new electronics for
                development.
              </div>
            </div>
          </article>
        </div>
        <div className="tile is-vertical is-8">
          <div className="tile">
            <div className="tile is-parent">
              <article className="tile is-child notification is-danger">
                <p className="title">MBHS Magnet Foundation</p>
                <p className="subtitle">Bronze</p>
                <p className="has-text-centered">
                  <img alt="" width="150px" src={magnet} />
                </p>
                <div className="content">
                  Thanks to the MBHS Magnet Foundation we could attend the 2019
                  SmallSat conference.
                </div>
              </article>
            </div>
            <div className="tile is-parent is-vertical">
              <article className="tile is-child notification is-success">
                <p className="title">Overleaf</p>
                <p className="subtitle">Support</p>
                <p className="has-text-centered">
                  <img alt="" width="150px" src={overleaf} />
                </p>
                <div className="content">
                  Thanks to Overleaf, we have the ability to write our LaTeX
                  documents in the cloud and with others from anywhere.
                </div>
              </article>
            </div>
          </div>
          <div className="tile is-parent is-hidden">
            <article className="tile is-child notification">
              <p className="title">Wide tile</p>
              <p className="subtitle">Aligned with the right tile</p>
              <div className="content"></div>
            </article>
          </div>
        </div>
      </div>
      <hr />
      <h2 className="title is-1">Tiers of Support</h2>
      <h2 className="title is-2">Title Plus - $150,000+</h2>
      <ul>
        <li>Right to Name our Satellite Team</li>
        <li>Right to Name our CubeSat</li>
        <li>Large Logo on Website</li>
        <li>Large Logo on Merchandise</li>
        <li>Monthly Updates</li>
        <li>Optional Position on Board to Influence Decisions</li>
        <li>Optional Presentation</li>
        <li>Optional Team Visit</li>
      </ul>
      <h2 className="title is-2">Title - $75,000-150,000</h2>
      <ul>
        <li>Right to name our CubeSat</li>
        <li>Large Logo on Website</li>
        <li>Large Logo on Merchandise</li>
        <li>Monthly Updates</li>
        <li>Optional Position on Board to Influence Decisions</li>
        <li>Optional Presentation</li>
        <li>Optional Team Visit</li>
      </ul>
      <h2 className="title is-2">Titanium - $10000-$75000</h2>
      <ul>
          <li>Large Logo on Website</li>
          <li>Large Logo on Merchandise</li>
          <li>Monthly Updates</li>
          <li>Optional Position on Board to Influence Decisions</li>
          <li>Optional Presentation</li>
          <li>Optional Team Visit</li>
        </ul>
      <h2 className="title is-2">Gold - $10000-$25000</h2>
       <ul>
          <li>Large Logo on Website</li>
          <li>Large Logo on Merchandise</li>
          <li>Monthly Updates</li>
          <li>Optional Presentation</li>
          <li>Optional Team Visit</li>
        </ul>
        <h2 className="title is-2">Silver - $2500-$10000</h2>
      <ul>
        <li>Large Logo on Website</li>
        <li>Large Logo on Merchandise</li>
        <li>Monthly Updates</li>
        <li>Optional Presentation</li>
      </ul>
      <h2 className="title is-2">Bronze - $1000-$2500</h2>
        <ul>
          <li>Medium Logo on Website</li>
          <li>Medium Logo on Merchandise</li>
          <li>Monthly Updates</li>
          <li>Optional Presentation</li>
        </ul>
      <h2 className="title is-2">Steel Support</h2>
      <ul type="disk">
        <li>Small Logo on Website</li>
        <li>Small Logo on Merchandise</li>
      </ul>
    </div>
  </Layout>
)

export default Sponsors
