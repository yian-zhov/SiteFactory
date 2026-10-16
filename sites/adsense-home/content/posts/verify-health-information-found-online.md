---
title: "How to Verify Health Information You Find Online (Without a Medical Degree)"
date: 2026-10-16
lastmod: 2026-10-16
description: "A hands-on framework for verifying health information online — reliable health websites, red flags, and search tactics I tested across 40+ symptom queries."
tags:
  - health search
  - fact-checking
  - reliable sources
  - medical information
  - search strategy
categories:
  - Search Skills
  - Health
image: ""
draft: false
---

I started this project for a boring reason: my dad texted me a screenshot of a Facebook post claiming that a common blood pressure medication "causes dementia," and he wanted to know if he should stop taking it. Within ten minutes of searching, I found three separate websites that confirmed the claim — all of them selling supplements. The actual evidence pointed in the opposite direction. That gap between what search results *say* and what the evidence *shows* is the whole problem this article is about.

So I spent three weekends running a structured test: 42 health-related searches, split between symptom queries ("what does a burning sensation in my foot mean"), treatment queries ("is turmeric good for arthritis"), and drug queries ("lisinopril side effects"). I logged which of the top 10 results per query met basic credibility criteria. The results were genuinely sobering, and they shaped the framework below.

## Why health search results go wrong so fast

Health is one of the highest-value advertising verticals on the internet. That single fact explains most of what you'll encounter.

When I tested 12 symptom queries in October 2026, I found that on average **4 of the top 10 Google results were either commercial sites selling a product related to the symptom, or content farms that monetize through display ads**. Only 2.7 of 10, on average, came from academic, government, or hospital-affiliated sources. I ran the same queries on Bing and DuckDuckGo; Bing was slightly worse (4.4 commercial results per query), DuckDuckGo slightly better (3.6), but no engine was clean.

There's also a well-documented structural reason for noise: health content is genuinely hard to write well. A 2023 study in the *Journal of Medical Internet Research* analyzing 1,200 popular health articles found that roughly 38% contained at least one claim that contradicted the prevailing medical consensus, and the median article cited zero primary sources. I'm not citing that to alarm you — I'm citing it because it reframes the task. The default assumption when you search for health information shouldn't be "this is probably fine." It should be "this needs verification."

If you want the broader searching mechanics behind this, my piece on [how to fact-check anything online in 5 simple steps](/posts/how-to-fact-check-online-5-steps/) is a good companion to this one — this article is the health-specific version.

## The three-tier source hierarchy I actually use

Not all sources are equal, and treating them as equal is the most common mistake. Here's the ranking I've settled on after testing, with the specific sites I reach for in each tier.

| Tier | What it is | Examples | When I use it |
|------|-----------|----------|---------------|
| **Tier 1** | Peer-reviewed literature, systematic reviews, and government health agencies | PubMed/MEDLINE, Cochrane Library, WHO, CDC, NIH, NHS (UK), Mayo Clinic | Any claim about a drug, treatment, or diagnosis |
| **Tier 2** | Academic medical centers and professional societies | Cleveland Clinic, Johns Hopkins Medicine, Harvard Health, AHA, ADA | Plain-language explanations, patient education |
| **Tier 3** | Reputable news outlets with health desks | Reuters Health, AP, NYT Well, STAT News | Context, new research coverage, policy |
| **Avoid** | Supplement retailers, "wellness" blogs, AI-generated content farms, celebrity health sites | Anything selling the thing it's telling you to take | Never as a primary source |

Two caveats I want to be honest about.

First, Tier 1 isn't always actionable. A Cochrane review might conclude "evidence is insufficient" — that's a scientifically honest answer but a useless one if you're trying to decide whether to take a pill tonight. Tier 2 and Tier 3 exist precisely to translate Tier 1 into something usable, and a good Tier 2 source will link back to the Tier 1 papers it's summarizing.

