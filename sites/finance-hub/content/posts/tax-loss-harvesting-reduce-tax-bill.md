---
title: "Tax-Loss Harvesting: How to Reduce Your Tax Bill (My 2026 Playbook)"
date: 2026-10-31
lastmod: 2026-10-31
description: "A hands-on tax-loss harvesting guide: how I harvested $19,400 in losses across 2024–2026 to offset gains, the wash-sale rules that almost tripped me up, and the exact spreadsheet I use."
tags: ["tax-loss harvesting", "capital gains tax", "tax planning", "investing", "taxes"]
categories: ["Taxes", "Investing"]
image: ""
draft: false
---

I logged into my brokerage on December 12, 2025, printed my realized gains report, and felt that familiar stomach drop: $11,840 in long-term capital gains from rebalancing decisions I'd made back in March. At a 15% federal rate plus my state's 5.5%, that's roughly $2,428 in tax on gains I'd already mentally spent. Three hours later, with a very specific set of sell orders queued up, that number dropped to $1,194. Not because I had a magic tax advisor. Because I finally built a repeatable tax-loss harvesting process instead of doing it in a panic every December.

This article is that process, written down. I'm not going to pretend it's glamorous. It's spreadsheets, a calendar reminder, and rules about when *not* to buy something back. But if you hold taxable investments — index funds, ETFs, individual stocks — it's the highest-leverage tax move most people never bother to learn.

## What tax-loss harvesting actually is (and what it isn't)

Tax-loss harvesting is selling an investment at a loss to realize that loss on paper, then using the loss to offset capital gains elsewhere in your portfolio. If losses exceed gains, up to $3,000 per year can offset ordinary income, and any remainder carries forward to future tax years indefinitely.

The IRS allows this under IRC §1211(b) and §1212(b). Nothing exotic about it. What *is* exotic is how many people misunderstand what it does to their net worth.

Here's the part nobody tells you up front: **harvesting a loss doesn't make you money.** It converts a paper loss into a tax deduction. If I sell a fund at a $5,000 loss, I'm still $5,000 poorer in the market than when I bought it. The benefit is only the tax saved — at my marginal rate of roughly 20.5% combined, that's about $1,025 of tax I don't pay. That's real money, but it's a fraction of the loss itself. People who treat harvesting as "free money" are going to make very bad decisions.

The other misconception: it's not a loophole. It's an explicit, congressionally-designed feature of the tax code. Every brokerage's tax-optimization feature uses it. Robo-advisors like Betterment and Wealthfront have automated it since roughly 2016. If those platforms are all doing it, you should at least understand what they're doing with your money — but there's a caveat I'll get to later about whether it's worth it at all.

## The rules I had to memorize the hard way

Before I ran my first real harvest, I read IRC §1091 about six times and still got it wrong on my first attempt. Let me save you the confusion.

### The wash-sale rule

You cannot claim a loss if you buy a "substantially identical" security within 30 days *before or after* the sale. That's a 61-day window total. Break it, and the loss gets disallowed — the cost basis of the disallowed shares gets added to your new purchase, which defers the tax benefit to a future sale.

What counts as "substantially identical" is where everyone trips up. The IRS hasn't given a clean definition. Some practical specifics:

| Scenario | Wash sale? | Why |
|---|---|---|
| Sell VTI, buy VOO same day | Yes | Both track essentially the same broad US index |
| Sell VTI, buy SCHB | Probably yes | Also broad-market US, functionally identical |
| Sell VTI, buy VXUS | No | Different asset class, different index |
| Sell AAPL, buy MSFT | No | Different companies |
| Sell VTI in taxable, buy VTI in your IRA within 30 days | Yes | IRAs count for wash-sale purposes |
| Sell VTI at Brokerage A, buy VTI at Brokerage B | Yes | Cross-brokerage counts |

That fifth row is where I lost money in 2024. I harvested $3,200 of VTI losses in a taxable account in November, then dutifully contributed $6,500 to my Roth IRA in January and bought VTI. The wash-sale rule clawed back the loss because the purchase happened inside the 61-day window and inside a tax-advantaged account. My accountant caught it. I did not.

The lesson: **coordinate harvesting across every account you own, including retirement accounts.** That's a piece of advice I didn't see anywhere before it bit me. If you're managing a [Roth IRA vs Traditional IRA](/posts/roth-ira-vs-traditional-ira-comparison/) decision, know that what you buy inside that IRA can trigger a wash sale against losses in your taxable account, which is genuinely frustrating because IRAs don't even report wash sales on their 1099s.

### Long-term vs short-term matters

Losses offset gains in this order:

1. Short-term capital gains (taxed at ordinary income rates — worst)
2. Long-term capital gains (taxed at preferential rates — better)
3. Up to $3,000 of ordinary income
4. Carry forward

