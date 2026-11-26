import { mkdirSync, writeFileSync } from "node:fs";

// The Worst Pizza Topping — one funny line pitching a terrible topping.
const LINE =
  "Try our pizza topped with dishwasher pods, so one bite foams up and dinner starts doing the dishes inside your mouth.";

// Gate: the entry must be UTF-8 text of 1 to 200 characters, not only
// whitespace — a single line, no trailing newline in the output file.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`LINE must be 1..200 non-blank characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE);
