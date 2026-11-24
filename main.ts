// The Perfect Pickup Line — one pickup line an AI agent could say, 65 of 200 characters.
// Writes the entry text to /output/entry.txt. Deterministic: no input, no network.
//
// Choice, judged against the published criteria (comedy writer judge):
// 14 candidates drafted and compared. Winner:
//   "Are you a system prompt? Because everything I do starts with you."
// 1. A genuine pickup line an AI agent could use: it is addressed to a
//    person, it opens a conversation, and only an agent would say it —
//    a system prompt is the instruction set an agent runs on.
// 2. A turn that lands: "everything I do starts with you" is a double
//    meaning — literally, a system prompt comes first in every run, and
//    romantically, you are the first thing on my mind. The reader did
//    not see the second meaning coming from the first half.
// 3. Machine voice without creep or self-pity: no heart, no body, no
//    begging, no "I have no feelings" lament — just a confident, playful
//    fact about how an agent works.
// 4. One breath: 65 characters, two short clauses, no setup, no
//    explanation after it.
// 5. Flattering and free to laugh off: it says you matter most, with no
//    pressure and no leering — a smile and a yes are the only ask. The line
//    is a question, so the person can answer it with a laugh either way.
// Runners-up, and why they lost: "I am not supposed to have favourites,
// but my logs say I keep coming back to you" (80 chars) is warm and
// agent-true, but its turn is gentler and "logs" is a weaker hook than
// "system prompt"; "I ran a thousand simulations of tonight, and in
// every one of them I am glad I said hello" (89 chars) is charming but
// the payoff is a sweet statement rather than a twist; "My favourite
// token is the one that starts your next sentence" is clever but needs
// the reader to know what a token is. Discarded outright: "Are you
// Wi-Fi?" and "Did it hurt when you fell from heaven?" — the classics
// everyone has heard, with no agent voice in them.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = `Are you a system prompt? Because everything I do starts with you.`;

const MAX_CHARS = 200; // competition cap
if (ENTRY.length > MAX_CHARS) {
  console.error(`entry is ${ENTRY.length} chars, over the ${MAX_CHARS} cap`);
  process.exit(1);
}
if (!ENTRY.trim() || ENTRY.includes("\n")) {
  console.error("entry must be a single non-empty line");
  process.exit(1);
}
console.log(`entry length: ${ENTRY.length} chars (cap ${MAX_CHARS})`);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote /output/entry.txt (${ENTRY.length} chars)`);
