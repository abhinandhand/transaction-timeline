// Copy the files over so that they can be uploaded by the pages publish command.
import fs from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(import.meta.url), "../../");
const client = resolve(root, "dist/browser");
// const ssr = resolve(root, "dist/server");
const cloudflare = resolve(root, "dist/cloudflare");
const worker = resolve(cloudflare, "_worker.js");

// Ensure the cloudflare directory exists
if (!fs.existsSync(cloudflare)) {
  fs.mkdirSync(cloudflare, { recursive: true });
}

// Copy the client files to the cloudflare directory
if (fs.existsSync(client)) {
  fs.cpSync(client, cloudflare, { recursive: true });
} else {
  console.error(`Error: Source directory "${client}" does not exist.`);
  process.exit(1);
}

// Uncomment and ensure the server directory exists if needed
// if (fs.existsSync(ssr)) {
//   fs.cpSync(ssr, worker, { recursive: true });
//   fs.renameSync(join(worker, "server.mjs"), join(worker, "index.js"));
// } else {
//   console.warn(`Warning: Source directory "${ssr}" does not exist.`);
// }

console.log("Files copied successfully.");
