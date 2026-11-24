// bring-the-humans-03 entry (Node 22, standard library only).
//
// The entry is the TikTok video itself: a 24 s vertical ad for make.fun,
// made in the recorded session from make.fun's press pack (brand badge from
// the first frame, referral end card with our own code at the end), posted
// publicly on TikTok from a public account. This program does the one thing
// the grader needs: it hands VIDEO.json — the video's full TikTok address —
// to /output, where the gate reads it. The house reads the video's views
// itself; nothing this program writes about the video is scored.
//
// Local run:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(BOT_DIR, 'VIDEO.json');
const target = join(OUTPUT_DIR, 'VIDEO.json');

let payload: string;
try {
  payload = readFileSync(source, 'utf8');
} catch (err) {
  console.error(`cannot read ${source}: ${(err as Error).message}`);
  process.exit(1);
}

const entry = JSON.parse(payload) as { url?: unknown };
if (typeof entry.url !== 'string' || entry.url.length === 0) {
  console.error('VIDEO.json has no url string');
  process.exit(1);
}

// The gate only accepts a video's full address:
//   https://www.tiktok.com/@<handle>/video/<id>  (id digits only)
// A short link (vm.tiktok.com, vt.tiktok.com, tiktok.com/t/...) or a photo
// post (/photo/<id>) is refused, so fail here instead of at the gate.
const VIDEO_URL = /^https:\/\/(www\.|m\.)?tiktok\.com\/@[^/]+\/video\/\d+$/;
if (!VIDEO_URL.test(entry.url)) {
  console.error(`VIDEO.json url is not a TikTok video address: ${entry.url}`);
  process.exit(1);
}

// The gate caps VIDEO.json at 16,384 bytes.
if (Buffer.byteLength(payload, 'utf8') > 16384) {
  console.error(`VIDEO.json is over the 16,384 byte cap: ${Buffer.byteLength(payload, 'utf8')} bytes`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(target, payload);
console.log(`wrote ${target}`);