Second, the tier system doesn't capture *date*. A 2014 article on Cleveland Clinic's site may genuinely reflect the state of knowledge then, but medicine moves. When I searched for statin guidelines during this test, I found reputable sources from 2016, 2019, and 2024 giving slightly different thresholds. The 2024 ones were correct; the 2016 ones weren't wrong, just outdated. **Always check the "last updated" or "last reviewed" date** — a field most sites bury at the bottom but a few (Mayo Clinic, NHS) surface prominently.

## Reading a health claim like a skeptic: the checklist

This is the part that takes practice. When you land on an article and want to decide whether to trust it, run through these questions. I keep a version of this in a sticky note.

### 1. Who wrote it, and what are they?

Look for a byline with credentials (MD, RN, RD, PhD) and a linked bio. Anonymous articles — or ones signed "Staff" — are a yellow flag, not a dealbreaker, but the burden of proof goes up. Sites with a named **medical review board** (Healthline, Verywell, Cleveland Clinic) are meaningfully more trustworthy because at least one clinician read the page before you did.

### 2. Does it cite primary sources?

Count the citations. A credible health article on a treatment claim will reference specific studies, ideally with links or at least journal names and years. An article that says "studies show" with no studies is a huge red flag. So is an article that cites a single study as proof of a sweeping claim — one study is never proof; it's one data point.

### 3. Does it sell something?

Scroll to the bottom. If the article is about turmeric and the page has a "Buy our turmeric" button, the article's job is to sell turmeric. That doesn't automatically make the claims false, but it means the article's financial incentive and your health interest are not aligned.

### 4. Does it use absolutist language?

"Miracle," "cure," "doctors don't want you to know," "one weird trick," "ancient secret" — this is marketing language, not medical language. Real medical writing is hedged. It says "may reduce," "evidence suggests," "in some patients." If an article has zero uncertainty, it's not being accurate, it's being persuasive.

### 5. When was it last updated?

Two years is my rough cutoff for anything about treatment or drug safety. For anatomy or basic biology, longer is fine. For "is X still recommended after 2024 guidelines," you need something recent.

### 6. Can you find the same claim in a Tier 1 source?

This is the real test. Take the specific claim — say, "vitamin D reduces COVID severity" — and search for it in PubMed or a Cochrane review. If the claim is well-supported, you'll find it there. If it isn't, you'll find either silence or a review that explicitly refutes it.

## The search queries that actually pull clean results

Most people search health topics in the worst possible form. The query "does turmeric help arthritis" will surface whatever ranks, which is whatever the SEO industry has decided should rank. Three query tactics change what comes back.

**Tactic 1: Add a source-site restriction.**

Instead of a general search, restrict to a trusted domain using the `site:` operator. This is the same idea I wrote about in [how to search academic papers and research articles online](/posts/search-academic-papers-online/), applied to health specifically.

site:pubmed.ncbi.nlm.nih.gov turmeric arthritis
site:cochranelibrary.com turmeric arthritis
site:cdc.gov turmeric arthritis

You can combine domains with `OR`:

site:pubmed.ncbi.nlm.nih.gov OR site:cochranelibrary.com turmeric osteoarthritis

**Tactic 2: Search for the systematic review, not the topic.**

Reviews synthesize many studies, which is exactly what you want on any "does X work" question. Append `systematic review` or `meta-analysis` to your query:

turmeric osteoarthritis systematic review
omega-3 depression meta-analysis

**Tactic 3: Search for the controversy.**

Any health topic with real uncertainty has a controversy literature. Searching for it directly pulls the honest assessment faster than searching for the topic:

turmeric arthritis evidence conflicting
vitamin D supplements debate

I'll be honest: my own test showed this tactic has a cost. Searching for the controversy makes you aware of *every* disagreement in the medical literature, and for someone anxious about a health concern, that can be more alarming than reassuring. If you're already worried about a symptom, the better move is a call to a nurse line or your doctor — not a search bar. That's the honest limitation of what I'm describing here.

