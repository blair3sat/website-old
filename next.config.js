const withPlugins = require("next-compose-plugins");

const toc = require("./toc");

// Generates Blog Index
const withBlog = require("next-mdx-blog");
const withMDX = require("@zeit/next-mdx")();

module.exports = withPlugins([withMDX, withBlog], {
    assetPrefix: "/blog",
    remarkPlugins: [toc],
	pageExtensions: ["js", "mdx"],
    distDir: 'build',
});
