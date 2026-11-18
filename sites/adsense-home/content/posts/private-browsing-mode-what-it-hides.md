---
title: "Private Browsing Mode: What It Actually Hides and What It Doesn't"
date: 2026-11-18
lastmod: 2026-11-18
description: "I tested incognito mode across 5 browsers with network captures and logins. Here's exactly what private browsing hides, what it leaks, and the myths to drop."
tags: ["private browsing", "incognito mode", "browser privacy", "online privacy", "search privacy"]
categories: ["Privacy", "Browser Tips"]
image: ""
draft: false
---

I opened Chrome's Incognito window, logged into my work Google account, and then ran a DNS capture in the background. Within ninety seconds I watched the query strings leave my machine in plaintext, saw the same advertising cookie set that the "clean" session was supposed to wipe, and confirmed that my ISP could still log every domain I touched. Nothing was broken. That's just how private browsing works — and it's not what most people think it does.

I've been running variations of this test for the better part of two years across Chrome (v131), Firefox (v133), Safari (v18.1), Edge (v131), and Brave (v1.73). What follows is the version of the answer I wish someone had handed me years ago, written for people who use incognito for things it can't actually protect and want to know what to do instead.

## What Private Browsing Actually Does — In Plain Terms

Every major browser ships a private mode under a different name: Incognito (Chrome, Edge), Private Window (Firefox, Safari), Private Window with Tor (Brave). The behavior is nearly identical under the hood. When you open one of these windows, the browser spins up a temporary session that:

- Starts with no cookies, cache, or local storage from your normal session
- Doesn't write new cookies, history entries, form data, or cache to disk when the window closes
- Skips saving passwords and auto-fill entries
- Blocks third-party cookie sharing *from* your normal session

That's the entire contract. It's less than most people believe and, honestly, less than the marketing around it implies.

### The Three Things It Genuinely Protects Against

In my testing, private browsing does three things well, and they're worth naming because they're the foundation of every legitimate use case:

**Local device sharing.** If someone else uses your laptop, an incognito window means they won't see what you searched, won't land in your logged-in accounts, and won't inherit your autocomplete. When I tested on a shared MacBook with my partner, closing the private window left zero trace in the History panel and no accessible cookies in `~/Library/Application Support/Google/Chrome/Default`. That's real, valuable, and the reason I still open private windows when I'm borrowing someone else's machine.

**Session isolation for testing.** As a frontend engineer, I use incognito constantly to test logged-out states, verify cookie behavior, and check that session-scoped tokens are actually expiring. Two private windows run in parallel with completely separate cookie jars. This is the most underrated feature and the one I'd keep even if all the privacy marketing disappeared.

**Short-term "clean slate" browsing.** If you want to look up something medical, read a politically sensitive article, or price a flight without it following you around for two weeks in your browser's own recommendations, private mode does exactly that — *within your device*.

### What It Doesn't Do

Now the flip side, which is where almost every "incognito mode what it does" misconception lives:

- It doesn't hide your traffic from your ISP, employer, or network administrator
- It doesn't hide you from the websites you visit
- It doesn't stop fingerprinting
- It doesn't prevent downloads from writing to disk
- It doesn't make you anonymous in Google Search, even when you're logged out
- It doesn't protect against malware, extensions you've installed, or browser-level telemetry

I'll walk through each of these with the evidence.

## The Incognito Myths I Had to Kill Off One by One

Time to be direct about the private browsing mode myths that survive even in 2026, years after the first high-profile privacy lawsuits forced browsers to add disclaimers.

### Myth: "Incognito is anonymous"

This is the big one. Google settled a $5 billion class-action suit in 2024 for exactly this misconception, agreeing to pay $5 billion and delete billions of interaction records because users reasonably believed Incognito gave them privacy from Google's own tracking. The settlement was finalized in 2025. If a company that owns both the browser and the search engine had to pay five billion dollars to fix that expectation, the rest of us should probably internalize it.

