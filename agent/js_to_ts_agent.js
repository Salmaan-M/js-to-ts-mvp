#!/usr/bin/env node
/**
 * Universal JS → TS Migration AI Agent
 */

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// ---- INPUT ----
const PROJECT_PATH = process.argv[2];

if (!PROJECT_PATH) {
  console.error("❌ Usage: node js_to_ts_agent.js <project-path>");
  process.exit(1);
}

const ABS_PATH = path.resolve(PROJECT_PATH);
const OUTPUT_FILE = path.join(__dirname, "agent-output.json");

console.log("🤖 JS→TS Migration Agent Started");
console.log("📂 Target:", ABS_PATH);

// ---- OBSERVE ----
const files = fs.readdirSync(ABS_PATH);
const jsFiles = files.filter(f => f.endsWith(".js"));

// ---- DECIDE ----
const decision = jsFiles.length <= 5 ? "APPLY" : "DRY_RUN";

// ---- ACT ----
let converted = [];

if (decision === "APPLY") {
  jsFiles.forEach(file => {
    const oldPath = path.join(ABS_PATH, file);
    const newPath = path.join(ABS_PATH, file.replace(".js", ".ts"));

    let content = fs.readFileSync(oldPath, "utf-8");
    content = content.replace("module.exports =", "export default");

    fs.writeFileSync(newPath, content);
    fs.unlinkSync(oldPath);

    converted.push(file);
  });
}

// ---- EVALUATE ----
let buildStatus = "SKIPPED";

try {
  execSync("npm run build", { cwd: ABS_PATH, stdio: "ignore" });
  buildStatus = "SUCCESS";
} catch {
  buildStatus = "FAILED";
}

// ---- SAVE STATE ----
const result = {
  project: ABS_PATH,
  jsFilesFound: jsFiles.length,
  decision,
  convertedFiles: converted,
  buildStatus,
  timestamp: new Date().toISOString()
};

fs.writeFileSync(OUTPUT_FILE, JSON.stringify(result, null, 2));

console.log("✅ Agent Finished");
console.log(result);