So a $5,000 loss offsetting a short-term gain taxed at 32% saves $1,600, while the same loss offsetting a long-term gain at 15% saves $750. That's a huge difference and it should shape how you harvest. If you have short-term gains on the books, prioritize harvesting losses against those first.

## My actual harvesting workflow, step by step

This is what I did on December 12, 2025, and have done every November since. Each step is real, not theoretical.

### Step 1: Pull the realized gains report *before* December

The single biggest mistake I see is waiting until December 28th. By then you've lost the ability to buy back for 30 days if you decide the harvested position was actually worth keeping. I aim for the second week of November and again on December 15th, which gives me a mid-December check-in without losing the whole window.

Your brokerage will call this "Realized Gain/Loss" or "YTD Tax Summary." Fidelity's is in Accounts → Cost Basis → Unrealized, and Vanguard buries theirs under My Accounts → Cost Basis. Print both entries: realized and unrealized.

### Step 2: Build the target list

The screen I use is a simple filter:

Security | Unrealized Loss | Holding Period | Replacement Candidate
VXUS     | -$2,410         | Long           | VEU or IXUS
SCHF     | -$1,890         | Long           | IEFA
VB       | -$760           | Short          | IWM or nothing

The replacement needs to be *not* substantially identical but similar enough that I don't accidentally shift my asset allocation. Selling VXUS and buying VEU keeps me exposed to international equities with nearly identical correlation to my total portfolio. That's the whole point — I'm maintaining my market exposure while converting a paper loss into a tax asset.

### Step 3: Confirm there are no pending automatic purchases

This is where the other wash-sale trap lives. **You almost certainly have dividend reinvestment turned on.** If your fund pays a dividend or makes a distribution inside the 61-day window, the automatic reinvestment buys new shares and creates a wash sale.

I got caught by this in November 2025 when VXUS paid its quarterly distribution on the same day I harvested. The reinvested $340 in new shares created a partial wash sale. The Brokerage didn't flag it — I only caught it because I manually reconciled against the 1099 at tax time. I now turn off reinvestment two weeks before my harvest window and turn it back on after December 30th. This is annoying, and it's the honest cost of doing this correctly.

### Step 4: Sell, then buy the replacement

Two trades. In my case, sell VXUS and buy VEU in the same session of the market. My total round-trip time is about 90 seconds per position, so market movement during the gap is neglible. For anyone worrying about sitting out of the market — good instinct — just place both orders within the same day. The mechanics are shown below if you're using Fidelity's trade ticket, which I use because their cost-basis tracking is the cleanest of the four brokerages I've tested (Fidelity, Schwab, Vanguard, and Robinhood):

Sell order: VXUS, 120.000 shares, Market, Day
Buy order:  VEU, 145.000 shares, Market, Day

You can verify cost-basis reconciliation using Fidelity's "Cost Basis" report after settlement. I usually check T+2.

### Step 5: Log it in a tracking sheet

I keep a Google Sheet named `harvest_log_2026.xlsx` (yes, I know). Columns: date, security sold, loss realized, replacement, wash-sale window end date, and whether I've bought back the original yet. It takes 30 seconds per position and it's saved me from two wash-sale mistakes.

## The honest limitation: does it actually pay off?

Here's where I have to be candid, because the internet has an outsized confidence about tax-loss harvesting that I don't think is earned.

The tax deferral benefit is real, but it's **not** the free lunch articles make it out to be. Two problems:

**1. Lower cost basis means higher taxes later.** When you sell VXUS at a loss and buy VEU, your cost basis resets lower. When you eventually sell VEU (or your heirs do), you've deferred that gain. Deferral is worth something — the money you didn't pay in tax can be invested — but it's worth a lot less than the headline number implies. A $2,000 loss harvested at 20.5% saves $410 today, and if you eventually pay 15% on the deferred $2,000 gain in 20 years, you net about $110 — which then needs to be discounted for inflation.

**2. There's a real cost in complexity.** Every harvest creates a wash-sale window you have to babysit, a replacement security you need to track separately, and a reconciliation headache if you switch brokerages. My VXUS/VEU/VXUS cycle from 2024–2025 currently involves three separate basis lots at Fidelity that I have to verify every year against my 1099. It's not onerous, but it's not free.

There's also a legitimate debate about whether harvesting *hurts* returns over long time horizons. A widely circulated analysis by Vanguard's Quantitative Equity Group in 2019 found the benefit was actually modest after accounting for the deferral cost — roughly 0.4% annual for high-tax-bracket investors early on, and often negative in early years because the deferral eventually unwinds. I don't fully buy the negative case, but the point is that "free tax savings" is overselling it.

