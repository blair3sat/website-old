/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
// "use strict"

const { routes } = require("./src/routes")

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  // need createRedirect action in actions collection
  // to make the redirection magic happen.
  // https://www.gatsbyjs.org/docs/bound-action-creators/
  const { createRedirect } = actions

  for (let r of routes) {
    if (r.redirectTo) {
      console.log("creating redirect")
      createRedirect({
        fromPath: r.path,
        // isPermanent: true,
        redirectInBrowser: true,
        toPath: r.redirectTo,
      })
    }
  }
}
