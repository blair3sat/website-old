module.exports = {
  siteMetadata: {
    title: `blair3sat`,
    description: `blair3sat an entirely student-run cubesat team at Montgomery Blair High School. We plan to submit a proposal for the 2019 CubeSat Launch Initiative (CSLI) cycle, as part of NASA’s Educational Launch of NanoSatellites (ELaNa) program. Our satellite will measure charge density and high energy particle emissions in the ionosphere, contributing to radio propagation models and space weather research.`,
    author: `@blair3sat`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/blair3sat-logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
