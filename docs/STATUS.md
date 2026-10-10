# STATUS.md — Bold & Bright Space Website

## Current milestone: Mobile gallery, reviews, and Instagram layout

Last updated: 2026-10-10

### Latest milestone work

- Made each project gallery row's overflow behavior explicit: desktop rows clip their animated track, while touch-oriented and narrow viewports use native horizontal scrolling with momentum and pan gestures. Removed the conflicting `overflow-hidden` utility from the row and disabled the duplicate loop set while it is in the static mobile gallery mode.
- Restored slow, continuous vertical movement for the two Google review rails on narrow screens. The rails pause while a review is pressed, hovered, or keyboard-focused. The reduced-motion fallback remains a complete static list with natural page scrolling and the visual loop copy hidden from assistive technology.
- Changed the Instagram feature to a two-column mobile grid, placing the profile button under the handle and allowing the handle to wrap at narrow widths. Desktop flex layout is unchanged.

### Latest milestone verification

- Browser inspection could not be completed. In-app browser attempts to open `localhost:5174`, `127.0.0.1:5174`, and the Vite network address timed out. The Vite process printed its ready message but no local listener was available afterward; local `curl` requests to ports 5173 and 5174 failed with connection refused. No mobile or desktop visual result is claimed.
- Source inspection confirms the 390 px breakpoint now provides an explicitly scrollable gallery row, animated review rails with visible original and loop groups, and a stacked Instagram CTA. The reduced-motion stylesheet switches reviews to a full static list and the gallery to native scrolling.
- `npm run lint`: passed. `npm run build`: passed. `git diff --check`: passed with only Git's working-copy line-ending notices.

### Previous milestone: Ordered navbar navigation and spacing

- Reordered and completed the header navigation to follow the page from top to bottom: Home, Services, Projects, About, Why Choose Us, Reviews, Instagram, Service Areas, and Contact. Instagram remains an in-section destination within Reviews; no new section or content was added.
- The existing scroll-aware active state now marks Home while the Hero is at the reading marker. Existing mapping for the Footer to Contact is retained. The mobile drawer uses the same full ordered links and closes after a selection.
- Kept the capsule styling and hover/focus behavior. The full desktop link row appears at the extra-large breakpoint; smaller widths retain the expandable menu to prevent horizontal overflow. Added scroll padding so anchored section content clears the sticky capsule.
- Balanced the desktop navbar spacing with a fixed flex gap around a centered, flexible link row. At the 1280 px breakpoint the logo-to-Home and Contact-to-Enquire gaps measure equally; the responsive inner width also expands at very wide desktop sizes to preserve the existing label and button sizes.

### Latest milestone verification

- Browser inspection at 1440 px confirmed all nine desktop links are in page order, each fragment resolves to an element, and there is no horizontal overflow. At 1280 px the full desktop row remains visible and the header width has no overflow.
- Clicked Services on desktop: the URL changed to `#services`, the section settled below the sticky header (target top 112 px; header bottom 94 px), and Services became active. About also resolved to `#about` and became active after scrolling.
- At 390 px, confirmed the desktop row is hidden, the menu button is shown, the full ordered list opens, and there is no page overflow. Selected Service Areas: the URL changed to `#service-areas`, the drawer closed, the target settled below the header, and Service Areas became active.
- Spacing check at 1280 px: measured a 29 px gap from logo to Home and Contact to Enquire, with uniform 12 px gaps between all navigation items. All items and the CTA fit in the capsule without horizontal overflow.
- At 1200 px, confirmed the existing responsive menu breakpoint is active. Its expanded drawer exposes all nine links and the Enquire button without horizontal overflow; mobile menu behavior was unchanged.
- `npm run lint`, `npm run build`, and `git diff --check`: passed. Browser actions were intermittently interrupted by a local-port/CDP timeout, but the desktop and mobile interactions above completed successfully on the existing Vite preview.

### Previous milestone: Service area maps, scroll motion, favicon, and branding

- Fixed the scroll-reveal trigger. The former CSS view-timeline animation used `animation-fill-mode: both`, which applied its faded starting state to elements before they entered view. A one-shot `IntersectionObserver` now adds the pending state only after successful initialization, then removes it on entry. With JavaScript disabled, observer support missing, setup errors, or reduced motion requested, content remains visible without waiting for an animation.
- Corrected the Service Areas map sizing. A shared `.contact-listings` max-width had constrained the map grid, producing narrow portrait cards on desktop. The Service Areas grid now overrides that width at the desktop breakpoint; its two panels stay in two columns and each full card uses a 1:1 aspect ratio. Mobile retains a single-column stack.
- Replaced the hand-drawn favicon artwork with a square crop of the exact existing transparent navbar logo PNG embedded in `public/bbs-favicon.svg`. The navbar logo asset was not changed, and `index.html` continues to link the local favicon.

