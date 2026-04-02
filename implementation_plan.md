# Frontend Design Improvement Plan

Based on the `frontend-design` skill guidelines, the current design is functional but leans towards generic AI aesthetics (Inter font, standard CSS glassmorphism, soft rounded corners, and a standard centered layout). To elevate this to a production-grade, memorable portfolio, we will transition to a **Refined Industrial Brutalism** aesthetic.

This approach fits a Senior Software Engineer with deep expertise in high-performance backends and crypto/Web3 by projecting technical precision, raw performance, and bold confidence.

## User Review Required

> [!IMPORTANT]
> Please review the aesthetic direction outlined below. Do you approve of this bolder, sharper "Industrial Brutalist" approach, or would you prefer a different direction (e.g., Luxury Minimalist, Retro-Futuristic)? 

## Proposed Aesthetic Direction: Refined Industrial Brutalism

* **Tone & Vibe**: Utilitarian, sharp, raw, and highly technical. No soft shadows; instead, we use stark contrasts, hard borders, and dense typography.
* **Typography**:
  * Removing the overused `Inter` font.
  * **Headings**: `Archivo Black` (massive, heavy, impactful).
  * **Body/Details**: `Chivo Mono` or `JetBrains Mono` (gives a code-like, technical precision to all the text).
* **Color Palette** (Preserving your requests but shifting execution):
  * Background: Stark absolute black (`#09090b`).
  * Text: High-contrast white (`#fafafa`).
  * Accent: Bright warning orange (`#fb923c`) used aggressively for solid block backgrounds, thick borders, and hover states.
* **Layout & Composition**:
  * Moving away from standard centered flex columns.
  * Introducing asymmetry, visible grid-lines, and harsh straight edges (`border-radius: 0`).
  * Skills will be displayed in a dense, ticker-tape marquee or a rigid grid with thick borders.
* **Visual Details**:
  * **Backgrounds**: A subtle CRT scanline or technical blueprint grid background instead of a soft glowing orb.
  * **Interactions**: Ditching smooth bounces for instantaneous, high-impact hover effects (e.g., color inversion on hover).
  * **Atmosphere**: CSS noise/grain overlay spanning the entire viewport to give a tactile, raw feel.

## Proposed Changes

### Global Layout & Configuration

#### [MODIFY] [layout.tsx](file:///c:/Users/jude/Desktop/Projects/portfolio_fe_vibe/src/app/layout.tsx)
- Update Google Fonts imports (`Archivo_Black` and `Chivo_Mono`).
- Apply the body font variable.
- Inject a noise/grain overlay element wrapping the application.

#### [MODIFY] [globals.css](file:///c:/Users/jude/Desktop/Projects/portfolio_fe_vibe/src/app/globals.css)
- Completely restructure tokens for the Brutalist aesthetic.
- Replace soft box-shadows and glassmorphism with harsh solid borders (`border: 2px solid var(--accent)`).
- Add CSS patterns (subtle grid background) and marquee animations.
- Implement stark hover inversions (black text on orange background).

### Component Refactoring

#### [MODIFY] [page.tsx](file:///c:/Users/jude/Desktop/Projects/portfolio_fe_vibe/src/app/page.tsx)
- Refactor the markup to support the new asymmetrical layout.
- **Hero**: Shift text to be massive and left-aligned with a harsh geometric container. 
- **Skills**: Transform the pills into a raw, terminal-like output format or an animated continuous marquee.
- **Experience**: Replace the soft dots with hard squares and thick connecting beams.
- **Projects**: Large, bold cards with prominent numbering and harsh solid orange borders on hover.

## Open Questions

> [!WARNING]
> 1. Are you comfortable with removing all rounded corners (`border-radius: 0`) in favor of sharp, industrial edges?
> 2. The new fonts (`Archivo Black` and `Chivo Mono`) are very opinionated. Does a "technical/code" vibe fit your personal brand?

## Verification Plan

### Manual Verification
- Review the application locally via `npm run dev` to ensure no layout breakages on mobile devices.
- Verify that the custom fonts load correctly and the noise/grid background doesn't negatively impact scroll performance.
- Check that all hover interactions feel snappy and align with the brutalist vision.
