const visit = require("unist-util-visit");
module.exports = () => (tree, file) => {
	visit(tree, "heading", node => {
		console.log("TOC")
		console.log(node);
	});
};