#### Previous milestone verification

- In the browser at 1440×960, confirmed the Service Areas map cards are side by side and measure 597×597 CSS pixels. The section contains both panels.
- In the browser at 390×844, confirmed the panels stack in one column and measure 341×328 CSS pixels, with no horizontal overflow apparent in the rendered page. The section contains both panels.
- In the desktop browser, offscreen reveal targets received the pending class and computed opacity `0.45`; after scrolling to the page end, targets in view had cleared pending state and reached opacity `1`. This confirms entry triggering and completion. Reduced-motion and initialization-failure paths were source-reviewed; reduced-motion emulation and forced observer failure were not performed in browser.
- The local browser preview initially could not reach the dev server while it was bound to loopback. Starting Vite with `--host 0.0.0.0` made the preview connect; desktop and mobile browser inspection then succeeded.
- Compared the favicon source data URI byte-for-byte with `src/assets/bbs-navbar-logo.png`; it uses that exact artwork for its crop. Confirmed the build output includes `dist/bbs-favicon.svg`.
- `npm run lint`: passed. `npm run build`: passed. `git diff --check`: passed; Git may emit a Markdown line-ending notice.

- Replaced the testimonial card's illustrative stock background with the existing client photograph `images&videos/854ee4c9-4803-40b6-9690-6f7acf05e852.JPG`. The clickable preview has only a separate play icon over the photograph; its accessible name and adjacent copy clarify that this is a project photo, not a frame from the Reel. The target remains the supplied Instagram Reel and is not embedded or autoplayed.
- Moved both existing Google Maps preview panels from Contact to Service Areas without changing their confirmed listing links or search previews. The map grid is one column on small screens and two columns from 768px; Contact now contains the enquiry/call/WhatsApp actions and form.
- Extended the existing CSS scroll-reveal system to the Services and Projects intros/cards/gallery rows, review columns, Service Areas maps, and footer. Base content remains visible without scroll-animation support; reduced-motion styles disable scroll reveals and leave content immediately visible. Existing hero motion remains unchanged.
- Refined the sticky header into a semi-transparent, blurred capsule. A requestAnimationFrame-throttled scroll position check updates `aria-current` and the gold active treatment in both desktop and mobile navigation. The hero has no section item highlighted, content between linked anchors resolves to the preceding navigation section, and the footer maps to Contact.
- Updated the footer tagline, page description metadata, social descriptions, and Organization slogan to the exact supplied copy “Where Design Meets Detail.”
- Added a separate brand-mark favicon at `public/bbs-favicon.svg` and linked it from `index.html`. The existing favicon and all original client assets remain untouched.

### Latest milestone verification

- `npm run lint`: passed without warnings. `npm run build`: passed. The build output contains `dist/bbs-favicon.svg` and a hashed copy of the selected project photo. `git diff --check`: passed; Git emitted only a Markdown line-ending notice.
- Confirmed the selected project photo exists in the current asset inventory and inspected it before use. No original asset was edited, moved, renamed, restored, or deleted.
- Source review confirmed the Maps previews and both supplied listing URLs now appear under Service Areas, and Contact no longer contains the map panels. Source review also confirmed reduced-motion behavior, the active-navigation update logic, Reel URL, and the favicon link.
- At that time, browser checks were blocked because the dev server was bound to loopback; the connection issue was resolved in the latest milestone by binding Vite to `0.0.0.0` (see verification above).

### Previous milestone: Hero, gallery lightbox, Maps previews, and testimonial Reel

#### Previous milestone work

- Removed the visible “Illustrative stock image” hero label while keeping the approved hero image, copy, layout, logo, and image reference information intact.
- Upgraded the project lightbox with a brief, restrained 3D flip transition and cinematic dark framing. Previous/next controls, Escape, focus handling, and touch controls remain in place; reduced-motion CSS disables the flip.
- Added responsive Google Maps preview panels for Yedehalli and Bengaluru. Both embedded previews resolved to the corresponding verified Google listings, and each panel retains the supplied original Maps listing link. The layout stacks on small screens and uses two columns from the tablet breakpoint.
- Replaced the plain Reel presentation with a featured preview using the existing local stock interior image. It is explicitly labeled as illustrative and not a video frame. The accessible CTA opens the supplied Reel; the profile link remains. No Reel media was downloaded, embedded, or autoplayed.
- No original client assets or dependencies were changed.

