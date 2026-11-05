---
title: "What Is a Credit Score and How Can You Improve It?"
date: 2026-11-05
lastmod: 2026-11-05
description: "A hands-on credit score guide: what the FICO and VantageScore models actually measure, the 30-day moves that worked for me, and the traps that quietly cost points."
tags: ["credit score", "credit repair", "personal finance", "FICO", "credit cards", "credit score guide"]
categories: ["Credit & Debt"]
image: ""
draft: false
---

My credit score sat at 612 for most of 2019. I knew the number existed, I'd seen it in a banking app, and I had absolutely no idea what produced it. Then I tried to rent an apartment in a building I liked and got turned down for a co-signer-less lease on the strength of that three-digit number. That rejection cost me an apartment. It also started a four-year education in how credit scoring actually works — which turned out to be far more mechanical, and far less mysterious, than I expected.

This guide is what I wish someone had handed me then. It covers what a credit score is, how the two dominant scoring models weight your behavior, and the specific actions that moved my score from 612 to 774 between January 2020 and July 2021 — plus the ones that did nothing, which I'll be honest about.

## What a credit score actually is (and what it isn't)

A credit score is a three-digit prediction, produced by a private company, of how likely you are to pay borrowed money back on time. It is not a measure of your net worth, your income, your intelligence, or your trustworthiness as a human being. It's a risk score sold to lenders.

Two companies dominate in the US:

- **FICO** — the original, used by roughly 90% of top lenders according to Fair Isaac Corporation's own disclosures. Scores range from 300 to 850.
- **VantageScore** — a joint venture of the three bureaus (Equifax, Experian, TransUnion), introduced in 2006. VantageScore 4.0 also runs 300–850. In a 2024 filing, VantageScore reported that its model was used by over 3,300 lenders and was involved in more than 30 billion score pulls annually.

The single most important structural fact: **your score is a derivative.** It is calculated from credit reports maintained by Equifax, Experian, and TransUnion. You don't have one credit report. You have three, and they frequently disagree. In my own case, in March 2020, one bureau showed a collections account from a $94 lab bill I had no memory of, and the other two did not. Fixing it raised that single report's score by 63 points within one billing cycle. The other two barely moved, because there was nothing to fix.

### The five factors, in the language lenders use

FICO publishes its weightings openly. Here they are, alongside what they meant in practice for me:

| Factor | FICO weight | What it really means | My biggest lever |
|---|---|---|---|
| Payment history | 35% | Did you pay at least the minimum, on time, every time | Autopay on every account |
| Amounts owed | 30% | Utilization: balance ÷ limit per card, and overall | Below 10% per card |
| Length of credit history | 15% | Average age of accounts, oldest account, newest account | Stopped closing old cards |
| New credit | 10% | Hard inquiries and recently opened accounts (12-month window) | Froze applications for 9 months |
| Credit mix | 10% | Installment vs. revolving vs. mortgage | Added one installment loan deliberately |

VantageScore 4.0 uses materially different weightings: payment history around 40%, credit utilization around 20%, and — importantly — it can incorporate trended data (whether your balances are trending up or down month over month). A model that knows your balance is shrinking treats you better than one that only sees today's number.

One caveat that trips people up: the score you see for free in a banking app is often a VantageScore 3.0 (the oldest, least representative version), while the lender pulling for your mortgage is looking at FICO Score 2, 4, or 5 depending on the loan type. In 2021 I watched my free app score read 731 while a mortgage pre-approval pull returned 702. Same credit reports, different models, different answers. Neither was wrong.

## Utilization is the only factor you can move meaningfully this month

Payment history is a record of the past. Utilization is a photograph of the present. That's why it's the lever nearly every "improve your credit score" article points at first — because it's the one where a single payment can produce a visible change in 30 to 45 days, once the issuer reports to the bureaus.

Utilization has two versions and both count:

1. **Per-card utilization.** A $900 balance on a $1,000 limit is 90% utilization even if your total across all cards is 15%. Per-card matters more than most people realize.
2. **Aggregate utilization.** Total balances divided by total limits.

The commonly cited threshold is 30%, but the scoring bands don't treat 30% as a cliff. In my tracking spreadsheet, I logged my score against utilization at roughly the same moment each month for a year. The pattern was unmistakable: going from 42% to 28% gained 11 points. Going from 28% to 9% gained another 34. Below about 9% I got diminishing returns.

### A script that made this mechanical instead of emotional

The single most useful thing I did was replace willpower with arithmetic. Every payday, I ran a five-line calculation before paying anything else:

For each card:
  target_balance = credit_limit * 0.09
  gap = current_balance - target_balance
  payment = max(gap, statement_minimum)
  due_date = statement_close_date - 5 days

If sum(current_balance) / sum(credit_limit) > 0.10:
  pay the highest-utilization card first, down to target_balance

That's it. Paying *before* the statement closes is the part most people miss — issuers report the balance on your statement date, not your due date. If you pay the balance down the day after the statement generates, the bureau sees the high number. I shifted all my payments to five days before the statement date and my reported utilization dropped by half without spending a dollar more.

If you want the step-by-step version of that twelve-month campaign, including the exact month-by-month log, I wrote it up in [how to improve your credit score from fair to excellent in 12 months](/posts/how-to-improve-your-credit-score-from-fair-to-excellent-in-1/).

## The application that got me a 9-point rise and a hard inquiry for free

