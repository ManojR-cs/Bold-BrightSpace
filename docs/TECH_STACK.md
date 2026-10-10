# TECH_STACK.md — Bold & Bright Space Website

## Status: Under Evaluation (NEEDS CONFIRMATION before scaffold)

No package.json, framework scaffolding, or configuration files exist in the workspace yet.
The stack below is the **proposed** stack for evaluation and requires approval before installation.

---

## Proposed Stack

| Layer | Choice | Rationale |
|---|---|---|
| **UI Framework** | React 18 | Component model suits gallery, nav, and modal-heavy portfolio site |
| **Build Tool** | Vite | Fast HMR, small bundle, excellent TS support, widely adopted |
| **Language** | TypeScript | Type-safety for component props and asset paths; catches errors early |
| **Styling** | Tailwind CSS v3 | Utility-first fits the dark-theme design tokens; rapid iteration |
| **Icons** | Lucide React | MIT-licensed, tree-shakeable, consistent with React ecosystem |
| **Animation** | Framer Motion (optional) | Scroll-triggered fade-ups, gallery transitions — add only if needed |
| **Video** | HTML5 `<video>` (native) | Autoplay/muted/loop without dependencies |
| **Image optimisation** | Manual for MVP; Vite plugin later | No server-side rendering needed for Phase 1 |

## Alternatives Considered

| Alternative | Reason not chosen |
|---|---|
| Next.js | Overkill for a single-purpose portfolio site with no server routes needed |
| Plain HTML/CSS/JS | Harder to maintain a gallery of 80+ images without components |
| Gatsby | Heavier, slower DX for this use case |
| Astro | Good option — revisit if SSG/SEO becomes a priority in Phase 2 |
| Vue / Svelte | No specific advantage over React here; React is the team default |

## Hosting Options (NEEDS CONFIRMATION)

| Option | Notes |
|---|---|
| Netlify | Free tier, easy CI/CD from Git, good for static Vite output |
| Vercel | Excellent Vite support, generous free tier |
| GitHub Pages | Free, requires `vite.config.ts` base path config |
| cPanel / shared hosting | Client may already have hosting — confirm before choosing |

## Node.js Requirement

- Minimum: Node 18 LTS (required by Vite 5+)
- **Not yet verified on local machine** — confirm before scaffold.

## Browser Support Targets

- Last 2 versions of Chrome, Safari, Firefox, Edge
- No IE11 support required (NEEDS CONFIRMATION)
- Mobile-first (majority of traffic expected from mobile — NEEDS CONFIRMATION)

---

## Installation Command (Do Not Run Until Approved)

```bash
# Run only after user confirms stack and working directory is correct
npx -y create-vite@latest ./ --template react-ts
npm install tailwindcss @tailwindcss/vite lucide-react
```

> **IMPORTANT:** Do not run these commands until the user has confirmed the stack, the domain/hosting choice, and the `docs/REQUIREMENTS.md` open questions are resolved enough to begin building.