#### Previous milestone verification

- `npm run lint`: passed. `npm run build`: passed. `git diff --check`: passed; Git emitted only the existing Markdown line-ending notice.
- Mobile browser inspection confirmed the hero label is absent, the lightbox opens and contains the image, keyboard Next and ArrowLeft navigation work, Escape closes and restores focus, and both Maps previews load and stack without horizontal overflow.
- The Reel preview and accessible link are present in the mobile accessibility tree. Instagram previously displayed a sign-up overlay over the Reel, so the actual video poster/playback is unavailable for inspection. The preview link retains the supplied Reel URL.
- Desktop-width visual inspection and browser emulation of `prefers-reduced-motion` were not available for this milestone. Desktop two-column Maps layout and reduced-motion behavior were source-reviewed only.

- Inspected both supplied Google Maps listings. At the time checked, GYP Decor interiors (POP Shop) showed 3 public reviews and Define Home Interiors showed 8; the visible review entries included public reviewer names, text, and 5-star ratings. The website now presents three visible entries from each listing, linked back to its listing. These are dated snapshots, not a live feed, and may change.
- Added restrained vertical movement in two review columns on larger screens. The second column moves in the opposite direction. Hover and keyboard focus pause motion; duplicate loop content is hidden from assistive technology and removed from keyboard navigation. Small screens and `prefers-reduced-motion` use static lists.
- Added a featured, accessible click-to-open link for the client's exact Instagram Reel (`DZhuvR8xC3y`). It does not autoplay, embed, download, or rehost video. Instagram displayed a sign-up overlay during inspection, so no reusable poster was available; the existing verified profile link remains.
- The Professional Package audit and earlier photo filters/social metadata remain recorded in [PROFESSIONAL_PACKAGE_AUDIT.md](PROFESSIONAL_PACKAGE_AUDIT.md). No dependencies, client assets, approved unrelated sections, or external services were changed. No commit or push was made.

### Latest milestone verification

- `npm run lint`: passed without warnings. `npm run build`: passed. `git diff --check`: passed (Git may report the Markdown line-ending notice).
- In browser, opened both supplied Maps links and inspected the current public review panels. Confirmed the Reel link resolves to `bold_bright_space`; Instagram showed a sign-up prompt over the Reel, which limits playback/poster inspection.
- The local site's accessibility tree showed six review links with reviewer, 5-star rating, text, and listing destination. The repeated visual loop copy is `aria-hidden` with its links removed from tab order.
- Desktop screenshot review confirmed the two-column presentation, readable cards, and Reel call-to-action. Source/CSS review confirmed pause on hover and keyboard focus and static behavior under reduced motion and the small-screen breakpoint.
- The mobile breakpoint and reduced-motion fallback were reviewed in CSS but not emulated in browser. Actual Reel playback and external link behavior after Instagram authentication were not tested.

### Remaining launch-readiness and package items

- The Professional package's 6–8+ pages are not distinct routes. A confirmed sitemap/page count and domain/hosting behavior are needed; existing sections do not count as pages.
- Individual project pages and a before/after gallery are blocked by missing client-confirmed photo groupings, project details, and authentic matched before/after pairs. The client must clarify included page count and how these relate to separately priced add-ons.
- Reviews are a dated static selection of public Google entries, not a live feed. They can become outdated; visitors are directed to Google for current information. There is no API or account integration.
- Instagram's sign-up overlay prevented inspection of the Reel's playback and a clean poster; video playback and any authentication requirement remain externally unverified.
- About story, experience, team claims, email, other social profiles, featured-project curation, and unconfirmed service groupings require client-supplied facts or decisions.
- “Extended support” has no defined duration, scope, response target, or channel and must be reconciled with separately billed optional maintenance. Payment status, timeline start, revision acceptance, hosting/domain, and deployment are outside verified repository evidence.
- No production domain is known, so canonical URL, `og:url`, sitemap/domain validation, Search Console, production metadata, and deployment are unverified. No analytics ID or tracking was added.
- Narrow in-app inspection did not cover the full mobile site, particularly Contact or the Reviews small-screen layout. WhatsApp handoff and popup-blocked fallback remain untested; reduced-motion preference was source-reviewed but not emulated; browser console logs were not available.

### Completed

