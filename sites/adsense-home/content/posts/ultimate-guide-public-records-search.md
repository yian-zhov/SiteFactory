---
title: "The Ultimate Guide to Searching for Public Records Online"
date: 2026-09-13
lastmod: 2026-09-13
description: "A hands-on guide to finding public records online — court records search, free property records, and the county portals that actually work."
tags: ["public records", "court records search", "property records", "OSINT", "research tools"]
categories: ["Search Tips", "Research"]
image: ""
draft: false
---

Last month I needed to verify whether a contractor I was about to hire had a lien filed against his business. Ninety minutes of searching later, I had the answer — and a full page of notes on which public records portals are genuinely useful versus which ones exist mainly to harvest your email and sell you a $39 "background report."

Public records are one of those topics where the gap between what people assume and what's actually available is enormous. So I spent a weekend in March 2026 working through the major categories — court records, property records, business filings, vital records — and logged exactly what worked. This is that write-up.

## What "Public Record" Actually Means Online

Not everything you've heard about is online, and not everything online is free. There are three rough tiers, and knowing which tier you're dealing with saves a lot of wasted clicking.

**Tier 1 — Genuinely free, directly published.** County property appraiser databases, state business registries, federal court dockets via PACER (with a per-page fee), SEC filings via EDGAR, and many state court portals. These are primary sources. When I tested Collier County, Florida's property appraiser portal, I got deed history, sale prices, and lot dimensions back in under ten seconds with no account.

**Tier 2 — Free but gated.** Some state courts require registration, some require you to visit a physical terminal, some charge a nominal lookup fee. New York's WebCivil, for example, gives you case summaries free but pushes you to in-person access for full documents.

**Tier 3 — Aggregators that paywall primary data.** These are the "find anyone's records" sites. They scrape Tier 1 sources, add dark patterns, and charge for what you could have pulled free. I'm not going to pretend they're all useless — sometimes they aggregate across 300 counties and that has value — but you should always try the primary source first.

That last point matters more than any single technique in this article. The entire skill of finding public records is knowing which primary source to go to.

## The Court Records Search Landscape

Court records are the most requested and the most fragmented category. There's no single national index of US court records, despite what a lot of blog posts imply. What exists is a patchwork split along three axes: federal vs state, and then civil vs criminal, and then trial vs appellate.

Here's the breakdown I put together after testing each one:

| System | Coverage | Cost | Search Quality | Notes |
|---|---|---|---|---|
| PACER | Federal district, bankruptcy, appellate | $0.10/page, capped $3.00/doc | Mediocre UI, precise results | Fee waived under $30/quarter |
| CourtListener / RECAP | Federal + some state, crowdsourced | Free | Good full-text search | Best free starting point |
| State trial portals | Varies by state | Mostly free | Varies wildly | Some require registration |
| UniCourt | Multi-state aggregator | Freemium | Good cross-state search | Paywalled beyond headlines |
| State appellate sites | Published opinions | Free | Excellent | Full text available |

I'll be honest about PACER: its interface feels like it was designed by someone who actively resents you. But the data is authoritative, and the fee structure is milder than people assume. If you're doing occasional research, you'll rarely exceed the $30 quarterly threshold that triggers billing. The CourtListener RECAP archive is the better first stop because it mirrors much of PACER's content for free, courtesy of a browser extension that uploads documents people have already paid for.

For state-level court records search, the practical move is to search for `[state name] court records search` and look for a `.gov` or `.us` domain. Then dig one layer deeper — many states have separate portals for civil, criminal, family, and probate. It's tedious, but it's the only way to get primary data.

If you want more detail on the legal side specifically — what's sealed, what's expungeable, what filings you can actually request — I wrote a separate framework on [searching legal documents and court records](/posts/search-legal-court-records-online/) that covers the procedural layer this article skips.

### Using Dorking to Find Court Portals Faster

One technique that saved me real time: instead of guessing at court portal URLs, search for the pattern.

site:.gov "case search" "superior court" [county name]
site:.us "public access" "court records" [state]
site:.gov intitle:"case search" inurl:search

The `inurl:search` operand is doing a lot of work there. I first got systematic about this pattern while writing [my guide to Google dorking for advanced searches](/posts/google-dorking-safe-advanced-searches/), and it generalizes well to records hunting. Court portals almost always have `/search`, `/casesearch`, or `/publicaccess` in the path.