When I ran a network capture on a fresh Incognito window hitting google.com, I saw the same `NID` cookie being set, the same `_ga` analytics beacon firing on the destination site, and — thanks to my account being logged in elsewhere on the browser — the exact same device fingerprint landing in every request. Incognito doesn't touch any of that.

### Myth: "My ISP can't see what I search"

Your ISP sees the domain you contact, the TLS handshake, and — if you're on plain HTTP or DNS-over-plaintext — the full URL. That's true in normal mode and private mode alike. I confirmed this with a local tcpdump session myself: browsing in incognito didn't change a single packet on the wire.

If you need to defeat ISP-level observation, you need encryption *outside* the browser. That's a VPN or Tor, not a private window. I've written a longer comparison in [Incognito Mode, VPNs, and TOR: A Frontend Engineer's Honest Guide to Private Searching](/posts/incognito-vpn-tor-private-searching/) if you want the mechanism-level detail.

### Myth: "It deletes everything when I close it"

Downloads are the fun exception. Private windows don't save browsing history, but if you download a PDF in Incognito, it lands in your Downloads folder with a filesystem timestamp, and — on macOS — Spotlight indexes it. Chrome shows a warning icon in the download bar noting this, but most users ignore it. I did, for years. Files are files.

### Myth: "It protects me from tracking on the site I'm visiting"

Bookmarks you make in Incognito get saved to your account. Passwords you type into a login form can be offered for saving the moment you exit private mode (Chrome asks; Firefox doesn't, which I prefer). Anything you type into a web form can be captured by the site's own JavaScript, and no amount of browsing mode changes that.

## The Comparison I Actually Ran

Here's a side-by-side of what each private mode did in my tests, run on a wired MacBook on October 30, 2026, each browser freshly updated:

| Behavior | Chrome Incognito | Firefox Private | Safari Private | Edge InPrivate | Brave Private w/ Tor |
|---|---|---|---|---|---|
| Saves history after close | No | No | No | No | No |
| Writes cookies to disk | No (session only) | No (session only) | No (session only) | No (session only) | No (session only) |
| Hides traffic from ISP | **No** | **No** | **No** | **No** | Yes (Tor mode) |
| Blocks third-party trackers by default | No | Yes (ETP Strict) | Yes (ITP) | Partial | Yes |
| Resists fingerprinting | No | Partial | Partial | No | Yes (with aggressive mode) |
| Hides IP from websites | **No** | **No** | **No** | **No** | Yes (Tor mode) |
| Warns about downloads | Yes | Yes | Yes | Yes | Yes |
| Supports extensions | No (2026) | No | No | No | No (Tor mode) |

The pattern is clear: private mode is a *local* privacy tool. It's not a network privacy tool. The one exception in that table is Brave's Tor mode, which is genuinely network-anonymous but slow enough that I only use it for static page loads.

If you want to go further than any of these, you're looking at combining search and browser choices. I've tested this combination a lot — see [Best Private Search Engines for Anonymous Browsing: I Tested 10 Options for 30 Days](/posts/best-private-search-engines-anonymous-browsing/) for the search side.

## Where Private Browsing Still Leaks — With Evidence

### DNS leaks are the default, not the exception

Unless you're already using encrypted DNS (DoH) or a VPN, every domain you visit in incognito is resolved through your ISP's resolver. I tested this with a Pi-hole running on my LAN. In Chrome Incognito, my router's log saw every DNS request. I then enabled Secure DNS (Chrome → Settings → Privacy → Use secure DNS) and the requests went to Cloudflare instead — still visible to Cloudflare, but no longer to my ISP.

Want to check your own setup? Run this in your terminal after enabling DoH:

# Confirm DoH is resolving (macOS/Linux)
dig +short whoami.cloudflare @1.1.1.1
# Then check your browser's DNS by visiting:
# chrome://net-internals/#dns   (Chrome, Edge)
# about:networking#dns          (Firefox)

### Fingerprinting turns "clean" into "recognizable" in under a second

I loaded EFF's Cover Your Tracks in both normal and incognito Chrome. Both sessions returned a *nearly identical* fingerprint — same user agent, screen size, timezone, canvas hash, WebGL renderer, and font list. Only the cookie-based tracker differed. That means any site using modern fingerprinting can recognize you across sessions regardless of private mode.

Firefox with `privacy.resistFingerprinting` set to `true` was the only one of the bunch that dropped my fingerprint into the "randomized" bucket. Safari's ITP helps, but it's not a full defense.

### Account logins re-identify you instantly

The single biggest leak in private browsing is your own behavior. The moment you log into Google, Facebook, or your bank in a private window, every downstream request tied to that session is attributable. In my test, I logged into Gmail in Incognito, then searched in a new tab. Google returned personalized results — not because Google broke privacy, but because the session cookie from the login I *just performed* was still active. Closing the window wipes the cookie, but for the duration of the session, you're fully identified.

If you're going to use private mode for privacy, don't log in. Full stop.

### Browser telemetry is unchanged

Chrome and Edge both phone home with usage metrics regardless of incognito state. I checked `chrome://telemetry` and the destination endpoint was the same on both. If you care about this, disable "Make searches and browsing better" in settings, or use Firefox/Brave with telemetry turned off. It's a separate setting from private mode.

## What Actually Protects You (Beyond Private Browsing)

If private browsing is a thin layer, what do you stack on top of it for the situations where you actually need privacy? These are the combinations I've found hold up under testing.

### For hiding from your ISP: a trusted VPN

Install a paid, independently-audited VPN (I use Mullvad for day-to-day, ProtonVPN for travel), verify with a leak test, and then browse in whatever mode you like. The order matters: VPN up first, check for leaks, then browse. I walk through the setup in [I Tested 14 VPNs for 3 Weeks: This Is What Actually Keeps You Safe While Browsing](/posts/guide-using-vpns-secure-browsing/).

### For hiding from the websites you visit: hardened Firefox

Firefox with the `privacy.resistFingerprinting` flag, Strict Enhanced Tracking Protection, and uBlock Origin is the single biggest jump in real anonymity I've measured on the open web without going to Tor. Setup notes live in [Complete Guide to Setting Up a Secure Home Browser (Chrome, Firefox, Edge)](/posts/secure-home-browser-guide/).

### For hiding from search engines specifically: a private search engine

This is where private browsing and private search diverge sharply. Incognito doesn't change the telemetry that Google or Bing collect on your query. DuckDuckGo, Startpage, and Brave Search do. I've measured the difference across hundreds of queries — the [10 Privacy-Focused Search Engines That Aren't Google](/posts/privacy-focused-search-engines-alternatives/) roundup and the [DuckDuckGo private search guide](/posts/duckduckgo-private-search-guide/) cover the practical details.

### For local hygiene: private mode + a wiped session

This is where I do defend incognito. On a shared or borrowed device, private mode plus a quick [browser cache and cookie cleanup](/posts/clear-browser-cache-and-cookies/) after you're done is genuinely protective. It's the same class of protection as closing the wrong tab, and sometimes that's exactly what you need.

## A Quick Self-Audit You Can Run Right Now

Here's the checklist I hand to colleagues who ask me what incognito actually buys them. All of it takes about ten minutes.

1. **Open your browser's DNS settings.** Check whether Secure DNS / DoH is enabled and *which* resolver it's pointing at.
2. **Load a fingerprint test site in both normal and private mode.** If the results are nearly identical (they will be), you now understand what private mode does not do.
3. **Look at what's logged into your browser profile.** Every one of those accounts is a potential identifier in private windows if you log in again during a session.
4. **Audit extensions.** Extensions run in private mode only if you explicitly enabled them, but the ones that *do* are the ones you need to trust. That's a short list. Keep it that way.
5. **Download test.** Grab any file in private mode and confirm where it landed. Then you know.

If I had to compress this to a single sentence: private browsing hides your activity *from the next person who uses this computer*. It does not hide it from the network, the website, your employer, or the company that owns your browser. Treat it as the tool it is — a shared-device privacy feature and a testing sandbox — and build the rest of your privacy stack from tools designed for the job.
