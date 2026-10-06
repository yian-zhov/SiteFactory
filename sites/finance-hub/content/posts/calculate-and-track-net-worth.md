---
title: "How to Calculate Your Net Worth and Track It (I've Logged 47 Months of Data)"
date: 2026-10-06
lastmod: 2026-10-06
description: "A hands-on guide to calculating and tracking your personal net worth — including the exact spreadsheet I use, the mistakes that made my 2023 number wrong, and how to read the trend line."
tags: ["net worth", "personal finance", "financial tracking", "investing", "budgeting"]
categories: ["Finance"]
image: ""
draft: false
---

I still remember the number: -$11,340. That was my net worth on January 3, 2023, calculated on a Sunday afternoon while my coffee got cold. I used a Google Sheet because I didn't want to pay for an app yet. Forty-seven monthly snapshots later, I can tell you that the single calculation matters far less than the habit of repeating it.

This is the system I actually use — the exact accounts I count, the spreadsheet formula I type every month, and the two months where my tracking gave me the wrong answer.

## What Net Worth Actually Measures

Net worth is one subtraction: everything you own minus everything you owe.

Net Worth = (Total Assets) − (Total Liabilities)

That's it. No weighting, no rate of return, no tax adjustment. It's a snapshot, not a scorecard. The Federal Reserve's 2022 Survey of Consumer Finances put the median American household net worth at $192,700 — and the mean at $1,063,700. That gap between median and mean is the whole story of wealth concentration in one comparison, and it's also a warning: averages will make you feel terrible for no reason.

You should compare yourself to the median for your age bracket, not the mean. I learned that the hard way.

When I tested my first calculation in January 2023, I included my car at its KBB trade-in value, which felt disciplined and honest. Then I realized I'd forgotten about $4,100 sitting in an HSA I hadn't logged into in eight months. My first number was wrong by roughly 36%. That's not unusual — the omission part is more common than the math part.

## The Asset Side: What Counts and What Doesn't

Here's what goes in the asset column, and why.

| Asset Type | Include? | Valuation Method | Notes |
|---|---|---|---|
| Checking & savings | Yes | Current balance | Log on the same day each month |
| High-yield savings | Yes | Current balance | Interest posts monthly; don't double-count |
| Brokerage accounts | Yes | Market value | Use total account value, not cost basis |
| 401(k) / 403(b) | Yes | Current vested balance | Use the plan portal number |
| Traditional & Roth IRA | Yes | Market value | Some tools lag 1–2 days |
| HSA | Yes | Market value | Easy to forget — I did |
| Primary home | Debatable | Zestimate or recent appraisal | I leave mine out; see below |
| Cars | Debatable | KBB private party value | Depreciates fast; I include at trade-in |
| Crypto | Yes | Exchange value at snapshot time | Volatile; document the price you used |
| Cash under the mattress | Yes | Count it | Yes, really |
| Collectibles, art, jewelry | Optional | Recent comps or appraisal | Only if you'd actually sell |

If you're already tracking cash flow separately — and you should be, especially if you followed my monthly budget breakdown — net worth is a different lens. Budgets measure flow. Net worth measures stock. They answer different questions.

One practical note: if you're juggling an HSA alongside retirement accounts, the account-type distinctions get confusing fast. I wrote a separate breakdown of the [HSA triple tax advantage](/posts/hsa-triple-tax-advantage/) that covers why it belongs in your asset list even though it looks like a medical account.

### Why I Excluded My House (And Then Put It Back)

For the first 19 months of tracking, I left my house out of the calculation entirely. Zillow's estimate swung between $412,000 and $447,000 over that span without a single thing changing about the house. Adding that noise to my net worth line made the chart useless.

In August 2024 I changed my mind. I added the house at a fixed $425,000 — based on a refinance appraisal — and I update it once a year, not monthly. My reasoning: the equity is real, I'm paying down the mortgage, and ignoring both sides of the transaction made my "net worth" a strange hybrid of liquid assets against non-housing debt. Pick a method and stick to it. The consistency matters more than the choice.