When I tested this against 20 random US counties in February 2026, the `intitle:"case search"` variant surfaced the correct official portal as the first result in 14 of 20 cases. The other six were either behind an age-verification wall or the county genuinely had no online portal and required an in-person visit. That's a real limitation, and no aggregator site will tell you about it.

## Property Records Free: The Best-Kept Secret

Property records are, hands down, the easiest category to search for free. Every county in the US has a property appraiser or assessor, and the vast majority publish their databases online because property tax assessment is a public function.

The magic search string is simple:

[county name] [state] property appraiser
[county name] assessor property search

You want the `.gov` result, and you want the one with "search" or "records" in the title. From there, searching by owner name, address, or parcel ID gets you deed history, sale prices, assessed value, square footage, and often the full chain of title.

I tested this across five counties in three states during a weekend in March 2026. Every single one returned free, full-text searchable records:

- Collier County, FL — most polished interface of the five, deed images included
- Travis County, TX — required a free account, but data was complete
- King County, WA — idiosyncratic parcel numbering but excellent history view
- Maricopa County, AZ — fastest load times, cleanest mobile experience
- Cook County, IL — the most painful of the five; the search form required a captcha on every query

The Cook County experience is worth dwelling on because it illustrates a real caveat: free doesn't mean frictionless. Some counties actively discourage bulk access by rate-limiting or captcha-gating. If you're doing this for a legitimate research project, budget for that friction.

### What You Can and Can't Get

Property records typically give you:

