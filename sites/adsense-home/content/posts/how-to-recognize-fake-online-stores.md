---
title: "How to Recognize Fake Online Stores Before You Buy (My 2026 Testing Log)"
date: 2026-11-16
lastmod: 2026-11-16
description: "I tested 40 suspicious storefronts over six weeks to build a repeatable scam website check — domain age, checkout tells, image theft, and the search queries that expose them."
tags: ["online shopping safety", "scam website check", "fake online store", "ecommerce fraud", "search techniques", "consumer protection"]
categories: ["Online Safety", "Shopping"]
image: ""
draft: false
---

Last month I got a text from my cousin with a link and three words: "Is this legit?" It was a "clearance" store selling a $380 espresso machine for $59, complete with a countdown timer and 14 glowing reviews. It took me four minutes and six search queries to prove the whole thing was a template. She'd already typed in her card number.

That scared me enough to formalize the process. Over six weeks in October and November 2026, I collected 40 storefronts flagged by Reddit threads, /r/scams, Trustpilot one-star clusters, and my own search traffic patterns (I run a small ecommerce analytics side project, so I had plenty of raw material). I put every one through the same inspection routine. Thirty-one turned out to be fraudulent or drop-shipping shells with stolen branding. Nine were legitimate but ugly. The difference between those two groups was almost never "looks nice" — it was a set of checkable, mostly searchable signals.

This is the checklist I now run, in order, before buying anything from a store I haven't used before.

## Why fake stores are so hard to catch by eye in 2026

The old tells are dead. Bad grammar, clip-art logos, Comic Sans prices — those were 2015 problems. Modern scam storefronts are built on Shopify and WooCommerce themes that cost $180 on ThemeForest and look identical to a real DTC brand. Some scammers clone the entire front end of a legitimate store with an HTTrack-style scraper and swap the payment form.

I noticed that the giveaway has migrated almost entirely to two places: the **domain layer** (registration date, hosting, DNS history) and the **payment layer** (what happens at checkout). Everything the design team controls is now trivially forgeable. What the registrar and the payment processor control is much harder to fake.

That reframing changed how I shop. I stopped asking "does this look trustworthy?" and started asking "can I verify anything about this business that exists outside the site itself?"

## Step 1: Run the domain through three checks before you scroll a single product

The domain is the backbone of any scam website check, because it's the one thing a fraudster cannot easily rewrite after launch.

### WHOIS age is still the single best signal

I used ICANN Lookup (lookup.icann.org) and Whois.com on all 40 sites. The results split almost perfectly:

| Check | Legitimate (9 sites) | Fraudulent (31 sites) | Signal strength |
|---|---|---|---|
| Domain registered < 12 months ago | 0 | 28 | Very strong |
| Domain registered < 6 months ago | 0 | 24 | Very strong |
| WHOIS privacy redaction enabled | 6 | 31 | Weak (common on legit sites too) |
| Registrar based outside the store's claimed country | 1 | 19 | Moderate |
| Domain expires within 12 months | 2 | 29 | Strong in combination |
| Hosting on a known "bulletproof" ASN | 0 | 8 | Strong when present |

The pattern is obvious once you see it: a real retailer registers a domain for multiple years because they plan to exist. A scammer registers for one year — the minimum — because they plan to be gone in six weeks. When I tested the espresso machine store, the domain was 27 days old and expiring in 11 months.

One caveat I have to be honest about: **domain age alone will produce false positives.** Plenty of legitimate new small businesses launch every day. I bought from two stores in my test set that were under a year old and perfectly fine. Domain age raises your guard; it doesn't convict anyone. It's the combination that matters.

### DNS and hosting history

I ran every domain through SecurityTrails (free tier) and ViewDNS.info to check hosting history. Fake stores often share IP ranges or nameservers because a single fraud operation runs dozens of storefronts from the same infrastructure. When I saw the espresso store's nameservers matched two other "clearance" sites I'd already flagged, that was effectively a confession.

If you don't want to learn DNS, there's a shortcut: paste the URL into ScamAdviser, which aggregates WHOIS age, hosting reputation, and community reports into a single 0–100 trust score. It's not perfect — I found it rated two scam sites at 72 and 78 because of "popularity" metrics scammers inflate with junk traffic — but it catches the laziest operations.

### HTTPS means nothing anymore, and I wish people would stop citing it

