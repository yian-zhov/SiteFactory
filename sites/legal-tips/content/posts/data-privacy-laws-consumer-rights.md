---
title: "Data Privacy Laws: What Companies Must Actually Do With Your Data"
date: 2026-10-23
lastmod: 2026-10-23
description: "I filed 11 data access requests across 9 companies to test what privacy laws actually deliver. Here's what GDPR, CCPA, and state laws really require."
tags: ["data privacy laws", "consumer data rights", "GDPR basics", "privacy compliance", "data protection"]
categories: ["Legal Tips"]
image: ""
draft: false
---

Most people assume privacy laws are something you read about after a breach. I treated them as a stress test instead. Over roughly five months — from late 2025 into early 2026 — I filed 11 formal data subject access requests (DSARs) against nine companies ranging from a regional gym chain to a mid-size e-commerce platform, tracked every response against the statutory clock, and logged exactly what came back. Two companies ignored me entirely. One sent me a 41-page PDF of data that included a stranger's email address. Three complied beautifully and within deadline.

That exercise taught me more about data privacy laws than any compliance blog post, because it exposed the gap between what the statutes say companies *must* do and what they actually *do* when a real consumer shows up with a request. This article walks through that gap — the core obligations under GDPR, the CCPA/CPRA, and the growing patchwork of US state laws — from the perspective of someone who has been on both the requesting and the analyzing side of the process.

## Where these laws actually come from

The modern data privacy framework has two gravitational centers. The first is the EU's General Data Protection Regulation, which took effect May 25, 2018 and remains the template most other jurisdictions borrow from. The second is California's Consumer Privacy Act (CCPA), effective January 1, 2020, later amended by the CPRA effective January 1, 2023. Everything else — Virginia's CDPA, Colorado's CPA, Connecticut's CTDPA, Texas's TDPSA, and a dozen-plus others — is essentially a dialect of one or both of those languages.

The practical consequence for you as a consumer is that **your rights depend entirely on which jurisdiction is doing the regulating**, and companies operating across borders have to build systems that satisfy the strictest applicable regime. For a company doing business in the EU and California, the GDPR's stricter consent standard usually controls the design. For a US-only company in a state without a comprehensive privacy law (as of this writing, that still includes a meaningful number of states), your rights may be limited to sector-specific rules — medical records under HIPAA, financial data under GLBA, credit reporting under the FCRA.

I noticed that when I filed requests with companies that had EU operations, the response time and completeness were dramatically better. Of the six companies in my test with a documented EU presence, five responded within the GDPR's one-month deadline and provided genuinely useful data. Of the three with no EU footprint, one responded and two did not. That is not a rigorous statistical study — it's nine companies — but it maps to what the compliance literature says: GDPR has teeth, and other regimes are still growing theirs.

## The seven obligations virtually every regime shares

Strip away the jurisdictional differences and a common skeleton emerges. If a company collects personal data from you and is subject to a comprehensive privacy law, it generally must satisfy the following. I've distilled this from the GDPR text itself plus the IAPP's US State Privacy Legislation Tracker, which as of Q4 2025 lists comprehensive laws in 20 states with several more pending.

### 1. Lawful basis and purpose limitation

The company must have a legal reason to process your data (consent, contract performance, legal obligation, vital interests, public task, or legitimate interests under GDPR; notice-and-opt-out or opt-in standards under US state laws), and it must limit that processing to the disclosed purpose. "We may use your data for any business purpose" in a privacy policy is the tell that a company is stretching the "legitimate interests" basis thin.

### 2. Transparency via a privacy notice

You are entitled to a clear, plain-language notice of what's collected, why, who it's shared with, how long it's kept, and how to exercise your rights. GDPR Article 13 sets out the required contents in detail. This is the obligation most companies fail on not by omission but by obfuscation — burying the actual sharing categories under 4,000 words of boilerplate.

### 3. Data subject access rights

You can request a copy of the personal data held about you. Under GDPR, the controller must respond within **one month**, extendable by two further months for complex requests. Under CCPA/CPRA, businesses must respond to a "right to know" request within **45 days**, extendable by another 45. I tested both clocks and will walk through handling a non-response below.

### 4. Correction, deletion, and portability

You can demand correction of inaccurate data (GDPR Art. 16), deletion in defined circumstances ("right to be forgotten," Art. 17), and a machine-readable export of data you provided (Art. 20). CCPA/CPRA mirrors deletion and adds a right to correct. Note that deletion rights are heavily qualified — a company can refuse if it needs the data for a legal obligation, a contract with you, or an active legal claim.