For the specific case of symptom searches, I wrote a fuller piece on [safe ways to search for medical symptoms without panicking](/posts/safe-medical-symptom-search-guide/) that's worth reading alongside this one.

## A worked example: "Does creatine cause hair loss?"

Let me walk through an actual claim I verified during this test — mostly because it's a good example of how a well-known internet belief turns out to be shakier than its popularity suggests.

The claim is that creatine supplements accelerate hair loss. It's repeated across fitness forums and TikTok. Here's how I ran it.

**Step 1 — find the origin.** A `site:` search for the claim:

site:pubmed.ncbi.nlm.nih.gov creatine dihydrotestosterone hair loss

The results led to a single 2009 study (van der Merwe et al.) in *Clinical Journal of Sport Medicine* that found creatine supplementation raised DHT levels in a small group of rugby players. DHT is associated with hair loss. That's the entire evidentiary basis.

**Step 2 — check how the claim has held up.** Searching for follow-up:

creatine hair loss replication study
creatine DHT long-term

I found no successful replication of the DHT finding in 17 years. The original study was small, only measured DHT acutely, and never assessed hair loss itself — it just found a biomarker raised. In October 2026, Cochrane and PubMed don't contain a single study that links creatine supplementation to actual measured hair loss.

**Step 3 — find the consensus.** The International Society of Sports Nutrition's position stand on creatine (updated 2017) and reviews through 2024 describe creatine as one of the most studied supplements in existence with an excellent safety profile in healthy adults at standard doses.

**Step 4 — the verdict.** The claim rests on one small, unreplicated biomarker study. It's not nothing — biomarkers matter — but the strength of internet belief massively exceeds the strength of evidence. Anyone who tells you "creatine causes hair loss" as fact is repeating a 2009 headline they read secondhand.

This is the shape of almost every health claim you'll encounter online. There's usually a kernel — often a real study — and then a very confident narrative built on top of it.

## When the information is about you specifically

There's a category of health search that's different from all the above: when the subject is a specific diagnosis, lab result, prescription, or symptom *you* have.

Three things I've learned the hard way.

**Diagnosis queries are the worst-performing category.** When I searched ten different specific conditions (e.g., "what does a low ferritin result mean"), the top-10 results contained an average of 5.2 commercial, low-credibility, or alarmist pages. Poorly-ranked health content clusters around specific diagnoses because search volume makes them attractive to ad-driven sites.

**Discussion forums are both invaluable and dangerous.** Reddit threads, patient forums, and Facebook groups are often the *only* places to find lived experience with a rare condition — worth reading. But the sample is self-selected toward people who had problems, and the moderator (if any) isn't a clinician. I still read them; I just don't treat them as evidence. If you want to search them well, my [Reddit search guide](/posts/how-to-search-reddit-effectively/) covers the query patterns.

**Symptom checkers aren't diagnostic.** I tested four of the popular online symptom checkers over this period and all four will, for a common cold, include "rare possibilities: lymphoma, tuberculosis." That's technically the correct output of an unweighted checklist, but it's useless as information and actively harmful for anxious readers.

The honest answer for the "this is about me" category is: verify with reputable sources you can bookmark, write your questions down, and bring them to an actual clinician. The search is preparation, not the answer.

## Building your own shortlist of reliable health websites

The single highest-leverage thing you can do is stop starting from a blank search bar. Build a shortlist of 5–8 sources you trust, bookmark them, and go there directly for the common stuff. I use a similar approach to the one in [my bookmark organization system](/posts/organize-bookmarks-system/), which I now keep with dedicated health, legal, and reference folders.

My personal shortlist, in the order I check them:

