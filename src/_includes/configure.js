const path = require('node:path');
const fs = require('fs');
const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, alt, sizes="(min-width: 1024px) 100vw, 50vw") {
  if (alt === undefined) {
    throw new Error(`Missing \`alt\` on myImage from: ${src}`);
  }

  let srcPath = path.join(__dirname, '../assets/images', src);
  if (fs.existsSync(srcPath))
  {
    src = srcPath;
  }

  const metadata = await Image(src, {
    widths: [600],
    formats: ["webp"],
    urlPath: "/assets/img/",
    outputDir: "dist/assets/img",
  });

  return Image.generateHTML(metadata, {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  });
}

module.exports = function configure(config) {
  config.addGlobalData("siteName", "echelon [dot] fail");
  config.addGlobalData("currentYear", new Date().getFullYear());
  config.addAsyncShortcode("image", imageShortcode);
};
