import { mkdirSync, cpSync, rmSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const SRC = join(ROOT, 'skill');
const DIST = join(ROOT, 'dist');

const PROVIDERS = [
  '.claude/skills/human-design',
  '.cursor/skills/human-design',
  '.codex/skills/human-design',
  '.github/skills/human-design',
  'gemini/human-design',
  'universal'
];

function log(msg) {
  console.log('[build] ' + msg);
}

function clean() {
  rmSync(DIST, { recursive: true, force: true });
  mkdirSync(DIST, { recursive: true });
}

function copyForProvider(dir) {
  const out = join(DIST, dir);
  mkdirSync(out, { recursive: true });
  cpSync(SRC, out, { recursive: true });
  log('Copied skill to dist/' + dir);
}

function main() {
  clean();
  for (const dir of PROVIDERS) {
    copyForProvider(dir);
  }
  log('Done. Output in dist/');
}

main();