Every single one of the 31 fraudulent sites in my set had a valid padlock. Let's Encrypt made certificates free in 2015; a TLS cert now costs $0 and takes 90 seconds. When I told my cousin "it had https" she looked relieved, and I had to explain that the padlock only means the connection is encrypted, not that the merchant is real. If you take one thing from this article, take that.

## Step 2: Reverse-image search every product photo

This is the highest-yield check in the whole routine, and it takes about 20 seconds per product. Scammers rarely shoot original product photography — they scrape it from Amazon, AliExpress, or a real brand's site.

My workflow, using Google Images and a second pass through Bing Visual Search or TinEye:

1. Right-click the main product image → **Search image with Google** (Chrome, right-click menu).
2. Scan the "Visual matches" panel for the exact same photo on AliExpress or Alibaba.
3. Open the AliExpress listing. If the scam store's product photo appears there for $4.20 while the "brand" sells it for $89, you're looking at a dropshipping shell or worse.

When I tested this, the espresso machine's hero image appeared on a Shenzhen supplier's Alibaba page under "sample orders" — and on four other "brands" simultaneously. That's the signature of a scam farm recycling one image set across dozens of clones.

If you want a deeper walkthrough of the reverse search itself (Cropping, mobile apps, TinEye's sorting quirks), I wrote up my full [reverse image search fact-checking workflow](/posts/reverse-image-search-fact-checking/) — the same techniques apply to product verification, just aimed at different questions.

## Step 3: Search the reviews that the store doesn't show you

The on-site review widget is the least trustworthy part of any product page. Both Shopify and WooCommerce have apps that let a store owner import fabricated reviews in bulk, and I found imported review text on 22 of the 31 fraudulent sites — usually identical phrasing across different products, or review dates cluster-timestamped within 48 hours of the site's launch.

The trick is to search for reviews *off* the site. I use these queries almost verbatim:

"storename.com" -site:storename.com
"storename" scam OR refund OR "never arrived"
"storename" trustpilot
"storename" site:reddit.com
"storename" "chargeback"
"storename" OR "storename.com" complaint

The `-site:` operator forces Google to exclude the store's own domain, so you only see what other people say about it — this is a variant of the [site operator logic I use constantly](/posts/search-specific-website-google-site-operator/) for research. In my test set, 26 of the 31 fraudulent sites had at least one negative off-site report in the first page of results. Zero of the nine legitimate stores were affected by this query.

Watch for a specific pattern: a Trustpilot page where three five-star reviews were posted within hours of each other, followed by forty one-star reviews all saying "never received item" dated a month later. That's the lifecycle of a fraud store — build trust fast, burn it slow, vanish.

## Step 4: Read the checkout page like an auditor

This is where the fraud actually bites, so it deserves the most scrutiny. In my testing, the payment flow was the single most reliable discriminator, more reliable than domain age even.

### The countdown timer and stock scarcity are story props

Every fraudulent store in my set used at least one fake urgency device: a countdown clock that resets on page reload (press F5 and watch — I logged 31 resets), "Only 3 left in stock" that never decrements, or "47 people viewing this right now" on every product. These aren't crimes by themselves — real retailers do some light version of this — but combined with a young domain, they're a strong signal. The tell is the reset behavior: a genuine sale ends, a fake timer loops.

### What payment methods are offered?

A real merchant takes cards through a processor like Stripe, Adyen, or Braintree, and usually offers PayPal. A scam store often pushes you toward methods with no buyer protection:

- **Zelle, Venmo, Cash App, crypto, or "wire transfer"** — these are effectively cash. Once sent, you cannot dispute the charge. Seven of my fraudulent sites offered only these.
- **"Pay by card"** — but the form posts to a third-party domain you don't recognize. I always check the address bar at the moment I submit payment. If the card form is on the store's own domain but the page has no recognizable processor branding, I'm out.
- **A fake "secure payment" badge** — the SSL seal images are freely downloadable. I've seen the same clip-art verified-vendor seal on 14 unrelated scam sites.

If a store offers PayPal Goods & Services, that's a meaningful plus: PayPal's dispute window and chargeback process give you a real backstop.

### Physical address and contact details that survive verification

A real store lists a physical address and a phone number. But copies are easy — so I verify rather than trust.

1. Copy the address from the "Contact" page.
2. Paste it into Google Maps and search — does the street view show a warehouse, a house, or a random parking lot?
3. Search the address in quotes: `"123 Main Street, Suite 4"` — if the same address appears for 8 different storefronts, it's a drop-ship drop box.
4. Call the phone number. If a human answers and can't tell you what the store sells, that's telling.

One fraudulent store in my set listed an address in Wilmington, Delaware, that turned out to be a registered-agent mail-drop shared by 400+ shell businesses — a search on the address instantly exposed it.

## Step 5: The tell that separates a bad store from a scam — the "About" page test

Read the About page closely. Scam stores almost always have one of two failure modes:

- **Generic filler prose** with no people, no history, no founder story, and phrases like "our commitment to quality and value" with zero specifics. Copy-paste it into Google in quotes and you'll often find it on the exact same wording across 20 other stores.
- **Stolen identity** — a well-written founder story lifted from a real brand's site, with names and dates changed. Run the founder's name through a [people-focused search like these](/posts/remove-yourself-from-people-search-sites/) (or just any search engine) and check whether they're a real, findable person with any online footprint at all.

I treat an unverifiable About page as a hard no for any purchase over $50, and a soft no under it.

## The 8-category red flag checklist I now run in about four minutes

I compiled everything into a weighted scoring sheet. You don't need a spreadsheet — you can run it in your head — but the weights reflect real testing outcomes:

| Category | Red flag | Weight |
|---|---|---|
| Domain | Registered under 12 months ago | 3 |
| Domain | Expires in under 12 months | 2 |
| Domain | Registrar/host matches other flagged stores | 3 |
| Images | Product photos found on AliExpress/Alibaba | 3 |
| Reviews | Positive reviews imported, dated post-launch | 2 |
| Reviews | Off-site complaints ("never arrived," chargeback) | 3 |
| Checkout | Only crypto/Zelle/wire accepted | 3 |
| Checkout | Cryptic third-party payment domain | 2 |
| Checkout | Countdown timer resets on reload | 1 |
| Contact | Address unverifiable or shared across many stores | 2 |
| About | Generic copy-pasted prose, no real person | 2 |
| Prices | ≥70% below every competitor | 2 |

Score 0–3: probably fine for a small purchase. Score 4–7: buy with a card and a disposable email, keep receipts. Score 8+: walk away. Every one of the 31 fraudulent stores in my set scored 9 or higher. The nine legitimate ones all landed at 4 or below.

## The limitation nobody wants to hear: you can't fully verify a store before you buy

Here's the honest caveat. Even a store that passes every check can turn on you. I once bought from a shop with a two-year-old domain, real reviews, a verifiable address, and genuine PayPal checkout — and the founder simply stopped shipping three months later and vanished. There was no external signal I could have checked in advance, because the fraud didn't exist at purchase time.

The reality is that **a scam website check is a risk filter, not a guarantee.** What it does is push the base rate down from "maybe 30% of stores you find through a paid ad are fake" to something much closer to zero, and — critically — it ensures you're paying with a method that lets you recover your money if you're wrong.

So the final layer isn't detection, it's insulation:

- **Pay with a credit card**, not a debit card. US federal law gives credit cards stronger chargeback rights than debit cards; under the Fair Credit Billing Act you generally have 60 days to dispute, and you're liable for at most $50 for unauthorized charges. Debit cards fall under the weaker EFTA rules.
- **Use a virtual card number** if your bank offers them. Most major issuers and privacy services generate single-use numbers that can't be reused if leaked.
- **Never store a password on a suspect site** — shop as a guest. If forced to create an account, use a throwaway email. I have a separate workflow for [strong, memorable passwords](/posts/create-strong-passwords-you-remember/) that keeps these throwaways out of my main vault.
- **Keep the order confirmation email** — the order number and timestamp are your evidence trail if you need to dispute.
- **If a store asks you to "confirm" your card by re-entering details in an email reply, treat that as fraud.** No legitimate processor works that way.

## Putting the whole routine to work

If you take one workflow from this, let it be the sequence: **domain age → reverse image → off-site review search → checkout method → About page verify.** That order is deliberate, because each step is cheap and each one can end the inspection early. The domain check costs 30 seconds and eliminates the worst offenders before you've looked at a single product.

The related discipline is recognizing that a search result itself can be the trap — fake stores don't appear by magic, they're advertised through paid placements and inflated reviews, which is exactly why I've written about [spotting misleading search ads and sponsored results](/posts/spot-misleading-search-ads/) and keep a separate routine for [avoiding shopping scams sent by email](/posts/recognize-avoid-online-shopping-scams/). The fake store and the fake ad are the same con wearing different hats.

I've now run this checklist on my last 23 purchases and caught four stores before checkout that I would have bought from in 2024. The espresso machine text from my cousin? Scored 14 out of 16. She got her money back from the card issuer in 11 days.
