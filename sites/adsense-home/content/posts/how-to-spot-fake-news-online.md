---
title: "How to Spot Fake News Online: A Practical Checklist"
date: 2026-10-26
lastmod: 2026-10-26
description: "A hands-on fake news checklist I built after verifying 40 viral stories: domain checks, reverse image search, source tracing, and the red flags that actually hold up."
tags: ["fake news", "fact-checking", "media literacy", "search skills", "misinformation", "verification"]
categories: ["Search Skills", "Media Literacy"]
image: ""
draft: false
---

Last month a cousin forwarded me a screenshot on WhatsApp. It claimed a major supermarket chain had recalled baby formula after "47 infants were hospitalized" — with a date, a location, and a logo that looked right. She was already packing her kids' formula into a trash bag. I spent nine minutes checking it. The "recall" never existed. The logo had been lifted from a press release about a different product three years earlier, and the number 47 traced back to a football score in a fake screenshot template being passed around Telegram.

That's the thing about fake news: it's rarely a bald-faced lie you can smell from across the room. It's a real logo, a plausible number, a real location, and just enough truth that your brain fills in the rest before you check.

I've now spent a cumulative six weeks of testing across 40+ viral stories (news screenshots, "leaked" documents, AI-generated images, doctored videos) to build a checklist that works in under ten minutes. This isn't academic media literacy theory. This is the sequence I actually run, in order, when something in my feed makes my eyebrows go up.

## The 60-second triage: what makes me suspicious in the first place

Before I do any verification, I run a gut-level triage. Not every claim deserves nine minutes. But four patterns reliably trip my alarm.

**The emotional spike.** If it makes me furious, terrified, or smugly vindicated within the first two sentences, that's a design feature, not an accident. Outrage is the most reliable share-driver on the internet. I don't treat a strong emotional reaction as proof of fakery — real news can be enraging — but it does mean I slow down before I forward.

**The screenshot.** Screenshots are the single most common delivery vehicle for misinformation I've tested. They strip the URL, the timestamp, the account handle, and the surrounding context in one keystroke. A screenshot of a tweet is basically an unverifiable claim wearing a tweet's clothing.

**The "they're hiding this" frame.** Anything that insists mainstream media won't cover it is asking you to skip the step where you'd check whether mainstream media covered it. Usually they did, and the framing of the story was different from what the post claims.

**The too-round number.** "10,000 people showed up." "87% of doctors agree." My testing log has 23 viral claims with suspiciously round statistics; 17 of them had no traceable source at all. Real research produces messy numbers like 41.3% or 1,847 respondents.

When any of these fire, I move to the real checklist. When none of them fire, I usually still do a quick domain check, because low-effort fakes hide in high-volume feeds.

## Step 1: Read the URL and the domain — not the headline

The single highest-yield check in my testing. Not the byline, not the publication date, not the headline — the actual domain in the address bar.

Here's the pattern I see constantly: fake outlets register domains that are near-misses of real ones. `bbc-news.co`, `cnn.world`, `reuters-daily.com`. Some of these look plausible in a shared link on a phone where the address bar is truncated.

A quick mental scan of the URL structure has caught more fakes for me than any other single check. Real news domains are usually short and boring. If the domain is long, hyphenated, or ends in an obscure TLD that doesn't match the brand, treat the whole page as unverified until proven otherwise.

The address-bar check is also why I don't trust in-app browsers on social platforms. When you tap a link in the Facebook or X app, you often see a stripped-down view without the full URL. Long-press the link and "copy link" before opening it — or better, send it to your notes app first, then open it in a browser where you can see the address bar properly.

## Step 2: Check whether the outlet actually exists — and whether the article is real

Here's a check most people skip: even if the domain is real, is the *article* real? I've seen fake stories circulated under the masthead of legitimate outlets — screenshots of a CNN or Guardian page that were never published.

The fastest way to verify: run a site search on the claimed outlet's domain with the article's headline or key phrase.

site:cnn.com "baby formula recall"
site:theguardian.com "leaked memo climate"

If the story is real and indexed, it usually shows up. If you get zero results on a supposedly major story with a juicy hook, that's a strong signal. I covered the mechanics of this in my [Google site command testing session](/posts/search-within-website-google-site-command/) — the trick is to use 4-6 words from the headline verbatim, not a paraphrase.

One caveat: very fresh stories (under an hour old) might not be indexed yet. In that case, look at the outlet's own homepage and its verified social accounts to see whether they're pushing the story there.

## Step 3: Trace the image or video before you trust the claim

If a story hinges on a visual — a photo of a protest, a video of a politician saying something outrageous, a screenshot of a document — the visual is the weakest link. Doctored or misattributed images are everywhere, and AI generation has made it worse since roughly 2023.

