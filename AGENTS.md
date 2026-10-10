# AGENTS.md — Bold & Bright Space Website

These rules govern every AI agent working on this project. Read and follow them before making any change.

---

## 1. Inspect Before You Edit

- Read every file you intend to modify **before** touching it.
- Verify that the file still matches the last documented state before applying a patch.
- Never assume workspace state from memory or previous conversation.

## 2. Minimal Dependencies

- Do not add an npm package unless it is the established choice in `docs/TECH_STACK.md` or explicitly approved.
- Prefer built-in browser APIs and framework primitives over third-party libraries.
- If a new dependency is truly necessary, state the reason and wait for approval before installing.

## 3. Small, Verifiable Tasks

- Break every implementation step into the smallest testable unit.
- Each task must have a clear definition of done that can be verified in the browser or by reading the output.
- Do not bundle multiple features or pages into one commit / code-generation step.

## 4. Git Safety

- The workspace had **no Git repository** as of project start (2026-10-10).
- Before making the first code change, initialise a Git repo and commit the baseline assets.
- **Never force-push, never amend a pushed commit, never rebase shared history.**
- Every destructive Git action (reset, clean, branch delete) requires explicit user approval.

## 5. Genuine Client Content Only

- Use only assets present in `images&videos/`. Do not download, generate, or invent stock imagery.
- Do not fabricate business details (address, phone, email, tagline, team names, project counts).
- Mark any missing business detail as `NEEDS CONFIRMATION` in the code or a comment; never invent it.
- Do not rename, move, delete, overwrite, or compress original assets.

## 6. Truthful Test Reports

- Report only what was actually verified — do not claim "tests pass" without running them.
- If a visual check was not performed (e.g., video content), say so explicitly.
- Do not report a task complete unless the verifiable criterion from point 3 has been met.

## 7. Approval Required for Major Changes

Any of the following require explicit written approval from the user before proceeding:

- Changing the tech stack or adding a framework not in `docs/TECH_STACK.md`
- Restructuring the project directory layout
- Deleting or overwriting any file
- Any destructive Git operation
- Changing the hosting / deployment target
- Altering the design system tokens established in `docs/DESIGN_SYSTEM.md`

---

*Last updated: 2026-10-10 by project initialisation agent.*
