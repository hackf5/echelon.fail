const eleventySass = require("eleventy-sass");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const sitemap = require("@quasibit/eleventy-plugin-sitemap");

const configure = require("./src/_includes/configure");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventySass);
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: "https://echelon.fail",
    },
  });

  eleventyConfig.addPassthroughCopy("src/assets/favicon");
  eleventyConfig.addPassthroughCopy("src/assets/js");

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