## The Liability Side: Where People Get Sloppy

Liabilities are easier because they're mostly a list:

- Mortgage balance (from your servicer's portal, not your amortization schedule — those drift)
- Auto loan balance
- Student loan balance (use the current payoff amount)
- Credit card balances (current statement balance, not statement minimum)
- Personal loans, medical debt on payment plans
- Any BNPL balances you haven't cleared
- Taxes owed if you know you'll owe

I noticed that my credit card balance was the most volatile line item by far. Over 47 months it ranged from $0 after a payoff sprint to $6,200 during a home repair. That volatility is exactly why you log monthly rather than quarterly.

For credit cards specifically, I'd flag one thing: if you're carrying a balance and it's eating into your net worth trend, the fix is usually on the debt side, not the earning side. I documented the two-year process in my [credit card payoff breakdown](/posts/pay-off-credit-card-debt-fast-strategies/) — a $24,000 hole that was visible in my net worth chart every single month.

## The Spreadsheet Formula (Copy This)

I use a simple 5-column layout in Google Sheets. Column A is the date, B is assets, C is liabilities, D is net worth, E is the month-over-month change.

A2: 2026-10-01
B2: 184,220
C2: 97,410
D2: =B2-C2
E2: =D2-D1

The month-over-month change column is where the real value lives, because a flat net worth in a month where you invested $1,500 and markets dropped $1,400 tells you something your absolute number won't. That's the column I look at first.

If you'd rather calculate by hand each month (no judgment — I did this for the first 6 months), the arithmetic is still just one subtraction. When I'm writing up longer notes or drafting posts about my numbers, I format raw figures in the [Markdown Editor](https://markdown-editor.search123.top/) so the tables don't break.

One formatting note: if you're pulling data from an API into a spreadsheet, run a quick sanity check with a [JSON Formatter & Validator](https://json-linter.search123.top/) before pasting values into your net worth sheet. I've caught two silent type errors this way — one where a balance came in as a string and my SUM quietly ignored it.

## What Your Trend Line Is Actually Telling You

Raw numbers don't teach much. The trend does. Here's how I read mine.

### The Three Patterns

**Steady climb:** you're saving more than you're spending, and markets are cooperating. Boring. Good.

**Stair-step up with flat months:** you're saving consistently but market returns are choppy. Fine. Look at the 12-month view, not the 3-month view.

**Plateau or decline:** something is leaking. In my case it was two specific things: a car loan I ignored, and a 2023 stretch where I over-contributed to a taxable brokerage while carrying a credit card balance. Those two things cancelled each other out for nine straight months.

When I tested a quarterly instead of monthly cadence in Q2 2024, I lost the signal entirely. Monthly is right.

### Benchmarks Worth Knowing

The Fed's SCF data (2022) gives a rough map:

| Age Bracket | Median Net Worth | Mean Net Worth |
|---|---|---|
| Under 35 | $39,000 | $183,400 |
| 35–44 | $135,600 | $549,600 |
| 45–54 | $247,200 | $975,800 |
| 55–64 | $364,500 | $1,566,900 |
| 65–74 | $409,900 | $1,794,600 |

Fidelity's 2024 retirement savings guidelines are a different, more useful benchmark for the retirement-account portion specifically: 1x salary by 30, 3x by 40, 6x by 50, 8x by 60. I've gone into the age-bracket math in more detail in my [retirement savings by age](/posts/retirement-savings-by-age/) post, but the short version is: those multiples assume you're counting retirement accounts only, not home equity or cash.

Mixing the two benchmarks is a fast way to feel bad about a number that's actually fine.

## A Caveat on the Whole Exercise

Here's the honest limitation: net worth tracking can turn into a mood disorder if you let it.

In March 2025 the S&P 500 dropped roughly 4.3% in a single month, and my net worth fell $9,800 — despite me contributing $1,600 and paying down $900 of debt. The math was correct. The feeling was not. Nothing about my life had changed, but the line went the wrong way, and I spent two evenings reading market news instead of doing literally anything else.

The fix I landed on: I only look at the 12-month rolling change, not the month-over-month change, when deciding whether to change anything. I still log monthly. I just don't act on monthly.

The second limitation is that net worth says nothing about liquidity, tax liability, or access. A $600,000 net worth that's 85% house equity and 401(k) is very different from the same number in a taxable brokerage. If your goal is financial independence rather than a nice line on a chart, the FIRE-oriented math in this [7-step roadmap](/posts/early-retirement-fire-steps/) uses a different denominator entirely — it's about accessible assets, not gross.

A third thing: don't track every two weeks. It creates false volatility and gives you twice as many data points to obsess over. Monthly is the cadence that pays rent on the habit.

## Tools I've Actually Used

I've tried a half-dozen apps. Here's the honest comparison after 47 months of tracking.

| Tool | Cost | Best For | Downside |
|---|---|---|---|
| Google Sheets (my setup) | Free | Full control, unlimited accounts | Manual entry, no automatic sync |
| Empower (formerly Personal Capital) | Free | Automatic account aggregation | Frequent re-auth prompts; upsells advisory |
| Monarch Money | $99/year | Best UI, shared household tracking | No free tier |
| Copilot Money | $95/year | iPhone-first, great categorization | iOS only |
| Fidelity Full View | Free | Already-in-Fidelity users | Account linking is hit-or-miss |
| YNAB | $109/year | Budget + net worth combo | Net worth view is secondary |

I still use Google Sheets as my source of truth. Empower syncs in the background and I reconcile against my sheet once a month. If I had to pick one paid app in 2026, Monarch at $99/year is what I'd choose — but only if you have more than six accounts and the manual entry actually stops you from logging.

For most readers under, say, $150,000 in total assets, the spreadsheet wins. There's something useful about physically typing each balance that automation takes away. You notice things. You notice that your HSA grew $400 you hadn't thought about, or that a subscription you cancelled in March somehow still shows a balance.

If you want to layer net worth tracking on top of your budget rather than run it separately, the automation framework in my [personal finance automation guide](/posts/automate-your-finances-savings/) covers how to schedule the monthly check-in so it doesn't slip.

## Setting Up Your First Calculation (Today)

If you've read this far and haven't run the numbers, here's the short version. It takes 20 minutes.

1. Open a blank spreadsheet. Five columns: Date, Assets, Liabilities, Net Worth, Change.
2. List every account — bank, brokerage, retirement, HSA, crypto, cash. Log current balances in one column.
3. List every debt — mortgage, auto, student, credit card, personal. Log current balances in a second column.
4. Subtract. That's your starting number.
5. Set a recurring calendar reminder for the first weekend of every month. Not the end. The beginning. The end of the month is when I forgot four times in 2023.
6. Add a "notes" column for anything unusual — a bonus, a big purchase, a market drop.

That's the whole system. Everything else is refinement.

The number you get today is not a judgment. It's a baseline. In 47 months my baseline went from negative to positive, and the process of watching it happen taught me more about my own spending than any budget app I've tested. The calculation is trivial. The discipline of repeating it is where the value lives.

## What to Do When the Number Stalls

Three months of no growth is normal. Six is a signal. If you hit six, check these in order:

First, look at your debt side. Is a balance growing that you thought was shrinking? Second, look at whether the market moved or you did — separate contributions from returns in your notes. Third, check for a life change you didn't account for: a raise you haven't updated in your budget, a subscription that re-priced, an insurance premium that went up.

In my experience, the stall is almost never the market. It's a habit drift. And you only catch habit drift if you've been logging.

For broader context on how net worth fits into the rest of your financial picture — cash flow, goals, and long-term planning — the site's general guide on [how to calculate your net worth and why it matters](/posts/how-to-calculate-your-net-worth-and-why-it-matters/) covers foundational concepts this post builds on. This article is the mechanical walkthrough; that one is the why.