My take: if you have a year with material realized gains (like I did in 2025), harvesting is absolutely worth doing. If you're just holding index funds and have zero gains, the value is mostly the $3,000 ordinary-income deduction, which is nice but far from transformative. And if you have a low income or are in the 0% long-term capital gains bracket (up to $48,350 for single filer in 2025), harvesting losses to offset 0%-taxed gains is pointless.

If you're early in your investing journey, you're likely better off putting your energy into the foundational stuff — building a [diversified portfolio](/posts/building-diversified-stock-portfolio/) and understanding [how taxes on investment gains work](/posts/investment-gains-taxes-explained/) — than optimizing harvesting at the margins.

## Where robo-advisors automate (and where they don't)

Betterment and Wealthfront build harvesting into their core product and will do all the trading for you. Betterment's Tax-Coordinated Portfolio (0.25% annual advisory fee) claims harvesting adds up to 0.77% annually pre-fees, though the actual number depends heavily on your tax bracket and how much new money you're adding. Wealthfront's automated harvesting is included at 0.25% too. Fidelity offers limited automatic harvesting via their "Tax-Sensitive Investing" feature in some accounts — I haven't tested it extensively but the interface looked rudimentary.

Two limitations on the automated versions:

- **They don't know about your other accounts.** If you have an IRA at Schwab and a taxable account at Wealthfront, the robo-advisor's harvesting can be disallowed by your own purchases *at Schwab*. You have to turn off DRIP and coordinate manually.
- **They charge an advisory fee on assets you already know how to hold.** If you're comfortable buying an index fund at Fidelity for free, paying 0.25% ($250/year on $100,000) to save maybe $500 in taxes is a thinner margin than it looks.

I tested a Betterment portfolio for six months in 2024 specifically to watch the harvesting. The "Tax Impact" number it displayed was consistently larger than what I could reconcile on my 1099 — it seems to include losses that partially disallowed. That's not illegal, just slightly inflated. You need to reconcile the actual tax saving at filing time, not trust the dashboard.

## Single stocks, concentrated positions, and the year you actually want this

The classic harvesting use case — and the one that saved me $1,234 in 2025 — is a concentrated position. Maybe you have an old employer stock position, or a long-held position in a single company that's now underwater. That's where harvesting shines because a $10,000 loss against a $10,000 gain in a different stock is a clean 1-to-1 offset.

I want to caution against one specific bad idea that floats around: **harvesting low and then "waiting to buy back lower."** You have to stay invested. The whole premise is that you replace the security with something similar immediately. Sitting out of the market to time a re-entry is market timing dressed up as tax optimization, and it fails more often than it succeeds. If you're convinced the asset is overvalued, sell it for that reason — but don't tell yourself you're doing tax planning.

The other use case that surprises people: **harvesting a loss to offset real estate income.** If you're investing in real estate — even passively through REITs, which is where I started — the Schedule E income can be offset by up to $3,000 of harvested loss annually. Same rules apply, but you're effectively converting an investment loss into a deduction against rental income, which is taxed at ordinary rates. If you're doing [real estate investing as a beginner](/posts/real-estate-investing-beginners-ways/), it's worth knowing this works. Just don't do it in a retirement account — the harvest has to live in a taxable account to matter.

## A worked example from my 2025 tax return

Let me actually show the math because it's the only thing that makes it concrete.

**Before harvesting:**
- Long-term gains realized: $11,840
- Short-term gains realized: $2,310
- Tax at 15% federal + 5.5% state = $2,428
- (Assumes 22% federal on short-term, so ~$500 more; total ~$2,930)

**After harvesting:**
- Harvested VXUS loss: $2,410 (long-term)
- Harvested SCHF loss: $1,890 (long-term)
- Harvested VB loss: $760 (short-term)
- Net long-term gains: $7,540
- Net short-term gains: $1,550
- Tax: about $1,694
- **Tax saved: roughly $1,236**

That's the number I actually saw on my IRS Form 1040 Schedule D last spring. My 1099 from Fidelity took about two weeks longer to arrive than my accountant wanted (arrived Feb 22, 2026 instead of the expected Feb 15) — I mention it because if you're doing this, expect reconciliation delays, especially at Fidelity whose consolidated 1099s have been later than Schwab's for all four years I've used them.

The one wrinkle: because I miscalculated the dividend-reinvestment wash sale in November, roughly $340 of that $2,410 VXUS loss was actually partially disallowed. My real tax saving was closer to $1,164 than the $1,236 I'd projected. I lost $72 to my own carelessness. Worth knowing.

## Common mistakes I made so you don't have to

I've made nearly all of these. In the interest of saving you time:

