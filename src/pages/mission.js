import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Mission = props => (
  <Layout location={props.location}>
    <SEO title="Mission" />
    <div className="container has-background-white">
      <div className="title">
        <p className="title is-2">Our Mission</p>
      </div>
      <p>
        We plan to measure space weather phenomena that affect how radio waves
        propagate through the ionosphere with an instrument suite with two
        payloads, an ionosonde receiver and a photometer. These measurements
        will have the potential to advance satcom, OTH radar, and geomagnetics
        research. Our methods and the background science behind them are
        summarized here, and detailed proposals will be linked here as they
        become available. For more information about the RF payload, contact
        instrument lead <a href="mailto:ryan.tse@blair3sat.com">Ryan Tse</a>,
        and for more information about the optical payload, contact instrument
        lead <a href="mailto:laura.cui@blair3sat.com">Laura Cui</a>.
      </p>
      <br />
      <p className="title is-5" id="rf-payload-ionosonde-receiver">
        RF Payload (Ionosonde Receiver)
      </p>
      <p>
        The ionosphere is a region of the atmosphere that contains charged
        plasma. The charged material in this region can influence wireless
        communications since charged plasma refracts radio waves. This has a
        signficant effect on long distance radio communications and HF radar
        systems. Mapping the charge density of the ionosphere has been a
        longstanding scientific objective, as a live map of ionospheric
        conditions would allow radar systems to more precisely correct for
        ionospheric effects and would allow communications systems to exploit
        ionospheric refraction to perform longer range communication with less
        power. <em>blair3sat</em>’s RF payload will measure ionospheric charge
        density by observing the refraction of test signals transmitted from
        ground-based radar sounders called ionosondes.
      </p>
      <br />
      <h4 className="title is-5" id="ionosondes">
        Ionosondes
      </h4>
      <p>
        Scientists currently measure charge density in the ionosphere by
        transmitting HF radio waves of different frequencies into the atmosphere
        and receiving the reflected and refracted waves. Since the refraction is
        a function of the frequency of the signal and the charge density, one
        may estimate the charge density at different places by considering the
        time delay between when each frequency was transmitted and when each
        frequency was received. These instruments are called ionosondes, and
        graphs of transmitted frequency versus time delay are called ionograms.
      </p>
      <br />
      <p>
        Unfortunately, ionosondes’ output data do not provide enough information
        to completely reconstruct the entire charge density gradient. Ionosonde
        can measure signals’ time of flight, but they cannot discern what paths
        the signals take. Existing ionosounding methods estimate charge density
        as a function of altitude by making simplifying assumptions about the
        path taken by the signal.
      </p>
      <br />
      <h4 className="title is-5" id="our-instrument">
        Our Instrument
      </h4>
      <p>
        <em>blair3sat</em> will reduce ambiguity and improve mapping precision
        by receiving ionosonde signals in space before they reflect and refract
        back down to the surface. Signals that are totally refracted above
        <em>blair3sat</em> will be received by the RF payload twice: first from
        the direct path between the instrument and the ionsonde, and second from
        signals refracted back down from above the instrument. The time delay
        between the two times that the signal is received will be processed to
        map of the ionosphere above the instrument. Signals that are only
        received once by <em>blair3sat</em> and signals that are recieved by
        <em>blair3sat</em> but not the ground ionosonde do not allow us to
        generate complete maps of the ionosphere along their paths, but they do
        provide rough information about the path taken by the signal.
        <em>blair3sat</em>’s data will be combined with data from cooperating
        ionosonde stations, processed, and published.
      </p>
      <br />
      <h3 className="title is-5" id="optical-payload">
        Optical Payload
      </h3>
      <p>
        Excited atoms in the ionosphere emit diffuse electromagnetic radiation
        corresponding to a characteristic spectrum. These emissions are produced
        by a variety of photochemical processes, and are specific to the ion
        species and conditions of the ionosphere. Optical measurements can be
        used to determine the concentration of different species as well as the
        electron density in a given region. With this data, we can also
        reconstruct three-dimensional structures, improving predictive models of
        dynamic processes in the ionosphere. <em>blair3sat</em> will use a
        limb-viewing photometer to measure variations in airglow intensity over
        the course of its mission.
      </p>
      <br />
      <h4 className="title is-5" id="airglow-imaging">
        Airglow Imaging
      </h4>
      <p>
        Incoming solar radiation interacts with oxygen and nitrogen atoms in the
        neutral thermosphere to produce free ions and electrons, which can then
        participate in a variety of light-producing processes. In particular,
        during recombination, metastable or long-lasting electron configurations
        produce diffuse photons with distinct wavelengths. The intensity of the
        light is proportional to both ion and electron density as well as the
        emission rate of the transition, which depends on conditions such as
        temperature and neutral species density. Typically, this is taken as a
        line integral of the emission rate multiplied by the square of the
        electron density along the line of sight, allowing us to extract
        vertical electron density profiles from the data.
      </p>
      <br />
      <p>
        The use of the extreme ultraviolet airglow spectrum to measure
        ionospheric activity is well-established. While these emissions can be
        observed minimal background pollution, they are typically an order of
        magnitude less sensitive than visible spectrum measurements. Recently,
        the OI 557.8 nm line has received attention as another candidate for
        studying ionospheric activity, with the advantages of increased
        sensitivity and density dependency, which allow additional altitude
        information to be extracted from the measurements.
      </p>
      <br />
      <h4 className="title is-5" id="our-instrument-1">
        Our Instrument
      </h4>
      <p>
        <em>blair3sat</em> will use a limb-viewing photometer design combined
        with a set of passband filters and visible range CCD sensor optimized
        for observing the 557.8 nm emission. The instrument will be placed at
        the back of the satellite, and oriented to look slightly downwards
        towards the horizon. The inclination of the satellite orbit, combined
        with its altitude near the peak of the daytime F layer, offer the
        opportunity to observe daily variations over a wide geographical area.
        Furthermore, by combining and correlating data collected by the optical
        and RF payloads, we will be able to better characterize the measurements
        made by each, allowing us to cross-validate our methods and to better
        understand the behavior of the 557.8 nm emission.
      </p>
    </div>
  </Layout>
)

export default Mission