- Redesigned the existing Service Areas section as a premium editorial layout with named-city coverage separated from broader state-level coverage. Included Bengaluru, Tumakuru, Hassan, Ramanagara, Karnataka, Tamil Nadu, Andhra Pradesh, Kerala, and Telangana; clarified that statewide coverage does not imply a physical office in each location.
- Refined Contact into an editorial two-column layout with a project enquiry form, formatted click-to-call link (`tel:+918722890061`), direct WhatsApp link, and clearly labeled links to the Yedehalli and Bengaluru Google Maps listings.
- Kept required Name, Phone Number, Location, Service Required, and Project Details fields; added native length/format validation and visible focus treatment. The WhatsApp draft includes entered details and is opened for the visitor to review and send.
- Added an accessible fallback when the WhatsApp popup is blocked: retry link, alert text, and a read-only prepared message that can be copied manually. No backend, local storage, or persistent form-data storage was added.
- Kept the approved Hero, Services, Projects, About, Why Choose Us, Reviews, and Instagram sections in place. No original client assets were changed.

- Added a premium editorial Google Reviews section linking to both user-supplied Maps listings. No reviewer quotes or names are reproduced. Added the Reviews link to the header and footer navigation.
- Verified the first link resolves to GYP Decor interiors (POP Shop), which showed a 5.0-star rating on Google Maps. Verified the second resolves to Define Home Interiors, which showed a 5.0 rating and 8 reviews at inspection. Ratings and review counts can change; both listing links direct users to current Google information.
- Verified the supplied Instagram URL resolves to `@bold_bright_space`. Added a direct profile link without representing external posts or engagement metrics on the website.
- Inspected the available media inventory: 16 client MP4s are present. Did not add a video embed because the clips could not be visually reviewed or reliably selected/identified for a preview. Projects remains photo-only.
- Left the approved hero, Services, Projects, About, Why Choose Us, contact, and other existing functionality in place.

- Added a layered editorial About section with refined display typography and two local stock reference images. Preserved the approved About copy and labeled the visuals as interior references.
- Added a Why Choose Us section built around practical planning, thoughtful design, attention to detail, and execution focus, with a local stock reference image and subtle hover states. No history, credentials, guarantees, or competitor claims were added.
- Added restrained scroll-linked entrance transitions where supported, with static visible content as the fallback and reduced-motion support.
- Left the approved Services and Projects sections, logo, hero, brand tokens, and existing functionality unchanged.

- Updated the existing hero headline, supporting text, and CTA labels to the approved copy without changing its layout, logo, palette, or hero image treatment.
- Replaced the Services heading, intro, and all 13 service descriptions with the approved copy.
- Replaced the Portfolio heading, supporting text, and image interaction label with the approved copy.
- Filled the existing About and Contact anchor placeholders with the supplied copy, added the supplied Service Areas copy in the existing page flow, and updated the footer brand, tagline, body text, and five links.
- Reused one accessible enquiry form in the Contact section and existing enquiry modal. It includes the supplied fields and note and opens a WhatsApp draft containing the form details for the visitor to review and send.
- Restricted gallery discovery to currently present `.JPG`/`.jpg` files, omitted `(2)` copies and logo filenames, and removed video tiles/playback from the gallery. The existing three-row loop, reversed middle row, and photo lightbox remain.
- Reduced the gallery cards from a 24rem maximum width to 16.5rem, tightened the repeated gap to 0.75rem, and reduced Portfolio section padding and row spacing.

### Current client-photo inventory

- 58 `.JPG` files are currently present in `images&videos/`; one remaining `(2)` duplicate is omitted, so the gallery discovers 57 photos.
- 16 MP4 files are present but are not included in the photo gallery.
- The working tree already marks 22 JPG files and the original logo as deleted. These were left in that state: no original client asset was restored, renamed, moved, or deleted in this milestone.

### Verification

- `npm run lint`: passed.
- `npm run build`: passed; Vite bundled the existing photo gallery and local reference assets.
- `git diff --check`: passed. Git emitted only its line-ending notice for this Markdown file.
- Google Maps inspection: both supplied links resolved to the named listings. At inspection, GYP Decor interiors (POP Shop) showed 5.0 stars; Define Home Interiors showed 5.0 stars and 8 reviews.
- Instagram inspection: the supplied URL resolved to `@bold_bright_space`.
- Browser inspection from the prior milestone: Reviews and Instagram presentation visually reviewed at desktop width.
- Current desktop browser inspection: visually checked Service Areas and Contact. Accessibility tree confirmed the separate city/state groups, form fields, click-to-call URL, and both Maps links.
- Mobile Service Areas/Contact inspection and end-to-end WhatsApp submission were not performed. The WhatsApp destination was not opened with form data during verification; the popup-blocked fallback was not forced in a browser.
