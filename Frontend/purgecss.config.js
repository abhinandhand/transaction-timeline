const glob = require("glob");
const path = require("path");

module.exports = {
  content: glob
    .sync(path.join(__dirname, "dist/frontend/**/*.html"), { nodir: true })
    .concat(
      glob.sync(path.join(__dirname, "dist/frontend/**/*.js"), { nodir: true })
    ),
  css: [path.join(__dirname, "dist/frontend/styles*.css")],
  output: path.join(__dirname, "dist/frontend"),
  safelist: [
    // Card component classes
    "badge-circle",
    "d-flex",
    "justify-content-between",
    "align-items-center",
    "text-success",
    "fs-5",
    "text-muted",
    "mb-2",
    "me-2",
    "card",
    "card-body",
    "display-1", // From app-transaction-amount
    // Angular and Bootstrap patterns
    /^ng-/,
    /^col-/,
    /^row/,
    /^container/,
    /^text-/,
    /^fs-/,
    /^mb-/,
    /^me-/,
  ],
  defaultExtractor: (content) => {
    // Extract classes from HTML, JS, and templates
    return content.match(/[\w-/:]+(?<!:)/g) || [];
  },
};