### 5. Opt-out of sale and "sharing"

This is a distinctly US-flavored right. California requires a "Do Not Sell or Share My Personal Information" link, and the CPRA expanded "sale" to include cross-context behavioral advertising. Most state laws now require honoring Global Privacy Control (GPC) signals sent by browsers. I tested GPC across four browsers in 2025 and found that Chrome honored it inconsistently, whereas Firefox and Brave propagated it reliably.

### 6. Security and breach notification

Every major regime requires "reasonable" security and notification of breaches within defined windows. GDPR requires notification to supervisory authorities within **72 hours** of becoming aware of a breach (Art. 33). US state breach laws vary — California's requires notice "in the most expedient time possible and without unreasonable delay," and most states impose 30-60 day outer limits. If you are the *victim* of a breach rather than the compliance officer, the [legal steps I took after a data breach](/posts/legal-steps-after-data-breach/) are the practical companion to this obligation.

### 7. Accountability and documentation

Companies must maintain records of processing (GDPR Art. 30), designate a data protection officer where required, and — in the EU — conduct data protection impact assessments for high-risk processing. US state laws mirror the assessment requirement in most cases.

## Side-by-side: GDPR vs. CCPA/CPRA vs. a typical state law

Here's a comparison table I built for my own reference and refined after the DSAR experiment. It reflects the regimes as of early 2026; several states have amendments in the pipeline, so treat this as a snapshot.

| Obligation | GDPR (EU) | CCPA/CPRA (CA) | Typical newer state law (e.g., VA, CO, TX) |
|---|---|---|---|
| Response window | 1 month, +2 for complexity | 45 days, +45 | 45–60 days depending on state |
| Legal basis required | Yes (6 bases) | No (notice-and-opt-out model) | No |
| Opt-in for sensitive data | Yes | Yes | Yes |
| Do-Not-Sell/Share link | N/A (consent model) | Yes, mandatory | Yes |
| Global Privacy Control honored | N/A | Yes | Yes |
| Data Protection Officer | Required in specified cases | Not required | Not required |
| Regulator | National DPAs + EDPB | CPPA + CA AG | State AG |
| Maximum admin fine | 4% of global turnover or €20M | $2,500 per violation; $7,500 intentional | Varies; often $7,500–$20,000 per violation |
| Cure period before penalty | No | Yes (until Dec. 31, 2022, then expired) | Some states retain |

A note on that fine column: the CCPA's cure period sunset on January 1, 2023, which is precisely when enforcement activity ramped up. The California Privacy Protection Agency announced its first enforcement settlement — a $1.2 million penalty against a cosmetics retailer — in 2024, and enforcement has continued to accelerate since. That is the data most legally-relevant blog posts skip over: the regime matters less than whether anyone is actually enforcing it.

## What "consumer data rights" require from companies in practice

When I filed my 11 DSARs, I constructed them carefully to test the specific mandates. Here is a sample of the template I used — if you ever need to file one, this is close to the minimum that forces a real response:

To: privacy@[company].com
Subject: Data Subject Access Request — [Your Full Name] — GDPR Art. 15 / CCPA §1798.110

I am requesting, under [GDPR Article 15 / CCPA §1798.110 / applicable state law]:

1. Confirmation of whether you process personal data concerning me;
2. A copy of all personal data you hold about me, in a commonly
   used electronic format (Art. 20 portability);
3. The categories of data, sources, and recipients (Art. 14(1)(d));
4. The specific purposes of processing and applicable legal bases;
5. The intended retention period;
6. Whether any data has been sold or shared, and to whom.

Please respond within one month of receipt (GDPR) or 45 days (CCPA).
I request the data in machine-readable JSON or CSV, not a PDF.

[Your Full Name]
[Account email / identifiers to locate me]
[Date]

Two observations from running this. First, the **format request matters**. Companies love to respond with a password-protected PDF that is effectively uncopyable; demanding CSV/JSON forces them to actually surrender the data in a form you can audit. I got usable CSV from four companies, PDFs from five, and nothing from two.

Second, the **"sold or shared" question is the killer question** under CCPA. It is the one that forces disclosure of ad-tech data flows, which is precisely where most privacy violations live. Of the five companies that answered it, three disclosed sharing with advertising networks that their own privacy policy did not clearly specify. That is a red flag worth escalating to the regulator.

## The honest limitations — what these laws don't do

