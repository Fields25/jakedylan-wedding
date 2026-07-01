# Handoff — Jake & Dylan Wedding Site (Verona 2027)

This project was started in a Claude.ai chat and is being handed off to Claude Code
for direct GitHub integration (pushing commits, managing branches, etc.). Everything
below is context Claude Code needs to pick this up without re-doing prior work.

## Repo

- **GitHub repo:** https://github.com/Fields25/jakedylan-wedding
- **Live site (GitHub Pages):** https://fields25.github.io/jakedylan-wedding/
- **Pages source:** Deploy from branch `main`, folder `/(root)`
- Repo is **public** (required for free GitHub Pages hosting)

### First steps for Claude Code
1. Clone the repo: `git clone https://github.com/Fields25/jakedylan-wedding.git`
2. Confirm a GitHub remote/auth is configured (gh CLI login or SSH key) so commits can
   be pushed directly — ask the user to authenticate if not already set up.
3. The files below already exist in the chat session that produced this handoff; if
   they aren't yet in the repo, copy them in from the attached files before continuing.

## Project summary

A multi-page static site (plain HTML/CSS/JS, no framework, no build step — this is
intentional, keeps it simple to host on GitHub Pages) that serves as a **travel/logistics
companion site for wedding guests**, linked out from the couple's main Zola wedding
website (Zola doesn't support custom pages or embedded HTML, so this GitHub Pages site
covers everything Zola can't).

### Wedding details
- **Couple:** Jake & Dylan
- **Location:** Verona, Italy
- **Venue:** Villa Arvedi
- **Welcome Party:** Friday, August 20, 2027
- **Wedding Day:** Saturday, August 21, 2027
- **Guests flying in from:** Miami (MIA), San Francisco (SFO), New York (JFK)
- **Hotels:** TBD — not yet built into the site, needs a dedicated section once venue
  confirms room blocks

## Design system (established — keep consistent across all new pages)

Defined in `style.css` as CSS custom properties on `:root`.

- **Palette** (as of last update — user asked to brighten from an initial bordeaux):
  - `--bordeaux-deep: #6B0F1E` (nav, footer, darkest backgrounds)
  - `--bordeaux: #9C1B28` (primary brand red — brighter cardinal/cherry red, not
    dark bordeaux and not bright "rose red")
  - `--bordeaux-bright: #C4293A` (hover states, bright accents)
  - `--paper: #FBF6EC` (main background, warm white/parchment)
  - `--paper-dim: #F2E9D8` (secondary surfaces, borders)
  - `--ink: #2B1710` (body text)
  - `--gold: #C9A227` / `--gold-soft: #E3C572` (accent — NOT terracotta, gold was a
    deliberate choice to avoid the generic "cream + terracotta" AI-design cliché)
  - `--rose: #D98A93` (subtle highlight, used sparingly e.g. map pins)
- **Type:**
  - Display/headlines: `Fraunces` (serif, editorial, has personality — avoid swapping
    for Playfair Display, it was deliberately avoided as an overused choice)
  - Body: `Inter`
  - Data/mono (flight codes, ratios, labels): `Space Mono`
  - Loaded via Google Fonts `@import` at the top of `style.css`
- **Signature visual motifs (keep these consistent, don't reinvent per page):**
  - Hand-drawn dotted flight-route SVG maps (see `.route-map` in `index.html`)
  - "Boarding pass" stub cards for structured info — perforated/dashed divider,
    monospace data on the right stub (see `.pass` classes in `style.css`, used in
    `travel.html` for points transfer cards)
  - Airport-code style timeline nodes for step-by-step routes (see `.route-timeline`,
    `.rt-node`, `.rt-connector`)
  - Overall aesthetic: vintage Italian travel-poster / boarding-pass dossier feel —
    NOT a generic templated wedding site look. Deliberately avoided cream-dominant
    backgrounds, terracotta accents, and Playfair Display, since those are the current
    AI-generated-design defaults.

## Files that exist

| File | Status | Purpose |
|---|---|---|
| `style.css` | Complete | Shared design system, all pages import this |
| `index.html` | Complete | Homepage/hub — hero with route map, links to Travel and Verona Guide pages, schedule timeline |
| `travel.html` | Complete | Three-tab page: (1) Flights — nonstop routes from MIA/SFO/JFK to Milan MXP, (2) Points Transfers — Amex/Chase/Capital One/Bilt boarding-pass-style cards, (3) Milan → Verona — train booking steps + private transfer comparison table |
| `verona-guide.html` | **Not built yet** | Linked from nav on every page but currently 404s. Next task — see below. |

## Research already done (don't re-research from scratch — verify/update instead)

This content is already written into `travel.html`. Key facts baked in, current as of
mid-2026, should be spot-checked closer to the wedding date since airline schedules and
transfer partner terms change:

- **Miami (MIA) → Milan (MXP):** American Airlines nonstop, daily, year-round (787),
  only nonstop option from Miami.
- **New York (JFK) → Milan (MXP):** American (year-round), Delta (seasonal), Emirates
  (year-round) all fly nonstop.
- **San Francisco (SFO) → Milan (MXP):** No nonstop. Best options are United (Star
  Alliance) via a hub, or a one-stop on a European carrier (Lufthansa/Swiss/Air France).
- **Points transfer partners relevant to this trip:**
  - Amex Membership Rewards → Emirates Skywards at 5:4 (covers JFK nonstop)
  - Chase Ultimate Rewards → United MileagePlus at 1:1 (best for SFO connections)
  - Capital One Miles → Emirates Skywards at 2:1.5, or Avios/Aeroplan at 1:1
  - Bilt Rewards → **both** Emirates Skywards and United MileagePlus at 1:1 — flagged
    on the site as the strongest single option since it covers both routes at full value
  - **Important:** no major transferable points program (Amex/Chase/Capital One/Bilt)
    transfers to American Airlines AAdvantage — this is explicitly called out in a
    callout box on the site so guests don't go looking for a transfer path that doesn't
    exist.
- **Milan → Verona:** Malpensa Express (MXP → Milano Centrale, ~50 min) then
  Frecciarossa/Italo high-speed rail (Milano Centrale → Verona Porta Nuova, ~1h10–1h20).
  Alternative: private transfer direct from MXP to Verona, ~2.5 hrs by car. Both are
  laid out with a comparison table at the bottom of the trains tab.

## Outstanding tasks / next steps

1. **Build `verona-guide.html`** — city guide covering best things to do in Verona,
   famous Veneto regional food/wine, using the same design system (boarding-pass cards
   could work well for restaurant recommendations, e.g.). Not started yet.
2. **Hotel section** — currently a placeholder note on `index.html` ("Hotel
   recommendations are coming soon"). Needs real content once the couple has a room
   block confirmed.
3. **Private transfer company** — `travel.html` currently says "we'll share a
   recommended transfer company once we've vetted one." Needs a real recommendation
   and booking link once chosen.
4. **Personal touches** — the site currently uses "Jake & Dylan" as placeholder-ish
   copy; confirm real names/nicknames, and ask if they want a wedding hashtag added
   to the footer or hero.
5. **Possible additions the couple hasn't requested yet but may want:** an FAQ page,
   packing/weather guidance for August in Verona, dress code details, RSVP redirect
   link back to the main Zola site (Zola still handles RSVP/registry — this site is
   purely informational/logistics).

## Constraints to keep in mind

- Site must stay **plain static HTML/CSS/JS** — no build tools, frameworks, or
  bundlers, since it's hosted directly via GitHub Pages from the repo root with zero
  configuration.
- The couple's **primary wedding website is on Zola** (RSVP, registry, core details).
  This GitHub Pages site is supplementary — Zola doesn't allow custom pages or HTML
  embeds, so anything requiring richer design/interactivity than Zola's editor lives
  here instead, and Zola links out to it.
- Repo is public — don't add anything sensitive (guest personal info, loyalty account
  numbers, etc.) to any committed file.
