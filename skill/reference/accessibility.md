# Accessibility

Baseline: WCAG 2.1 AA. Not optional.

## Contrast

- Body text: 4.5:1 minimum
- Large text (18px+ or 14px bold): 3:1 minimum
- Controls, icons, focus indicators: 3:1 minimum
- Placeholder text: 4.5:1 (treated as body)

Verify with a contrast checker. Never eyeball.

## Keyboard

- Every interactive element reachable by Tab
- Logical tab order (follows visual order)
- Focus visible, on-brand (not browser default blue ring)
- Escape closes modals, dropdowns, tooltips
- Enter activates buttons and links
- Space toggles checkboxes

## Screen Readers

- Semantic HTML first: button for buttons, a for links, nav for navigation
- ARIA as supplement, never as workaround
- alt text on every meaningful image
- Empty alt on decorative images
- Live regions for async state (loading, success, error)
- Labels on every form input (persistent, not placeholder-only)

## Motion

- prefers-reduced-motion respected
- No flashing above 3Hz
- Parallax and large slides replaced with crossfade

## Text

- Zoom to 200% without breaking layout
- No color-only meaning
- Target size 44x44px minimum (touch)
- Line height 1.5+ on body text

## Forms

- Persistent labels (not placeholder-only)
- Errors announced and shown inline
- Required fields marked
- Autocomplete attributes on common fields

## Color

- Do not rely on hue alone to convey state
- Add icon, text, or shape to color-coded info
- Test with deuteranopia, protanopia, tritanopia simulations

## Content

- Language attribute on html element
- Skip-to-content link
- Descriptive link text (not "click here")
- Descriptive page title

## The Test

Navigate the entire primary flow:
1. Keyboard-only
2. Screen reader on
3. At 200% zoom
4. In high contrast mode

If any path fails, fix it before shipping.