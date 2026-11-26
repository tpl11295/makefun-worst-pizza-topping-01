import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The Worst Pizza Topping entry: one original line pitching a terrible pizza topping.
// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters (this line is 138).
const line =
  "Try our chef's special: a pizza topped with the pizza box itself. Same great taste, now with 100% more cardboard and a lifetime of regret.";

if (line.length < 1 || line.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${line.length}`);
}

if (line.includes("\n") || line.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
if (readFileSync("/output/entry.txt", "utf8") !== line) {
  throw new Error("entry.txt does not match the pizza topping line");
}
console.log(`wrote ${line.length} characters to /output/entry.txt`);