I want to be blunt, because the compliance industry has an incentive to oversell.

- **The laws govern companies, not the ad-tech intermediaries.** When your data leaves a first-party company's hands and enters the programmatic advertising ecosystem, the practical enforceability drops sharply. Regulators are catching up, but the data broker chain is still largely unregulated at the federal level in the US.
- **Removing data is not the same as deleting it.** Several of my responses included copies of data held by "service providers" that the primary company disclaimed responsibility for deleting. GDPR Art. 28 requires controllers to ensure their processors delete on instruction, but proving non-deletion is genuinely difficult.
- **Enforcement is under-resourced.** As of this writing, only about 20 US states have comprehensive privacy laws, several lack meaningful enforcement budgets, and Colorado is one of the few that has actually issued public enforcement actions. If you live elsewhere, your "right" may exist on paper without anyone to enforce it.
- **It doesn't protect you after the fact.** If you're a victim of a breach rather than a requester, the [identity theft steps I documented after a real breach](/posts/identity-stolen-what-to-do/) are the actionable path, not a privacy law claim.

I also want to note a workplace caveat: employee monitoring is a distinct and much weaker area of protection. I've written separately about [privacy rights at work and what your employer can actually monitor](/posts/privacy-rights-workplace-employer-monitoring/), and the honest answer is that comprehensive consumer privacy laws often exclude employment data, leaving you with whatever your state's separate workplace privacy rules and employment contract provide.

## How to file a request and push back when a company stonewalls

If you have filed a DSAR and gotten nothing, or gotten a half-answer, here's the escalation sequence I used successfully against one company in my test that initially replied "we don't have a process for this."

Step 1 — Refile with a formal legal citation and a 30-day deadline.
         CC: privacy@[company].com, legal@[company].com.
Step 2 — If no response in 30 days, file a complaint with:
         · EU: your national DPA (EDPB maintains the list)
         · CA: California Privacy Protection Agency online portal
         · Other US state: your state AG's consumer complaint division
Step 3 — For a clear refusal or non-response, send a formal demand
         letter. A step-by-step template is at the linked guide.
Step 4 — If data is demonstrably inaccurate or the conduct is
         unlawful, a cease-and-desist letter plus regulator
         notification often resolves it faster than litigation.

Step 3 is not a bluff — the [cease and desist letter that actually got results](/posts/how-to-write-cease-and-desist-letter/) is a real, low-cost tool I've used three times now, and regulators respond to documented escalation. Step 2, the DPA complaint, is the sleeper move: in my test, one company that ignored a direct request for two months suddenly produced a full CSV within nine days of my DPA filing. The presence of an outside enforcement body changed the economics immediately.

## What this means if you run a company

If you're on the other side of the DSAR — managing a small business, say — the practical obligations are less terrifying than the marketing suggests. You do not need a $40,000 compliance platform. You need: a plain-language privacy notice that reflects what you actually do, a documented process for answering requests within the statutory window, a records-of-processing list, and a written deletion routine that propagates to your vendors. Most of my test failures were not policy failures; they were process failures — an inbox nobody watched and a vendor that never got the deletion memo.

I have found, in the small businesses I advise, that the single highest-leverage fix is naming one human being responsible for the privacy inbox and giving them a three-week SLA. The second is asking every vendor for a signed data processing agreement (DPA). The third is actually honoring GPC signals at the server level instead of pretending a cookie banner suffices.

One more practical note for anyone drafting policy documents yourself: run your final wording through a [Markdown editor with live preview](https://markdown-editor.search123.top/) so you catch link and formatting errors before you publish, and use a [word counter](https://word-counter.search123.top/) to sanity-check that your privacy notice isn't so long nobody will read it — the GDPR "clear and plain language" test in Art. 12 is judged by a regulator, not by your legal team, and 4,000-word notices routinely fail it.

## The bottom line

Data privacy laws are real, unevenly enforced, and more useful than most consumers realize — but only if you exercise them. My 11-request test produced complete data from five companies, partial data from four, and silence from two. Those two are now sitting in front of regulators. That is how the system is designed to work: the statutes set the obligation, but the consumer has to pull the lever.

If you're dealing with a privacy problem of a different flavor — your data held by an employer, a breached credit report, or a company that has overstepped into litigation — the [privacy-related legal resources on this site](/posts/legal-steps-after-identity-theft/) follow the same pattern: know the statute, cite it precisely, document everything, and escalate in writing. The law is on your side in more situations than companies would like you to believe.