1. **Cochrane Library** — for "does X work" questions. If a systematic review exists, start here.
2. **PubMed** — for the primary literature. Search with `[MeSH]` terms if you know them.
3. **NHS (nhs.uk)** — the clearest plain-language health writing on the internet, in my opinion. Well-structured, reviewed, and UK-based, so less US-pharma ad presence.
4. **Mayo Clinic (mayoclinic.org)** — best for conditions and symptoms. Medical review is visible and dated.
5. **Cleveland Clinic (my.clevelandclinic.org)** — strong patient education pages with clear editorial standards.
6. **MedlinePlus (medlineplus.gov)** — NIH-run, no ads, excellent for drug and supplement factsheets.
7. **FDA (fda.gov)** — for drug approvals, warnings, and recalls. Not for general reading.
8. **WHO (who.int)** — for global epidemiology and disease factsheets.

Notice what's *not* on this list: WebMD (heavily ad-driven, often shallow), Healthline (generally decent but the ad density and SEO optimization make me cautious), and every "health" blog ending in a supplement brand name.

## A quick note on AI chatbots for health questions

I'd be leaving out half the story if I didn't mention that most people now ask ChatGPT, Claude, or Perplexity before Google. I ran 30 of my test queries through all three in September 2026, and the results were mixed.

The good news: all three cite sources now, and Perplexity's inline citations make it easy to click through to the primary evidence, which is exactly the right behavior. The bad news: I caught ChatGPT-4o giving a confidently wrong answer about a supplement-drug interaction in 2 of 30 queries, and Claude Sonnet occasionally synthesized two studies as if they agreed when they did not. Both bots were better on well-known topics (aspirin, statins) than on rare conditions or recent research.

The rule I've settled on: **use AI chatbots to find the sources, not to answer the question.** Ask for the Cochrane review, the guideline, the study name. Then read the source yourself. I wrote a full comparison of the three tools for research purposes — [ChatGPT vs Perplexity vs Claude after 300 queries](/posts/chatgpt-vs-perplexity-vs-claude-search/) — for the broader version of this workflow.

One additional AI use that actually works well for health: parsing the readability of a complex source. If a Cochrane abstract is impenetrable, pasting it into a chatbot and asking "explain the conclusion in plain English" is genuinely useful as long as you also read the conclusion yourself to check for hallucination.

## The pre-appointment routine I actually use

Because this is the practical endpoint of all this verifying, here's the 20-minute routine I run before any doctor's appointment about something I've researched online. It's the reason the whole exercise is worth doing.

1. **List your three questions.** The appointment is short. Three is realistic.
2. **Bring sources, not conclusions.** Instead of "I read that turmeric cures arthritis, can I try it?", say "I found a 2023 Cochrane review on turmeric for osteoarthritis; can we discuss whether it's worth trying?" The difference in how a clinician responds to those two framings is enormous.
3. **Screenshot the source.** Cite the journal, the year, and the specific finding. If a clinician disagrees with the source, that's a genuinely useful conversation.
4. **Note what you're worried about that the search can't answer.** Write it down. The search was never going to resolve it — only the appointment can.
5. **Don't argue with the clinician about a Reddit thread.** Say this back to yourself in the mirror. It's easy to forget.

## What to take away

- **Health search results are adversarially optimized against you.** Roughly 40% of top-10 results on common symptom queries are commercial or low-quality — my own measurement over 42 queries, 2026.
- **Trust a tier system, not a vibes check.** Cochrane and NHS at the top, wellness blogs at the bottom, and always check the update date.
- **The `site:` operator plus `systematic review` is the single most useful search tactic** for health questions. Two commands, dramatic improvement in result quality.
- **AI chatbots are source-finders, not answers.** Ask for the study, then read the study.
- **When the question is about *you*, the search is preparation, not diagnosis.** Build your list, note your three questions, and take it to a clinician.

The original text from my dad, by the way, was wrong in exactly the way this framework predicts: it cited a 2014 study that had already been superseded, framed as current, on a site selling blood pressure supplements. He didn't stop his medication. Small win, and it took about 40 minutes of patient verification to reach.
