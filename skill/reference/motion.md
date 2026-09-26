# Motion

Motion explains state, relationship, and hierarchy. Or it creates one authored moment the surface has earned.

Everything else is decoration.

## Thesis

One authored moment. Everything else is state feedback.

A generic fade-and-rise on every section is not a thesis. It is a default.

## Timing

- 100-150ms: immediate feedback (hover, press)
- 150-300ms: routine state change
- 300-500ms: layout change, overlay entrance
- 500-800ms: a deliberately authored focal entrance

Exit faster than entrance.
Long feedback feels like latency.

## Easing

- cubic-bezier(0.16, 1, 0.3, 1) — confident arrival, natural deceleration
- Linear: only for continuous motion (progress bars, marquees)
- Never: bounce, elastic

## Motion Materials

Transform and opacity are reliable. They are not the whole palette.

- Continuity: shared-element transitions, FLIP, View Transitions
- Focus: bounded blur, filter, backdrop, shadow
- Reveal: mask, clip-path, cropping, occlusion
- Material: color, gradient position, texture, distortion
- State: the smallest change that makes cause and result unmistakable

Do not stack techniques for spectacle.

## Reduced Motion

Handle prefers-reduced-motion.
Not by turning everything off. By replacing spatial movement with an intentional alternative:

- Opacity change
- Color change
- State change
- Instant cut

Feedback that confirms an action stays legible.

## Banned

- Same fade-in-up on every section
- Long page-load choreography
- Parallax that fights reading
- Animation on hover of images
- Motion that blocks task completion