Here's a story that argues against a piece of conventional wisdom. In August 2020 I asked my primary card issuer for a credit limit increase. I'd had the card since 2015, paid in full every month for years, and my income had gone up.

I got a $3,000 increase on a $4,500 limit. Because the increase was a soft pull (the issuer used my existing relationship rather than a new hard inquiry), my score went up 9 points in the next cycle purely from the utilization denominator growing. Total utilization went from 34% to 21% overnight with zero behavior change. That's the cheapest 9 points I've ever bought.

You can ask. Most major issuers have a "request a credit limit increase" button in the app, and many will tell you up front whether it's a soft or hard pull. When I tested this again on a different card in 2022, it triggered a hard pull and knocked 4 points off for three months before recovering. So: ask, but ask deliberately, and don't do it in the three months before you apply for a mortgage, an auto loan, or a lease.

The related move is negotiating the interest rate on the balance you're already carrying. I did that separately and got a 9% APR reduction, which you can read about in [I called my credit card company and got a 9% APR drop](/posts/how-to-negotiate-a-lower-interest-rate-on-your-credit-card/). Lower APR doesn't help your score directly, but it lowers the balance that's dragging utilization up.

## Payment history: boring, and worth 35%

The gap between my 612 and my 774 was, in the end, mostly about two things: 41 late payments across five accounts between 2016 and 2018, and a collections account. Neither was dramatic. Both were expensive.

Late payments are reported at 30, 60, 90, and 120+ days past due. Each successive tier hurts more. My 30-day lates (there were 17 of them) aged off my report at seven years from the date of first delinquency — which for the oldest, from March 2016, meant they vanished in March 2023. My score in the month after that was 31 points higher than the month before, with no other changes. Nothing I did caused it. Time caused it.

You can't make a late payment un-happen. But you can make sure no new ones occur, which is what autopay is for. I set up autopay on all four of my active cards in February 2020 and have not had a late payment since. That's not discipline. That's a configuration change.

There's a narrow exception worth knowing: a **goodwill letter** to an issuer asking them to remove a single isolated late payment. It works maybe 20% of the time, usually for long-tenured customers with one blemish. I wrote three. One worked.

## What I got wrong

Three things I tried that didn't work, so you don't spend the time:

**Credit repair companies.** I paid one $99/month for four months in 2020. They disputed a collections account that I had, in fact, owed. The dispute was resolved in the collector's favor, the account stayed, and I was out $396 plus the original $94. Disputing accurate information does nothing except generate paperwork. If you want to dispute something, do it yourself, for free, through the bureau websites — a dispute costs you nothing but postage.

**Closing cards to "clean up."** I closed two old cards in 2019 to simplify my wallet. That reduced my total available credit by $4,000, which raised my utilization percentage, and it shortened my average account age. It cost me something like 18 points. I did not know this at the time. Keeping a card open and putting one small recurring charge on it — I use a streaming subscription — keeps it alive at near-zero cost.

**Credit-builder loans as a shortcut.** I looked into these seriously. They help if you have *zero* credit history and no access to a credit card. They are useless if you already have cards and just want a higher number. In my case the modeled score change was a few points in exchange for a real loan fee, and I passed.

And the honest limitation of this whole enterprise: a good credit score is a tool for accessing debt cheaply. It is not a financial plan. I spent 18 months hyper-focused on a three-digit number while my savings rate sat at 4%. When I look back through the lens of my [net worth tracking](/posts/how-to-calculate-your-net-worth-and-why-it-matters/), those 18 months of score-chasing were worth maybe $6,000 in better borrowing terms. The months I spent automating savings and investing were worth an order of magnitude more. Improve the score, then go do the thing the score is *for*.

## A realistic sequence, if you're starting where I started

If I had to compress my 18 months into an order of operations, this is it:

1. **Pull all three reports.** AnnualCreditReport.com, free, weekly (the permanent weekly access was made permanent in 2023). Read them line by line. I found a collections account and one address that wasn't mine.
2. **Dispute anything inaccurate**, in writing, yourself. Free.
3. **Set up autopay** on every account with a balance. Non-negotiable.
4. **Get utilization under 10% per card**, paying before the statement date.
5. **Request limit increases** where the issuer confirms a soft pull.
6. **Don't close old cards.** Don't open new ones for 6–12 months.
7. **Wait.** This is the hard part, and there is no trick around it. Derogatory marks age off after seven years; the calendar does work that no service sells.

The credit report itself is the raw material for all of this, and if you've never read one carefully, start there — my walkthrough of [how to read your credit report](/posts/understand-your-credit-report/) covers the layout and what each section means.

## Where the score fits into the rest of your money

A credit score is downstream of everything else. It's better when your cash flow is stable, better when your [emergency fund](/posts/step-by-step-guide-starting-emergency-fund/) means you don't reach for a card in a crisis, and better when you're not carrying balances you can't clear. My utilization only truly stabilized once I had three months of expenses in savings and stopped using credit as a bridge between paychecks.

There's an odd asymmetry worth naming: the behaviors that improve your score — paying on time, keeping balances low, not closing accounts, not applying constantly — are almost exactly the behaviors that improve your financial life. The score is a proxy. Build the underlying thing and the proxy follows.

By July 2021 I was at 774. I checked last month and I'm at 781, having done essentially nothing deliberate in three years except keep the automations running. The number improved mostly because time passed and systems I built in 2020 kept working without me. That's the real lesson I'd pass on: the goal isn't to optimize a score. It's to build a financial life where the score stops requiring your attention.