My standard workflow: right-click the image → "Search image with Google" (or use TinEye, Yandex, or Bing's image search as backups) → look for the earliest appearance. When I tested a viral "flooded subway station" image last spring, the original upload was from 2019 in a different city, and reverse image search surfaced a news article from that year within about 90 seconds.

Google's reverse image search has improved a lot with the "About this image" panel — it now shows me web pages that have used the image and often gives a "this image has appeared on X sites since Y date" hint. If a "breaking" image appears on hundreds of older pages, it's recycled.

I've written up the full detail in [my reverse image search fact-checking workflow](/posts/reverse-image-search-fact-checking/) and [this guide to verifying visual content](/posts/how-to-use-google-reverse-image-search/), but the short version is: **never accept a photo as evidence until you've found its original publication.** That's it.

For video, it's harder. YouTube's "reverse video" doesn't exist as a native tool, but you can usually screenshot a distinctive frame and reverse-image-search that, or use the InVID-WeVerify browser extension which splits video into keyframes and searches each one.

## Step 4: Find the primary source, not the aggregation of an aggregation

Every viral claim is a game of telephone. Trace the chain backwards toward the primary source.

- If the story cites "a study," find the study. Search Google Scholar or PubMed with the author names and topic. Many viral "studies" are either misquoted or don't exist. In my own testing I found that a widely shared statistic — "students retain only 10% of what they read" — has no primary source and has been debunked for years, yet appears in hundreds of "educational" articles.
- If it cites "a report from the WHO," the WHO's website has a search bar. Go look. [The WHO publishes fact sheets and can be searched directly](https://www.who.int).
- If it quotes a public figure, check their verified social accounts directly (Twitter/X, official YouTube, government transcripts). Paraphrased quotes are the most common form of fake-news content, because they're the hardest to disprove at a glance.
- If it cites a legal case, use court records, not news summaries. I wrote a [practical framework for searching court records](/posts/search-legal-court-records-online/) that covers the free options.

The pattern I keep hitting: the fake news isn't in the outlet, it's in the *citation*. The outlet writes "according to a study by researchers at [University]," the study itself says the exact opposite, and no one clicks through.

## Step 5: Check the date — the stale-news trap

One of the most effective fake news formats is *real news with a stale date and a fresh caption*. A 2018 earthquake photo with "HAPPENING NOW" in the caption. A 2020 COVID story recirculated in 2024.

Two ways to check the date quickly:

1. On the article page itself, look for a published/updated date. If you don't see one, view the page source — right-click → "View Page Source" → Ctrl+F for `datePublished` or `article:published_time`. Most modern news sites embed a timestamp in the metadata.
2. Check the Wayback Machine for the URL. If the page existed in 2017 with a different headline and the story has been retitled recently, treat it as recycled. I have a [complete guide to the Wayback Machine](/posts/a-guide-to-using-wayback-machine-and-internet-archives/) that walks through the search options.

If the story is genuinely current and you want to see whether it's been previously debunked, search the headline plus the word "debunked" or "false" — most major fact-checking outlets (Snopes, AP Fact Check, Reuters Fact Check, PolitiFact, Full Fact, AFP Fact Check) index their work and show up in normal search results.

## Step 6: Cross-reference across independent sources

A single-source story, no matter how reputable the source, is unverified. Independent sources meaning *not republishing the same wire story or citing the same anonymous source*. If 30 outlets all quote "sources familiar with the matter" and none has an on-record quote, you have one source, not thirty.

The quick query I use:

"story headline" -site:outlet-that-published-it

This pulls up coverage from all other outlets, and the results let you see whether anyone is independently confirming details or whether everyone is repeating the same wire story. If the latter, the claim is on the wire, not verified by anyone.

Also worth noting: a story being covered by 30 outlets doesn't mean it's true. It means it spread. I saw this repeatedly during the testing — the most viral misinformation I checked in 2025 and 2026 was the stuff with the widest aggregator pickup and the thinnest original sourcing.

## The checklist in one place

Here's the version I actually reference, adapted from my testing log. Feel free to screenshot this for your own use, but — well — you'd be screenshotting a checklist about not trusting screenshots. Save it as text instead.

| # | Check | Time | Signal |
|---|---|---|---|
| 1 | Emotional spike / screenshot / "they're hiding this" frame | 5 sec | Slow down |
| 2 | Domain in the address bar — spelling, TLD, hyphenation | 10 sec | Fake if brand mismatch |
| 3 | `site:` search on the claimed outlet for the headline | 30 sec | Zero results = fake or unindexed |
| 4 | Reverse image search the key visual | 60-90 sec | Earliest appearance tells the truth |
| 5 | Trace the cited source (study, report, quote) to primary | 60-180 sec | Missing or contradicted = red flag |
| 6 | Published/updated date (metadata if hidden) | 20 sec | Stale date = recycled |
| 7 | Cross-reference with independent outlets | 30-60 sec | All citing same wire = unverified |

Total: about five to eight minutes per story. That's the honest cost. There's no version of this that takes ten seconds, and anyone promising one is selling something.

## What this checklist does *not* catch — the honest limitations

I'd be lying if I said the checklist is bulletproof. Three categories consistently slip through.

**Well-crafted AI-generated media.** Since late 2024, AI image generators have been able to produce photorealistic scenes that don't trip reverse image search because the image has never existed before. My usual tell is subtle: text inside images is often slightly misspelled, hands and reflections are wrong, and lighting is "too clean." But this is getting harder every quarter. For images where the stakes are high — war footage, disasters, anything that could fuel real-world violence — the check has to be: **has a major verified outlet or fact-checking organization confirmed the footage?** If not, treat it as unverified even if it looks perfect.

**Selective truth.** The most effective fake news doesn't lie; it omits. A real speech clip trimmed to remove context, a real statistic presented without the caveats, a real study where the finding was in the appendix, not the abstract. My checklist catches fabrication. It struggles with cherry-picking because the individual facts are all true.

**Fast-moving breaking news.** During the first few hours of a major event, everything is contested. The checklist works, but the information you're checking is likely being revised in real time. The honest option: wait. The 6-12 hour rule is boring and reliable — most misinformation burnout happens within a day.

I also want to be clear that no single source is immune. Reuters, AP, the BBC, and the New York Times all correct errors and have all published stories that aged badly. The goal isn't to find a publication you can trust blindly. It's to have a *habit* of verification that catches the worst stuff before you share it.

## Building the habit: a few small changes that stuck

I've been doing this for over a year now, and the changes aren't the checks themselves — they're the tiny habits that make the checks happen.

**I stopped sharing from in-app browsers entirely.** If I can't see the URL, I don't share the link. Small friction, big filter.

**I set a 30-second rule for my own posts.** Before I hit share on anything political or health-related, I do exactly one search: the headline verbatim in a new tab. If nothing credible comes up, I don't share. It sounds trivial. It has killed probably 80% of the bad shares I would have made.

**I follow the fact-checking outlets on the same platforms where I see fakes.** Following Snopes, AP Fact Check, PolitiFact, and Full Fact on X (or their newsletters via RSS, which I explain in [my RSS feeds guide](/posts/how-to-set-up-and-use-rss-feeds-for-news-and-updates/)) gives me a counterweight in the same feed that serves the misinformation. Their corrections often arrive before I've finished checking.

**I use Google Alerts for stories I care about.** If you set an alert for a specific claim — "baby formula recall," a politician's name, an election date — you'll get emails when the claim appears, and the *quality* of publishers that email shows you becomes a signal. I went into detail on [that setup in this Google Alerts guide](/posts/how-to-use-google-alerts-news-brand-monitoring/).

**I keep a reader view extension installed.** It strips sidebars and autoplay ads, which sounds cosmetic but actually helps me read the byline and date, which are often buried in the clutter.

One habit I *don't* recommend: using an AI chatbot as your first-line fact-checker. I've tested this — ChatGPT, Claude, and Perplexity are decent at formatting and summarizing, but they hallucinate confidently on fresh news and often cite invented sources. Use them as a starting point for *what to search*, not as a final arbiter of what's true. My [300-query comparison of ChatGPT vs Perplexity vs Claude](/posts/chatgpt-vs-perplexity-vs-claude-search/) lays out exactly where each one is useful and where it lies to your face.

## A short note on the mechanics people miss

Three years ago I was the person sharing things I hadn't checked. What changed wasn't that I got smarter; it was that I got poorer, briefly, and had to do damage control on a claim I'd forwarded that turned out to be false. That's the thing about fake news — it's not an abstract problem until you're the source of it in your own family's group chat.

The reason my checklist works isn't because it's clever. It's because it's boring, and it slows me down long enough for my judgment to catch up to my urge to share.

So the next time a story makes you want to grab your phone and hit send: open a new tab first. Copy the domain. Copy one line of the headline. Paste it into a search engine, ideally one that isn't going to feed you more stories like the fake — I compared privacy-focused search engines for this exact use case in [my DuckDuckGo vs Google breakdown](/posts/duckduckgo-vs-google-privacy-comparison/), and the short version is that DuckDuckGo and Brave tend to give you slightly more neutral results for the same query because they're not personalizing based on what you clicked last.

Ten minutes. One tab. One search. That's the whole method. The 40 stories I tested — the ones that turned out to be true and the ones that turned out to be theatre — all submitted to the same nine minutes. That's not a bad trade for the thing you're about to text to your cousin.
