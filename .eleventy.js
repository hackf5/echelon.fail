const eleventySass = require("eleventy-sass");
const configure = require("./src/_includes/configure");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventySass);
  eleventyConfig.addPassthroughCopy("src/assets/favicon");

  configure(eleventyConfig);

  return {
    markdownTemplateEngine: "njk",
    dir: {
      layouts: "_layouts",
      input: "src",
      output: "dist",
    },
  };
};
