const eleventySass = require("eleventy-sass");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventySass);
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    markdownTemplateEngine: "njk",
    dir: {
      layouts: "_layouts",
      input: "src",
      output: "dist",
    },
  };
};
