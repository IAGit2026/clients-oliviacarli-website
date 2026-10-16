import fs from "node:fs";
import path from "node:path";

const rootDirectory = process.cwd();
const publicDirectory = path.join(rootDirectory, "public");

const sourceAssetsDirectory = path.join(rootDirectory, "assets");
const publicAssetsDirectory = path.join(publicDirectory, "assets");
const sourceCustomDomainFile = path.join(rootDirectory, "CNAME");
const publicCustomDomainFile = path.join(publicDirectory, "CNAME");

if (!fs.existsSync(sourceAssetsDirectory)) {
  throw new Error("The original assets/ folder is missing from the project root.");
}

fs.mkdirSync(publicDirectory, { recursive: true });
fs.rmSync(publicAssetsDirectory, { recursive: true, force: true });
fs.cpSync(sourceAssetsDirectory, publicAssetsDirectory, { recursive: true });

if (fs.existsSync(sourceCustomDomainFile)) {
  fs.copyFileSync(sourceCustomDomainFile, publicCustomDomainFile);
}

console.log("Copied assets/ and CNAME into public/ so they are included in the static export.");
