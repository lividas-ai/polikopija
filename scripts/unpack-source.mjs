#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync, unlinkSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

if (existsSync(join(root, "src/router.tsx"))) {
  console.log("[unpack] source present — skip");
  process.exit(0);
}

const vendor = join(root, "vendor");
if (!existsSync(vendor)) {
  console.error("[unpack] vendor/ missing");
  process.exit(1);
}

const parts = readdirSync(vendor)
  .filter((f) => /^src-\d+\.b64$/.test(f))
  .sort();
if (parts.length === 0) {
  console.error("[unpack] no vendor/src-*.b64 chunks");
  process.exit(1);
}

const b64 = parts.map((f) => readFileSync(join(vendor, f), "utf8").replace(/\s+/g, "")).join("");
const tgz = join(root, ".src-rest.tar.gz");
writeFileSync(tgz, Buffer.from(b64, "base64"));
const result = spawnSync("tar", ["-xzf", tgz], { cwd: root, stdio: "inherit" });
try {
  unlinkSync(tgz);
} catch {
  /* ignore */
}
if (result.status !== 0) {
  console.error("[unpack] tar failed");
  process.exit(result.status ?? 1);
}
if (!existsSync(join(root, "src/router.tsx"))) {
  console.error("[unpack] extract did not produce src/router.tsx");
  process.exit(1);
}
console.log(`[unpack] extracted ${parts.length} chunk(s)`);
