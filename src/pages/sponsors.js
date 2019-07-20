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
    </div>
  </Layout>
)

export default Sponsors
