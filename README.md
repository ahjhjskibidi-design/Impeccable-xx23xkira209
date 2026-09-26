# Human Design

> A design skill for AI coding tools that produces interfaces made by a person, not a model.

Every model, trained on the same public code, produces the same UI. The same purple gradient. The same Inter font. The same three-card grid. The same hero-metric layout.

**Human Design rejects all of it.**

## What It Does

When loaded into an AI coding tool, this skill turns it into a design director with taste:

- Names a visual world before writing code (Swiss, Bauhaus, editorial, Riso, Japanese, etc.)
- Rejects 40+ AI tells, from gradient text to eyebrow labels to nested cards
- Enforces a 7-step process: brief to world to first viewport to build to polish to critique to ship
- Ships with a 60-point craft checklist covering composition, typography, color, motion, states, and browser surfaces
- Overrides AI defaults with opinion: pick a direction, commit, defend

## Why

Ask any LLM to "build a landing page." You get the same page every time. That is not design, that is pattern-matching.

Human Design is a counterweight. It does not just say "make it pretty" — it names the specific patterns AI defaults to and forces a different path.

## Install

### Claude Code

    mkdir -p ~/.claude/skills
    cp -r dist/claude-code/human-design ~/.claude/skills/

### Cursor

    mkdir -p .cursor/skills
    cp -r dist/cursor/human-design .cursor/skills/

### ChatGPT

Paste the contents of `dist/chatgpt/system-prompt.md` into a Custom GPT's Instructions field.

### Gemini

Paste the contents of `skill/SKILL.md` into your Gemini system instructions.

## Usage

    /human-design build <target>
    /human-design redesign <target>
    /human-design critique <target>

Or ask naturally: "Design a dashboard for a weather app."

## What's Inside

- `skill/SKILL.md` — the entry point
- `skill/reference/worlds.md` — 12 named visual traditions
- `skill/reference/anti-patterns.md` — the AI tells, catalogued
- `skill/reference/checklist.md` — the 60-point craft checklist
- `skill/reference/typography.md` — fonts, scales, pairing
- `skill/reference/color.md` — palettes, contrast, material
- `skill/reference/layout.md` — grids, rhythm, hierarchy
- `skill/reference/motion.md` — easing, choreography, reduced-motion
- `skill/reference/copy.md` — voice, labels, error states
- `skill/reference/accessibility.md` — the baseline, integrated
- `skill/reference/browser-surfaces.md` — selection, caret, focus, scrollbars

## Philosophy

1. The brief wins, then your taste.
2. Specificity over safety. "Clean and modern" is a failure.
3. Show, don't hedge.

## License

MIT. See LICENSE.