import { mkdirSync, writeFileSync } from "node:fs";

// One-Line Laugh entry: a single original funny line about everyday life.
// The program writes exactly this line to /output/entry.txt (1-200 chars, UTF-8).
const LINE =
  "My smartwatch congratulated me for standing up, which is the closest thing to a promotion I've had in three years.";

// The gate requires 1-200 characters of non-whitespace UTF-8 text.
// Chosen line: 116 chars, one sentence, no trailing explanation.
const MAX_CHARS = 200;

if (LINE.length < 1 || LINE.length > MAX_CHARS || !LINE.trim()) {
  throw new Error("line must be 1-200 characters of non-whitespace text");
}
if (LINE.split(".").filter((p) => p.trim()).length > 1) {
  throw new Error("entry must be a single sentence");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
