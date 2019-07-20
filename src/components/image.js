import React from "react"
import { StaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"

// Note: You can change "images" to whatever you'd like.

const Image = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename)
      })
      if (!image) {
        return null
      }

      //const imageSizes = image.node.childImageSharp.sizes; sizes={imageSizes}

      // The Gatsby Img element does this better, but rn, it doesn't pass the props we need
      return (
        <img
          alt={props.alt}
          src={image.node.childImageSharp.fluid.src}
          {...props}
        />
      )
    }}
  />
)

export default Image
