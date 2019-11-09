const toc = require("remark-toc");

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/
});
module.exports = withMDX({
  pageExtensions: ["js", "jsx", "md", "mdx"],
  options: {
    remarkExtensions: [toc]
  }
});
// // module.exports = withCSS({
// //   cssModules: true,
// //   webpack: function(config) {
// //       config.module.rules.push({
// //           test: /\.md$/,
// //           use: 'raw-loader'
// //       });
// //       return config;
// //   }
// // });
// const withCSS = require("@zeit/next-css");
// require("dotenv").config();
// const path = require("path");
// const Dotenv = require("dotenv-webpack");

// const withImages = require("next-images");

// module.exports = withCSS(
//   withImages({
//     inlineImageLimit: 16384,
//     webpack(config, options) {
//       config.module.rules.push({
//         test: /\.md$/,
//         use: "raw-loader"
//       });
//       config.plugins = config.plugins || [];
//       config.plugins = [
//         ...config.plugins,

//         // Read the .env file
//         new Dotenv({
//           path: path.join(__dirname, ".env"),
//           systemvars: true
//         })
//       ];
//       return config;
//     }
//   })
// );
