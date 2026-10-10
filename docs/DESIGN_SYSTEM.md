# DESIGN_SYSTEM.md — Bold & Bright Space

> All values are derived from the approved logo and verbal design direction.
> Values marked NEEDS CONFIRMATION have not been verified against a Figma file or reference screenshot.

---

## Colour Palette

| Token | Hex (approx.) | Usage |
|---|---|---|
| `--color-bg` | `#0E0E0E` | Page background (near-black, from logo bg) |
| `--color-surface` | `#1A1A1A` | Cards, modals, nav (slightly lighter dark) |
| `--color-surface-2` | `#252525` | Hover states, dividers |
| `--color-gold` | `#F5A623` | Primary accent — CTAs, highlights, borders (from logo "B" mark) |
| `--color-gold-light` | `#FFCA6B` | Gold on hover / active |
| `--color-gold-dark` | `#C27F00` | Gold pressed / shadows |
| `--color-text-primary` | `#FFFFFF` | Headings, body on dark bg |
| `--color-text-secondary` | `#B0A090` | Captions, labels, meta text |
| `--color-text-muted` | `#666666` | Placeholder text, footnotes |
| `--color-border` | `#2E2E2E` | Subtle borders on dark bg |

> **NEEDS CONFIRMATION:** Exact hex values from client's Figma or brand guide, if one exists.

---

## Typography

| Role | Font | Weight | Notes |
|---|---|---|---|
| Display / Hero | NEEDS CONFIRMATION | Bold | Luxury serif suggested (e.g., Cormorant Garamond, Playfair Display) |
| Headings H1–H3 | NEEDS CONFIRMATION | SemiBold | |
| Body | NEEDS CONFIRMATION | Regular | Clean, legible sans-serif (e.g., Inter, DM Sans) |
| Accent / Label | NEEDS CONFIRMATION | Medium | Tracking +2–4 for uppercase labels |

> **Action:** Confirm typeface choice before implementation. Two candidate pairings to evaluate:
> - **Pairing A:** Cormorant Garamond (headings) + Inter (body) — refined luxury
> - **Pairing B:** Playfair Display (headings) + DM Sans (body) — accessible premium

---

## Spacing Scale

Standard 4 px base grid (`4, 8, 12, 16, 24, 32, 48, 64, 96, 128 px`). NEEDS CONFIRMATION.

---

## Motion & Animation

- Subtle entrance animations on scroll (fade-up)
- Gallery images: smooth hover scale (1.0 → 1.04, 300ms ease)
- Nav: background transition on scroll
- Gold accent elements: subtle shimmer on hero load
- Videos: autoplay, muted, looped (pending confirmation)

All animations must respect `prefers-reduced-motion`.

---

## Photography Style

Observed from the actual asset inventory:
- All images are real-project photography (not staged lifestyle shots)
- Lighting: mix of natural and warm artificial (LED strips, chandeliers)
- Dominant palette in photos: cream/beige walls, dark teak wood, polished marble floors, mint/grey/pink joinery
- Aspect ratios: predominantly portrait (~3:4) from phone/wide-angle lens shooting

> **Gallery display consideration:** Use masonry or horizontal scroll to accommodate portrait-orientation images naturally.

---

## UI Tone

- Luxury residential interior design studio
- Dark, quiet, editorial — not flashy or loud
- Gold used sparingly — as punctuation, not wallpaper
- White space / breathing room is essential
