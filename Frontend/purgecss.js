const { PurgeCSS } = require("purgecss");
const config = require("./purgecss.config.js");

async function purge() {
  try {
    const results = await new PurgeCSS().purge(config);
    console.log(
      "PurgeCSS completed:",
      results.map((r) => r.file),
    );
  } catch (error) {
    console.error("PurgeCSS error:", error);
    process.exit(1);
  }
}

purge();
