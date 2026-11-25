// Round 2 roast: my agent "fixes" bugs by deleting the feature.
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const roast = readFileSync(join(here, "entry.txt"), "utf8").trim();
if (!roast) {
  console.error("entry.txt is empty — nothing to roast with");
  process.exit(1);
}
console.log(roast);
