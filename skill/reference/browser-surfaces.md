# Browser Surfaces

The parts you did not draw. The cheapest sign a page was built rather than assembled.

## Text Selection

::selection {
  background: var(--accent);
  color: var(--paper);
}

::selection:not(*):not([data-no-selection]) {
  /* nothing — keeps specificity clean */
}

Match selection color to the palette. Default blue on a warm page screams "template".

## Caret

input, textarea, [contenteditable] {
  caret-color: var(--accent);
}

Default blue caret on a custom palette is a dead giveaway.

## Focus Ring

:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
}

Never: outline: none without a replacement.
Never: rely on browser default.

Custom focus rings must be:
- Visible against every surface
- Distinct from hover state
- Consistent across all interactive elements

## Scrollbar (subtle)

::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-thumb {
  background: var(--rule);
  border-radius: 5px;
  border: 2px solid var(--paper);
}

::-webkit-scrollbar-track {
  background: transparent;
}

Keep it subtle. Loud scrollbars are worse than default.

## Underline Offset

a {
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-thickness: 1px;
}

Default underline is too tight and too thick.

## Placeholder

::placeholder {
  color: var(--muted);
  opacity: 1;
}

Firefox lowers opacity by default — override it.

## Numerals

.tabular, table, .stat, time {
  font-variant-numeric: tabular-nums;
}

Numbers that align vertically read as intentional. Proportional numerals look accidental.

## Form Controls

input, select, textarea, button {
  font: inherit;
  color: inherit;
}

form input[type="search"]::-webkit-search-cancel-button {
  appearance: none;
}

Native form controls use system fonts and colors by default. Override both.

## Date and Time

input[type="date"]::-webkit-calendar-picker-indicator {
  filter: invert(var(--picker-invert, 0));
}

Match the picker indicator to the palette.

## Autofill

input:-webkit-autofill {
  -webkit-text-fill-color: var(--ink);
  -webkit-box-shadow: 0 0 0 1000px var(--paper) inset;
}

Default autofill is pale yellow. Override it.

## Print

@media print {
  body { background: white; color: black; }
  nav, footer, .no-print { display: none; }
  a::after { content: " (" attr(href) ")"; }
}

A page that prints cleanly signals attention.

## The Point

The parts you did not draw carry the design.

You did not draw the selection color. You did not draw the caret. You did not draw the scrollbar.

But they ship with your page. Theme them. It is the cheapest signal a page was built rather than generated.