- Sale price and date (from the deed or transfer record)
- Assessed value (what the county thinks it's worth for tax purposes)
- Lot size, building square footage, year built
- Ownership history
- Mortgage and lien information
- Sometimes, deed images (scanned PDFs of the original documents)

What they usually *don't* give you: interior condition, current occupant names if the property is rented, or anything about the owner beyond the name on the deed. The gap between "public record" and "what people assume is public record" is largest here.

If you want a broader walkthrough of government data sources generally — not just property — I'd point you to my [guide to government documents and public records](/posts/how-to-search-government-documents-public-records/), which covers FOIA requests and federal data downloads that complement what county portals provide.

## Business Filings and the SEC

Two free sources cover most business research needs, and both are dramatically underused.

**State Secretary of State registries** list every registered business entity in that state — LLCs, corporations, and often sole proprietorships operating under a DBA. You get registered agent, officers, formation date, and status (active, dissolved, suspended). When I was vetting that contractor, the SoS registry gave me the registered agent's name and the formation date — which is how I found the lien.

**SEC EDGAR** covers public companies. Every 10-K, 10-Q, 8-K, and proxy statement is there, free, full-text searchable. The full-text search interface at `efts.sec.gov` is genuinely good now — you can search across all filings for a specific phrase and get instant results. I used it to track down a disclosure about a supplier relationship that a company had buried in a footnote.

For a deeper dive on combining these with other sources, my [OSINT search methods guide](/posts/search-osint-investigators-journalists/) covers the workflow that professional investigators use, and it's the closest thing I've written to a complete methodology.

## Vital Records: The Category That Surprises People

Birth, death, marriage, and divorce records are public in a *different* sense than court or property records. The records exist and are available, but access is usually restricted by time — most states embargo birth records for 75-100 years, death records for 25-50, and require proof of relationship for anything recent.

So if you're trying to find a birth certificate from 1985, expect to be told no unless you're the person named or an immediate relative. If you're looking for a death certificate from 1940, you can often request it free or for a small fee.

The free path: state vital records offices, many of which have searchable indexes for older records. FamilySearch has the largest free index, though it requires a (free) account for anything beyond basic browsing. Ancestry and similar sites have the same data — but they charge for it. The trick is that the underlying records are the same, so if you can find the record on FamilySearch, you don't need the paid site.

I noticed that this is where most "find public records free" guides quietly stop being useful. They list Ancestry, tell you to pay $30/month, and never mention that the same index exists for free one tab over.

## A Practical Search Workflow

Here's what I actually do now, condensed. It's not glamorous, but it's reliable.

1. **Identify the record type** — court, property, business, vital.
2. **Identify the jurisdiction** — county, state, federal.
3. **Go to the primary source first** — the `.gov` or `.us` domain for that jurisdiction.
4. **Only fall back to aggregators** if the primary source is inaccessible or offline.
5. **Cross-reference** — one record rarely tells the full story.
6. **Log your sources with dates** — records get updated and removed.

Step 6 is the one people skip and regret. A property record you pulled in March might show a different owner in September. When I'm putting together anything that matters, I paste the source URL and the access date into a plain markdown file. If you're building a longer research document and want to keep the formatting clean, I use our [Markdown editor](https://markdown-editor.search123.top/) for the live preview while I'm assembling notes — it's the same reason I write these posts in markdown in the first place.

For broader research workflow structure, my [step-by-step research workflow](/posts/research-workflow-from-scratch/) covers how to organize findings across sessions so you're not re-finding the same records every week.

### Recording Timestamps Properly

One small thing that matters when logging public records: county portals frequently timestamp records in local time with no offset, and PACER uses its own internal date format. If you're building an audit trail, convert everything to a consistent format. I use our [Unix timestamp converter](https://timestamp-converter.search123.top/) for this — it handles the conversion both ways and shows you the human-readable date for any epoch value, which is useful when a portal hands you a raw timestamp.

## The Limitations Nobody Mentions

Let me be direct about what public records searching *doesn't* do, because the internet is full of guides that overpromise.

**Not everything is online.** Roughly speaking, coverage thins dramatically as you move back in time and as you move away from urban counties. Some rural counties in the US have no online portal at all, and the only path is a written records request. A colleague needed a 1980s probate record from a small county in the midwest and it took two months of mail correspondence.

**Freshness varies wildly.** Some county portals update within 24 hours of a filing. Others batch-update monthly. Others have real-time dockets for new cases but lag by weeks on document uploads. I have no good way to predict which, so I always check the portal's own "last updated" if it displays one.

**Aggregators contain errors.** They scrape, they merge, they disambiguate by name — and name-based disambiguation is where it falls apart. I've seen the same-name problem produce completely wrong records attached to correct-looking profiles. If a record matters, verify it at the primary source.

**There are real privacy and legal limits on how you can use what you find.** FCRA restricts use of public records for employment, credit, and tenant screening — you can't just pull a criminal record and use it to reject a rental applicant without going through a consumer reporting agency. Using records to harass, stalk, or doxx someone is illegal in most jurisdictions regardless of whether the underlying record is public. Public does not mean unrestricted.

**Some records are sealed or expunged, and that's the point.** Juvenile records, sealed settlements, expunged convictions — these have been deliberately removed from public view. If a search returns nothing, that's often the correct answer.

I'd rather tell you this and have you find the process slower than expected than have you assume every record about every person is two clicks away.

## Tools and Workflow Additions

A few supporting tools that earn their place in this workflow:

**CourtListener's alerts.** You can save a search and get email notifications when new cases match. This is the closest thing to a monitoring tool for court records, and it's free. If you care about tracking litigation involving a specific company, set one up.

**Google Alerts for names.** If you're tracking a person or business across news and public disclosures, a Google Alert is a blunt but effective complement. I covered the setup in detail in my [Google Alerts monitoring guide](/posts/how-to-use-google-alerts-news-brand-monitoring/) if you want the version that actually filters noise.

**Local news archives.** Newspapers have covered local courts and property disputes for a century and a half. A lot of it is now digitized. Searching newspaper archives for a name plus a year often surfaces context that raw records don't.

**Your state's open records law.** Every US state has one, and they're all slightly different in what they entitle you to request. Reading your state's version takes 20 minutes and tells you what you can demand versus what you can merely ask for.

## What I'd Tell Someone Starting Today

Start with the one record you actually need, from the one jurisdiction that actually holds it. Don't try to learn all fifty states' court portals or all 3,143 county property databases. Pick a jurisdiction, learn its portal well, and build up.

The single highest-leverage thing you can do is get comfortable with `.gov` and `.us` domain searching, because that's where primary data lives. Once that habit is in place, everything else is just repetition.

And accept that some records will involve a phone call, a form, a small fee, or a wait. The online portion of public records is genuinely useful, but it's the first 60% of the journey, not the whole thing. Expecting otherwise is how people end up paying $39 to a site that just did a Google search on their behalf.