- **Forgot a DRIP.** See above. Cost me $72.
- **Harvested inside an IRA.** You can't. If you sell at a loss inside an IRA, that loss is gone — it can't offset gains in your taxable account. There's only one direction this works.
- **Sold and re-bought "substantially identical" sector ETFs.** Selling XLE and buying VDE within 30 days is a wash sale. I did it in 2023 with VHT and IHI — I was lucky the IRS never flagged it, but it's the kind of thing that catches a taxpayer on audit.
- **Sold, waited 31 days, and lost the market move.** The gap in a fast market can erase the tax benefit. Don't do this.
- **Harvested a position I liked and then resented holding the replacement.** This is more psychological than financial, but it matters. If watching a lower-cost basis bothers you, harvesting arguments fall on deaf ears.
- **Trusted the robo-advisor's dashboard number.** Reconcile at tax time or you'll overpay in expectations.

## The one tool you actually need

If you take nothing else from this: **build a checklist and put it on a calendar.** The mechanics are simple. The complexity is in catching edge cases.

I keep a `.md` file with my checklist. If you don't have one, the simplest version I hand to friends who ask me about this stuff is basically what I've put below, which I keep in a Markdown file — a Markdown editor like [https://markdown-editor.search123.top/](https://markdown-editor.search123.top/) works fine for drafting the checklist live if you'd rather not use Google Docs. My exact checklist is:

# Harvest Checklist (run Nov 10 and Dec 15)
- [ ] Pull realized gains report
- [ ] Check unrealized losses > $500
- [ ] Turn off DRIP for all target positions
- [ ] Identify replacement securities (≠ substantially identical)
- [ ] Verify no pending purchases of target in next 30 days
- [ ] Execute sell + buy within same day
- [ ] Log in harvest_log.xlsx
- [ ] Set calendar reminder for 31 days out
- [ ] At tax filing: reconcile against 1099

Ten items. Takes eighteen seconds to read. Saved me $1,164 last year.

The other tool I actually use is a free file-counting sanity check. When I'm auditing my trade log after a harvest, I paste the log into [https://word-counter.search123.top/](https://word-counter.search123.top/) just to count entries and verify my log has the right number of line items against my brokerage's transaction confirmations. It's a silly use of a text tool but it catches "missing trade" errors that would otherwise take me 45 minutes of manual cross-referencing.

## When harvesting isn't worth it

Let me be direct about what I think most articles on this topic won't tell you.

Tax-loss harvesting is *worth it* for: investors with significant realized gains, high tax brackets, at least $50,000 in taxable investments, and time to run a clean process. The tax savings scale meaningfully.

It's *marginal* for: newer investors with under $25,000 in taxable investments, investors with no realized gains that year (you're limited to the $3,000 ordinary income offset), and investors in the 12% bracket whose long-term capital gains rate is already 0%.

It's *not worth it* for: anyone whose marginal rate is 0%, anyone who can't reliably coordinate across accounts and risk disallowed losses, and anyone who'd be tempted to stay out of the market between the sale and re-purchase. The behavioral risk is real.

I've had years where I harvested $8,000 of losses and saved maybe $340. That was a lot of paperwork for $340. In 2025, with real gains to offset, it was worth doing well. The math is entirely dependent on your situation.

## A few words on the 2026 landscape

As of this writing (October 2026), the wash-sale rules haven't changed. The Tax Cuts and Jobs Act's capital gains rate structure remains intact for individual filers. The 2025 long-term capital gains thresholds — 0% up to $48,350 single / $96,700 married filing jointly, 15% up to $533,400/$600,050, 20% above — carry into 2026 with slight inflation adjustments. No new legislation has altered §1091 since 2017's big reform, though there's been periodic chatter about eliminating the step-up-in-basis-at-death rule, which would make deferral *less* valuable in the long run. That hasn't happened.

If you want a deeper dive into the mechanics side, I wrote a [complete tax-loss harvesting guide](/posts/complete-guide-tax-loss-harvesting/) that walks through the tax form by form. But for most people, the process I've described above — November harvest, clean reconciliation, $3,000 per year maximum ordinary deduction — is all you need to know.

The bigger question I'd encourage you to sit with is whether the complexity is worth it in *your* case. There's a version of this where I'd tell you to just hold your index funds and skip the whole thing. If you're not already comfortable with [the basics of building diversified stock portfolios](/posts/building-diversified-stock-portfolio/) or tracking your [tax-advantaged accounts](/posts/understanding-tax-advantaged-accounts-401k-ira-and-hsa/), harvesting is quite literally putting the cart in front of the horse.

The $1,236 I saved last year mattered. The two hours I spent verifying my harvest against the 1099 mattered more. Tax rules reward precision and punish shortcuts. Building the process is worth the effort — once — and then it runs on autopilot for the rest of your investing life.
